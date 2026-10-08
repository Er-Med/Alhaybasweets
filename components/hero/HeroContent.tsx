"use client";

import { useLocale } from "@/lib/i18n";
import { WHATSAPP } from "@/lib/site";
import { MagneticButton } from "@/components/motion/MagneticButton";

export function HeroContent() {
  const { locale, copy } = useLocale();
  const arabic = locale === "ar";

  return (
    <div className="max-w-[38rem] pb-2 lg:pb-0">
      <p data-hero="eyebrow" className="hero-await caption text-pistachio">
        {copy.hero.eyebrow}
      </p>

      {arabic ? (
        <>
          <h1
            data-hero="arabic"
            lang="ar"
            className="hero-await arabic-display mt-6 text-[clamp(2.3rem,6vw,4.4rem)] text-chocolate"
          >
            {copy.hero.arabicTitle}
          </h1>
          <p
            data-hero="title"
            lang="en"
            dir="ltr"
            className="hero-await mt-4 max-w-[16ch] font-serif text-[clamp(1.45rem,2.4vw,2.2rem)] italic leading-tight text-chocolate/80"
          >
            {copy.hero.titleLead} {copy.hero.titleEm}
          </p>
        </>
      ) : (
        <>
          <p
            data-hero="arabic"
            lang="ar"
            dir="rtl"
            className="hero-await arabic-display mt-6 w-fit text-[clamp(1.25rem,2vw,1.8rem)] text-pistachio"
          >
            {copy.hero.arabicTitle}
          </p>
          <h1 data-hero="title" className="hero-await display-xl mt-3 text-chocolate">
            <span className="block">{copy.hero.titleLead}</span>
            <span className="block italic">{copy.hero.titleEm}</span>
          </h1>
        </>
      )}

      <p data-hero="desc" className="hero-await body-lg mt-6 max-w-[32ch] text-muted">
        {copy.hero.description}
      </p>

      <div data-hero="cta" className="hero-await mt-8 flex flex-wrap gap-3">
        <MagneticButton href={WHATSAPP} external>
          {copy.hero.order}
        </MagneticButton>
        <MagneticButton href="/#collection" variant="ghost">
          {copy.hero.explore}
        </MagneticButton>
      </div>
      <p data-hero="fig" className="hero-await caption mt-8 text-muted">
        {copy.hero.fig}
      </p>
    </div>
  );
}
