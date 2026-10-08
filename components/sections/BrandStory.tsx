"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "@/lib/i18n";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/gsap";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/motion/Reveal";
import { TextLink } from "@/components/ui/TextLink";

export function BrandStory() {
  const frame = useRef<HTMLDivElement>(null);
  const { copy } = useLocale();

  useEffect(() => {
    const el = frame.current;
    if (!el || prefersReducedMotion()) return;
    registerGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { clipPath: "inset(14% 0% 14% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 78%" },
        },
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section id="story" className="bg-ivory px-[var(--gutter)] py-20 lg:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-0">
        <div ref={frame} className="relative lg:col-span-7">
          <div className="relative h-[72vw] min-h-[320px] max-h-[820px] lg:h-[88vh]" data-cursor="view">
            <Photo
              src="/images/baklava-round.jpg"
              alt={copy.products.baklava.alt}
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-center"
            />
          </div>
          <p className="caption mt-3 text-muted">{copy.story.fig}</p>
        </div>

        <Reveal className="relative z-10 lg:col-span-5 lg:-ms-12 lg:ps-4">
          <p className="caption text-pistachio">{copy.story.kicker}</p>
          <h2 className="display-lg mt-5 text-chocolate">
            <span className="block">{copy.story.titleLead}</span>
            <span className="block italic">{copy.story.titleEm}</span>
          </h2>
          <p
            lang="ar"
            dir="rtl"
            className="arabic-display mt-8 text-[clamp(1.7rem,3vw,2.7rem)] text-pistachio"
          >
            {copy.story.arabic.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <p className="body-lg mt-8 max-w-[38ch] text-chocolate/90">{copy.story.body}</p>
          <TextLink href="/story" className="mt-8 text-chocolate">
            {copy.story.cta}
          </TextLink>
        </Reveal>
      </div>
    </section>
  );
}
