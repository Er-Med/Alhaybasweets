import type { Metadata } from "next";
import { GalleryPage } from "@/components/sections/GalleryPage";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Photographies de la table Al Hayba, de la cuisine et de Casablanca.",
};

export default function GalleryRoute() {
  return <GalleryPage />;
}
