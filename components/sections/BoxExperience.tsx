"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "@/lib/i18n";
import { WHATSAPP } from "@/lib/site";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/gsap";
import { Photo } from "@/components/ui/Photo";
import { MotifVeil } from "@/components/ui/Motif";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Line, Reveal } from "@/components/motion/Reveal";

export function BoxExperience() {
  const section = useRef<HTMLElement>(null);
  const box = useRef<HTMLDivElement>(null);
  const staticSeams = useRef<HTMLDivElement>(null);
  const topSeam = useRef<HTMLDivElement>(null);
  const bottomSeam = useRef<HTMLDivElement>(null);
  const { copy } = useLocale();

  useEffect(() => {
    const root = section.current;
    const media = box.current;
    if (!root || !media || prefersReducedMotion()) return;
    registerGsap();

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      gsap.fromTo(
        media,
        { y: 24, scale: 1.03, clipPath: "inset(4% 4% 4% 4%)" },
        {
          y: 0,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "center center",
            scrub: 0.7,
          },
        },
      );
    });

    mm.add("(min-width: 1024px)", () => {
      if (staticSeams.current) gsap.set(staticSeams.current, { autoAlpha: 0 });

      gsap.fromTo(
        topSeam.current,
        { autoAlpha: 1 },
        {
          autoAlpha: 0,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "top 25%",
            scrub: 0.6,
          },
        },
      );

      gsap.fromTo(
        bottomSeam.current,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "bottom 55%",
            end: "bottom top",
            scrub: 0.6,
          },
        },
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={section} id="box" className="tone-dark relative overflow-hidden bg-pistachio-deep text-ivory lg:-mt-0.5">
      <div ref={staticSeams} aria-hidden className="pointer-events-none">
        <div className="absolute inset-x-0 top-0 z-[1] h-28 bg-gradient-to-b from-espresso to-transparent sm:h-36" />
        <div className="absolute inset-x-0 bottom-0 z-[1] hidden h-[var(--section-y)] bg-gradient-to-b from-transparent to-ivory lg:block" />
      </div>
      <div
        ref={topSeam}
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] hidden h-[46vh] bg-gradient-to-b from-espresso to-transparent opacity-0 lg:block"
      />
      <div
        ref={bottomSeam}
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] hidden h-[var(--section-y)] bg-gradient-to-b from-transparent to-ivory opacity-0 lg:block"
      />
      <MotifVeil fade="aside" className="text-ivory/20" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,var(--color-pistachio-deep)_0%,var(--color-pistachio-deep)_42%,transparent_76%)] lg:bg-[linear-gradient(to_right,var(--color-pistachio-deep)_0%,var(--color-pistachio-deep)_38%,transparent_68%)] rtl:lg:bg-[linear-gradient(to_left,var(--color-pistachio-deep)_0%,var(--color-pistachio-deep)_38%,transparent_68%)]"
      />
      <div className="relative z-[2] grid items-center gap-12 px-[var(--gutter)] pt-[var(--section-y)] pb-8 lg:grid-cols-12 lg:gap-x-[var(--gutter)] lg:py-[var(--section-y)]">
        <Reveal className="lg:col-span-6">
          <p data-reveal className="caption text-ivory">
            {copy.box.kicker}
          </p>
          <span data-reveal aria-hidden className="mt-5 block h-px w-12 bg-gold/70" />
          <h2 className="display-lg mt-6">
            <Line>{copy.box.titleLead}</Line>
            <Line className="italic">{copy.box.titleEm}</Line>
          </h2>
          <p data-reveal className="body-lg mt-6 max-w-[36ch] text-ivory">
            {copy.box.body}
          </p>
          <div data-reveal>
            <MagneticButton href={WHATSAPP} external variant="ivory" className="mt-8">
              {copy.box.cta}
            </MagneticButton>
          </div>
        </Reveal>
        <div className="lg:col-span-6">
          <div
            ref={box}
            className="relative mx-auto aspect-[3/4] w-full max-w-[28rem] overflow-hidden border border-gold/40"
            data-cursor="view"
          >
            <Photo
              src="/images/gift-box.jpg"
              alt={copy.box.alt}
              sizes="(max-width: 1024px) 90vw, 28rem"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
