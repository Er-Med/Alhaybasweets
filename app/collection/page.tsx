import type { Metadata } from "next";
import { CollectionIndex } from "@/components/sections/CollectionIndex";

export const metadata: Metadata = {
  title: "Collection",
  description: "The Al Hayba selection of Levantine sweets: baklava, kunafa, basbousa, pistachio, Dubai chocolate, and maamoul.",
};

export default function CollectionPage() {
  return <CollectionIndex />;
}
