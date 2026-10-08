"use client";

import { LocaleProvider, useLocale } from "@/lib/i18n";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { PageTransition } from "@/components/layout/PageTransition";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/motion/CustomCursor";

function Shell({ children }: { children: React.ReactNode }) {
  const { copy } = useLocale();

  return (
    <SmoothScroll>
      <PageTransition>
        <a href="#content" className="skip">
          {copy.nav.skip}
        </a>
        <Navbar />
        <main id="content">{children}</main>
        <Footer />
        <CustomCursor />
      </PageTransition>
    </SmoothScroll>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <Shell>{children}</Shell>
    </LocaleProvider>
  );
}
