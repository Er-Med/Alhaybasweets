"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/lib/i18n";
import { getLenis } from "@/lib/scroll";
import { WHATSAPP } from "@/lib/site";
import { cn } from "@/lib/cn";

const links = [
  { href: "/#collection", key: "collection" },
  { href: "/menu", key: "carte" },
  { href: "/#story", key: "story" },
  { href: "/#gallery", key: "gallery" },
  { href: "/#visit", key: "contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const { locale, setLocale, copy } = useLocale();
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const home = pathname === "/";

  useEffect(() => {
    if (!open) return;
    const lenis = getLenis();
    lenis?.stop();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      lenis?.start();
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        data-hero={home ? "nav" : undefined}
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b border-chocolate/10 bg-ivory text-chocolate transition-colors duration-300",
          home && "hero-await",
        )}
      >
        <div className="flex items-center justify-between gap-4 px-[var(--gutter)] py-5">
          <div className="flex min-w-0 items-center gap-6 lg:gap-8">
            <Link href="/" className="shrink-0 leading-none" aria-label="Al Hayba Sweets">
              <span className="block whitespace-nowrap font-serif text-[1.15rem] tracking-[0.14em] lg:text-[1.28rem]">
                AL HAYBA
              </span>
              <span className="mt-1 block caption text-[0.56rem]">Sweets</span>
            </Link>
            <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Primary">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="caption whitespace-nowrap text-[0.6rem] opacity-70 transition-opacity duration-300 hover:opacity-100"
                >
                  {copy.nav[link.key]}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex shrink-0 items-center gap-5">
            <button
              type="button"
              className="caption text-[0.62rem]"
              aria-label={copy.nav.language}
              onClick={() => setLocale(locale === "en" ? "ar" : "en")}
            >
              {locale === "en" ? "AR" : "EN"}
            </button>
            <button
              type="button"
              className="caption text-[0.62rem]"
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen(true)}
            >
              {copy.nav.menu}
            </button>
          </div>
        </div>
      </header>

      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label={copy.nav.menu}
        hidden={!open}
        className={cn(
          "tone-dark fixed inset-0 z-[70] flex flex-col bg-espresso text-ivory",
          !open && "pointer-events-none",
        )}
      >
        <div className="flex items-center justify-between px-[var(--gutter)] py-5">
          <p className="font-serif text-[1.35rem] tracking-[0.16em]">AL HAYBA</p>
          <button
            type="button"
            className="caption"
            ref={closeRef}
            onClick={() => setOpen(false)}
          >
            {copy.nav.close}
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-center px-[var(--gutter)]" aria-label="Menu">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-6 border-t border-ivory/15 py-5"
            >
              <span className="caption text-gold">0{index + 1}</span>
              <span className="font-serif text-[clamp(2.2rem,5vw,4.2rem)] leading-none">
                {copy.nav[link.key]}
              </span>
            </a>
          ))}
          <div className="border-t border-ivory/15 pt-8">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="caption text-gold"
            >
              {copy.hero.order}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
