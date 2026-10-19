"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { Reveal } from "@/components/motion/Reveal";

const arrow =
  "flex h-12 w-12 items-center justify-center border border-chocolate/25 transition-colors duration-300 hover:border-chocolate hover:bg-chocolate hover:text-ivory";

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
      <div>
        <Reveal
          className="flex flex-col justify-between px-[var(--gutter)] py-16 lg:py-24"
          start="top 75%"
        >
          <div data-reveal className="flex items-center justify-between">
            <p id="voices-heading" className="caption text-pistachio">
              {copy.quotes.kicker}
            </p>
            <p className="caption tabular-nums text-muted" aria-live="polite">
              <span className="text-chocolate">{String(index + 1).padStart(2, "0")}</span>
              <span className="mx-2">/</span>
              {String(total).padStart(2, "0")}
            </p>
          </div>
          <blockquote data-reveal key={`${index}-${item.name}`} className="quote-in mt-10">
            <span aria-hidden className="-ms-1 block h-[0.42em] font-serif text-[9rem] leading-[0.8] text-gold/55">
              “
            </span>
            <p className="font-serif text-[clamp(1.7rem,3vw,3.15rem)] italic leading-[1.18]">
              {item.quote}
            </p>
          </blockquote>
          <div data-reveal className="mt-12">
            <div className="mb-8 h-px bg-chocolate/15">
              <div
                className="h-px origin-left bg-gold transition-transform duration-700 ease-[var(--ease)] rtl:origin-right"
                style={{ transform: `scaleX(${(index + 1) / total})` }}
              />
            </div>
            <div
              className="flex items-end justify-between gap-6"
              onKeyDown={(event) => {
                const forward = document.documentElement.dir === "rtl" ? "ArrowLeft" : "ArrowRight";
                const back = forward === "ArrowLeft" ? "ArrowRight" : "ArrowLeft";
                if (event.key === back) shift(-1);
                if (event.key === forward) shift(1);
              }}
            >
              <footer key={item.name} className="quote-in">
                <p className="font-serif text-2xl">{item.name}</p>
                <p className="caption mt-2 text-muted">{item.place}</p>
              </footer>
              <div className="flex gap-2">
                <button type="button" className={arrow} aria-label={copy.quotes.prev} onClick={() => shift(-1)}>
                  <span aria-hidden="true" className="inline-block rtl:-scale-x-100">←</span>
                </button>
                <button type="button" className={arrow} aria-label={copy.quotes.next} onClick={() => shift(1)}>
                  <span aria-hidden="true" className="inline-block rtl:-scale-x-100">→</span>
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
