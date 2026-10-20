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
        { clipPath: "inset(6% 4% 6% 4%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          scrollTrigger: { trigger: el, start: "top 92%", end: "top 55%", scrub: 0.6 },
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
    <section
      id="story"
      className="overflow-hidden bg-ivory px-[var(--gutter)] pt-[clamp(3.5rem,7vw,5.5rem)] pb-[var(--section-y)]"
    >
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-x-[var(--gutter)]">
        <Reveal className="relative lg:col-span-6">
          <p data-reveal className="caption flex items-center gap-4 text-pistachio">
            <span
              aria-hidden
              className="h-px w-10 shrink-0 bg-gradient-to-r from-transparent to-gold rtl:bg-gradient-to-l"
            />
            {copy.story.kicker}
          </p>
          <h2 className="display-lg mt-4 text-chocolate">
            <Line>{copy.story.titleLead}</Line>
            <Line className="italic">{copy.story.titleEm}</Line>
          </h2>
          <p
            lang="ar"
            dir="rtl"
            className="arabic-display mt-5 w-fit text-[clamp(1.25rem,2vw,1.85rem)] leading-[1.25]! text-pistachio"
          >
            {copy.story.arabic.map((line) => (
              <span key={line} data-reveal className="block">
                {line}
              </span>
            ))}
          </p>
          <p data-reveal className="body-lg mt-10 max-w-[38ch] text-chocolate/90">
            {copy.story.body}
          </p>
          <div data-reveal>
            <TextLink href="/story" className="mt-5 text-chocolate">
              {copy.story.cta}
            </TextLink>
          </div>
        </Reveal>

        <div className="lg:col-span-6">
          <div
            ref={frame}
            className="relative aspect-[3/4] w-full overflow-hidden lg:aspect-auto lg:h-[min(68vh,720px)]"
            data-cursor="view"
          >
            <div ref={media} className="absolute inset-0">
              <Photo
                src="/images/kiosk.jpg"
                alt={copy.gallery.alts[0]}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
          <p className="caption mt-3 text-muted">{copy.story.fig}</p>
        </div>
      </div>
    </section>
  );
}
