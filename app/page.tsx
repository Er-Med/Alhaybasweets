import type { Metadata } from "next";
import { Hero } from "@/components/hero/Hero";
import { BrandStory } from "@/components/sections/BrandStory";
import { Collection } from "@/components/sections/Collection";
import { MenuTeaser } from "@/components/sections/MenuTeaser";
import { FeaturedProduct } from "@/components/sections/FeaturedProduct";
import { Heritage } from "@/components/sections/Heritage";
import { Gallery } from "@/components/sections/Gallery";
import { BoxExperience } from "@/components/sections/BoxExperience";
import { Instagram } from "@/components/sections/Instagram";
import { BrandStats } from "@/components/sections/BrandStats";
import { Testimonials } from "@/components/sections/Testimonials";
import { VisitUs } from "@/components/sections/VisitUs";

export const metadata: Metadata = {
  title: { absolute: "Al Hayba Sweets — A taste worth remembering." },
  description:
    "Traditional Moroccan sweets from Casablanca. Baklava, pistachio, and gift boxes made by hand at Al Hayba.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStory />
      <Collection />
      <MenuTeaser />
      <FeaturedProduct />
      <Heritage />
      <Gallery />
      <BoxExperience />
      <Instagram />
      <BrandStats />
      <Testimonials />
      <VisitUs />
    </>
  );
}
