"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n";
import { menuCategories, YUMLO, type MenuItemId } from "@/lib/menu";
import { WHATSAPP } from "@/lib/site";
import { PageHero } from "@/components/layout/PageHero";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { ImageViewer, type ViewerShot } from "@/components/ui/ImageViewer";
import { Photo } from "@/components/ui/Photo";
import { TextLink } from "@/components/ui/TextLink";

export function MenuPage() {
  const { copy } = useLocale();
  const [openId, setOpenId] = useState<MenuItemId | null>(null);

  let shot: ViewerShot | null = null;
  if (openId) {
    for (const category of menuCategories) {
      const item = category.items.find((entry) => entry.id === openId);
      if (!item) continue;
      const text = copy.menu.items[item.id];
      shot = {
        src: item.image,
        alt: text.name,
        title: text.name,
        detail: text.line,
        meta: `${item.price} ${copy.menu.currency}`,
      };
      break;
    }
  }

  return (
    <>
      <PageHero eyebrow={copy.menu.kicker} title={copy.menu.title} lede={copy.menu.lede} />
      <div className="px-[var(--gutter)] pb-8">
        <div className="relative h-[62vw] min-h-[280px] lg:h-[68vh]" data-cursor="view">
          <Photo
            src="/images/gift-box.jpg"
            alt={copy.menu.imageAlt}
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      <div className="px-[var(--gutter)] pb-24">
        {menuCategories.map((category) => {
          const heading = copy.menu.categories[category.id];
          return (
            <section key={category.id} id={category.id} className="border-t border-chocolate/15 pt-16 pb-8 lg:pt-24">
              <p className="caption text-gold">{heading.kicker}</p>
              <h2 className="heading-xl mt-4 max-w-[14ch]">{heading.title}</h2>
              <ul className="mt-12 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => {
                  const text = copy.menu.items[item.id];
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        className="relative block aspect-[4/5] w-full overflow-hidden p-0"
                        data-cursor="view"
                        aria-label={text.name}
                        onClick={() => setOpenId(item.id)}
                      >
                        <Photo
                          src={item.image}
                          alt={text.name}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover object-center"
                        />
                      </button>
                      <div className="mt-5 flex items-baseline justify-between gap-4">
                        <h3 className="font-serif text-[clamp(1.45rem,2vw,1.85rem)] leading-none">{text.name}</h3>
                        <p className="caption shrink-0 text-muted">
                          {item.price} {copy.menu.currency}
                        </p>
                      </div>
                      <p className="body-md mt-3 max-w-[32ch] text-muted">{text.line}</p>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}

        <div className="mt-8 flex flex-wrap items-center gap-8 border-t border-chocolate/15 pt-12">
          <MagneticButton href={WHATSAPP} external>
            {copy.hero.order}
          </MagneticButton>
          <TextLink href={YUMLO} external className="text-chocolate">
            {copy.menu.delivery}
          </TextLink>
        </div>
      </div>
      <ImageViewer item={shot} onClose={() => setOpenId(null)} closeLabel={copy.nav.close} />
    </>
  );
}
