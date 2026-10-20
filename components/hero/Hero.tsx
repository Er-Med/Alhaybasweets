"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "@/lib/i18n";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/gsap";
import { HeroContent } from "@/components/hero/HeroContent";
import { HeroStage } from "@/components/hero/HeroStage";
import { MotifVeil } from "@/components/ui/Motif";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const { locale, copy } = useLocale();

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
    const dropAwait = (el: HTMLElement | null) => el?.classList.remove("hero-await");

    const ctx = gsap.context(() => {
      const lines = qa("line");
      const tl = gsap.timeline({
        defaults: { ease: "expo.out" },
        onComplete: () => {
          dropAwait(nav);
          dropAwait(q("eyebrow"));
          dropAwait(q("arabic"));
          dropAwait(q("desc"));
          dropAwait(q("cta"));
          lines.forEach((line) => {
            line.classList.remove("hero-await");
            gsap.set(line, { clearProps: "transform" });
          });
        },
      });

      tl.fromTo(q("photo-in"), { scale: 1.08 }, { scale: 1, duration: 2.4 }, 0);

      if (nav) {
        tl.fromTo(nav, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: "power3.out" }, 0.35);
      }
      tl.fromTo(q("eyebrow"), { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, 0.6);
      const arabic = q("arabic");
      if (arabic) {
        tl.fromTo(arabic, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: "power3.out" }, 0.78);
      }
      tl.fromTo(
        lines,
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.3, stagger: 0.14, ease: "power4.out" },
        0.9,
      )
        .fromTo(q("desc"), { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, 1.35)
        .fromTo(q("cta"), { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, 1.5)
        .fromTo(
          q("rule"),
          { scaleX: 0 },
          { scaleX: 1, duration: 1.1, ease: "power3.out" },
          1.62,
        );

      gsap
        .timeline({
          scrollTrigger: { trigger: scope, start: "top top", end: "bottom top", scrub: true },
          defaults: { ease: "none" },
        })
        .to(q("photo"), { scale: 1.06, duration: 1 }, 0)
        .to(q("veil"), { opacity: 0, duration: 1 }, 0)
        .fromTo(q("content"), { opacity: 1 }, { opacity: 0, duration: 0.7, immediateRender: false }, 0);
    }, scope);

    return () => {
      ctx.revert();
      observer.disconnect();
      if (nav) gsap.set(nav, { clearProps: "all" });
    };
  }, [locale]);

  return (
    <section
      ref={root}
      id="top"
      className="hero tone-dark relative h-[100svh] overflow-hidden bg-espresso text-ivory"
    >
      <HeroStage slides={copy.hero.slides} />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-espresso from-0% via-espresso/80 via-[55%] to-transparent to-[84%] lg:bg-none"
      />
      <div data-hero="veil" className="pointer-events-none absolute inset-0">
        <MotifVeil fade="hero" drift className="text-gold/15" />
      </div>
      <div aria-hidden className="hero-grain pointer-events-none absolute inset-0" />

      <div className="relative z-10 flex h-full items-start px-[var(--gutter)] pt-28 lg:items-center lg:pt-0">
        <div data-hero="content" className="lg:max-w-[40%]">
          <HeroContent />
        </div>
      </div>
    </section>
  );
}
