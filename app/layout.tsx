import type { Metadata } from "next";
import { Allura, Amiri, Aref_Ruqaa, Cormorant_Garamond, Figtree } from "next/font/google";
import { Providers } from "@/components/providers/Providers";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const sans = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

/** The Latin wordmark under the calligraphy is a formal script. */
const script = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

const arabic = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

const arabicDisplay = Aref_Ruqaa({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-ruqaa",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alhaybasweets.com"),
  title: {
    default: "Al Hayba Sweets — Un goût à retenir.",
    template: "%s — Al Hayba Sweets",
  },
  description:
    "Al Hayba Sweets. Pâtisseries levantines et orientales, faites à Casablanca. Baklava, kunafa, maamoul et coffrets, préparés à la main.",
  openGraph: {
    title: "Al Hayba Sweets",
    description: "Recettes levantines, achevées par des mains marocaines. Casablanca.",
    locale: "fr_MA",
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
      lang="fr"
      dir="ltr"
      className={`${serif.variable} ${sans.variable} ${script.variable} ${arabic.variable} ${arabicDisplay.variable} h-full antialiased`}
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
