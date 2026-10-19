"use client";

import { useLocale } from "@/lib/i18n";
import { reviews } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

export function Testimonials() {
  const { copy } = useLocale();
  if (reviews.length === 0) return null;

  const columns =
    reviews.length % 3 === 0 ? "md:grid-cols-3" : reviews.length % 2 === 0 ? "md:grid-cols-2" : "";

  return (
    <section className="tone-dark bg-espresso px-[var(--gutter)] py-[var(--section-y)] text-ivory" aria-labelledby="voices-heading">
      <Reveal>
        <p id="voices-heading" data-reveal className="caption text-gold">
          {copy.quotes.kicker}
        </p>
        <ul className={cn("mt-10 grid grid-cols-1 gap-6", columns)}>
          {reviews.map((review) => (
            <li key={`${review.name}-${review.date}`} data-reveal className="border-t border-ivory/15 pt-6">
              <p className="text-gold" aria-label={`${review.stars} / 5`}>
                {"★".repeat(review.stars)}
                <span className="text-ivory/25">{"★".repeat(Math.max(0, 5 - review.stars))}</span>
              </p>
              {review.quote ? (
                <blockquote className="mt-4 font-serif text-[clamp(1.35rem,2vw,1.8rem)] italic leading-snug">
                  {review.quote}
                </blockquote>
              ) : null}
              <p className="mt-5 font-serif text-xl">{review.name}</p>
              <p className="caption mt-2 text-ivory/60">
                {review.source}
                <span className="mx-2">·</span>
                <span dir="ltr">{review.date}</span>
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
