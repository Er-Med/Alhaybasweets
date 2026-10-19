"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "@/lib/i18n";
import { productMedia, productOrder, WHATSAPP } from "@/lib/site";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/gsap";
import { Photo } from "@/components/ui/Photo";
import { TextLink } from "@/components/ui/TextLink";
import { Line, Reveal } from "@/components/motion/Reveal";

export function Collection() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);
  const { copy } = useLocale();
  const total = productOrder.length;

  useEffect(() => {
    const root = section.current;
    const row = track.current;
    if (!root || !row) return;
    if (prefersReducedMotion()) return;
    registerGsap();

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const rtl = () => document.documentElement.dir === "rtl";
      const distance = () => {
        const parent = row.parentElement;
        return parent ? Math.max(0, row.scrollWidth - parent.clientWidth) : 0;
      };

      const tween = gsap.to(row, {
        x: () => (rtl() ? distance() : -distance()),
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.75,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (bar.current) bar.current.style.transform = `scaleX(${self.progress})`;
            if (count.current) {
              const current = Math.min(total, Math.floor(self.progress * (total - 1) + 1.5));
              count.current.textContent = String(current).padStart(2, "0");
            }
          },
        },
      });

      const cards = gsap.utils.toArray<HTMLElement>("[data-card]", row);
      const enter = gsap.timeline({
        scrollTrigger: { trigger: root, start: "top 70%", toggleActions: "play none none none" },
      });
      enter.fromTo(
        cards,
        { y: 80, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 1.2, stagger: 0.1, ease: "expo.out" },
      );

      gsap.utils.toArray<HTMLElement>("[data-card-media]", row).forEach((media) => {
        gsap.fromTo(
          media,
          { xPercent: () => (rtl() ? -7 : 7) },
          {
            xPercent: () => (rtl() ? 7 : -7),
            ease: "none",
            scrollTrigger: {
              trigger: media.parentElement,
              containerAnimation: tween,
              start: () => (rtl() ? "right left" : "left right"),
              end: () => (rtl() ? "left right" : "right left"),
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        );
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => mm.revert();
  }, [total]);

  return (
    <section id="collection" ref={section} className="tone-dark relative z-10 bg-espresso text-ivory">
      <div className="flex min-h-[100svh] flex-col px-[var(--gutter)] pt-28 pb-8 lg:h-[100svh]">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p data-reveal className="caption text-gold">
              {copy.collection.kicker}
            </p>
            <h2 className="heading-xl mt-4">
              <Line>{copy.collection.title}</Line>
            </h2>
          </div>
          <p data-reveal className="body-md max-w-[32ch] text-ivory/75">
            {copy.collection.intro}
          </p>
        </Reveal>

        <div className="no-scrollbar mt-10 min-h-0 flex-1 snap-x snap-mandatory overflow-x-auto lg:snap-none lg:overflow-hidden">
          <div ref={track} className="flex h-full gap-6 pe-[var(--gutter)] lg:gap-8">
            {productOrder.map((id) => {
              const product = copy.products[id];
              const media = productMedia[id];
              return (
                <article
                  key={id}
                  data-card
                  className="group flex w-[78vw] max-w-full shrink-0 snap-start flex-col sm:w-[48vw] lg:w-[34vw]"
                  style={{ maxWidth: Math.round(media.maxWidth / 1.2) }}
                >
                  <div className="relative h-[46vh] min-h-[220px] overflow-hidden lg:h-auto lg:min-h-0 lg:flex-1">
                    <div data-card-media className="absolute inset-y-0 -inset-x-[8%]">
                      <Photo
                        src={media.image}
                        alt={product.alt}
                        sizes="(max-width: 1024px) 78vw, 36vw"
                        className={`media-zoom media-zoom-lg ${media.imageClass}`}
                      />
                    </div>
                    <div className="shade pointer-events-none absolute inset-0" />
                    <span className="caption absolute top-4 start-4 text-ivory/90 mix-blend-difference">
                      {product.index}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-ivory/15 pt-5 pb-4">
                    <h3 className="title-shift font-serif text-[clamp(1.7rem,2.3vw,2.5rem)] leading-none">
                      {product.name}
                    </h3>
                    <span
                      aria-hidden
                      className="arrow-icon text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    >
                      →
                    </span>
                  </div>
                  <p className="mt-3 font-serif text-[clamp(1.35rem,2vw,1.85rem)] leading-tight text-ivory">
                    <span className="script block">{product.line1}</span>
                    <span className="script block">{product.line2}</span>
                  </p>
                  <p className="body-md mt-3 line-clamp-2 max-w-[34ch] text-ivory/70">{product.summary}</p>
                  <TextLink href={WHATSAPP} external className="mt-4 text-gold">
                    {copy.hero.order}
                  </TextLink>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          <TextLink href="/menu" className="text-ivory">
            {copy.hero.explore}
          </TextLink>
        </div>

        <div className="mt-6 hidden items-center gap-6 lg:flex">
          <p className="caption tabular-nums text-ivory/60">
            <span ref={count} className="text-gold">
              01
            </span>
            <span className="mx-2">/</span>
            {String(total).padStart(2, "0")}
          </p>
          <div className="h-px flex-1 bg-ivory/15">
            <div ref={bar} className="h-px origin-left scale-x-0 bg-gold rtl:origin-right" />
          </div>
        </div>
      </div>
    </section>
  );
}
