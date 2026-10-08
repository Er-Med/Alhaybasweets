"use client";

import { useLocale } from "@/lib/i18n";
import { productMedia, productOrder } from "@/lib/site";
import { PageHero } from "@/components/layout/PageHero";
import { Photo } from "@/components/ui/Photo";
import { cn } from "@/lib/cn";

export function CollectionIndex() {
  const { copy } = useLocale();

  return (
    <>
      <PageHero
        eyebrow={copy.pages.collectionEyebrow}
        title={copy.pages.collectionTitle}
        lede={copy.collection.intro}
      />
      <div className="px-[var(--gutter)] pb-24">
        {productOrder.map((id, index) => {
          const product = copy.products[id];
          const media = productMedia[id];
          const flip = index % 2 === 1;
          return (
            <article
              key={id}
              id={id}
              className="grid items-center gap-8 border-t border-chocolate/15 py-14 lg:grid-cols-12 lg:gap-12 lg:py-20"
            >
              <div className={cn("relative h-[72vw] min-h-[260px] lg:h-[68vh] lg:col-span-7", flip && "lg:order-2")} data-cursor="view">
                <Photo
                  src={media.featured ?? media.image}
                  alt={product.alt}
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className={media.imageClass}
                />
              </div>
              <div className={cn("lg:col-span-4", flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-9")}>
                <p className="caption text-gold">{product.index}</p>
                <h2 className="heading-xl mt-4">{product.name}</h2>
                <p className="heading-lg mt-5 italic">
                  {product.line1}
                  <span className="block">{product.line2}</span>
                </p>
                <p className="body-lg mt-6 text-muted">{product.detail}</p>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
