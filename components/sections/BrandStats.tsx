"use client";

import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion/Reveal";

export function BrandStats() {
  const { copy } = useLocale();

  return (
    <section className="bg-ivory px-[var(--gutter)] py-20 lg:py-28">
      <Reveal>
        <div className="grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="caption text-pistachio">{copy.stats.kicker}</p>
            <h2 className="display-lg mt-4">
              <span className="block">{copy.stats.titleLead}</span>
              <span className="block italic">{copy.stats.titleEm}</span>
            </h2>
          </div>
          <dl className="grid grid-cols-1 gap-8 border-t border-chocolate/15 pt-8 sm:grid-cols-3 lg:col-span-8">
            {copy.stats.items.map((item) => (
              <div key={item.label}>
                <dd className="font-serif text-[clamp(3rem,5vw,4.6rem)] leading-none">{item.value}</dd>
                <dt className="caption mt-4 max-w-[14ch] text-muted">{item.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
