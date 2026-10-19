"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { galleryMedia } from "@/lib/site";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { ImageViewer } from "@/components/ui/ImageViewer";
import { Line, Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

const frames: Record<(typeof galleryMedia)[number]["frame"], string> = {
  feature: "col-span-2 min-h-[280px] lg:col-span-2 lg:row-span-2 lg:min-h-0",
  small: "min-h-[200px] lg:min-h-0",
  portrait: "min-h-[300px] lg:col-start-4 lg:row-span-2 lg:row-start-1 lg:min-h-0",
  wide: "col-span-2 min-h-[220px] lg:min-h-0",
};

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
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:grid-rows-[minmax(180px,22vh)_minmax(200px,26vh)_minmax(180px,24vh)] lg:gap-4">
        {galleryMedia.map((item, index) => (
          <ParallaxImage
            key={item.src + item.frame + index}
            src={item.src}
            alt={copy.gallery.alts[index]}
            sizes={item.frame === "feature" || item.frame === "wide" ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 50vw, 25vw"}
            speed={item.speed}
            imageClass={item.imageClass}
            onOpen={() => setOpen(index)}
            className={cn(frames[item.frame], index === 1 && "lg:col-start-3 lg:row-start-1", index === 3 && "lg:col-start-3 lg:row-start-2", index === 4 && "lg:col-start-1 lg:row-start-3", index === 5 && "lg:col-start-3 lg:row-start-3")}
          />
        ))}
      </div>
      <ImageViewer item={shot} onClose={() => setOpen(null)} closeLabel={copy.nav.close} />
    </>
  );

  if (embedded) return grid;

  return (
    <section id="gallery" className={cn("bg-ivory px-[var(--gutter)]", intro ? "py-20 lg:py-28" : "pb-20 lg:pb-28")}>
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
