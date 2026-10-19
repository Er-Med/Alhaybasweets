"use client";

import { useLocale } from "@/lib/i18n";
import { Gallery } from "@/components/sections/Gallery";
import { Line, Reveal } from "@/components/motion/Reveal";

export function Origin() {
  const { copy } = useLocale();

  return (
    <section id="gallery" className="bg-ivory px-[var(--gutter)] py-20 lg:py-28">
      <Reveal className="mb-10 max-w-[46rem] lg:mb-14">
        <p data-reveal className="caption text-pistachio">
          {copy.heritage.kicker}
        </p>
        <h2 className="display-lg mt-5">
          <Line>{copy.heritage.titleLead}</Line>
          <Line className="italic">{copy.heritage.titleEm}</Line>
        </h2>
        <p data-reveal className="body-lg mt-6 max-w-[46ch]">
          {copy.heritage.body}
        </p>
      </Reveal>
      <Gallery embedded />
    </section>
  );
}
