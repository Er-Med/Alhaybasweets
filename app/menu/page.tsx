import type { Metadata } from "next";
import { MenuPage } from "@/components/sections/MenuPage";

export const metadata: Metadata = {
  title: "Menu",
  description: "The Al Hayba menu. Baklava boxes, pistachio, Dubai chocolate, maamoul, and sweets, priced in Casablanca.",
};

export default function MenuRoute() {
  return <MenuPage />;
}
