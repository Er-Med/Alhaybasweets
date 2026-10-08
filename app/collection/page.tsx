import type { Metadata } from "next";
import { CollectionIndex } from "@/components/sections/CollectionIndex";

export const metadata: Metadata = {
  title: "Collection",
  description: "The Al Hayba selection: baklava, pistachio, Dubai chocolate, maamoul, and oriental sweets.",
};

export default function CollectionPage() {
  return <CollectionIndex />;
}
