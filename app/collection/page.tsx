import type { Metadata } from "next";
import { CollectionIndex } from "@/components/sections/CollectionIndex";

export const metadata: Metadata = {
  title: "Collection",
  description: "La sélection Al Hayba de pâtisseries levantines : baklava, kunafa, basbousa, pistache, chocolat Dubaï et maamoul.",
};

export default function CollectionPage() {
  return <CollectionIndex />;
}
