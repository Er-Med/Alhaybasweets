"use client";

import { useLocale } from "@/lib/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { ParallaxImage } from "@/components/motion/ParallaxImage";

export function StoryEssay() {
  const { copy } = useLocale();

  return (
    <>
      <PageHero eyebrow={copy.pages.storyEyebrow} title={copy.pages.storyTitle} lede={copy.story.body} />
      <div className="px-[var(--gutter)] pb-24">
        <ParallaxImage
          src="/images/gift-box.jpg"
          alt={copy.products.oriental.alt}
          sizes="100vw"
          className="h-[62vw] min-h-[280px] lg:h-[72vh]"
        />
        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <p
            lang="ar"
            dir="rtl"
            className="arabic-display text-[clamp(1.8rem,3vw,2.8rem)] text-pistachio lg:col-span-5"
          >
            {copy.story.arabic.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <div className="space-y-6 lg:col-span-6 lg:col-start-7">
            {copy.story.more.map((paragraph) => (
              <p key={paragraph} className="body-lg max-w-[42ch]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-16 grid gap-4 lg:grid-cols-12">
          <ParallaxImage
            src="/images/kiosk.jpg"
            alt={copy.heritage.fig}
            sizes="(max-width: 1024px) 100vw, 34vw"
            className="h-[70vw] min-h-[240px] lg:col-span-4 lg:h-[62vh]"
            imageClass="object-cover object-center"
          />
          <ParallaxImage
            src="/images/kiosk.jpg"
            alt={copy.gallery.alts[2]}
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="h-[64vw] min-h-[240px] lg:col-span-7 lg:col-start-6 lg:mt-16 lg:h-[68vh]"
            imageClass="object-cover object-center"
          />
        </div>
      </div>
    </>
  );
}
