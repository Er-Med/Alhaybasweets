import type { Metadata } from "next";
import { Hero } from "@/components/hero/Hero";
import { BrandStory } from "@/components/sections/BrandStory";
import { Collection } from "@/components/sections/Collection";
import { BoxExperience } from "@/components/sections/BoxExperience";
import { Origin } from "@/components/sections/Origin";
import { Testimonials } from "@/components/sections/Testimonials";
import { VisitUs } from "@/components/sections/VisitUs";

export const metadata: Metadata = {
  title: { absolute: "Al Hayba Sweets — A taste worth remembering." },
  description:
    "Oriental sweets from the Levant, made by hand in Casablanca. Baklava, kunafa, pistachio, and gift boxes at Al Hayba.",
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
