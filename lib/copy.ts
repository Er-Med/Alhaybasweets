import type { MenuCategoryId, MenuItemId } from "@/lib/menu";
import type { LocationId, ProductId } from "@/lib/site";

export type Locale = "fr" | "ar";

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
    carteShort: string;
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

const fr: Copy = {
  nav: {
    collection: "Collection",
    carte: "La carte",
    carteShort: "Carte",
    story: "Notre histoire",
    gallery: "Galerie",
    contact: "Contact",
    menu: "Ouvrir la navigation",
    close: "Fermer",
    skip: "Aller au contenu",
    language: "Changer de langue",
  },
  hero: {
    eyebrow: "Pâtisseries orientales · âme marocaine",
    arabicTitle: "حلويات الهيبة",
    titleLead: "Un goût à",
    titleEm: "retenir.",
    description: "Recettes levantines, achevées par des mains marocaines.",
    order: "Commander sur WhatsApp",
    orderShort: "Commander",
    explore: "Voir la carte",
    fig: "Fig. 01 — Baklava à la pistache",
    slides: [
      { label: "Le coffret doré", alt: "Un coffret cadeau Al Hayba doré" },
      { label: "Le disque", alt: "Baklava à la pistache découpée en disque" },
      { label: "La part", alt: "Une part de baklava à la pistache soulevée" },
    ],
  },
  story: {
    kicker: "01 — La maison",
    titleLead: "Plus que",
    titleEm: "de simples douceurs.",
    arabic: ["من التراث", "إلى المذاق", "الذي يدوم"],
    body: "Al Hayba porte les douceurs de Damas, de Beyrouth et d'Istanbul jusqu'à Casablanca, et les sert comme le Maroc reçoit un invité. Avec le thé, avec le temps, avec plus que ce qui a été demandé. Chaque plateau est encore achevé à la main. Une pâte filo tirée fine, des pistaches choisies pour leur couleur, un sirop versé seulement quand la pâtisserie est prête.",
    cta: "Notre histoire",
    fig: "Fig. 02 — La maison",
    more: [
      "Le Machrek et le Maghreb se sont toujours assis à la même table. Une langue, une foi, une habitude : poser quelque chose de sucré avant que l'invité ait ôté son manteau. Al Hayba est née là où ces deux bouts du monde arabe se rencontrent.",
      "Les recettes sont venues vers l'ouest comme les recettes voyagent toujours, avec les marchands, les pèlerins et les familles. Elles sont arrivées dans un pays qui connaissait déjà la fleur d'oranger, l'amande et la patience. Ici, elles ont trouvé une seconde maison, et le thé qu'elles attendaient.",
    ],
  },
  collection: {
    kicker: "02 — Douceurs signatures",
    title: "Douceurs signatures",
    intro: "Cinq expressions de la maison. Composées pour être partagées, jamais pressées.",
    view: "Voir",
  },
  heritage: {
    kicker: "04 — L'origine",
    titleLead: "De l'Orient",
    titleEm: "vers l'Occident.",
    body: "Les recettes commencent dans les cuisines du Levant et de l'Anatolie. Baklava de la table ottomane, kunafa de Naplouse et de Damas, maamoul des matins de l'Aïd à Beyrouth. Le Maroc partage depuis longtemps leurs épices, leur foi et leur amour de la table sucrée. Al Hayba garde la recette originale, exactement, et y ajoute la seule chose que le Maroc offre à chaque invité : l'accueil.",
    fig: "Savoir-faire levantin, maison casablancaise",
  },
  gallery: {
    kicker: "Galerie",
    titleLead: "Faite pour",
    titleEm: "être partagée.",
    intro: "Du plateau, de la cuisine, et de la ville qui les façonne.",
    alts: [
      "À l'intérieur du kiosque Al Hayba",
      "Un coffret cadeau Al Hayba doré",
      "Un coffret Al Hayba en bois, ouvert",
    ],
  },
  box: {
    kicker: "03 — Le cadeau",
    titleLead: "Un cadeau",
    titleEm: "d'authenticité.",
    body: "Un coffret qui parle les deux dialectes. Des douceurs d'Orient, choisies pièce par pièce et rangées avec le soin marocain. Un cadeau qui se comprend de Beyrouth à Casablanca, et qui s'ouvre quand la table est prête.",
    cta: "Commander sur WhatsApp",
    alt: "Un coffret cadeau Al Hayba ouvert",
  },
  instagram: {
    kicker: "Instagram",
    titleLead: "De notre table",
    titleEm: "à votre fil.",
    handle: "@alhaybasweets",
    followers: "16,7 k abonnés",
    cta: "Suivre sur Instagram",
    alts: [
      "Douceurs disposées sur le comptoir",
      "Carrés de baklava au chocolat et à la pistache",
      "Un coffret cadeau Al Hayba doré",
      "À l'intérieur du kiosque Al Hayba",
    ],
  },
  quotes: {
    kicker: "05 — Avis",
  },
  visit: {
    kicker: "06 — Visite",
    title: "Nous rendre visite",
    city: "Casablanca et Rabat",
    directions: "Itinéraire",
    whatsapp: "Commander sur WhatsApp",
    hours: "Horaires",
    note: "Quatre maisons, à Casablanca et à Rabat. Venez pour le plateau, ou faites envoyer le coffret.",
    places: {
      maarif: "Maarif",
      "casa-port": "Casa Port",
      "casa-voyageurs": "Casa Voyageurs",
      "rabat-agdal": "Rabat Agdal",
    },
  },
  menu: {
    kicker: "La table",
    title: "La carte",
    lede: "Chaque coffret et chaque pièce de la maison, avec son prix. À commander sur WhatsApp, ou à envoyer à travers la ville.",
    teaser: "La table entière, avec ses prix.",
    cta: "Voir la carte",
    delivery: "Livraison",
    currency: "MAD",
    imageAlt: "Un coffret cadeau Al Hayba ouvert",
    categories: {
      boxes: { kicker: "01 — Coffrets", title: "Coffrets cadeaux" },
      pieces: { kicker: "02 — Pièces", title: "À la pièce" },
      specialities: { kicker: "03 — Spécialités", title: "Les spécialités de la maison" },
      dubai: { kicker: "04 — Chocolat", title: "Chocolat Dubaï" },
      maamoul: { kicker: "05 — Maamoul", title: "Nougat et maamoul" },
      sweets: { kicker: "06 — Douceurs", title: "La table élargie" },
    },
    items: {
      "cashew-fingers": { name: "Doigts de cajou", line: "Trente-six pièces, fourrées au cajou moulu." },
      "box-h1": { name: "Coffret baklava H1", line: "Le grand cadeau. Un assortiment de la maison." },
      "box-h2": { name: "Coffret baklava H2", line: "Un grand coffret, composé et prêt à voyager." },
      "box-h3": { name: "Coffret baklava H3", line: "Un coffret moyen de l'assortiment." },
      "box-h4": { name: "Coffret baklava H4", line: "Un coffret moyen, rangé pour s'ouvrir lentement." },
      "box-h5": { name: "Coffret baklava H5", line: "Le petit cadeau." },
      "suwarieh-box": { name: "Coffret souwarieh", line: "Doigts de cajou, rangés dans leur propre coffret." },
      "pistachio-baklava": { name: "Baklava à la pistache", line: "Une pièce. Des couches, du beurre et de la pistache." },
      "almond-baklava": { name: "Baklava à l'amande", line: "Une pièce, achevée à l'amande." },
      "nutella-pistachio": { name: "Nutella et pistache", line: "Baklava au cœur de chocolat et de pistache." },
      "chocolate-nougat": { name: "Nougat au chocolat", line: "Nougat et chocolat, en une pièce." },
      "pistachio-turk": { name: "Turc à la pistache", line: "Pâte croustillante, fourrée à la pistache et au sirop." },
      "pistachio-kunafa": { name: "Kunafa à la pistache", line: "Kunafa grillée, couverte de pistache." },
      "pistachio-ballourieh": { name: "Ballourieh à la pistache", line: "Kunafa fourrée à la pistache." },
      "cashew-ballourieh": { name: "Ballourieh au cajou", line: "Kunafa fourrée au cajou." },
      "cream-namoura": { name: "Namoura à la crème", line: "Huit pièces, fourrées à la crème cuite." },
      "cream-othmaliyeh": { name: "Othmaliyeh à la crème", line: "Kunafa croustillante et crème fraîche." },
      "cream-basbousa": { name: "Basbousa à la crème", line: "Basbousa fourrée à la crème cuite." },
      "cream-turk": { name: "Turc à la crème", line: "Pâte croustillante et crème cuite." },
      "dubai-kunafa": { name: "Kunafa Dubaï", line: "Kunafa, crème, pistache et chocolat au lait." },
      "dubai-200": { name: "Chocolat Dubaï, 200 g", line: "Pistache et chocolat belge. La tablette entière." },
      "dubai-100": { name: "Chocolat Dubaï, 100 g", line: "La même tablette, en plus petit." },
      "date-maamoul": { name: "Maamoul à la datte", line: "Pressé à la main, fourré à la datte." },
      "walnut-maamoul": { name: "Maamoul à la noix", line: "Une pièce plus discrète, fourrée à la noix." },
      "pistachio-maamoul": { name: "Maamoul à la pistache", line: "Fourré à la pistache." },
      "walnut-tamriyeh": { name: "Tamriyeh à la noix", line: "Datte et noix, enroulées ensemble." },
      "cashew-asieh": { name: "Asieh au cajou", line: "Une pièce tendre, fourrée au cajou." },
      "pistachio-asieh": { name: "Asieh à la pistache", line: "La même forme, fourrée à la pistache." },
      "chocolate-cashew-finger": { name: "Doigt chocolat et cajou", line: "Une pièce. Chocolat et cajou." },
      "almond-finger": { name: "Doigt à l'amande", line: "Une pièce, achevée à l'amande." },
      "pistachio-nest": { name: "Nid à la pistache", line: "Un nid de pâte et de pistache." },
      "cashew-nest": { name: "Nid au cajou", line: "Le nid, fourré au cajou." },
      "almond-nest": { name: "Nid à l'amande", line: "Le nid, fourré à l'amande." },
      "hazelnut-nest": { name: "Nid à la noisette", line: "Le nid, fourré à la noisette." },
      balouza: { name: "Balouza", line: "Un entremets au lait, pris et parfumé." },
      muhalabiya: { name: "Mouhalabieh", line: "Un flan au lait, servi frais." },
      barazek: { name: "Plateau de barazek, 500 g", line: "Biscuits au sésame, disposés en rond." },
    },
  },
  footer: {
    rights: "© 2026 Al Hayba Sweets. Casablanca.",
    explore: "Explorer",
    houses: "Maisons",
  },
  pages: {
    collectionEyebrow: "La sélection",
    collectionTitle: "Douceurs signatures",
    storyEyebrow: "La maison",
    storyTitle: "Notre histoire",
    galleryEyebrow: "La table",
    galleryTitle: "Faite pour être partagée.",
    contactEyebrow: "La maison",
    contactTitle: "Nous rendre visite",
    contactLede: "Casablanca et Rabat. Une table, un coffret, ou un message.",
  },
  products: {
    baklava: {
      index: "01",
      name: "Baklava",
      short: "Baklava",
      summary: "Filo, beurre et pistache, cuits jusqu'à ce que les couches se séparent comme des pages.",
      line1: "Des couches de tradition.",
      line2: "Une obsession contemporaine.",
      detail:
        "Une recette des cuisines ottomanes. Quarante feuilles de filo, du beurre clarifié et de la pistache. Un sirop léger à la fleur d'oranger, le parfum que le Maroc et le Levant ont toujours partagé.",
      alt: "Baklava à la pistache dans un plateau de laiton",
    },
    pistachio: {
      index: "02",
      name: "Pistache",
      short: "Pistache",
      summary: "Le vert, plié dans la pâte et la crème. La saveur pour laquelle on connaît la maison.",
      line1: "Vert, sans hâte.",
      line2: "Rien d'ajouté pour l'effet.",
      detail:
        "Des fruits entiers, et une pâte moulue assez fine pour rester vive. La saveur à laquelle Al Hayba revient, encore et encore.",
      alt: "Une part de baklava à la pistache",
    },
    dubai: {
      index: "03",
      name: "Chocolat Dubaï",
      short: "Chocolat Dubaï",
      summary: "Une coque sombre et un cœur de pistache. Le classique moderne, tenu précis.",
      line1: "Chocolat noir.",
      line2: "Un cœur de pistache.",
      detail:
        "Croustillant au bord, frais au centre, achevé par petites fournées. Un nouveau classique, fait avec la même patience que les anciens.",
      alt: "Chocolat Dubaï brisé pour montrer le cœur de pistache",
    },
    maamoul: {
      index: "04",
      name: "Nougat et maamoul",
      short: "Maamoul",
      summary: "Dattes, fruits secs et fleur d'oranger. Les plaisirs plus discrets de la table.",
      line1: "Pressé à la main.",
      line2: "Parfumé à la fleur.",
      detail:
        "La douceur des matins de l'Aïd au Levant. Semoule, datte et fleur d'oranger, pressées dans des moules de bois. Façonnée pour le café, les visites, et l'heure qui n'a pas à se presser.",
      alt: "Trois pièces de maamoul sur une assiette",
    },
    oriental: {
      index: "05",
      name: "Pâtisseries orientales",
      short: "Pâtisseries orientales",
      summary: "Les douceurs du Liban, de Syrie et de Turquie, disposées pour une table marocaine.",
      line1: "La table entière.",
      line2: "Disposée pour être partagée.",
      detail:
        "Ce que Casablanca appelle ḥalawiyyat sharqiyya. Baklava, kunafa, basbousa et maamoul du Levant, réunis par la maison et rangés en un seul geste.",
      alt: "Baklava à la crème soulevée du plateau",
    },
  },
};

const ar: Copy = {
  nav: {
    collection: "المجموعة",
    carte: "القائمة",
    carteShort: "القائمة",
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
    titleLead: "Un goût à",
    titleEm: "retenir.",
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
    followers: "16,7 ألف متابع",
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

export const copy: Record<Locale, Copy> = { fr, ar };
