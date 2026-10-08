"use client";

import { useLocale } from "@/lib/i18n";
import { INSTAGRAM, instagramMedia } from "@/lib/site";
import { Photo } from "@/components/ui/Photo";
import { TextLink } from "@/components/ui/TextLink";

export function Instagram() {
  const { copy } = useLocale();

  return (
    <section className="bg-ivory px-[var(--gutter)] py-20 lg:py-28">
      <div className="mb-10 lg:mb-14">
        <p className="caption text-pistachio">{copy.instagram.kicker}</p>
        <h2 className="display-lg mt-4 max-w-[12ch]">
          <span className="block">{copy.instagram.titleLead}</span>
          <span className="block italic">{copy.instagram.titleEm}</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 items-end gap-3 md:grid-cols-3 lg:grid-cols-6">
        {instagramMedia.map((item, index) => (
          <a
            key={item.src + index}
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
          </a>
        ))}
      </div>

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
