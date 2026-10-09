"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "@/lib/i18n";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/gsap";
import { Line, Reveal } from "@/components/motion/Reveal";

function parse(value: string) {
  const match = value.match(/^(\D*)([\d.]+)(.*)$/);
  if (!match) return null;
  const [, prefix, number, suffix] = match;
  const decimals = number.split(".")[1]?.length ?? 0;
  return { prefix, target: Number(number), suffix, decimals };
}

export function BrandStats() {
  const { copy } = useLocale();
  const list = useRef<HTMLDListElement>(null);

  useEffect(() => {
    const root = list.current;
    if (!root || prefersReducedMotion()) return;
    registerGsap();

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-count]", root).forEach((el, index) => {
        const parsed = parse(el.dataset.count ?? "");
        if (!parsed) return;
        const state = { n: 0 };
        const paint = () => {
          el.textContent = `${parsed.prefix}${state.n.toFixed(parsed.decimals)}${parsed.suffix}`;
        };
        paint();
        gsap.to(state, {
          n: parsed.target,
          duration: 2.2,
          delay: index * 0.15,
          ease: "power3.out",
          onUpdate: paint,
          onComplete: () => {
            el.textContent = el.dataset.count ?? "";
          },
          scrollTrigger: { trigger: root, start: "top 85%", toggleActions: "play none none none" },
        });
      });

      gsap.fromTo(
        "[data-rule]",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.6,
          ease: "expo.inOut",
          scrollTrigger: { trigger: root, start: "top 85%", toggleActions: "play none none none" },
        },
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-ivory px-[var(--gutter)] py-20 lg:py-28">
      <div className="grid items-end gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p data-reveal className="caption text-pistachio">
            {copy.stats.kicker}
          </p>
          <h2 className="display-lg mt-4">
            <Line>{copy.stats.titleLead}</Line>
            <Line className="italic">{copy.stats.titleEm}</Line>
          </h2>
        </Reveal>
        <dl ref={list} className="relative grid grid-cols-1 gap-8 pt-8 sm:grid-cols-3 lg:col-span-8">
          <span
            aria-hidden
            data-rule
            className="absolute inset-x-0 top-0 h-px origin-left bg-chocolate/15 rtl:origin-right"
          />
          {copy.stats.items.map((item) => (
            <div key={item.label} className="flex flex-col-reverse justify-end">
              <dt className="caption mt-4 max-w-[14ch] text-muted">{item.label}</dt>
              <dd
                data-count={item.value}
                className="font-serif text-[clamp(3rem,5vw,4.6rem)] leading-none tabular-nums"
              >
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
