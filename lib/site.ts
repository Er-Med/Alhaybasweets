export const WHATSAPP =
  "https://wa.me/212522980637?text=Hello%20Al%20Hayba%2C%20I%20would%20like%20to%20order.";
export const INSTAGRAM = "https://instagram.com/alhaybasweets";

export const locations = [
  {
    id: "maarif",
    phone: "05 22 98 06 37",
    phoneHref: "tel:+212522980637",
    address: "4 Rue El Kadi Lass",
    maps: "https://www.google.com/maps/search/?api=1&query=4+Rue+El+Kadi+Lass+Casablanca+Morocco",
    hours: "", // TODO: opening hours
  },
  {
    id: "casa-port",
    phone: "05 22 31 20 37",
    phoneHref: "tel:+212522312037",
    address: "", // TODO: street address
    maps: "", // TODO: Google Maps link
    hours: "", // TODO: opening hours
  },
  {
    id: "casa-voyageurs",
    phone: "07 22 22 36 43",
    phoneHref: "tel:+212722223643",
    address: "", // TODO: street address
    maps: "", // TODO: Google Maps link
    hours: "", // TODO: opening hours
  },
  {
    id: "rabat-agdal",
    phone: "07 04 57 19 46",
    phoneHref: "tel:+212704571946",
    address: "", // TODO: street address
    maps: "", // TODO: Google Maps link
    hours: "", // TODO: opening hours
  },
] as const;

export type Review = {
  name: string;
  stars: number;
  source: "Google";
  date: string;
  quote?: string;
};

// TODO: add real Google reviews (name, stars, source, date, and the original quote).
export const reviews: Review[] = [];

export type LocationId = (typeof locations)[number]["id"];

export const MAPS = locations[0].maps;
export const PHONE = locations[0].phone;
export const PHONE_HREF = locations[0].phoneHref;
export const ADDRESS = locations[0].address;

export const productOrder = [
  "baklava",
  "pistachio",
  "dubai",
  "maamoul",
  "oriental",
] as const;

export type ProductId = (typeof productOrder)[number];

export const productMedia: Record<
  ProductId,
  { image: string; maxWidth: number; imageClass: string }
> = {
  baklava: {
    image: "/images/baklava-tray.jpg",
    maxWidth: 720,
    imageClass: "object-cover object-center",
  },
  pistachio: {
    image: "/images/pistachio-slice.jpg",
    maxWidth: 720,
    imageClass: "object-cover object-center",
  },
  dubai: {
    image: "/images/dubai-bar.jpg",
    maxWidth: 540,
    imageClass: "object-cover object-center",
  },
  maamoul: {
    image: "/images/maamoul.jpg",
    maxWidth: 3376,
    imageClass: "object-cover object-center",
  },
  oriental: {
    image: "/images/cream-baklava.jpg",
    maxWidth: 1166,
    imageClass: "object-cover object-center",
  },
};

export const galleryMedia = [
  { src: "/images/kiosk.jpg", maxWidth: 720, imageClass: "object-cover object-center" },
  { src: "/images/gold-box.jpg", maxWidth: 720, imageClass: "object-cover object-center" },
  { src: "/images/wood-box.jpg", maxWidth: 720, imageClass: "object-cover object-center" },
] as const;

export const instagramMedia = [
  { src: "/images/counter.jpg", maxWidth: 720, imageClass: "object-cover object-center" },
  { src: "/images/chocolate-square.jpg", maxWidth: 720, imageClass: "object-cover object-center" },
  { src: "/images/gold-box.jpg", maxWidth: 720, imageClass: "object-cover object-center" },
  { src: "/images/kiosk.jpg", maxWidth: 720, imageClass: "object-cover object-center" },
] as const;
