"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/lib/i18n";
import { menuSectionForProduct } from "@/lib/menu";
import { featuredOrder, productMedia } from "@/lib/site";
import { gsap, prefersReducedMotion, registerGsap, ScrollTrigger } from "@/lib/gsap";
import { getLenis } from "@/lib/scroll";
import { Photo } from "@/components/ui/Photo";
import { TextLink } from "@/components/ui/TextLink";
import { cn } from "@/lib/cn";

export function FeaturedProduct() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const { copy } = useLocale();

  useEffect(() => {
    const section = root.current;
    if (!section || prefersReducedMotion()) return;
    registerGsap();

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const trigger = ScrollTrigger.create({
        id: "featured",
        trigger: section,
        start: "top top",
        end: "+=280%",
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const next = Math.min(
            featuredOrder.length - 1,
            Math.floor(self.progress * featuredOrder.length * 0.999),
          );
          if (next !== activeRef.current) {
            activeRef.current = next;
            setActive(next);
          }
        },
      });
      return () => trigger.kill();
    });

    return () => mm.revert();
  }, []);

  const go = (index: number) => {
    const trigger = ScrollTrigger.getById("featured");
    if (!trigger) {
      setActive(index);
      activeRef.current = index;
      return;
    }
    const span = trigger.end - trigger.start;
    const target = trigger.start + ((index + 0.15) / featuredOrder.length) * span;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(target);
    else window.scrollTo({ top: target });
  };

  return (
    <section ref={root} id="featured" className="relative z-10 bg-ivory">
      <div className="lg:hidden">
        {featuredOrder.map((id) => {
          const product = copy.products[id];
          const media = productMedia[id];
          return (
            <article key={id} className="border-t border-chocolate/10">
              <div className="relative h-[72vw] min-h-[260px]" data-cursor="view">
                <Photo
                  src={media.featured ?? media.image}
                  alt={product.alt}
                  sizes="100vw"
                  className={media.imageClass}
                />
              </div>
              <div className="px-[var(--gutter)] py-10">
                <p className="caption text-pistachio">{product.index}</p>
                <h3 className="heading-xl mt-3">{product.short}</h3>
                <p className="heading-lg mt-4 italic">{product.line1}</p>
                <p className="heading-lg italic">{product.line2}</p>
                <p className="body-lg mt-5 max-w-[38ch] text-muted">{product.detail}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="hidden h-[100svh] lg:grid lg:grid-cols-2">
        <div className="relative h-full overflow-hidden">
          {featuredOrder.map((id, index) => {
            const media = productMedia[id];
            return (
              <div
                key={id}
                className={cn(
                  "absolute inset-0 transition-opacity duration-700",
                  index === active ? "opacity-100" : "opacity-0",
                )}
              >
                <Photo
                  src={media.featured ?? media.image}
                  alt={copy.products[id].alt}
                  sizes="50vw"
                  priority={index === 0}
                  className={media.imageClass}
                />
              </div>
            );
          })}
        </div>

        <div className="flex h-full flex-col justify-between px-[clamp(2rem,4vw,4.5rem)] py-28">
          <p className="caption text-pistachio">{copy.featured.kicker}</p>
          <div className="relative min-h-[320px]">
            {featuredOrder.map((id, index) => {
              const product = copy.products[id];
              return (
                <div
                  key={id}
                  className={cn(
                    "transition-all duration-700",
                    index === active
                      ? "relative opacity-100"
                      : "pointer-events-none absolute inset-0 opacity-0",
                  )}
                  aria-hidden={index !== active}
                >
                  <h2 className="display-lg">{product.short}</h2>
                  <p className="heading-lg mt-6 italic text-chocolate">
                    {product.line1}
                    <span className="block">{product.line2}</span>
                  </p>
                  <p className="body-lg mt-6 max-w-[34ch] text-muted">{product.detail}</p>
                  <TextLink href={`/menu#${menuSectionForProduct[id]}`} className="mt-8 text-chocolate">
                    {copy.featured.discover}
                  </TextLink>
                </div>
              );
            })}
          </div>
          <ol className="space-y-2">
            {featuredOrder.map((id, index) => {
              const product = copy.products[id];
              const on = index === active;
              return (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => go(index)}
                    className={cn(
                      "flex items-center gap-4 py-1 text-start caption transition-opacity",
                      on ? "text-chocolate opacity-100" : "text-muted opacity-60 hover:opacity-100",
                    )}
                    aria-current={on ? "true" : undefined}
                  >
                    <span className={cn("h-px w-6 bg-current", on && "bg-gold text-gold")} />
                    <span className="text-gold">{product.index}</span>
                    <span className="tracking-[0.18em]">{product.short}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
