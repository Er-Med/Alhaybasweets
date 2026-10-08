"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getLenis } from "@/lib/scroll";
import { cn } from "@/lib/cn";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const pathRef = useRef(pathname);
  const pending = useRef(false);
  const [phase, setPhase] = useState<"idle" | "cover" | "reveal">("idle");

  useEffect(() => {
    pathRef.current = pathname;
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;
      if (anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (href.startsWith("http://") || href.startsWith("https://")) return;

      const url = new URL(href, window.location.origin);
      if (url.origin !== window.location.origin) return;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const same = url.pathname === pathRef.current;
      const lenis = getLenis();

      if (same && url.hash) {
        const el = document.querySelector(url.hash);
        if (!el) return;
        event.preventDefault();
        if (lenis) lenis.scrollTo(el as HTMLElement, { offset: -20 });
        else el.scrollIntoView();
        return;
      }

      if (same) {
        event.preventDefault();
        if (lenis) lenis.scrollTo(0);
        else window.scrollTo({ top: 0 });
        return;
      }

      if (reduced) return;

      event.preventDefault();
      pending.current = true;
      setPhase("cover");
      window.setTimeout(() => {
        router.push(`${url.pathname}${url.search}${url.hash}`);
      }, 480);
      window.setTimeout(() => {
        if (pending.current) {
          pending.current = false;
          setPhase("idle");
        }
      }, 2500);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [router]);

  useEffect(() => {
    if (!pending.current) return;
    pending.current = false;
    setPhase("reveal");
    const timer = window.setTimeout(() => setPhase("idle"), 580);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const hash = window.location.hash;
    const lenis = getLenis();
    const timer = window.setTimeout(() => {
      if (hash) {
        const el = document.querySelector(hash);
        if (!el) return;
        if (lenis) lenis.scrollTo(el as HTMLElement, { offset: -20, immediate: true });
        else el.scrollIntoView();
        return;
      }
      if (lenis) lenis.scrollTo(0, { immediate: true });
    }, 80);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {children}
      <div
        aria-hidden="true"
        className={cn(
          "fixed inset-0 z-[80] bg-espresso",
          phase === "cover" && "phase-cover",
          phase === "reveal" && "phase-reveal",
          phase === "idle" && "phase-idle",
        )}
      />
    </>
  );
}
