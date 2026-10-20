"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { prefersReducedMotion } from "@/lib/gsap";
import { Photo } from "@/components/ui/Photo";

const SOURCES = [
  { src: "/images/gold-box.jpg", position: "object-[center_42%]" },
  { src: "/images/baklava-round.jpg", position: "object-center" },
  { src: "/images/475494641_17991402476780877_6651357639174143008_n.jpg", position: "object-[center_45%]" },
];

const INTERVAL = 6500;

export function HeroStage({ slides }: { slides: { label: string; alt: string }[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = window.setTimeout(() => setActive((i) => (i + 1) % SOURCES.length), INTERVAL);
    return () => window.clearTimeout(id);
  }, [active]);

  return (
    <div data-hero="photo" className="absolute inset-0 origin-[72%_center] rtl:origin-[28%_center]">
      <div data-hero="photo-in" className="absolute inset-0 origin-[72%_center] rtl:origin-[28%_center]">
        {SOURCES.map((s, i) => (
          <div
            key={s.src}
            className={cn(
              "absolute inset-0 transition-opacity duration-[1400ms] ease-[cubic-bezier(.16,1,.3,1)]",
              i === active ? "opacity-100" : "opacity-0",
            )}
          >
            <div
              className={cn(
                "absolute inset-0 origin-center transition-transform duration-[1400ms] ease-[cubic-bezier(.16,1,.3,1)] lg:inset-y-0 lg:start-auto lg:end-0 lg:w-[72%] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_78%)] rtl:lg:[mask-image:linear-gradient(to_left,transparent_0%,black_78%)]",
                i === active ? "scale-100" : "scale-[1.04]",
              )}
            >
              <Photo
                src={s.src}
                alt={i === active ? (slides[i]?.alt ?? "") : ""}
                priority={i === 0}
                sizes="100vw"
                className={cn("object-cover", s.position)}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {slides[active]?.label}
      </p>
    </div>
  );
}
