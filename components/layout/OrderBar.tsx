"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/lib/i18n";
import { WHATSAPP } from "@/lib/site";
import { cn } from "@/lib/cn";

export function OrderBar() {
  const { copy } = useLocale();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const footer = document.getElementById("site-footer");
    if (!hero || !footer) return;

    let pastHero = false;
    let footerVisible = false;
    const update = () => setShow(pastHero && !footerVisible);

    const heroObserver = new IntersectionObserver(([entry]) => {
      pastHero = !entry.isIntersecting;
      update();
    });
    const footerObserver = new IntersectionObserver(([entry]) => {
      footerVisible = entry.isIntersecting;
      update();
    });

    heroObserver.observe(hero);
    footerObserver.observe(footer);
    return () => {
      heroObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-gold/40 bg-espresso/95 px-[var(--gutter)] py-3 backdrop-blur transition-transform duration-300 lg:hidden",
        show ? "translate-y-0" : "pointer-events-none translate-y-full",
      )}
    >
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="caption flex items-center justify-center border border-gold/60 px-4 py-3 text-gold"
      >
        {copy.hero.order}
      </a>
    </div>
  );
}
