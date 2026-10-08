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
  },
  {
    id: "casa-port",
    phone: "05 22 31 20 37",
    phoneHref: "tel:+212522312037",
  },
  {
    id: "casa-voyageurs",
    phone: "07 22 22 36 43",
    phoneHref: "tel:+212722223643",
  },
  {
    id: "rabat-agdal",
    phone: "07 04 57 19 46",
    phoneHref: "tel:+212704571946",
  },
] as const;

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

export const featuredOrder = [
  "baklava",
  "pistachio",
  "dubai",
  "maamoul",
] as const;

export type ProductId = (typeof productOrder)[number];

export const productMedia: Record<
  ProductId,
  { image: string; featured?: string; imageClass: string }
> = {
  baklava: {
    image: "/images/baklava-round.jpg",
    featured: "/images/baklava-tray.jpg",
    imageClass: "object-cover object-center",
  },
  pistachio: {
    image: "/images/pistachio-slice.jpg",
    featured: "/images/pistachio-slice.jpg",
    imageClass: "object-cover object-center",
  },
  dubai: {
    image: "/images/dubai-bar.jpg",
    featured: "/images/dubai-bar.jpg",
    imageClass: "object-cover object-center",
  },
  maamoul: {
    image: "/images/maamoul.jpg",
    featured: "/images/maamoul.jpg",
    imageClass: "object-cover object-center",
  },
  oriental: {
    image: "/images/gift-box.jpg",
    imageClass: "object-cover object-center",
  },
};

export const galleryMedia = [
  { src: "/images/gift-box.jpg", frame: "feature", speed: 7, imageClass: "object-cover object-center" },
  { src: "/images/pistachio-slice.jpg", frame: "small", speed: 14, imageClass: "object-cover object-center" },
  { src: "/images/kiosk.jpg", frame: "portrait", speed: 9, imageClass: "object-cover object-center" },
  { src: "/images/kunafa.jpg", frame: "small", speed: 16, imageClass: "object-cover object-center" },
  { src: "/images/counter.jpg", frame: "wide", speed: 5, imageClass: "object-cover object-center" },
  { src: "/images/gold-box.jpg", frame: "wide", speed: 11, imageClass: "object-cover object-center" },
] as const;

export const instagramMedia = [
  { src: "/images/baklava-tray.jpg", aspect: "aspect-[3/4]", imageClass: "object-cover object-center" },
  { src: "/images/cream-baklava.jpg", aspect: "aspect-[4/5]", imageClass: "object-cover object-center" },
  { src: "/images/wood-box.jpg", aspect: "aspect-square", imageClass: "object-cover object-center" },
  { src: "/images/chocolate-square.jpg", aspect: "aspect-[3/4]", imageClass: "object-cover object-center" },
  { src: "/images/gold-box.jpg", aspect: "aspect-[5/4]", imageClass: "object-cover object-center" },
  { src: "/images/maamoul.jpg", aspect: "aspect-[3/4]", imageClass: "object-cover object-center" },
] as const;
