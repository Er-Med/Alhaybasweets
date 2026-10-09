"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/gsap";
import { cn } from "@/lib/cn";
import { Photo } from "@/components/ui/Photo";

export function ParallaxImage({
  src,
  alt,
  className,
  imageClass = "object-cover",
  sizes,
  speed = 8,
  priority = false,
  cursor = true,
  reveal = true,
  onOpen,
}: {
  src: string;
  alt: string;
  className?: string;
  imageClass?: string;
  sizes: string;
  speed?: number;
  priority?: boolean;
  cursor?: boolean;
  /** Wipe the frame open the first time it scrolls into view. */
  reveal?: boolean;
  onOpen?: () => void;
}) {
  const frame = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const zoom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const narrow = window.matchMedia("(max-width: 1023px)").matches;
    registerGsap();

    const ctx = gsap.context(() => {
      if (reveal) {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: frame.current, start: "top 90%", toggleActions: "play none none none" },
        });
        tl.fromTo(
          frame.current,
          { clipPath: "inset(100% 0% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "expo.inOut" },
        ).fromTo(zoom.current, { scale: 1.25 }, { scale: 1, duration: 1.9, ease: "expo.out" }, 0.15);
      }

      if (narrow) return;
      gsap.fromTo(
        inner.current,
        { yPercent: -speed },
        {
          yPercent: speed,
          ease: "none",
          scrollTrigger: {
            trigger: frame.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, frame);

    return () => ctx.revert();
  }, [speed, reveal]);

  return (
    <div
      ref={frame}
      data-cursor={cursor ? "view" : undefined}
      className={cn("relative overflow-hidden", className)}
    >
      <div ref={inner} className="absolute inset-[-10%]">
        <div ref={zoom} className="absolute inset-0">
          <Photo src={src} alt={onOpen ? "" : alt} sizes={sizes} priority={priority} className={imageClass} />
        </div>
      </div>
      {onOpen ? (
        <button type="button" aria-label={alt} className="absolute inset-0 z-10" onClick={onOpen} />
      ) : null}
    </div>
  );
}
