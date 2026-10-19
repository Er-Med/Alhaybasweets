"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "@/lib/i18n";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/gsap";
import { MotifVeil } from "@/components/ui/Motif";
import { HeroContent } from "@/components/hero/HeroContent";
import { HeroStage } from "@/components/hero/HeroStage";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const { copy } = useLocale();

  useEffect(() => {
    const scope = root.current;
    if (!scope) return;

    const observer = new IntersectionObserver(([entry]) => {
      scope.classList.toggle("hero-paused", !entry.isIntersecting);
    });
    observer.observe(scope);

    if (prefersReducedMotion()) return () => observer.disconnect();
    registerGsap();

    const q = (name: string) => scope.querySelector<HTMLElement>(`[data-hero="${name}"]`);
    const qa = (name: string) => scope.querySelectorAll<HTMLElement>(`[data-hero="${name}"]`);
    const nav = document.querySelector<HTMLElement>("[data-hero='nav']");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.fromTo(
        q("frame"),
        { opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
        { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 1.8, ease: "expo.inOut" },
        0,
      )
        .fromTo(q("frame-img"), { scale: 1.25 }, { scale: 1, duration: 2.4 }, 0.2)
        .fromTo(q("outline"), { opacity: 0 }, { opacity: 1, duration: 1.6, ease: "power2.out" }, 1.1)
        .fromTo(q("thumbs"), { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, 1.4);

      if (nav) {
        tl.fromTo(nav, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: "power3.out" }, 0.35);
      }
      tl.fromTo(q("eyebrow"), { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, 0.6);
      const arabic = q("arabic");
      if (arabic) {
        tl.fromTo(arabic, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: "power3.out" }, 0.78);
      }
      tl.fromTo(
          qa("line"),
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1.3, stagger: 0.14, ease: "power4.out" },
          0.9,
        )
        .fromTo(q("desc"), { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, 1.35)
        .fromTo(q("cta"), { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, 1.5)
        .fromTo(q("meta"), { opacity: 0 }, { opacity: 1, duration: 1.2, ease: "power2.out" }, 1.8);

      gsap
        .timeline({
          scrollTrigger: { trigger: scope, start: "top top", end: "bottom top", scrub: 0.8 },
          defaults: { ease: "none" },
        })
        .to(q("stage"), { y: 80, scale: 0.94 }, 0)
        .to(q("content"), { y: -90, opacity: 0 }, 0)
        .to(q("meta"), { opacity: 0, duration: 0.4 }, 0);
    }, scope);

    return () => {
      ctx.revert();
      observer.disconnect();
      if (nav) gsap.set(nav, { clearProps: "all" });
    };
  }, []);

  return (
    <section
      ref={root}
      id="top"
      className="hero tone-dark relative flex h-[100svh] flex-col overflow-hidden bg-espresso text-ivory lg:grid lg:h-auto lg:min-h-[100svh] lg:grid-cols-[minmax(0,40rem)_1fr]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(110%_80%_at_70%_45%,#211A14_0%,#1A1510_50%,#14100C_100%)]" />
        <div className="hero-grain absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </div>

      <div className="relative order-2 min-h-0 flex-1 lg:order-2 lg:h-auto lg:min-h-[100svh]">
        <div className="absolute inset-x-[var(--gutter)] top-2 bottom-3 lg:inset-x-0 lg:bottom-[5rem] lg:top-[7rem] lg:pe-[var(--gutter)]">
          <HeroStage slides={copy.hero.slides} />
        </div>
      </div>

      <div className="relative z-10 order-1 shrink-0 px-[var(--gutter)] pt-24 pb-2 lg:order-1 lg:flex lg:flex-1 lg:flex-col lg:justify-center lg:py-36">
        <div className="pointer-events-none absolute inset-0">
          <MotifVeil fade="hero" drift className="text-gold/[0.08]" />
        </div>
        <div data-hero="content" className="relative">
          <HeroContent />
        </div>
      </div>

      <div
        data-hero="meta"
        className="hero-await pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden items-end justify-end px-[var(--gutter)] pb-[max(1.5rem,env(safe-area-inset-bottom))] lg:flex"
      >
        <span aria-hidden className="hero-cue relative block h-12 w-px overflow-hidden bg-ivory/15" />
      </div>
    </section>
  );
}
