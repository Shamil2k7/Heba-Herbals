export interface ProductDetails {
  brand: string;
  name: string;
  subtitle: string;
  category: string;
  price: {
    formatted: string;
    amount: number;
    currency: string;
    note: string;
  };
  netWeight: string;
  shortDescription: string;
  detailedDescription: string;
  packagingDetails: string;
  shadeAndFinish: string;
  ingredients: {
    disclaimer: string;
    keyBotanicals: {
      name: string;
      role: string;
    }[];
    fullList: string;
  };
  usage: {
    directions: string;
    frequency: string;
    tips: string;
  };
  storage: string;
  manufacturer: {
    name: string;
    location: string;
    smallBatchNote: string;
  };
}

export interface BrandConfig {
  name: string;
  tagline: string;
  shortAbout: string;
  contact: {
    email: string;
    phone: string;
    whatsappNumber: string; // e.g. "+1234567890" or configured brand number
    whatsappOrderMessage: string;
    location: string;
    instagramUrl: string | null; // null if not yet verified
    instagramHandle: string | null;
  };
  announcement: {
    enabled: boolean;
    text: string;
    highlight: string;
  };
  meta: {
    siteTitle: string;
    siteDescription: string;
    canonicalDomain: string; // configured domain
    ogImageUrl: string;
  };
}

export const brandConfig: BrandConfig = {
  name: "Heba Herbals",
  tagline: "Natural Lip Care & Everyday Botanical Rituals",
  shortAbout:
    "Heba Herbals brings a thoughtful touch to everyday beauty. Butter Bliss is the starting point of a simple lip care ritual, presented with a love for understated design and everyday essentials.",
  contact: {
    email: "care@hebaherbals.com",
    phone: "+91 98765 43210", // Editable brand contact placeholder
    whatsappNumber: "919876543210", // Editable for WhatsApp direct ordering
    whatsappOrderMessage:
      "Hello Heba Herbals, I would like to order Butter Bliss All-Natural Lip Elixir.",
    location: "Kochi, Kerala, India",
    instagramUrl: null, // Left as null until verified profile URL is provided
    instagramHandle: "@hebaherbals",
  },
  announcement: {
    enabled: true,
    text: "Butter Bliss All-Natural Lip Elixir. Small-batch botanical lip care by Heba Herbals.",
    highlight: "Small-Batch Care",
  },
  meta: {
    siteTitle: "Heba Herbals | Butter Bliss All-Natural Lip Elixir",
    siteDescription:
      "Experience Butter Bliss by Heba Herbals. An everyday natural lip care essential designed to bring softness and botanical nourishment to your daily routine.",
    canonicalDomain: "https://hebaherbals.com",
    ogImageUrl: "/images/product/butter-bliss-top-view.jpg",
  },
};

export const productData: ProductDetails = {
  brand: "Heba Herbals",
  name: "Butter Bliss",
  subtitle: "All-Natural Lip Elixir",
  category: "Botanical Lip Care",
  price: {
    formatted: "$14.00",
    amount: 14.0,
    currency: "USD",
    note: "Small-batch formulation (editable price placeholder)",
  },
  netWeight: "8 g / 0.28 oz",
  shortDescription:
    "An everyday lip care essential designed to bring effortless softness, comfortable moisture, and subtle botanical richness to your daily ritual.",
  detailedDescription:
    "Butter Bliss is an intimate lip care formula created for daily replenishment. Resting in a classic round jar with a black lid, this rich burgundy elixir warms upon touch, melting into dry lips to deliver lasting comfort without heaviness or sticky residue.",
  packagingDetails:
    "Clear protective jar with secure twist-lock black cap, designed for handbag and pocket portability.",
  shadeAndFinish:
    "Deep burgundy tint in the jar, melting to a translucent, natural healthy sheen on lips.",
  ingredients: {
    disclaimer:
      "Formulation specification managed by Heba Herbals. Key botanical ingredients are highlighted below; full verified deck is updated upon batch confirmation.",
    keyBotanicals: [
      {
        name: "Plant-Derived Butters",
        role: "Forms a comforting barrier to lock in essential lip moisture throughout the day.",
      },
      {
        name: "Cold-Pressed Seed Oils",
        role: "Delivers softening fatty acids for smooth, supple texture without stickiness.",
      },
      {
        name: "Natural Botanical Extracts",
        role: "Provides natural tint and gentle herbal conditioning for delicate lip skin.",
      },
      {
        name: "Pure Protective Waxes",
        role: "Seals in hydration and shields lips against dry indoor air and weather changes.",
      },
    ],
    fullList:
      "Specific batch formulation deck is maintained by Heba Herbals quality assurance. Contact brand customer care for complete allergen and batch inquiries.",
  },
  usage: {
    directions:
      "Warm a small amount between clean fingertips and gently smooth over lips. Layer as desired for added comfort and moisture.",
    frequency:
      "Suitable for morning preparation, evening restoration, or whenever lips feel parched during the day.",
    tips:
      "Can be worn alone as a nourishing daily balm or layered over a lip pencil for a soft, conditioned finish.",
  },
  storage:
    "Store in a cool, dry place away from direct sunlight and excessive heat. Keep lid securely fastened when not in use.",
  manufacturer: {
    name: "Heba Herbals",
    location: "Handcrafted in small batches",
    smallBatchNote:
      "Each batch is carefully prepared in controlled quantities to maintain formula integrity and freshness.",
  },
};

export const brandBenefits = [
  {
    id: "everyday-care",
    title: "Everyday Lip Care",
    description:
      "Formulated for effortless daily use, replenishing lips with enduring comfort and a soft finish.",
    icon: "Sparkles",
  },
  {
    id: "pocket-sized",
    title: "A Pocket-Sized Essential",
    description:
      "A compact, travel-friendly jar that travels effortlessly from your desk to your handbag.",
    icon: "Compass",
  },
  {
    id: "simple-ritual",
    title: "A Simple Daily Ritual",
    description:
      "Melts smoothly on contact, creating a quiet moment of botanical comfort in your routine.",
    icon: "Feather",
  },
  {
    id: "thoughtful-presentation",
    title: "Thoughtful Presentation",
    description:
      "A classic round jar, clean black twist lid, and timeless botanical typography.",
    icon: "PackageCheck",
  },
];

export const galleryImages = [
  {
    id: "top-view",
    src: "/images/product/butter-bliss-top-view.jpg",
    alt: "Heba Herbals Butter Bliss All-Natural Lip Elixir jar viewed from above with botanical label",
    title: "Label & Botanical Emblem",
    caption:
      "Direct overhead perspective showcasing the authentic Heba Herbals botanical seal and gold-bordered label.",
    badge: "Signature Top View",
  },
  {
    id: "side-view",
    src: "/images/product/butter-bliss-side-view.jpg",
    alt: "Heba Herbals Butter Bliss jar from an angled perspective showing deep burgundy lip balm inside the clear base",
    title: "The Formula in Jar",
    caption:
      "Angled view displaying the rich burgundy elixir captured through the transparent jar with its black twist lid.",
    badge: "Formula & Jar Profile",
  },
  {
    id: "angled-view",
    src: "/images/product/butter-bliss-angled-view.jpg",
    alt: "Heba Herbals Butter Bliss lip elixir jar angled on woven natural textured fabric",
    title: "Natural Editorial Setting",
    caption:
      "Art-directed tabletop capture resting on natural textured linen, highlighting authentic packaging proportions.",
    badge: "Editorial Texture",
  },
];

export const navigationLinks = [
  { name: "Home", href: "#hero" },
  { name: "The Product", href: "#product-spotlight" },
  { name: "Our Story", href: "#our-story" },
  { name: "Gallery", href: "#gallery" },
  { name: "Ingredients", href: "#ingredients" },
  { name: "Contact", href: "#contact" },
];
