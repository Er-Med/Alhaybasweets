"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import { cn } from "@/lib/cn";

function Line({ children, className }: { children: ReactNode; className?: string }) {
  const script = className?.includes("italic") || className?.includes("script");
  return (
    <span
      className={cn(
        "block overflow-hidden",
        script ? "px-[0.14em] py-[0.4em] pe-[0.72em]" : "-mb-[0.14em] pb-[0.14em]",
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
    <div className="max-w-[36rem]">
      <p data-hero="eyebrow" className="hero-await caption flex items-center gap-4 text-gold">
        <span aria-hidden className="h-px w-10 bg-gradient-to-r from-transparent to-gold rtl:bg-gradient-to-l" />
        {copy.hero.eyebrow}
      </p>

      {arabic ? (
        <>
          <h1
            lang="ar"
            className="arabic-display mt-3 text-[2.05rem] leading-[1.35] text-ivory lg:mt-7 lg:text-[clamp(2.6rem,4.6vw,4.6rem)] lg:leading-[1.55]"
          >
            <Line>{copy.hero.arabicTitle}</Line>
          </h1>
          <p
            lang="fr"
            dir="ltr"
            className="script mt-1.5 text-[clamp(1.45rem,3.4vw,2.6rem)] leading-tight text-ivory lg:mt-3 lg:text-[clamp(1.7rem,4vw,2.6rem)]"
          >
            <Line className="script">
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
            className="hero-await arabic-display mt-3 w-fit text-[1.2rem] text-gold/90 lg:mt-7 lg:text-[clamp(1.45rem,2.3vw,2.15rem)]"
          >
            {copy.hero.arabicTitle}
          </p>
          <h1 className="hero-title mt-2 font-serif text-ivory lg:mt-3">
            <Line>{copy.hero.titleLead}</Line>
            <Line className="italic">
              <span className="hero-gold-text">{copy.hero.titleEm}</span>
            </Line>
          </h1>
        </>
      )}

      <p data-hero="desc" className="hero-await body-lg mt-3 max-w-[28ch] text-ivory/75 lg:mt-7">
        {copy.hero.description}
      </p>

      <div data-hero="cta" className="hero-await mt-4 lg:mt-9">
        <Link href="/menu" className="caption inline-flex flex-col items-start text-ivory">
          <span>{copy.hero.explore}</span>
          <span data-hero="rule" className="mt-2.5 block h-px w-full origin-left bg-ivory rtl:origin-right" />
        </Link>
      </div>
    </div>
  );
}
