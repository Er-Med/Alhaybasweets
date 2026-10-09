"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/gsap";
import { cn } from "@/lib/cn";

/**
 * Fades its children in on scroll. When descendants carry `data-reveal`
 * (`"line"` for masked heading lines, anything else for a rise-and-fade),
 * those are staggered instead of the wrapper.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  stagger = 0.09,
  start = "top 86%",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  start?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;
    registerGsap();

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-reveal]", el);
      const scrollTrigger = { trigger: el, start, toggleActions: "play none none none" };

      if (!items.length) {
        gsap.fromTo(
          el,
          { y: 28, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 1.15, delay, ease: "power3.out", scrollTrigger },
        );
        return;
      }

      const tl = gsap.timeline({ delay, scrollTrigger });
      items.forEach((item, index) => {
        const line = item.dataset.reveal === "line";
        tl.fromTo(
          item,
          line ? { yPercent: 115, rotate: 2.5 } : { y: 32, autoAlpha: 0 },
          line
            ? { yPercent: 0, rotate: 0, duration: 1.25, ease: "expo.out" }
            : { y: 0, autoAlpha: 1, duration: 1.1, ease: "power3.out" },
          index * stagger,
        );
      });
    }, el);

    return () => ctx.revert();
  }, [delay, stagger, start]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}

/** One masked line of a display heading, revealed by a parent `Reveal`. */
export function Line({ children, className }: { children: React.ReactNode; className?: string }) {
  const script = className?.includes("italic");
  return (
    <span
      className={cn(
        "block overflow-hidden",
        script ? "-my-[0.06em] px-[0.12em] py-[0.28em]" : "-mb-[0.14em] pb-[0.14em]",
      )}
    >
      <span
        data-reveal="line"
        className={cn("block origin-[0_100%] rtl:origin-[100%_100%]", script && "script", className)}
      >
        {children}
      </span>
    </span>
  );
}
