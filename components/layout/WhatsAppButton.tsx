"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/lib/i18n";
import { WHATSAPP } from "@/lib/site";
import { cn } from "@/lib/cn";

export function WhatsAppButton() {
  const { copy } = useLocale();
  const [raised, setRaised] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const footer = document.getElementById("site-footer");
    if (!hero || !footer) return;

    let pastHero = false;
    let footerVisible = false;
    const update = () => setRaised(pastHero && !footerVisible);

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
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={copy.hero.order}
      className={cn(
        "wa-fab group fixed end-5 z-40 flex size-14 items-center justify-center rounded-full border border-gold/60 bg-espresso text-gold shadow-[0_12px_32px_rgba(20,16,12,0.28)] transition-[color,bottom] duration-300 ease-[var(--ease)] hover:text-gold-light",
        raised
          ? "bottom-[max(6rem,calc(env(safe-area-inset-bottom)+6rem))] lg:bottom-[max(1.5rem,env(safe-area-inset-bottom))]"
          : "bottom-[max(1.5rem,env(safe-area-inset-bottom))]",
      )}
    >
      <span className="wa-fab-ring" aria-hidden="true" />
      <span className="caption pointer-events-none absolute end-full me-3 hidden whitespace-nowrap border border-gold/40 bg-espresso px-3 py-2 text-gold opacity-0 transition-opacity duration-300 ease-[var(--ease)] group-hover:opacity-100 [@media(hover:hover)]:inline-flex">
        {copy.hero.orderShort}
      </span>
      <svg viewBox="0 0 24 24" aria-hidden="true" className="wa-fab-icon relative size-7">
        <path
          fill="currentColor"
          d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.76 13.89c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.41-.14-.95-.3-1.63-.6-2.87-1.24-4.74-4.13-4.88-4.32-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07 1-2.35.24-.26.64-.38.85-.38.21 0 .42 0 .6.01.19.01.45-.07.7.54.26.63.88 2.16.96 2.32.08.16.13.35.03.56-.1.21-.16.34-.31.53-.16.18-.33.41-.47.55-.16.16-.32.33-.14.64.19.32.83 1.37 1.78 2.22 1.23 1.09 2.26 1.43 2.58 1.59.32.16.51.13.7-.08.19-.21.8-.93 1.01-1.25.21-.32.43-.26.72-.16.29.1 1.84.87 2.16 1.03.32.16.53.24.61.37.08.13.08.76-.16 1.44Z"
        />
      </svg>
    </a>
  );
}
