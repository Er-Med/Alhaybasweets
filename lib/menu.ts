import type { ProductId } from "@/lib/site";

const photo = (id: string) => `/images/menu/${id}.webp`;

export const YUMLO = "https://yumlo.ma/fr/casablanca/al-hayba-sweets-cas";

export const menuCategories = [
  {
    id: "boxes",
    items: [
      { id: "cashew-fingers", price: 60, image: photo("cd74c39d-56b0-487b-a1e1-bafdcbc3474d") },
      { id: "box-h1", price: 380, image: photo("c830831c-42dd-4232-9833-61854a6ec5df") },
      { id: "box-h2", price: 370, image: photo("03e17aef-9660-428f-be7a-dbfac90903c4") },
      { id: "box-h3", price: 250, image: photo("9d2f5d08-989f-4aa9-a74a-d269cb7753fb") },
      { id: "box-h4", price: 250, image: photo("aef7c374-5fea-4c72-955b-82929f6fcaf0") },
      { id: "box-h5", price: 120, image: photo("5870e7f5-a7fd-4612-b485-0d205593d930") },
      { id: "suwarieh-box", price: 75, image: photo("0c7a0deb-9b9a-4ac4-b613-13ca07365ad2") },
    ],
  },
  {
    id: "pieces",
    items: [
      { id: "pistachio-baklava", price: 16, image: photo("b7a0a30f-7ec0-4bfd-8719-4580252c8c31") },
      { id: "almond-baklava", price: 13, image: photo("c5d60df6-d783-4b79-8684-9d740ed8540d") },
      { id: "nutella-pistachio", price: 13, image: photo("afe7b02b-8b76-45bd-a779-723cdf6e415f") },
      { id: "chocolate-nougat", price: 13, image: photo("c9e4ffb7-170b-488c-acc9-004a30331483") },
    ],
  },
  {
    id: "specialities",
    items: [
      { id: "pistachio-turk", price: 35, image: photo("ecd7fa86-d1e1-4b63-979e-520af64e81f2") },
      { id: "pistachio-kunafa", price: 30, image: photo("17c22f07-1012-4d27-811e-369e5315e056") },
      { id: "pistachio-ballourieh", price: 45, image: photo("01cd4dd0-5e24-41ff-8d78-56b3bed2a064") },
      { id: "cashew-ballourieh", price: 30, image: photo("01c5da82-d3cb-4d66-aff8-6a55338b0560") },
      { id: "cream-namoura", price: 36, image: photo("56e316a4-7df1-4354-9080-88d4848af94a") },
      { id: "cream-othmaliyeh", price: 30, image: photo("b90cd18c-95b1-4de0-b468-976ed5430fff") },
      { id: "cream-basbousa", price: 30, image: photo("c2f692ca-ed67-443b-ba17-01e7e0905b90") },
      { id: "cream-turk", price: 25, image: photo("d9419fd5-4222-4945-91b3-d3f779a4a841") },
      { id: "dubai-kunafa", price: 45, image: photo("17f33414-0678-4b6d-8f2b-98ad0b22390f") },
    ],
  },
  {
    id: "dubai",
    items: [
      { id: "dubai-200", price: 145, image: photo("74d97188-a954-4e1e-a001-cf2082c2e8be") },
      { id: "dubai-100", price: 80, image: photo("74d97188-a954-4e1e-a001-cf2082c2e8be") },
    ],
  },
  {
    id: "maamoul",
    items: [
      { id: "date-maamoul", price: 13, image: photo("72e0e3e9-64a2-4b28-948f-78c982f395d9") },
      { id: "walnut-maamoul", price: 13, image: photo("8e4228b3-9f27-43e7-aeff-9673c964cbf9") },
      { id: "pistachio-maamoul", price: 13, image: photo("459c5ca3-7569-46c3-b556-c495644cbcca") },
      { id: "walnut-tamriyeh", price: 25, image: photo("5b5ede52-f468-48c1-b72e-5e539af49a9c") },
      { id: "cashew-asieh", price: 13, image: photo("54748f36-cf6e-4e2f-b65f-bd88cc2692c0") },
      { id: "pistachio-asieh", price: 18, image: photo("d85757df-cdfd-4707-82df-eb6d83a4e28c") },
    ],
  },
  {
    id: "sweets",
    items: [
      { id: "chocolate-cashew-finger", price: 12, image: photo("368cd652-f9ac-47f9-a617-200be4e12053") },
      { id: "almond-finger", price: 12, image: photo("55747a71-ec19-41d9-bddd-918cb7e80d45") },
      { id: "pistachio-nest", price: 18, image: photo("4ca83492-fffb-46d6-b2b2-c0eb34f8cb6c") },
      { id: "cashew-nest", price: 12, image: photo("f70a79d3-8ace-401b-8334-5fbc68f0e025") },
      { id: "almond-nest", price: 12, image: photo("a15b38ad-4829-4598-984c-9ecc986ecf9c") },
      { id: "hazelnut-nest", price: 12, image: photo("92fc81f0-73de-4ded-8e89-6c52c98a767f") },
      { id: "balouza", price: 25, image: photo("75afa4bf-43b1-4ad0-9a7b-d858acb1f78e") },
      { id: "muhalabiya", price: 25, image: photo("9b1d35dd-a462-4c7c-9743-e2b7d837cff1") },
      { id: "barazek", price: 110, image: photo("217d4921-0ee7-40d0-8ee6-c6d85a9f0bd1") },
    ],
  },
] as const;

export type MenuCategoryId = (typeof menuCategories)[number]["id"];
export type MenuItemId = (typeof menuCategories)[number]["items"][number]["id"];

export const menuSectionForProduct: Record<ProductId, MenuCategoryId> = {
  baklava: "boxes",
  pistachio: "specialities",
  dubai: "dubai",
  maamoul: "maamoul",
  oriental: "sweets",
};
