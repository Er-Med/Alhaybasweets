import type { Metadata } from "next";
import { ContactPage } from "@/components/sections/ContactPage";

export const metadata: Metadata = {
  title: "Visit",
  description: "Visit Al Hayba Sweets in Casablanca and Rabat, or order on WhatsApp.",
};

export default function ContactRoute() {
  return <ContactPage />;
}
