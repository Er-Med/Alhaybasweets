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
    const layer = (name: string) => scope.querySelector<HTMLElement>(`[data-hero-layer="${name}"]`);
    const nav = document.querySelector<HTMLElement>("[data-hero='nav']");
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    let detach = () => {};

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.fromTo(q("halo"), { opacity: 0, scale: 0.55 }, { opacity: 1, scale: 1, duration: 2.6 }, 0)
        .fromTo(
          layer("star"),
          { opacity: 0, scale: 0.5, rotation: -90 },
          { opacity: 1, scale: 1, rotation: 0, duration: 2.8 },
          0.1,
        )
        .fromTo(layer("outline"), { opacity: 0, z: -320 }, { opacity: 1, z: 0, duration: 2.2 }, 0.4)
        .fromTo(
          layer("main"),
          { opacity: 0, z: -560, rotationY: -34, rotationX: 12, y: 90 },
          { opacity: 1, z: 0, rotationY: 0, rotationX: 0, y: 0, duration: 2.4 },
          0.3,
        )
        .fromTo(q("main-img"), { scale: 1.4 }, { scale: 1, duration: 2.8 }, 0.3)
        .fromTo(
          [layer("box"), layer("slice")],
          { opacity: 0, z: -420, y: 70 },
          { opacity: 1, z: 0, y: 0, duration: 2, stagger: 0.18 },
          0.8,
        )
        .fromTo(
          layer("seal"),
          { opacity: 0, scale: 0.3, rotation: -140 },
          { opacity: 1, scale: 1, rotation: 0, duration: 2 },
          1.1,
        )
        .fromTo(q("dust"), { opacity: 0 }, { opacity: 1, duration: 2.4, ease: "power2.out" }, 1.2);

      if (nav) {
        tl.fromTo(nav, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: "power3.out" }, 0.35);
      }
      tl.fromTo(q("eyebrow"), { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, 0.6)
        .fromTo(q("arabic"), { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: "power3.out" }, 0.78)
        .fromTo(
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
        .to(scope, { "--spread": "280px" }, 0)
        .to(q("scroll-rig"), { rotationX: 16, y: -50, scale: 0.9 }, 0)
        .to(q("content"), { y: -90, opacity: 0 }, 0)
        .to(q("meta"), { opacity: 0, duration: 0.4 }, 0);

      const rig = q("mouse-rig");
      if (!rig) return;

      if (!fine) {
        gsap.fromTo(
          rig,
          { rotationY: -7, rotationX: 3 },
          { rotationY: 7, rotationX: -3, duration: 7, ease: "sine.inOut", yoyo: true, repeat: -1 },
        );
        return;
      }

      const light = { x: 62, y: 42 };
      const paint = () => {
        scope.style.setProperty("--mx", `${light.x}%`);
        scope.style.setProperty("--my", `${light.y}%`);
      };
      const rotX = gsap.quickTo(rig, "rotationX", { duration: 1.4, ease: "power3.out" });
      const rotY = gsap.quickTo(rig, "rotationY", { duration: 1.4, ease: "power3.out" });
      const lightX = gsap.quickTo(light, "x", { duration: 1.1, ease: "power3.out", onUpdate: paint });
      const lightY = gsap.quickTo(light, "y", { duration: 1.1, ease: "power3.out", onUpdate: paint });

      const move = (event: PointerEvent) => {
        const rect = scope.getBoundingClientRect();
        const nx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const ny = ((event.clientY - rect.top) / rect.height) * 2 - 1;
        rotY(nx * 12);
        rotX(-ny * 8);
        lightX(((event.clientX - rect.left) / rect.width) * 100);
        lightY(((event.clientY - rect.top) / rect.height) * 100);
      };
      const leave = () => {
        rotX(0);
        rotY(0);
        lightX(62);
        lightY(42);
      };

      scope.addEventListener("pointermove", move);
      scope.addEventListener("pointerleave", leave);
      detach = () => {
        scope.removeEventListener("pointermove", move);
        scope.removeEventListener("pointerleave", leave);
      };
    }, scope);

    return () => {
      detach();
      ctx.revert();
      observer.disconnect();
      if (nav) gsap.set(nav, { clearProps: "all" });
    };
  }, []);

  return (
    <section
      ref={root}
      id="top"
      className="hero tone-dark relative flex min-h-[100svh] flex-col overflow-hidden bg-espresso text-ivory lg:grid lg:grid-cols-[minmax(0,40rem)_1fr]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_85%_at_68%_45%,#3b2817_0%,#24170f_48%,#120b07_100%)]" />
        <div className="hero-spot absolute inset-0" />
        <div className="hero-grain absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </div>

      <div className="relative h-[54svh] min-h-[22rem] shrink-0 lg:order-2 lg:h-auto lg:min-h-[100svh]">
        <div className="absolute inset-x-0 bottom-0 top-[5.5rem] lg:top-[6.5rem] lg:bottom-[4.5rem]">
          <HeroStage alt={copy.products.baklava.alt} />
        </div>
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-center px-[var(--gutter)] pt-4 pb-[max(5rem,calc(env(safe-area-inset-bottom)+4rem))] lg:order-1 lg:py-36">
        <div className="pointer-events-none absolute inset-0">
          <MotifVeil fade="hero" drift className="text-gold/[0.12]" />
        </div>
        <div data-hero="content" className="relative">
          <HeroContent />
        </div>
      </div>

      <div
        data-hero="meta"
        className="hero-await pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-6 px-[var(--gutter)] pb-[max(1.5rem,env(safe-area-inset-bottom))]"
      >
        <p className="caption text-ivory/45">{copy.hero.fig}</p>
        <span aria-hidden className="hero-cue relative block h-12 w-px overflow-hidden bg-ivory/15" />
      </div>
    </section>
  );
}
