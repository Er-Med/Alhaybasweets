"use client";

import { useLocale } from "@/lib/i18n";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Reveal } from "@/components/motion/Reveal";

export function Heritage() {
  const { copy } = useLocale();

  return (
    <section id="heritage" className="overflow-hidden bg-ivory px-[var(--gutter)] py-24 lg:py-32">
      <div className="grid items-end gap-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="caption text-pistachio">{copy.heritage.kicker}</p>
          <h2 className="display-lg mt-5">
            <span className="block">{copy.heritage.titleLead}</span>
            <span className="block italic">{copy.heritage.titleEm}</span>
          </h2>
        </Reveal>
        <div className="lg:col-span-6 lg:col-start-7">
          <ParallaxImage
            src="/images/kiosk.jpg"
            alt={copy.gallery.alts[2]}
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="h-[68vw] min-h-[320px] lg:h-[74vh]"
            speed={8}
            imageClass="object-cover object-center"
          />
          <p className="caption mt-3 text-muted">{copy.heritage.fig}</p>
        </div>
      </div>

      <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-12 lg:items-start">
        <ParallaxImage
          src="/images/pistachio-slice.jpg"
          alt={copy.gallery.alts[1]}
          sizes="(max-width: 1024px) 100vw, 24vw"
          className="h-[56vw] min-h-[220px] lg:col-span-3 lg:mt-16 lg:h-[42vh]"
          speed={12}
        />
        <Reveal className="lg:col-span-4 lg:px-2 lg:pt-8">
          <p className="body-lg max-w-[36ch]">{copy.heritage.body}</p>
        </Reveal>
        <ParallaxImage
          src="/images/baklava-tray.jpg"
          alt={copy.products.baklava.alt}
          sizes="(max-width: 1024px) 100vw, 34vw"
          className="h-[70vw] min-h-[260px] lg:col-span-4 lg:col-start-9 lg:-mt-28 lg:h-[52vh]"
          imageClass="object-cover object-center"
          speed={6}
        />
      </div>

      <ParallaxImage
        src="/images/counter.jpg"
        alt={copy.gallery.alts[4]}
        sizes="(max-width: 1024px) 100vw, 72vw"
        className="mt-8 h-[52vw] min-h-[220px] lg:mt-16 lg:h-[48vh] lg:w-[74%]"
        imageClass="object-cover object-[center_90%]"
        speed={4}
      />
    </section>
  );
}
