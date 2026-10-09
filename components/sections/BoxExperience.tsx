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
        { y: 56, scale: 1.06, clipPath: "inset(10% 10% 10% 10%)" },
        {
          y: -18,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        },
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={section} id="box" className="tone-dark relative overflow-hidden bg-pistachio text-ivory">
      <MotifVeil fade="aside" className="text-ivory/40" />
      <div className="relative grid items-center gap-10 px-[var(--gutter)] py-20 lg:grid-cols-12 lg:py-28">
        <Reveal className="lg:col-span-5">
          <p data-reveal className="caption text-ivory/80">
            {copy.box.kicker}
          </p>
          <h2 className="display-lg mt-5">
            <Line>{copy.box.titleLead}</Line>
            <Line className="italic">{copy.box.titleEm}</Line>
          </h2>
          <p data-reveal className="body-lg mt-6 max-w-[36ch] text-ivory/85">
            {copy.box.body}
          </p>
          <div data-reveal>
            <MagneticButton href={WHATSAPP} external variant="ivory" className="mt-8">
              {copy.box.cta}
            </MagneticButton>
          </div>
        </Reveal>
        <div className="lg:col-span-6 lg:col-start-7">
          <div ref={box} className="relative mx-auto h-[78vw] max-h-[760px] min-h-[320px] w-full lg:h-[74vh]" data-cursor="view">
            <Photo
              src="/images/gift-box.jpg"
              alt={copy.box.alt}
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
