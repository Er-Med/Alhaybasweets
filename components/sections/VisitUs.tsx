"use client";

import { useLocale } from "@/lib/i18n";
import { locations, MAPS, WHATSAPP } from "@/lib/site";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Photo } from "@/components/ui/Photo";
import { cn } from "@/lib/cn";

export function VisitUs({ offset = false }: { offset?: boolean; }) {
  const { copy } = useLocale();

  return (
    <section id="visit" className="bg-ivory">
      <div className="grid lg:min-h-[84vh] lg:grid-cols-2">
        <div
          className={cn(
            "flex flex-col justify-center px-[var(--gutter)]",
            offset ? "pt-36 pb-20 lg:pt-44 lg:pb-28" : "py-20 lg:py-28",
          )}
        >
          <p className="caption text-pistachio">{copy.visit.kicker}</p>
          <h2 className="display-lg mt-4">{copy.visit.title}</h2>
          <p className="mt-4 font-serif text-[clamp(1.6rem,2.4vw,2.3rem)] text-muted">{copy.visit.city}</p>
          <p className="body-lg mt-8 max-w-[34ch]">{copy.visit.note}</p>
          <ul className="mt-10 space-y-7 border-t border-chocolate/15 pt-8">
            {locations.map((place) => (
              <li key={place.id}>
                <p className="caption text-muted">{copy.visit.places[place.id]}</p>
                {"address" in place ? <p className="body-lg mt-2">{place.address}</p> : null}
                <a
                  href={place.phoneHref}
                  className="mt-2 block font-serif text-[clamp(1.7rem,2.4vw,2.25rem)] leading-none"
                >
                  {place.phone}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <MagneticButton href={MAPS} external variant="ghost">
              {copy.visit.directions}
            </MagneticButton>
            <MagneticButton href={WHATSAPP} external variant="pistachio">
              {copy.visit.whatsapp}
            </MagneticButton>
          </div>
        </div>
        <div className="relative min-h-[360px] lg:min-h-full" data-cursor="view">
          <Photo
            src="/images/kiosk.jpg"
            alt={copy.gallery.alts[2]}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
