import type { Metadata } from "next";
import { GalleryPage } from "@/components/sections/GalleryPage";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photography from the Al Hayba table, kitchen, and Casablanca.",
};

export default function GalleryRoute() {
  return <GalleryPage />;
}
