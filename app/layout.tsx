import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Noto_Kufi_Arabic } from "next/font/google";
import { Providers } from "@/components/providers/Providers";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

const arabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
  variable: "--font-kufi",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alhaybasweets.com"),
  title: {
    default: "Al Hayba Sweets — A taste worth remembering.",
    template: "%s — Al Hayba Sweets",
  },
  description:
    "Al Hayba Sweets in Casablanca. Traditional Moroccan craftsmanship, reimagined. Baklava, pistachio, and gift boxes made by hand.",
  openGraph: {
    title: "Al Hayba Sweets",
    description: "Traditional craftsmanship, reimagined. Casablanca.",
    locale: "en",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: "Al Hayba Sweets",
  telephone: "+212522980637",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4 Rue El Kadi Lass",
    addressLocality: "Casablanca",
    addressCountry: "MA",
  },
  location: [
    {
      "@type": "Place",
      name: "Al Hayba Sweets Maarif",
      telephone: "+212522980637",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4 Rue El Kadi Lass",
        addressLocality: "Casablanca",
        addressCountry: "MA",
      },
    },
    {
      "@type": "Place",
      name: "Al Hayba Sweets Casa Port",
      telephone: "+212522312037",
      address: { "@type": "PostalAddress", addressLocality: "Casablanca", addressCountry: "MA" },
    },
    {
      "@type": "Place",
      name: "Al Hayba Sweets Casa Voyageurs",
      telephone: "+212722223643",
      address: { "@type": "PostalAddress", addressLocality: "Casablanca", addressCountry: "MA" },
    },
    {
      "@type": "Place",
      name: "Al Hayba Sweets Rabat Agdal",
      telephone: "+212704571946",
      address: { "@type": "PostalAddress", addressLocality: "Rabat", addressCountry: "MA" },
    },
  ],
  sameAs: ["https://instagram.com/alhaybasweets"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${serif.variable} ${sans.variable} ${arabic.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full font-sans" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
