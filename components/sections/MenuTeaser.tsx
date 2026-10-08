"use client";

import { useLocale } from "@/lib/i18n";
import { TextLink } from "@/components/ui/TextLink";

export function MenuTeaser() {
  const { copy } = useLocale();

  return (
    <section className="bg-ivory px-[var(--gutter)] py-16 lg:py-24">
      <div className="flex flex-col gap-8 border-t border-chocolate/15 pt-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="caption text-pistachio">{copy.menu.kicker}</p>
          <h2 className="display-lg mt-4 max-w-[12ch]">{copy.menu.teaser}</h2>
        </div>
        <TextLink href="/menu" className="text-chocolate">
          {copy.menu.cta}
        </TextLink>
      </div>
    </section>
  );
}
