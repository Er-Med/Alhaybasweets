"use client";

import { useLocale } from "@/lib/i18n";
import { MotifVeil } from "@/components/ui/Motif";
import { TextLink } from "@/components/ui/TextLink";
import { Line, Reveal } from "@/components/motion/Reveal";

export function MenuTeaser() {
  const { copy } = useLocale();

  return (
    <section className="relative overflow-hidden bg-ivory px-[var(--gutter)] py-16 lg:py-24">
      <MotifVeil fade="soft" className="text-chocolate/25" />
      <Reveal className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p data-reveal className="caption text-pistachio">
            {copy.menu.kicker}
          </p>
          <h2 className="display-lg mt-4 max-w-[12ch]">
            <Line>{copy.menu.teaser}</Line>
          </h2>
        </div>
        <div data-reveal>
          <TextLink href="/menu" className="text-chocolate">
            {copy.menu.cta}
          </TextLink>
        </div>
      </Reveal>
    </section>
  );
}
