import type { Metadata } from "next";
import { MenuPage } from "@/components/sections/MenuPage";

export const metadata: Metadata = {
  title: "La carte",
  description: "La carte Al Hayba. Coffrets de baklava, pistache, chocolat Dubaï, maamoul et douceurs, à Casablanca.",
};

export default function MenuRoute() {
  return <MenuPage />;
}
