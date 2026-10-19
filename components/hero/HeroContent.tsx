"use client";

import type { ReactNode } from "react";
import { useLocale } from "@/lib/i18n";
import { WHATSAPP } from "@/lib/site";
import { cn } from "@/lib/cn";
import { MagneticButton } from "@/components/motion/MagneticButton";

function Line({ children, className }: { children: ReactNode; className?: string }) {
  const script = className?.includes("italic");
  return (
    <span
      className={cn(
        "block overflow-hidden",
        script ? "-my-[0.06em] px-[0.12em] py-[0.28em]" : "-mb-[0.14em] pb-[0.14em]",
      )}
    >
      <span data-hero="line" className={cn("hero-await block", script && "script", className)}>
        {children}
      </span>
    </span>
  );
}

export function HeroContent() {
  const { locale, copy } = useLocale();
  const arabic = locale === "ar";

  return (
    <div className="max-w-[40rem]">
      <p data-hero="eyebrow" className="hero-await caption flex items-center gap-4 text-gold">
        <span aria-hidden className="h-px w-10 bg-gradient-to-r from-transparent to-gold rtl:bg-gradient-to-l" />
        {copy.hero.eyebrow}
      </p>

      {arabic ? (
        <>
          <h1
            lang="ar"
            className="arabic-display mt-4 text-[2.35rem] leading-[1.35] text-ivory lg:mt-7 lg:text-[clamp(2.6rem,6.4vw,5.2rem)] lg:leading-[1.65]"
          >
            <Line>{copy.hero.arabicTitle}</Line>
          </h1>
          <p
            lang="en"
            dir="ltr"
            className="script mt-2 font-serif text-[clamp(1.55rem,6vw,2.2rem)] leading-tight lg:mt-3 lg:text-[clamp(1.8rem,3vw,2.8rem)]"
          >
            <Line>
              {copy.hero.titleLead} <span className="hero-gold-text">{copy.hero.titleEm}</span>
            </Line>
          </p>
        </>
      ) : (
        <>
          <p
            data-hero="arabic"
            lang="ar"
            dir="rtl"
            className="hero-await arabic-display mt-4 w-fit text-[1.35rem] text-gold/90 lg:mt-7 lg:text-[clamp(1.45rem,2.3vw,2.15rem)]"
          >
            {copy.hero.arabicTitle}
          </p>
          <h1 className="hero-title mt-3 font-serif text-ivory">
            <Line>{copy.hero.titleLead}</Line>
            <Line className="italic">
              <span className="hero-gold-text">{copy.hero.titleEm}</span>
            </Line>
          </h1>
        </>
      )}

      <p data-hero="desc" className="hero-await body-lg mt-4 max-w-[32ch] text-ivory/65 lg:mt-7">
        {copy.hero.description}
      </p>

      <div data-hero="cta" className="hero-await mt-5 flex flex-wrap gap-3 lg:mt-9">
        <MagneticButton href={WHATSAPP} external variant="gold">
          {copy.hero.order}
        </MagneticButton>
        <MagneticButton href="/menu" variant="light">
          {copy.hero.explore}
        </MagneticButton>
      </div>
    </div>
  );
}
