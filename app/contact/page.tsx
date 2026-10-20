import type { Metadata } from "next";
import { ContactPage } from "@/components/sections/ContactPage";

export const metadata: Metadata = {
  title: "Visite",
  description: "Rendez visite à Al Hayba Sweets à Casablanca et à Rabat, ou commandez sur WhatsApp.",
};

export default function ContactRoute() {
  return <ContactPage />;
}
