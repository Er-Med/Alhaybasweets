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
  onOpen?: () => void;
}) {
  const frame = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = prefersReducedMotion();
    const narrow = window.matchMedia("(max-width: 1023px)").matches;
    if (reduce || narrow) return;
    registerGsap();

    const ctx = gsap.context(() => {
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
  }, [speed]);

  return (
    <div
      ref={frame}
      data-cursor={cursor ? "view" : undefined}
      className={cn("relative overflow-hidden", className)}
    >
      <div ref={inner} className="absolute inset-[-10%]">
        <Photo src={src} alt={onOpen ? "" : alt} sizes={sizes} priority={priority} className={imageClass} />
      </div>
      {onOpen ? (
        <button type="button" aria-label={alt} className="absolute inset-0 z-10" onClick={onOpen} />
      ) : null}
    </div>
  );
}
