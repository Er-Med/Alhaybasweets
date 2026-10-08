"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "@/lib/i18n";
import { menuSectionForProduct } from "@/lib/menu";
import { productMedia, productOrder } from "@/lib/site";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/gsap";
import { Photo } from "@/components/ui/Photo";

export function Collection() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const { copy } = useLocale();

  useEffect(() => {
    const root = section.current;
    const row = track.current;
    if (!root || !row) return;
    if (prefersReducedMotion()) return;
    registerGsap();

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const tween = gsap.to(row, {
        x: () => {
          const parent = row.parentElement;
          if (!parent) return 0;
          const distance = Math.max(0, row.scrollWidth - parent.clientWidth);
          return document.documentElement.dir === "rtl" ? distance : -distance;
        },
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: () => {
            const parent = row.parentElement;
            const distance = parent ? Math.max(0, row.scrollWidth - parent.clientWidth) : 0;
            return `+=${distance}`;
          },
          pin: true,
          scrub: 0.75,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (bar.current) bar.current.style.transform = `scaleX(${self.progress})`;
          },
        },
      });
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="collection" ref={section} className="tone-dark relative z-10 bg-espresso text-ivory">
      <div className="flex min-h-[100svh] flex-col px-[var(--gutter)] pt-28 pb-8 lg:h-[100svh]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="caption text-gold">{copy.collection.kicker}</p>
            <h2 className="heading-xl mt-4">{copy.collection.title}</h2>
          </div>
          <p className="body-md max-w-[32ch] text-ivory/75">{copy.collection.intro}</p>
        </div>

        <div className="no-scrollbar mt-10 min-h-0 flex-1 snap-x snap-mandatory overflow-x-auto lg:snap-none lg:overflow-hidden">
          <div ref={track} className="flex h-full gap-6 pe-[var(--gutter)] lg:gap-8">
            {productOrder.map((id) => {
              const product = copy.products[id];
              const media = productMedia[id];
              return (
                <a
                  key={id}
                  href={`/menu#${menuSectionForProduct[id]}`}
                  data-cursor="view"
                  className="group flex w-[78vw] shrink-0 snap-start flex-col sm:w-[48vw] lg:w-[36vw]"
                >
                  <p className="caption text-gold">{product.index}</p>
                  <h3 className="title-shift mt-3 font-serif text-[clamp(1.8rem,2.6vw,2.7rem)] leading-none">
                    {product.name}
                  </h3>
                  <p className="body-md mt-3 mb-4 line-clamp-2 max-w-[32ch] text-ivory/72">{product.summary}</p>
                  <div className="relative mt-auto h-[46vh] min-h-[220px] overflow-hidden lg:h-[42vh]">
                    <Photo
                      src={media.image}
                      alt={product.alt}
                      sizes="(max-width: 1024px) 78vw, 36vw"
                      className={`media-zoom media-zoom-lg ${media.imageClass}`}
                    />
                    <div className="shade pointer-events-none absolute inset-0" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-6 hidden h-px bg-ivory/15 lg:block">
          <div ref={bar} className="h-px origin-left scale-x-0 bg-gold rtl:origin-right" />
        </div>
      </div>
    </section>
  );
}
