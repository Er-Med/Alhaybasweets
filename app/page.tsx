import type { Metadata } from "next";
import { Hero } from "@/components/hero/Hero";
import { BrandStory } from "@/components/sections/BrandStory";
import { Collection } from "@/components/sections/Collection";
import { BoxExperience } from "@/components/sections/BoxExperience";
import { Origin } from "@/components/sections/Origin";
import { Testimonials } from "@/components/sections/Testimonials";
import { VisitUs } from "@/components/sections/VisitUs";

export const metadata: Metadata = {
  title: { absolute: "Al Hayba Sweets — Un goût à retenir." },
  description:
    "Pâtisseries orientales du Levant, faites à la main à Casablanca. Baklava, kunafa, pistache et coffrets cadeaux chez Al Hayba.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStory />
      <Collection />
      <BoxExperience />
      <Origin />
      <Testimonials />
      <VisitUs />
    </>
  );
}
