"use client";

import { useLocale } from "@/lib/i18n";
import { locations, WHATSAPP } from "@/lib/site";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { TextLink } from "@/components/ui/TextLink";
import { Line, Reveal } from "@/components/motion/Reveal";
import { MotifVeil } from "@/components/ui/Motif";
import { cn } from "@/lib/cn";

export function VisitUs({ offset = false }: { offset?: boolean; }) {
  const { copy } = useLocale();

  return (
    <section id="visit" className="bg-ivory">
      <div>
        <div
          className={cn(
            "relative flex flex-col justify-center overflow-hidden px-[var(--gutter)]",
            offset ? "pt-36 pb-[var(--section-y)] lg:pt-44" : "py-[var(--section-y)]",
          )}
        >
          {offset ? <MotifVeil fade="aside" className="text-chocolate/30" /> : null}
          <Reveal className="relative" stagger={0.07}>
            <p data-reveal className="caption text-pistachio">
              {copy.visit.kicker}
            </p>
            <h2 className="display-lg mt-4">
              <Line>{copy.visit.title}</Line>
            </h2>
            <p data-reveal className="mt-4 font-serif text-[clamp(1.6rem,2.4vw,2.3rem)] text-muted">
              {copy.visit.city}
            </p>
            <p data-reveal className="body-lg mt-8 max-w-[34ch]">
              {copy.visit.note}
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {locations.map((place) => (
                <li key={place.id} data-reveal className="border border-chocolate/15 p-6">
                  <p className="font-serif text-2xl">{copy.visit.places[place.id]}</p>
                  {place.address ? <p className="body-md mt-3">{place.address}</p> : null}
                  <a
                    href={place.phoneHref}
                    className="mt-3 inline-block font-serif text-[clamp(1.45rem,2vw,1.85rem)] leading-none transition-colors duration-300 hover:text-pistachio"
                  >
                    <span dir="ltr">{place.phone}</span>
                  </a>
                  {place.hours ? (
                    <p className="body-md mt-3">
                      <span className="caption me-2 text-muted">{copy.visit.hours}</span>
                      {place.hours}
                    </p>
                  ) : null}
                  {place.maps ? (
                    <TextLink href={place.maps} external className="mt-4 text-chocolate">
                      {copy.visit.directions}
                    </TextLink>
                  ) : null}
                </li>
              ))}
            </ul>
            <div data-reveal className="mt-10">
              <MagneticButton href={WHATSAPP} external>
                {copy.hero.order}
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
