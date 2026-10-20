"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n";
import { INSTAGRAM, instagramMedia, locations, WHATSAPP } from "@/lib/site";
import { Photo } from "@/components/ui/Photo";
import { Logo } from "@/components/ui/Logo";
import { MotifField } from "@/components/ui/Motif";
import { Line, Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

const links = [
  { href: "/#collection", key: "collection" },
  { href: "/menu", key: "carte" },
  { href: "/#story", key: "story" },
  { href: "/#gallery", key: "gallery" },
  { href: "/#visit", key: "contact" },
] as const;

export function Footer() {
  const { locale, setLocale, copy } = useLocale();

  return (
    <footer id="site-footer" className="tone-dark relative overflow-hidden bg-espresso text-ivory">
      <MotifField fade className="absolute inset-0 text-gold/25" />
      <div className="relative">
        <div className="px-[var(--gutter)] pt-[var(--section-y)]">
          <Reveal className="text-center">
            <p data-reveal className="caption text-gold">
              {copy.instagram.kicker}
            </p>
            <h2 className="display-lg mt-4">
              <Line>{copy.instagram.titleLead}</Line>
              <Line className="italic">{copy.instagram.titleEm}</Line>
            </h2>
            <div data-reveal className="mt-8 flex flex-col items-center gap-2">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-11 flex-col items-center justify-center"
              >
                <span className="font-serif text-2xl text-ivory transition-colors duration-300 group-hover:text-gold">
                  {copy.instagram.handle}
                </span>
                <span className="caption mt-2 text-gold">{copy.instagram.cta}</span>
              </a>
              <p className="caption text-ivory/70">{copy.instagram.followers}</p>
            </div>
          </Reveal>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {instagramMedia.map((item, index) => (
              <a
                key={item.src}
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={copy.instagram.alts[index]}
                className="group relative block h-36 w-28 shrink-0 overflow-hidden sm:h-44 sm:w-36"
              >
                <Photo
                  src={item.src}
                  alt={copy.instagram.alts[index]}
                  sizes="144px"
                  className={cn(
                    item.imageClass,
                    "transition-transform duration-700 ease-[var(--ease)] group-hover:scale-105",
                  )}
                />
              </a>
            ))}
          </div>
        </div>

        <div className="px-[var(--gutter)] pt-16 pb-[max(6.5rem,calc(env(safe-area-inset-bottom)+6.5rem))] text-center lg:pt-20">
          <div className="mt-12 grid gap-12 border-t border-ivory/15 pt-10 md:grid-cols-3">
            <nav className="flex flex-col items-center" aria-label={copy.footer.explore}>
              <p className="caption text-gold">{copy.footer.explore}</p>
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="caption inline-flex min-h-11 items-center text-ivory/80 transition-colors duration-300 hover:text-ivory"
                >
                  {copy.nav[link.key]}
                </a>
              ))}
            </nav>
            <Link
              href="/"
              className="inline-flex items-center justify-center self-center leading-none max-md:order-first md:order-none"
              aria-label="Al Hayba Sweets"
            >
              <Logo tone="dark" className="!h-16 lg:!h-[5.5rem]" />
            </Link>
            <div className="flex flex-col items-center">
              <p className="caption text-gold">{copy.hero.orderShort}</p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="caption mt-1 inline-flex min-h-11 items-center text-ivory/80 transition-colors duration-300 hover:text-ivory"
              >
                {copy.hero.order}
              </a>
            </div>
            <div className="md:col-span-3">
              <p className="caption text-gold">{copy.footer.houses}</p>
              <ul className="mx-auto mt-1 grid max-w-3xl grid-cols-2 grid-flow-col grid-rows-2 gap-x-10">
                {locations.map((place) => (
                  <li key={place.id} className="flex flex-col items-center py-2">
                    <a
                      href="/#visit"
                      className="caption inline-flex min-h-11 items-center text-ivory/80 transition-colors duration-300 hover:text-ivory"
                    >
                      {copy.visit.places[place.id]}
                    </a>
                    <a
                      href={place.phoneHref}
                      className="inline-flex min-h-11 items-center font-serif text-xl leading-none text-ivory/80 transition-colors duration-300 hover:text-ivory"
                    >
                      <span dir="ltr">{place.phone}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <p className="caption text-ivory/50">{copy.footer.rights}</p>
            <button
              type="button"
              className="caption inline-flex h-11 min-w-11 items-center justify-center text-ivory/80 transition-colors duration-300 hover:text-gold"
              aria-label={copy.nav.language}
              onClick={() => setLocale(locale === "en" ? "ar" : "en")}
            >
              {locale === "en" ? "AR" : "EN"}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
