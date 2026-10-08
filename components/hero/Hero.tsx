"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "@/lib/i18n";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/gsap";
import { Photo } from "@/components/ui/Photo";
import { HeroContent } from "@/components/hero/HeroContent";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const { copy } = useLocale();

  useEffect(() => {
    if (prefersReducedMotion()) return;
    registerGsap();
    const scope = root.current;
    if (!scope) return;

    const q = (name: string) => scope.querySelector<HTMLElement>(`[data-hero="${name}"]`);
    const nav = document.querySelector<HTMLElement>("[data-hero='nav']");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      const media = q("media");
      const eyebrow = q("eyebrow");
      const arabic = q("arabic");
      const title = q("title");
      const desc = q("desc");
      const cta = q("cta");
      const fig = q("fig");

      if (media) {
        tl.fromTo(media, { scale: 1.08, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.9 }, 0);
      }
      if (nav) {
        tl.fromTo(nav, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, 0.32);
      }
      if (eyebrow) {
        tl.fromTo(eyebrow, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.72);
      }
      if (arabic) {
        tl.fromTo(arabic, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.95, ease: "power4.out" }, 0.96);
      }
      if (title) {
        tl.fromTo(title, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.05, ease: "power4.out" }, 1.18);
      }
      if (desc) {
        tl.fromTo(desc, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 1.5);
      }
      if (cta) {
        tl.fromTo(cta, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 1.72);
      }
      if (fig) {
        tl.fromTo(fig, { opacity: 0 }, { opacity: 1, duration: 0.8 }, 1.5);
      }
    }, scope);

    return () => {
      ctx.revert();
      if (nav) gsap.set(nav, { clearProps: "all" });
    };
  }, []);

  return (
    <section
      ref={root}
      id="top"
      className="relative flex min-h-[100svh] flex-col bg-ivory lg:grid lg:min-h-[100svh] lg:grid-cols-[minmax(0,40rem)_1fr]"
    >
      <div className="relative min-h-[54svh] flex-1 lg:order-2 lg:min-h-[100svh]">
        <div className="absolute inset-0 overflow-hidden">
          <div data-hero="media" className="hero-await absolute inset-0 origin-center">
            <Photo
              src="/images/baklava-tray.jpg"
              alt={copy.products.baklava.alt}
              priority
              sizes="(max-width: 1024px) 100vw, 54vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
      <div className="relative z-10 flex shrink-0 flex-col justify-end bg-ivory px-[var(--gutter)] pt-7 pb-[max(1.75rem,env(safe-area-inset-bottom))] lg:order-1 lg:justify-center lg:py-32">
        <HeroContent />
      </div>
    </section>
  );
}
