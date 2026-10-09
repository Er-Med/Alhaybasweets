"use client";

import { useLocale } from "@/lib/i18n";
import { INSTAGRAM, instagramMedia } from "@/lib/site";
import { Photo } from "@/components/ui/Photo";
import { TextLink } from "@/components/ui/TextLink";
import { Line, Reveal } from "@/components/motion/Reveal";

export function Instagram() {
  const { copy } = useLocale();

  return (
    <section className="bg-ivory px-[var(--gutter)] py-20 lg:py-28">
      <Reveal className="mb-10 lg:mb-14">
        <p data-reveal className="caption text-pistachio">
          {copy.instagram.kicker}
        </p>
        <h2 className="display-lg mt-4 max-w-[12ch]">
          <Line>{copy.instagram.titleLead}</Line>
          <Line className="italic">{copy.instagram.titleEm}</Line>
        </h2>
      </Reveal>

      <Reveal stagger={0.07} className="grid grid-cols-2 items-end gap-3 md:grid-cols-3 lg:grid-cols-6">
        {instagramMedia.map((item, index) => (
          <a
            key={item.src + index}
            data-reveal
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="view"
            className={`group relative block overflow-hidden ${item.aspect}`}
          >
            <Photo
              src={item.src}
              alt={copy.instagram.alts[index]}
              sizes="(max-width: 768px) 50vw, 16vw"
              className={`media-zoom ${item.imageClass}`}
            />
            <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-ink/0 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <span className="caption translate-y-2 text-ivory transition-transform duration-500 ease-[var(--ease)] group-hover:translate-y-0">
                {copy.instagram.handle}
              </span>
            </div>
          </a>
        ))}
      </Reveal>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-chocolate/15 pt-6">
        <div>
          <p className="font-serif text-2xl">{copy.instagram.handle}</p>
          <p className="caption mt-2 text-muted">{copy.instagram.followers}</p>
        </div>
        <TextLink href={INSTAGRAM} external className="text-chocolate">
          {copy.instagram.cta}
        </TextLink>
      </div>
    </section>
  );
}
