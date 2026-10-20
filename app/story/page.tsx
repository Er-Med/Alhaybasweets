import type { Metadata } from "next";
import { StoryEssay } from "@/components/sections/StoryEssay";

export const metadata: Metadata = {
  title: "Notre histoire",
  description: "L'histoire d'Al Hayba Sweets, une maison casablancaise de pâtisserie levantine, faite au Maroc.",
};

export default function StoryPage() {
  return <StoryEssay />;
}
