"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { prefersReducedMotion } from "@/lib/gsap";
import { Photo } from "@/components/ui/Photo";

const SOURCES = [
  { src: "/images/gold-box.jpg", position: "object-[50%_50%]" },
  { src: "/images/baklava-round.jpg", position: "object-[50%_45%]" },
  { src: "/images/maamoul.jpg", position: "object-[50%_50%]" },
];

const INTERVAL = 6500;

export function HeroStage({ slides }: { slides: { label: string; alt: string }[] }) {
  const [active, setActive] = useState(0);
  const [hold, setHold] = useState(false);

  useEffect(() => {
    if (hold || prefersReducedMotion()) return;
    const id = window.setTimeout(() => setActive((i) => (i + 1) % SOURCES.length), INTERVAL);
    return () => window.clearTimeout(id);
  }, [active, hold]);

  const pad = (n: number) => String(n + 1).padStart(2, "0");

  return (
    <div
      data-hero="stage"
      className="absolute inset-0 flex items-center justify-center"
      onPointerEnter={() => setHold(true)}
      onPointerLeave={() => setHold(false)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[min(48rem,120%)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,163,92,0.22)_0%,rgba(201,163,92,0.05)_40%,transparent_68%)]"
      />

      <div className="relative h-full max-h-[44rem] w-auto aspect-[3/4.2]">
        {/* Offset hairline arch: the only ornament. */}
        <div
          aria-hidden
          data-hero="outline"
          className="hero-await hero-arch absolute -bottom-3 -end-3 start-3 top-3 border border-gold/25"
        />

        <div
          data-hero="frame"
          className="hero-await hero-arch relative h-full w-full overflow-hidden bg-espresso shadow-[0_60px_120px_-40px_rgba(0,0,0,0.9)]"
        >
          <div data-hero="frame-img" className="absolute inset-0">
            {SOURCES.map((s, i) => (
              <div
                key={s.src}
                className={cn(
                  "absolute inset-0 transition-opacity duration-[1400ms] ease-[cubic-bezier(.4,0,.2,1)]",
                  i === active ? "opacity-100" : "opacity-0",
                )}
              >
                <div className={cn("absolute inset-0", i === active && "hero-kenburns")}>
                  <Photo
                    src={s.src}
                    alt={slides[i]?.alt ?? ""}
                    priority={i === 0}
                    sizes="(max-width: 1024px) 70vw, 32vw"
                    className={cn("object-cover", s.position)}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/0 to-espresso/10" />
          <div className="absolute inset-[0.65rem] hero-arch border border-ivory/20" />

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
            <div aria-live="polite">
              <p className="caption text-gold">
                {pad(active)} <span className="text-ivory/40">/ {pad(SOURCES.length - 1)}</span>
              </p>
              <p className="mt-1 font-serif text-lg text-ivory sm:text-xl">{slides[active]?.label}</p>
            </div>
          </div>

          <div className="absolute inset-x-5 bottom-0 h-px bg-ivory/15 sm:inset-x-6">
            <span
              key={`${active}-${hold}`}
              className={cn("absolute inset-y-0 start-0 bg-gold", !hold && "hero-progress")}
              style={{ animationDuration: `${INTERVAL}ms` }}
            />
          </div>
        </div>

        <div
          data-hero="thumbs"
          className="hero-await absolute -bottom-14 left-1/2 flex -translate-x-1/2 gap-3 lg:-end-16 lg:bottom-auto lg:left-auto lg:top-1/2 lg:translate-x-0 lg:-translate-y-1/2 lg:flex-col"
        >
          {SOURCES.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={slides[i]?.label}
              aria-pressed={i === active}
              className={cn(
                "relative size-11 overflow-hidden rounded-full ring-1 transition duration-500",
                i === active ? "ring-gold opacity-100" : "ring-ivory/20 opacity-50 hover:opacity-90",
              )}
            >
              <Photo src={s.src} alt="" sizes="44px" className={cn("object-cover", s.position)} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
