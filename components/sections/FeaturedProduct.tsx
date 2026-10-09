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
          const scaled = self.progress * featuredOrder.length * 0.999;
          const next = Math.min(featuredOrder.length - 1, Math.floor(scaled));
          section.style.setProperty("--item-progress", String(scaled - next));
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
                <p className="heading-lg mt-4">
                  <span className="script">{product.line1}</span>
                </p>
                <p className="heading-lg">
                  <span className="script">{product.line2}</span>
                </p>
                <p className="body-lg mt-5 max-w-[38ch] text-muted">{product.detail}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="hidden h-[100svh] lg:grid lg:grid-cols-2">
        <div className="relative h-full overflow-hidden bg-espresso">
          {featuredOrder.map((id, index) => {
            const media = productMedia[id];
            const shown = index <= active;
            return (
              <div
                key={id}
                className="absolute inset-0 overflow-hidden transition-[clip-path] duration-[1300ms] ease-[cubic-bezier(0.77,0,0.18,1)]"
                style={{ clipPath: shown ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)" }}
              >
                <div
                  className={cn(
                    "absolute inset-0 transition-transform duration-[1800ms] ease-[var(--ease)]",
                    index === active ? "scale-100" : "scale-[1.12]",
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
              </div>
            );
          })}
          <p className="caption pointer-events-none absolute bottom-8 start-8 z-10 text-ivory mix-blend-difference">
            {copy.products[featuredOrder[active]].index}
          </p>
        </div>

        <div className="flex h-full flex-col justify-between px-[clamp(2rem,4vw,4.5rem)] py-28">
          <div className="flex items-center justify-between">
            <p className="caption text-pistachio">{copy.featured.kicker}</p>
            <p className="caption tabular-nums text-muted">
              <span className="text-chocolate">{String(active + 1).padStart(2, "0")}</span>
              <span className="mx-2">/</span>
              {String(featuredOrder.length).padStart(2, "0")}
            </p>
          </div>
          <div className="relative min-h-[320px]">
            {featuredOrder.map((id, index) => {
              const product = copy.products[id];
              const on = index === active;
              return (
                <div
                  key={id}
                  className={cn(
                    "transition-[opacity,transform] duration-700 ease-[var(--ease)]",
                    on
                      ? "relative translate-y-0 opacity-100 delay-200"
                      : cn(
                          "pointer-events-none absolute inset-0 opacity-0",
                          index < active ? "-translate-y-8" : "translate-y-8",
                        ),
                  )}
                  aria-hidden={!on}
                >
                  <h2 className="display-lg">{product.short}</h2>
                  <p className="heading-lg mt-6 text-chocolate">
                    <span className="script">{product.line1}</span>
                    <span className="script block">{product.line2}</span>
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
                    <span className="relative h-px w-10 overflow-hidden bg-current/30">
                      <span
                        className={cn(
                          "absolute inset-0 origin-left bg-gold rtl:origin-right",
                          !on && "scale-x-0",
                        )}
                        style={on ? { transform: "scaleX(var(--item-progress, 1))" } : undefined}
                      />
                    </span>
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
