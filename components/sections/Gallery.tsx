"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { galleryMedia } from "@/lib/site";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { ImageViewer } from "@/components/ui/ImageViewer";
import { Line, Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

export function Gallery({ intro = true, embedded = false }: { intro?: boolean; embedded?: boolean }) {
  const { copy } = useLocale();
  const [open, setOpen] = useState<number | null>(null);
  const shot =
    open === null
      ? null
      : {
          src: galleryMedia[open].src,
          alt: copy.gallery.alts[open],
          title: copy.gallery.alts[open],
        };

  const grid = (
    <>
      <div className="grid grid-cols-1 gap-[var(--gutter)] md:grid-cols-12">
        {galleryMedia.map((item, index) => (
          <ParallaxImage
            key={item.src}
            src={item.src}
            alt={copy.gallery.alts[index]}
            sizes="(max-width: 768px) 100vw, 33vw"
            imageClass={item.imageClass}
            onOpen={() => setOpen(index)}
            className="aspect-[3/4] w-full md:col-span-4"
            style={{ maxWidth: Math.round(item.maxWidth / 1.2) }}
          />
        ))}
      </div>
      <ImageViewer item={shot} onClose={() => setOpen(null)} closeLabel={copy.nav.close} />
    </>
  );

  if (embedded) return grid;

  return (
    <section id="gallery" className={cn("bg-ivory px-[var(--gutter)]", intro ? "py-[var(--section-y)]" : "pb-[var(--section-y)]")}>
      {intro ? (
        <Reveal className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p data-reveal className="caption text-pistachio">
              {copy.gallery.kicker}
            </p>
            <h2 className="display-lg mt-4">
              <Line>{copy.gallery.titleLead}</Line>
              <Line className="italic">{copy.gallery.titleEm}</Line>
            </h2>
          </div>
          <p data-reveal className="body-md max-w-[28ch] text-muted lg:mb-3">
            {copy.gallery.intro}
          </p>
        </Reveal>
      ) : null}

      {grid}
    </section>
  );
}
