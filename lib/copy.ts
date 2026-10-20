import type { MenuCategoryId, MenuItemId } from "@/lib/menu";
import type { LocationId, ProductId } from "@/lib/site";

export type Locale = "en" | "ar";

export type ProductCopy = {
  index: string;
  name: string;
  short: string;
  summary: string;
  line1: string;
  line2: string;
  detail: string;
  alt: string;
};

export type Copy = {
  nav: {
    collection: string;
    carte: string;
    story: string;
    gallery: string;
    contact: string;
    menu: string;
    close: string;
    skip: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    arabicTitle: string;
    titleLead: string;
    titleEm: string;
    description: string;
    order: string;
    orderShort: string;
    explore: string;
    fig: string;
    slides: { label: string; alt: string }[];
  };
  story: {
    kicker: string;
    titleLead: string;
    titleEm: string;
    arabic: string[];
    body: string;
    cta: string;
    fig: string;
    more: string[];
  };
  collection: {
    kicker: string;
    title: string;
    intro: string;
    view: string;
  };
  heritage: {
    kicker: string;
    titleLead: string;
    titleEm: string;
    body: string;
    fig: string;
  };
  gallery: {
    kicker: string;
    titleLead: string;
    titleEm: string;
    intro: string;
    alts: string[];
  };
  box: {
    kicker: string;
    titleLead: string;
    titleEm: string;
    body: string;
    cta: string;
    alt: string;
  };
  instagram: {
    kicker: string;
    titleLead: string;
    titleEm: string;
    handle: string;
    followers: string;
    cta: string;
    alts: string[];
  };
  quotes: {
    kicker: string;
  };
  visit: {
    kicker: string;
    title: string;
    city: string;
    directions: string;
    whatsapp: string;
    hours: string;
    note: string;
    places: Record<LocationId, string>;
  };
  menu: {
    kicker: string;
    title: string;
    lede: string;
    teaser: string;
    cta: string;
    delivery: string;
    currency: string;
    imageAlt: string;
    categories: Record<MenuCategoryId, { kicker: string; title: string }>;
    items: Record<MenuItemId, { name: string; line: string }>;
  };
  footer: {
    rights: string;
    explore: string;
    houses: string;
  };
  pages: {
    collectionEyebrow: string;
    collectionTitle: string;
    storyEyebrow: string;
    storyTitle: string;
    galleryEyebrow: string;
    galleryTitle: string;
    contactEyebrow: string;
    contactTitle: string;
    contactLede: string;
  };
  products: Record<ProductId, ProductCopy>;
};

const en: Copy = {
  nav: {
    collection: "Collection",
    carte: "The menu",
    story: "Our Story",
    gallery: "Gallery",
    contact: "Contact",
    menu: "Open navigation",
    close: "Close",
    skip: "Skip to content",
    language: "Switch language",
  },
  hero: {
    eyebrow: "Oriental sweets · Moroccan soul",
    arabicTitle: "حلويات الهيبة",
    titleLead: "A taste worth",
    titleEm: "remembering.",
    description: "Levantine recipes, finished by Moroccan hands.",
    order: "Order on WhatsApp",
    orderShort: "Order",
    explore: "See the menu",
    fig: "Fig. 01 — Pistachio baklava",
    slides: [
      { label: "The gold box", alt: "A gold Al Hayba gift box" },
      { label: "The round", alt: "Pistachio baklava cut into a round" },
      { label: "The slice", alt: "A slice of pistachio baklava being lifted" },
    ],
  },
  story: {
    kicker: "01 — The house",
    titleLead: "More than",
    titleEm: "just sweets.",
    arabic: ["من التراث", "إلى المذاق", "الذي يدوم"],
    body: "Al Hayba carries the sweets of Damascus, Beirut, and Istanbul to Casablanca, and serves them the way Morocco receives a guest. With tea, with time, with more than was asked for. Each tray is still finished by hand. Filo pulled thin, pistachios chosen for colour, syrup poured only when the pastry is ready.",
    cta: "Our story",
    fig: "Fig. 02 — The house",
    more: [
      "The Mashreq and the Maghreb have always sat at the same table. One language, one faith, one habit of setting out something sweet before the guest has taken off their coat. Al Hayba was born where those two ends of the Arab world meet.",
      "The recipes came west the way recipes always travel, with merchants, pilgrims, and families. They arrived in a country that already knew orange blossom, almonds, and patience. Here they found a second home, and the tea they had been waiting for.",
    ],
  },
  collection: {
    kicker: "02 — Signature sweets",
    title: "Signature sweets",
    intro: "Five expressions of the house. Composed to be shared, never rushed.",
    view: "View",
  },
  heritage: {
    kicker: "04 — Origin",
    titleLead: "From the East",
    titleEm: "to the West.",
    body: "The recipes begin in the kitchens of the Levant and Anatolia. Baklava from the Ottoman table, kunafa from Nablus and Damascus, maamoul from the Eid mornings of Beirut. Morocco has long shared their spices, their faith, and their love of the sweet table. Al Hayba keeps the original recipe, exactly, and adds the one thing Morocco gives every guest: a welcome.",
    fig: "Levantine craft, Casablanca house",
  },
  gallery: {
    kicker: "Gallery",
    titleLead: "Made to be",
    titleEm: "shared.",
    intro: "From the tray, the kitchen, and the city that shapes them.",
    alts: [
      "Inside the Al Hayba kiosk",
      "A gold Al Hayba gift box",
      "An open wooden Al Hayba box",
    ],
  },
  box: {
    kicker: "03 — The gift",
    titleLead: "A gift of",
    titleEm: "authenticity.",
    body: "A box that speaks both dialects. Sweets from the East, chosen piece by piece and packed with Moroccan care. A gift that is understood from Beirut to Casablanca, and opened when the table is ready.",
    cta: "Order on WhatsApp",
    alt: "An open Al Hayba gift box",
  },
  instagram: {
    kicker: "Instagram",
    titleLead: "From our table",
    titleEm: "to your feed.",
    handle: "@alhaybasweets",
    followers: "16.7K followers",
    cta: "Follow on Instagram",
    alts: [
      "Sweets arranged on the counter",
      "Chocolate and pistachio baklava squares",
      "A gold Al Hayba gift box",
      "Inside the Al Hayba kiosk",
    ],
  },
  quotes: {
    kicker: "05 — Reviews",
  },
  visit: {
    kicker: "06 — Visit",
    title: "Visit us",
    city: "Casablanca & Rabat",
    directions: "Get directions",
    whatsapp: "Order on WhatsApp",
    hours: "Hours",
    note: "Four houses, in Casablanca and Rabat. Come for the tray, or send for the box.",
    places: {
      maarif: "Maarif",
      "casa-port": "Casa Port",
      "casa-voyageurs": "Casa Voyageurs",
      "rabat-agdal": "Rabat Agdal",
    },
  },
  menu: {
    kicker: "The table",
    title: "The menu",
    lede: "Every box and piece of the house, priced. Ordered on WhatsApp, or sent across the city.",
    teaser: "The full table, priced.",
    cta: "See the menu",
    delivery: "Delivery",
    currency: "MAD",
    imageAlt: "An open Al Hayba gift box",
    categories: {
      boxes: { kicker: "01 — Boxes", title: "Gift boxes" },
      pieces: { kicker: "02 — Pieces", title: "By the piece" },
      specialities: { kicker: "03 — Specialities", title: "The house specialities" },
      dubai: { kicker: "04 — Chocolate", title: "Dubai chocolate" },
      maamoul: { kicker: "05 — Maamoul", title: "Nougat and maamoul" },
      sweets: { kicker: "06 — Sweets", title: "The wider table" },
    },
    items: {
      "cashew-fingers": { name: "Cashew fingers", line: "Thirty-six pieces, filled with ground cashew." },
      "box-h1": { name: "Baklava box H1", line: "The large gift. An assortment of the house." },
      "box-h2": { name: "Baklava box H2", line: "A large box, composed and ready to travel." },
      "box-h3": { name: "Baklava box H3", line: "A medium box of the assortment." },
      "box-h4": { name: "Baklava box H4", line: "A medium box, packed to be opened slowly." },
      "box-h5": { name: "Baklava box H5", line: "The small gift." },
      "suwarieh-box": { name: "Suwarieh box", line: "Cashew fingers, arranged in their own box." },
      "pistachio-baklava": { name: "Pistachio baklava", line: "One piece. Layers, butter, and pistachio." },
      "almond-baklava": { name: "Almond baklava", line: "One piece, finished with almond." },
      "nutella-pistachio": { name: "Nutella and pistachio", line: "Baklava with a chocolate and pistachio heart." },
      "chocolate-nougat": { name: "Chocolate nougat", line: "Nougat and chocolate, in one piece." },
      "pistachio-turk": { name: "Pistachio Turk", line: "Crisp pastry, filled with pistachio and syrup." },
      "pistachio-kunafa": { name: "Pistachio kunafa", line: "Grilled kunafa, covered with pistachio." },
      "pistachio-ballourieh": { name: "Pistachio ballourieh", line: "Kunafa filled with pistachio." },
      "cashew-ballourieh": { name: "Cashew ballourieh", line: "Kunafa filled with cashew." },
      "cream-namoura": { name: "Cream namoura", line: "Eight pieces, filled with cooked cream." },
      "cream-othmaliyeh": { name: "Cream othmaliyeh", line: "Crisp kunafa and fresh cream." },
      "cream-basbousa": { name: "Cream basbousa", line: "Basbousa filled with cooked cream." },
      "cream-turk": { name: "Cream Turk", line: "Crisp pastry and cooked cream." },
      "dubai-kunafa": { name: "Dubai kunafa", line: "Kunafa, cream, pistachio, and milk chocolate." },
      "dubai-200": { name: "Dubai chocolate, 200 g", line: "Pistachio and Belgian chocolate. The full bar." },
      "dubai-100": { name: "Dubai chocolate, 100 g", line: "The same bar, in a smaller piece." },
      "date-maamoul": { name: "Date maamoul", line: "Pressed by hand, filled with date." },
      "walnut-maamoul": { name: "Walnut maamoul", line: "A quieter piece, filled with walnut." },
      "pistachio-maamoul": { name: "Pistachio maamoul", line: "Filled with pistachio." },
      "walnut-tamriyeh": { name: "Walnut tamriyeh", line: "Date and walnut, wrapped together." },
      "cashew-asieh": { name: "Cashew asieh", line: "A soft piece, filled with cashew." },
      "pistachio-asieh": { name: "Pistachio asieh", line: "The same form, filled with pistachio." },
      "chocolate-cashew-finger": { name: "Chocolate cashew finger", line: "One piece. Chocolate and cashew." },
      "almond-finger": { name: "Almond finger", line: "One piece, finished with almond." },
      "pistachio-nest": { name: "Pistachio nest", line: "A nest of pastry and pistachio." },
      "cashew-nest": { name: "Cashew nest", line: "The nest, filled with cashew." },
      "almond-nest": { name: "Almond nest", line: "The nest, filled with almond." },
      "hazelnut-nest": { name: "Hazelnut nest", line: "The nest, filled with hazelnut." },
      balouza: { name: "Balouza", line: "A milk pudding, set and fragrant." },
      muhalabiya: { name: "Muhalabiya", line: "A milk flan, served cool." },
      barazek: { name: "Barazek tray, 500 g", line: "Sesame biscuits, arranged as a round." },
    },
  },
  footer: {
    rights: "© 2026 Al Hayba Sweets. Casablanca.",
    explore: "Explore",
    houses: "Houses",
  },
  pages: {
    collectionEyebrow: "The selection",
    collectionTitle: "Signature sweets",
    storyEyebrow: "The house",
    storyTitle: "Our story",
    galleryEyebrow: "The table",
    galleryTitle: "Made to be shared.",
    contactEyebrow: "The house",
    contactTitle: "Visit us",
    contactLede: "Casablanca and Rabat. A table, a box, or a message.",
  },
  products: {
    baklava: {
      index: "01",
      name: "Baklava",
      short: "Baklava",
      summary: "Filo, butter, and pistachio, baked until the layers separate like pages.",
      line1: "Layers of tradition.",
      line2: "A modern obsession.",
      detail:
        "A recipe from the Ottoman kitchens. Forty sheets of filo, clarified butter, and pistachio. A light orange-blossom syrup, the scent Morocco and the Levant have always shared.",
      alt: "Pistachio baklava in a brass tray",
    },
    pistachio: {
      index: "02",
      name: "Pistachio",
      short: "Pistachio",
      summary: "Green, folded through pastry and cream. The flavour the house is known for.",
      line1: "Green, unhurried.",
      line2: "Nothing else added for show.",
      detail:
        "Whole nuts, and a paste milled fine enough to stay vivid. The flavour Al Hayba returns to, again and again.",
      alt: "A slice of pistachio baklava",
    },
    dubai: {
      index: "03",
      name: "Dubai Chocolate",
      short: "Dubai Chocolate",
      summary: "A dark shell and a pistachio heart. The modern classic, kept precise.",
      line1: "Dark chocolate.",
      line2: "A pistachio heart.",
      detail:
        "Crisp at the edge, cool at the centre, finished in small batches. A new classic, made with the same patience as the old ones.",
      alt: "Dubai chocolate broken to show the pistachio centre",
    },
    maamoul: {
      index: "04",
      name: "Nougat & Maamoul",
      short: "Maamoul",
      summary: "Dates, nuts, and orange blossom. The quieter pleasures of the table.",
      line1: "Pressed by hand.",
      line2: "Fragrant with blossom.",
      detail:
        "The sweet of Levantine Eid mornings. Semolina, date, and orange blossom, pressed into wooden moulds. Shaped for coffee, for visits, and for the hour that does not need to hurry.",
      alt: "Three pieces of maamoul on a plate",
    },
    oriental: {
      index: "05",
      name: "Oriental Sweets",
      short: "Oriental Sweets",
      summary: "The sweets of Lebanon, Syria, and Turkey, arranged for a Moroccan table.",
      line1: "The full table.",
      line2: "Arranged to be shared.",
      detail:
        "What Casablanca calls ḥalawiyyat sharqiyya. Baklava, kunafa, basbousa, and maamoul from the Levant, gathered by the house and packed as one gesture.",
      alt: "Cream baklava lifted from the tray",
    },
  },
};

const ar: Copy = {
  nav: {
    collection: "المجموعة",
    carte: "القائمة",
    story: "قصتنا",
    gallery: "المعرض",
    contact: "تواصل",
    menu: "فتح التنقل",
    close: "إغلاق",
    skip: "انتقل إلى المحتوى",
    language: "تغيير اللغة",
  },
  hero: {
    eyebrow: "حلويات شرقية · روح مغربية",
    arabicTitle: "حلويات الهيبة",
    titleLead: "A taste worth",
    titleEm: "remembering.",
    description: "وصفات شامية، بلمسة يد مغربية.",
    order: "اطلب عبر واتساب",
    orderShort: "اطلب",
    explore: "شاهد القائمة",
    fig: "صورة ٠١ — بقلاوة بالفستق",
    slides: [
      { label: "العلبة الذهبية", alt: "صندوق هدايا الهيبة الذهبي" },
      { label: "القرص", alt: "بقلاوة بالفستق مقطّعة قرصًا" },
      { label: "القطعة", alt: "قطعة بقلاوة بالفستق تُرفع من الصينية" },
    ],
  },
  story: {
    kicker: "٠١ — الدار",
    titleLead: "أكثر من",
    titleEm: "مجرد حلويات.",
    arabic: ["من التراث", "إلى المذاق", "الذي يدوم"],
    body: "تحمل الهيبة حلويات دمشق وبيروت وإسطنبول إلى الدار البيضاء، وتقدّمها كما يستقبل المغرب ضيفه. بالشاي، وبالوقت، وبأكثر مما طُلب. وما زالت كل صينية تُنجز باليد. عجين رقيق، وفستق يُختار للونه، وقطر يُسكب حين تستوي الحلوى.",
    cta: "قصتنا",
    fig: "صورة ٠٢ — الدار",
    more: [
      "جلس المشرق والمغرب دائمًا إلى المائدة نفسها. لغة واحدة، وإيمان واحد، وعادة واحدة في أن يُقدَّم الحلو قبل أن يستقرّ الضيف في مجلسه. وُلدت الهيبة حيث يلتقي طرفا العالم العربي.",
      "سافرت الوصفات غربًا كما تسافر الوصفات دائمًا، مع التجّار والحجّاج والعائلات. ووصلت إلى بلد يعرف ماء الزهر واللوز والصبر. فوجدت فيه بيتًا ثانيًا، والشاي الذي كانت تنتظره.",
    ],
  },
  collection: {
    kicker: "٠٢ — حلويات التوقيع",
    title: "حلويات التوقيع",
    intro: "خمسة تعبيرات من الدار. تُرتَّب لتُشارَك، بلا استعجال.",
    view: "عرض",
  },
  heritage: {
    kicker: "٠٤ — الأصل",
    titleLead: "من المشرق",
    titleEm: "إلى المغرب.",
    body: "تبدأ الوصفات في مطابخ الشام والأناضول. بقلاوة من المائدة العثمانية، وكنافة من نابلس ودمشق، ومعمول من صباحات العيد في بيروت. وقد شارك المغرب هذه البلاد طويلًا توابلها وإيمانها وحبّها لمائدة الحلو. تحفظ الهيبة الوصفة الأصلية كما هي، وتضيف إليها ما يمنحه المغرب لكل ضيف: الترحاب.",
    fig: "حرفة شامية، دار بيضاوية",
  },
  gallery: {
    kicker: "المعرض",
    titleLead: "صُنعت",
    titleEm: "لتُشارَك.",
    intro: "من الصينية، والمطبخ، والمدينة التي تشكّلها.",
    alts: [
      "داخل ركن الهيبة",
      "صندوق هدايا الهيبة الذهبي",
      "صندوق الهيبة الخشبي المفتوح",
    ],
  },
  box: {
    kicker: "٠٣ — الهدية",
    titleLead: "هدية من",
    titleEm: "الأصالة.",
    body: "صندوق يتكلّم اللهجتين. حلويات من المشرق، تُختار قطعة قطعة، وتُرصّ بعناية مغربية. هدية تُفهم من بيروت إلى الدار البيضاء، وتُفتح حين تجهز المائدة.",
    cta: "اطلب عبر واتساب",
    alt: "صندوق هدايا الهيبة المفتوح",
  },
  instagram: {
    kicker: "إنستغرام",
    titleLead: "من مائدتنا",
    titleEm: "إلى يومياتك.",
    handle: "@alhaybasweets",
    followers: "16.7K متابع",
    cta: "تابعنا على إنستغرام",
    alts: [
      "حلويات مرتّبة على الرخام",
      "مربعات بقلاوة بالشوكولاتة والفستق",
      "صندوق هدايا الهيبة الذهبي",
      "داخل ركن الهيبة",
    ],
  },
  quotes: {
    kicker: "٠٥ — الآراء",
  },
  visit: {
    kicker: "٠٦ — الزيارة",
    title: "زورونا",
    city: "الدار البيضاء والرباط",
    directions: "الاتجاهات",
    whatsapp: "اطلب عبر واتساب",
    hours: "الساعات",
    note: "أربع دور في الدار البيضاء والرباط. تعال إلى الصينية، أو اطلب الصندوق.",
    places: {
      maarif: "المعاريف",
      "casa-port": "كازا بور",
      "casa-voyageurs": "كازا فواياجور",
      "rabat-agdal": "الرباط أكدال",
    },
  },
  menu: {
    kicker: "المائدة",
    title: "القائمة",
    lede: "كل صندوق وقطعة من الدار، بسعره. يُطلب عبر واتساب، أو يُرسَل عبر المدينة.",
    teaser: "المائدة كاملة، بأسعارها.",
    cta: "القائمة",
    delivery: "التوصيل",
    currency: "MAD",
    imageAlt: "صندوق هدايا الهيبة المفتوح",
    categories: {
      boxes: { kicker: "٠١ — الصناديق", title: "صناديق الهدية" },
      pieces: { kicker: "٠٢ — القطع", title: "بالقطعة" },
      specialities: { kicker: "٠٣ — التخصصات", title: "تخصصات الدار" },
      dubai: { kicker: "٠٤ — الشوكولاتة", title: "شوكولاتة دبي" },
      maamoul: { kicker: "٠٥ — المعمول", title: "نوجا ومعمول" },
      sweets: { kicker: "٠٦ — الحلويات", title: "المائدة الأوسع" },
    },
    items: {
      "cashew-fingers": { name: "أصابع الكاجو", line: "ست وثلاثون قطعة، محشوة بالكاجو المطحون." },
      "box-h1": { name: "صندوق بقلاوة H1", line: "الهدية الكبيرة. تشكيلة من الدار." },
      "box-h2": { name: "صندوق بقلاوة H2", line: "صندوق كبير، مرتّب وجاهز للسفر." },
      "box-h3": { name: "صندوق بقلاوة H3", line: "صندوق متوسط من التشكيلة." },
      "box-h4": { name: "صندوق بقلاوة H4", line: "صندوق متوسط، يُفتح ببطء." },
      "box-h5": { name: "صندوق بقلاوة H5", line: "الهدية الصغيرة." },
      "suwarieh-box": { name: "صندوق السويرية", line: "أصابع الكاجو في صندوقها." },
      "pistachio-baklava": { name: "بقلاوة بالفستق", line: "قطعة واحدة. طبقات، وسمن، وفستق." },
      "almond-baklava": { name: "بقلاوة باللوز", line: "قطعة واحدة، تُختَم باللوز." },
      "nutella-pistachio": { name: "نوتيلا وفستق", line: "بقلاوة بقلب من الشوكولاتة والفستق." },
      "chocolate-nougat": { name: "نوجا بالشوكولاتة", line: "نوجا وشوكولاتة في قطعة واحدة." },
      "pistachio-turk": { name: "ترك بالفستق", line: "عجين مقرمش، محشو بالفستق والقطر." },
      "pistachio-kunafa": { name: "كنافة بالفستق", line: "كنافة مشوية، مغطاة بالفستق." },
      "pistachio-ballourieh": { name: "بلورية بالفستق", line: "كنافة محشوة بالفستق." },
      "cashew-ballourieh": { name: "بلورية بالكاجو", line: "كنافة محشوة بالكاجو." },
      "cream-namoura": { name: "نمورة بالكريمة", line: "ثماني قطع، محشوة بكريمة مطبوخة." },
      "cream-othmaliyeh": { name: "عثملية بالكريمة", line: "كنافة مقرمشة وكريمة طازجة." },
      "cream-basbousa": { name: "بسبوسة بالكريمة", line: "بسبوسة محشوة بكريمة مطبوخة." },
      "cream-turk": { name: "ترك بالكريمة", line: "عجين مقرمش وكريمة مطبوخة." },
      "dubai-kunafa": { name: "كنافة دبي", line: "كنافة، وكريمة، وفستق، وشوكولاتة بالحليب." },
      "dubai-200": { name: "شوكولاتة دبي، ٢٠٠ غ", line: "فستق وشوكولاتة بلجيكية. اللوح كاملاً." },
      "dubai-100": { name: "شوكولاتة دبي، ١٠٠ غ", line: "اللوح نفسه، في قطعة أصغر." },
      "date-maamoul": { name: "معمول بالتمر", line: "يُضغط باليد، ويُحشى بالتمر." },
      "walnut-maamoul": { name: "معمول بالجوز", line: "قطعة أهدأ، محشوة بالجوز." },
      "pistachio-maamoul": { name: "معمول بالفستق", line: "محشو بالفستق." },
      "walnut-tamriyeh": { name: "تمرية بالجوز", line: "تمر وجوز، ملفوفان معاً." },
      "cashew-asieh": { name: "عصية بالكاجو", line: "قطعة طرية، محشوة بالكاجو." },
      "pistachio-asieh": { name: "عصية بالفستق", line: "الشكل نفسه، محشو بالفستق." },
      "chocolate-cashew-finger": { name: "إصبع شوكولاتة وكاجو", line: "قطعة واحدة. شوكولاتة وكاجو." },
      "almond-finger": { name: "إصبع باللوز", line: "قطعة واحدة، تُختَم باللوز." },
      "pistachio-nest": { name: "عش بالفستق", line: "عش من العجين والفستق." },
      "cashew-nest": { name: "عش بالكاجو", line: "العش، محشو بالكاجو." },
      "almond-nest": { name: "عش باللوز", line: "العش، محشو باللوز." },
      "hazelnut-nest": { name: "عش بالبندق", line: "العش، محشو بالبندق." },
      balouza: { name: "بالوظة", line: "مهلبية بالحليب، متماسكة وعطرة." },
      muhalabiya: { name: "مهلبية", line: "فلان بالحليب، يُقدَّم بارداً." },
      barazek: { name: "صينية برازق، ٥٠٠ غ", line: "بسكويت بالسمسم، مرتّب في دائرة." },
    },
  },
  footer: {
    rights: "© 2026 حلويات الهيبة. الدار البيضاء.",
    explore: "استكشف",
    houses: "الدور",
  },
  pages: {
    collectionEyebrow: "المختارات",
    collectionTitle: "حلويات التوقيع",
    storyEyebrow: "الدار",
    storyTitle: "قصتنا",
    galleryEyebrow: "المائدة",
    galleryTitle: "صُنعت لتُشارَك.",
    contactEyebrow: "الدار",
    contactTitle: "زورونا",
    contactLede: "الدار البيضاء والرباط. مائدة، أو صندوق، أو رسالة.",
  },
  products: {
    baklava: {
      index: "٠١",
      name: "بقلاوة",
      short: "بقلاوة",
      summary: "عجين، سمن، وفستق. تُخبز حتى تنفصل الطبقات كصفحات.",
      line1: "طبقات من التراث.",
      line2: "هوسٌ معاصر.",
      detail:
        "وصفة من المطابخ العثمانية. أربعون ورقة من العجين، وسمن مصفّى، وفستق. قطر خفيف بماء الزهر، العطر الذي تقاسمه المغرب والشام منذ زمن.",
      alt: "بقلاوة بالفستق في صينية نحاسية",
    },
    pistachio: {
      index: "٠٢",
      name: "فستق",
      short: "فستق",
      summary: "الأخضر الذي يمرّ في العجين والكريمة. النكهة التي تُعرف بها الدار.",
      line1: "أخضر، بلا استعجال.",
      line2: "لا شيء للعرض فقط.",
      detail:
        "حبّ كامل، ومعجون ناعم يبقى زاهيًا. النكهة التي تعود إليها الهيبة، مرة بعد مرة.",
      alt: "شريحة بقلاوة بالفستق",
    },
    dubai: {
      index: "٠٣",
      name: "شوكولاتة دبي",
      short: "شوكولاتة دبي",
      summary: "قشرة داكنة وقلب من الفستق. الكلاسيكية الحديثة، بهدوء.",
      line1: "شوكولاتة داكنة.",
      line2: "قلب من الفستق.",
      detail:
        "مقرمشة عند الحافة، باردة في الوسط، تُنجز على دفعات صغيرة. كلاسيكية جديدة بالصبر نفسه.",
      alt: "شوكولاتة دبي مكسورة تظهر قلب الفستق",
    },
    maamoul: {
      index: "٠٤",
      name: "نوجا ومعمول",
      short: "معمول",
      summary: "تمر، ومكسّرات، وماء الزهر. متع المائدة الأهدأ.",
      line1: "يُشكَّل باليد.",
      line2: "يفوح بماء الزهر.",
      detail:
        "حلوى صباحات العيد في الشام. سميد، وتمر، وماء الزهر، يُضغط في قوالب الخشب. للمعمول هيئة الزيارة والقهوة والساعة التي لا تستعجل.",
      alt: "ثلاث قطع معمول على طبق",
    },
    oriental: {
      index: "٠٥",
      name: "حلويات شرقية",
      short: "حلويات شرقية",
      summary: "حلويات لبنان وسوريا وتركيا، مرتّبة لمائدة مغربية.",
      line1: "المائدة كاملة.",
      line2: "مرتّبة لتُشارَك.",
      detail: "ما تسمّيه الدار البيضاء «الحلويات الشرقية». بقلاوة، وكنافة، وبسبوسة، ومعمول من الشام، تجمعها الدار في إيماءة واحدة.",
      alt: "بقلاوة بالكريمة تُرفع من الصينية",
    },
  },
};

export const copy: Record<Locale, Copy> = { en, ar };
