"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/lib/i18n";
import { getLenis } from "@/lib/scroll";
import { WHATSAPP } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/ui/Logo";

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
  const headerRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const home = pathname === "/";
  const [overDark, setOverDark] = useState(home);
  const [scrolled, setScrolled] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 8);
      setCompact(window.scrollY > 96);
      const line = (headerRef.current?.offsetHeight ?? 0) / 2;
      const grounds = document.querySelectorAll<HTMLElement>("main section.tone-dark, footer.tone-dark");
      setOverDark(
        Array.from(grounds).some((el) => {
          const rect = el.getBoundingClientRect();
          return rect.top <= line && rect.bottom > line;
        }),
      );
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);

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
        ref={headerRef}
        data-hero={home ? "nav" : undefined}
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,color,backdrop-filter] duration-500 ease-[var(--ease)]",
          overDark
            ? cn(
                "tone-dark border-ivory/10 text-ivory",
                scrolled ? "bg-espresso/75 backdrop-blur-xl" : "bg-transparent",
              )
            : "border-chocolate/10 bg-ivory/95 text-chocolate backdrop-blur-xl",
          home && "hero-await",
        )}
      >
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#14100C]/70 to-transparent transition-opacity duration-500",
            overDark && !scrolled ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          ref={progressRef}
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-gold rtl:origin-right"
        />
        <div
          className={cn(
            "flex items-center justify-between gap-3 px-[var(--gutter)] pt-[max(0.75rem,env(safe-area-inset-top))] pb-3 transition-[padding] duration-500 ease-[var(--ease)] lg:gap-4",
            compact ? "lg:py-3" : "lg:py-5",
          )}
        >
          <div className="flex min-w-0 items-center gap-6 lg:gap-8">
            <Link href="/" className="shrink-0 leading-none" aria-label="Al Hayba Sweets">
              <Logo compact={compact} className={overDark ? "text-ivory" : undefined} />
            </Link>
            <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Primary">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "nav-link caption whitespace-nowrap text-[0.6rem] transition-[color,opacity] duration-300",
                    overDark ? "text-ivory/70 hover:text-gold" : "opacity-70 hover:opacity-100",
                  )}
                >
                  {copy.nav[link.key]}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex shrink-0 items-center gap-5">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "caption inline-flex min-h-11 items-center border px-3 text-[0.58rem] whitespace-nowrap transition-colors duration-300 lg:px-4 lg:text-[0.6rem]",
                overDark
                  ? "border-gold/60 text-gold hover:bg-gold hover:text-espresso"
                  : "border-chocolate/25 hover:border-chocolate hover:bg-chocolate hover:text-ivory",
              )}
            >
              <span className="lg:hidden">{copy.hero.orderShort}</span>
              <span className="hidden lg:inline">{copy.hero.order}</span>
            </a>
            <button
              type="button"
              className={cn(
                "caption inline-flex h-11 min-w-11 items-center justify-center text-[0.62rem] transition-colors duration-300",
                overDark && "hover:text-gold",
              )}
              aria-label={copy.nav.language}
              onClick={() => setLocale(locale === "en" ? "ar" : "en")}
            >
              {locale === "en" ? "AR" : "EN"}
            </button>
            <button
              type="button"
              className={cn(
                "caption group inline-flex h-11 w-11 items-center justify-center text-[0.62rem] transition-colors duration-300",
                overDark && "hover:text-gold",
              )}
              aria-label={copy.nav.menu}
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen(true)}
            >
              <span aria-hidden className="flex w-5 flex-col items-end gap-[5px]">
                <span className="h-px w-5 bg-current" />
                <span className="h-px w-3.5 bg-current transition-[width] duration-300 group-hover:w-5" />
              </span>
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
          <Link
            href="/"
            className="shrink-0 leading-none"
            aria-label="Al Hayba Sweets"
            onClick={() => setOpen(false)}
          >
            <Logo tone="dark" />
          </Link>
          <button
            type="button"
            className="caption"
            ref={closeRef}
            onClick={() => setOpen(false)}
          >
            {copy.nav.close}
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-center px-[var(--gutter)]" aria-label={copy.nav.menu}>
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
