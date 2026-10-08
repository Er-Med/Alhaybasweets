"use client";

import { useLocale } from "@/lib/i18n";
import { ADDRESS, INSTAGRAM, locations, WHATSAPP } from "@/lib/site";
import { Motif } from "@/components/ui/Motif";

const links = [
  { href: "/collection", key: "collection" },
  { href: "/menu", key: "carte" },
  { href: "/story", key: "story" },
  { href: "/gallery", key: "gallery" },
  { href: "/contact", key: "contact" },
] as const;

export function Footer() {
  const { locale, setLocale, copy } = useLocale();

  return (
    <footer className="tone-dark relative overflow-hidden bg-ink text-ivory">
      <Motif className="pointer-events-none absolute -end-10 top-10 h-56 w-56 text-gold/25 md:h-72 md:w-72" />
      <div className="relative px-[var(--gutter)] pt-20 pb-10 lg:pt-28">
        <p className="font-serif text-[clamp(3.4rem,15vw,12.5rem)] leading-[0.82] tracking-[-0.035em]">
          AL HAYBA
        </p>
        <p className="caption mt-4 text-gold">Sweets</p>

        <div className="mt-16 grid gap-12 border-t border-ivory/15 pt-10 md:grid-cols-3">
          <nav className="flex flex-col items-start gap-3" aria-label="Footer">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="caption text-ivory/80 hover:text-ivory">
                {copy.nav[link.key]}
              </a>
            ))}
          </nav>
          <div className="space-y-3">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="block caption text-ivory/80 hover:text-ivory"
            >
              {copy.instagram.handle}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="block caption text-ivory/80 hover:text-ivory"
            >
              {copy.visit.whatsapp}
            </a>
          </div>
          <div className="space-y-4">
            {locations.map((place) => (
              <a key={place.id} href={place.phoneHref} className="block text-ivory/80 hover:text-ivory">
                <span className="caption block">{copy.visit.places[place.id]}</span>
                <span className="mt-1 block font-serif text-xl leading-none">{place.phone}</span>
              </a>
            ))}
            <p className="body-md text-ivory/80">{ADDRESS}</p>
            <p className="body-md text-ivory/80">{copy.visit.city}</p>
            <button
              type="button"
              className="caption text-gold"
              onClick={() => setLocale(locale === "en" ? "ar" : "en")}
            >
              EN / AR
            </button>
          </div>
        </div>

        <p className="caption mt-16 text-ivory/50">{copy.footer.rights}</p>
      </div>
    </footer>
  );
}
