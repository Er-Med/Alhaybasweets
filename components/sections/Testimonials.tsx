"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Photo } from "@/components/ui/Photo";

export function Testimonials() {
  const { copy } = useLocale();
  const [index, setIndex] = useState(0);
  const item = copy.quotes.items[index];
  const total = copy.quotes.items.length;

  const shift = (direction: number) => {
    setIndex((current) => (current + direction + total) % total);
  };

  return (
    <section className="bg-ivory" aria-labelledby="voices-heading">
      <div className="grid lg:min-h-[78vh] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div className="relative min-h-[320px] lg:min-h-full" data-cursor="view">
          <Photo
            src="/images/baklava-round.jpg"
            alt={copy.products.baklava.alt}
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col justify-between px-[var(--gutter)] py-16 lg:py-24">
          <p id="voices-heading" className="caption text-pistachio">
            {copy.quotes.kicker}
          </p>
          <blockquote key={`${index}-${item.name}`} className="quote-in mt-10">
            <p className="font-serif text-[clamp(1.7rem,3vw,3.15rem)] italic leading-[1.18]">
              “{item.quote}”
            </p>
          </blockquote>
          <div className="mt-12 flex items-end justify-between gap-6">
            <footer>
              <p className="font-serif text-2xl">{item.name}</p>
              <p className="caption mt-2 text-muted">{item.place}</p>
            </footer>
            <div className="flex gap-2">
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center border border-chocolate/25"
                aria-label={copy.quotes.prev}
                onClick={() => shift(-1)}
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center border border-chocolate/25"
                aria-label={copy.quotes.next}
                onClick={() => shift(1)}
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
