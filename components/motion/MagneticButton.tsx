"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/cn";
import { Arrow } from "@/components/ui/Arrow";

const variants = {
  solid: "bg-espresso text-ivory hover:bg-ink",
  ghost: "border border-chocolate/30 text-chocolate hover:border-chocolate",
  light: "border border-ivory/45 text-ivory hover:border-ivory",
  ivory: "bg-ivory text-chocolate hover:bg-[#f7f3ea]",
  pistachio: "bg-pistachio text-ivory hover:bg-[#2c3b25]",
  gold: "bg-gold text-espresso hover:bg-[#cdb073]",
};

export function MagneticButton({
  href,
  children,
  className,
  variant = "solid",
  external = false,
  onClick,
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof variants;
  external?: boolean;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine || prefersReducedMotion()) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.45, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.45, ease: "power3.out" });

    const move = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      xTo(dx * 0.22);
      yTo(dy * 0.28);
    };

    const leave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);

  const classes = cn(
    "group inline-flex items-center gap-3 px-6 py-3.5 caption transition-colors duration-300",
    variants[variant],
    className,
  );

  const inner = (
    <>
      <span>{children}</span>
      <Arrow />
    </>
  );

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        onClick={onClick}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {inner}
      </a>
    );
  }

  return (
    <button ref={ref} type="button" className={classes} onClick={onClick}>
      {inner}
    </button>
  );
}
