"use client";

import { useLocale } from "@/lib/i18n";
import { PageHero } from "@/components/layout/PageHero";
import { Gallery } from "@/components/sections/Gallery";

export function GalleryPage() {
  const { copy } = useLocale();

  return (
    <>
      <PageHero
        eyebrow={copy.pages.galleryEyebrow}
        title={copy.pages.galleryTitle}
        lede={copy.gallery.intro}
      />
      <Gallery intro={false} />
    </>
  );
}
