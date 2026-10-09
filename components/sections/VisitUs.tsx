"use client";

import { useLocale } from "@/lib/i18n";
import { locations, MAPS, WHATSAPP } from "@/lib/site";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Line, Reveal } from "@/components/motion/Reveal";
import { MotifVeil } from "@/components/ui/Motif";
import { cn } from "@/lib/cn";

export function VisitUs({ offset = false }: { offset?: boolean; }) {
  const { copy } = useLocale();

  return (
    <section id="visit" className="bg-ivory">
      <div className="grid lg:min-h-[84vh] lg:grid-cols-2">
        <div
          className={cn(
            "relative flex flex-col justify-center overflow-hidden px-[var(--gutter)]",
            offset ? "pt-36 pb-20 lg:pt-44 lg:pb-28" : "py-20 lg:py-28",
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
            <ul className="mt-10 grid gap-x-8 gap-y-7 border-t border-chocolate/15 pt-8 sm:grid-cols-2">
              {locations.map((place) => (
                <li key={place.id} data-reveal>
                  <p className="caption text-muted">{copy.visit.places[place.id]}</p>
                  {"address" in place ? <p className="body-md mt-1.5">{place.address}</p> : null}
                  <a
                    href={place.phoneHref}
                    className="mt-2 inline-block font-serif text-[clamp(1.6rem,2.1vw,2.1rem)] leading-none transition-colors duration-300 hover:text-pistachio"
                  >
                    <span dir="ltr">{place.phone}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div data-reveal className="mt-10 flex flex-wrap gap-3">
              <MagneticButton href={MAPS} external variant="ghost">
                {copy.visit.directions}
              </MagneticButton>
              <MagneticButton href={WHATSAPP} external variant="pistachio">
                {copy.visit.whatsapp}
              </MagneticButton>
            </div>
          </Reveal>
        </div>
        <ParallaxImage
          src="/images/kiosk.jpg"
          alt={copy.gallery.alts[2]}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="min-h-[360px] lg:min-h-full"
          imageClass="object-cover"
          speed={6}
        />
      </div>
    </section>
  );
}
