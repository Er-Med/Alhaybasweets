import type { Metadata } from "next";
import { StoryEssay } from "@/components/sections/StoryEssay";

export const metadata: Metadata = {
  title: "Our Story",
  description: "The story of Al Hayba Sweets, a Casablanca house of traditional Moroccan confectionery.",
};

export default function StoryPage() {
  return <StoryEssay />;
}
