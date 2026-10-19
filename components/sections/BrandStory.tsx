"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "@/lib/i18n";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/gsap";
import { Photo } from "@/components/ui/Photo";
import { Line, Reveal } from "@/components/motion/Reveal";
import { TextLink } from "@/components/ui/TextLink";

export function BrandStory() {
  const frame = useRef<HTMLDivElement>(null);
  const media = useRef<HTMLDivElement>(null);
  const { copy } = useLocale();

  useEffect(() => {
    const el = frame.current;
    if (!el || prefersReducedMotion()) return;
    registerGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { clipPath: "inset(14% 8% 14% 8%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          scrollTrigger: { trigger: el, start: "top 92%", end: "top 25%", scrub: 0.6 },
        },
      );
      gsap.fromTo(
        media.current,
        { scale: 1.22, yPercent: -4 },
        {
          scale: 1,
          yPercent: 4,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        },
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section id="story" className="overflow-hidden bg-ivory px-[var(--gutter)] py-20 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-0">
        <div className="lg:col-span-7">
          <div
            ref={frame}
            className="relative h-[72vw] min-h-[320px] max-h-[820px] overflow-hidden lg:h-[88vh]"
            data-cursor="view"
          >
            <div ref={media} className="absolute inset-0">
              <Photo
                src="/images/baklava-round.jpg"
                alt={copy.hero.slides[1].alt}
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center"
              />
            </div>
          </div>
          <p className="caption mt-3 text-muted">{copy.story.fig}</p>
        </div>

        <Reveal className="relative lg:col-span-5 lg:ps-[clamp(2.5rem,5vw,5.5rem)]">
          <p data-reveal className="caption text-pistachio">
            {copy.story.kicker}
          </p>
          <h2 className="display-lg mt-5 text-chocolate">
            <Line>{copy.story.titleLead}</Line>
            <Line className="italic">{copy.story.titleEm}</Line>
          </h2>
          <p
            lang="ar"
            dir="rtl"
            className="arabic-display mt-8 w-fit text-[clamp(1.7rem,3vw,2.7rem)] text-pistachio"
          >
            {copy.story.arabic.map((line) => (
              <span key={line} data-reveal className="block">
                {line}
              </span>
            ))}
          </p>
          <p data-reveal className="body-lg mt-8 max-w-[38ch] text-chocolate/90">
            {copy.story.body}
          </p>
          <div data-reveal>
            <TextLink href="/story" className="mt-8 text-chocolate">
              {copy.story.cta}
            </TextLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
