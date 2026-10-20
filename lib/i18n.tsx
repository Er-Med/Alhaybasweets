"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import { copy, type Locale } from "@/lib/copy";
import { registerGsap, ScrollTrigger } from "@/lib/gsap";

type LocaleValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  copy: (typeof copy)["fr"];
};

const listeners = new Set<() => void>();
let currentLocale: Locale = "fr";

if (typeof window !== "undefined") {
  const stored = window.localStorage.getItem("alhayba-lang");
  if (stored === "ar" || stored === "fr") currentLocale = stored;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getLocaleSnapshot() {
  return currentLocale;
}

function getServerLocale(): Locale {
  return "fr";
}

function updateLocale(next: Locale) {
  currentLocale = next;
  window.localStorage.setItem("alhayba-lang", next);
  listeners.forEach((listener) => listener());
}

const LocaleContext = createContext<LocaleValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getLocaleSnapshot, getServerLocale);

  useEffect(() => {
    document.documentElement.lang = locale === "ar" ? "ar" : "fr";
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    registerGsap();
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 120);
    return () => window.clearTimeout(id);
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale: updateLocale, copy: copy[locale] }),
    [locale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const value = useContext(LocaleContext);
  if (!value) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return value;
}
