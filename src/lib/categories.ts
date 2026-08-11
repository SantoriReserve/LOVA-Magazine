export type CategorySlug =
  | "dining"
  | "beauty"
  | "wellness"
  | "fashion-retail"
  | "hospitality"
  | "services"
  | "lifestyle-experiences"
  | "events-entertainment";

export type Category = {
  slug: CategorySlug;
  name: string;
  /** Short label for nav / compact UI */
  shortName: string;
  href: string;
  /** Form dropdown value */
  formValue: string;
  image: string;
  /** Intrinsic pixel size of the approved source (prevents upscaling/crop zoom) */
  imageWidth: number;
  imageHeight: number;
  /** CSS object-position for editorial crops */
  imagePosition?: string;
  /** Mobile-specific object-position when needed */
  imagePositionMobile?: string;
  /** Reader-facing descriptor (homepage strip) */
  readerDescriptor: string;
  /** Business-facing descriptor (homepage fit section) */
  businessDescriptor: string;
  /** Hero statement for discover page */
  readerStatement: string;
  /** What you’ll discover list */
  discoverItems: string[];
  /** Editorial paragraph */
  editorialCopy: string;
  /** Business section heading */
  businessHeading: string;
  /** Business section body */
  businessCopy: string;
};

/**
 * Single source of truth for LOVA’s 8 discovery sectors.
 * Imagery is assigned from the approved “LOVA images” folder by subject match.
 */
export const categories: Category[] = [
  {
    slug: "dining",
    name: "Dining",
    shortName: "Dining",
    href: "/discover/dining",
    formValue: "Dining",
    image: "/images/cat-dining.jpg",
    imageWidth: 736,
    imageHeight: 1104,
    imagePosition: "center 40%",
    readerDescriptor: "Restaurants, cafés & places to try.",
    businessDescriptor: "Restaurants, cafés, bars & food concepts",
    readerStatement:
      "Restaurants worth returning to, cafés worth finding, and places worth adding to your list.",
    discoverItems: [
      "Restaurants",
      "Cafés",
      "Bars",
      "Bakeries",
      "Wine bars",
      "Specialty food",
      "Dining experiences",
      "New openings",
    ],
    editorialCopy:
      "From neighborhood favorites to new concepts, LOVA brings together dining destinations worth knowing — places people recommend, return to, and are excited to discover.",
    businessHeading: "Own a dining business?",
    businessCopy:
      "LOVA gives restaurants, cafés, bars, and other food businesses another way to introduce themselves to potential customers through a publication built around discovery.",
  },
  {
    slug: "beauty",
    name: "Beauty",
    shortName: "Beauty",
    href: "/discover/beauty",
    formValue: "Beauty",
    image: "/images/cat-beauty.jpg",
    imageWidth: 736,
    imageHeight: 1104,
    imagePosition: "center center",
    readerDescriptor: "Salons, treatments & beauty destinations.",
    businessDescriptor: "Salons, treatments, beauty professionals & brands",
    readerStatement:
      "Beauty destinations worth booking — from salons and treatments to brands you’ll want to know.",
    discoverItems: [
      "Hair salons",
      "Nail studios",
      "Makeup artists",
      "Estheticians",
      "Med spas",
      "Beauty brands",
      "Skincare brands",
      "Beauty destinations",
    ],
    editorialCopy:
      "LOVA looks for beauty businesses with intention — skilled professionals, thoughtful spaces, and brands that feel considered. The goal is simple: make discovering where to go next a little easier.",
    businessHeading: "Own a beauty business?",
    businessCopy:
      "Whether you run a salon, offer treatments, or build a beauty brand, LOVA gives you a place to introduce what you do through a publication designed for discovery.",
  },
  {
    slug: "wellness",
    name: "Wellness",
    shortName: "Wellness",
    href: "/discover/wellness",
    formValue: "Wellness",
    image: "/images/cat-wellness.jpg",
    imageWidth: 735,
    imageHeight: 802,
    imagePosition: "center 35%",
    readerDescriptor: "Spas, wellness spaces & services for wellbeing.",
    businessDescriptor: "Spas, studios, fitness & wellness services",
    readerStatement:
      "Spaces and services that support how you feel — calm, strong, restored, and cared for.",
    discoverItems: [
      "Spas",
      "Massage",
      "Facials",
      "Pilates",
      "Yoga",
      "Fitness studios",
      "Wellness centers",
      "Holistic services",
    ],
    editorialCopy:
      "Wellness is personal. LOVA highlights studios, spas, and services that feel worth seeking out — places where care, atmosphere, and consistency matter.",
    businessHeading: "Own a wellness business?",
    businessCopy:
      "LOVA helps spas, studios, and wellness practices introduce themselves to people looking for spaces and services that support how they want to feel.",
  },
  {
    slug: "fashion-retail",
    name: "Fashion & Retail",
    shortName: "Fashion & Retail",
    href: "/discover/fashion-retail",
    formValue: "Fashion & Retail",
    image: "/images/cat-fashion.jpg",
    imageWidth: 736,
    imageHeight: 981,
    imagePosition: "center center",
    readerDescriptor: "Boutiques, brands & independent finds.",
    businessDescriptor: "Boutiques, fashion brands & specialty retail",
    readerStatement:
      "Boutiques, independent brands, and retail finds worth discovering — and returning to.",
    discoverItems: [
      "Boutiques",
      "Fashion brands",
      "Accessories",
      "Jewelry",
      "Concept stores",
      "Specialty retail",
      "Independent brands",
      "Shopping destinations",
    ],
    editorialCopy:
      "LOVA is drawn to retail with point of view — boutiques and brands that feel curated, personal, and worth knowing beyond a single scroll.",
    businessHeading: "Own a fashion or retail business?",
    businessCopy:
      "From boutiques to independent brands, LOVA offers another way to introduce what you sell and who you are to people who love discovering something new.",
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    shortName: "Hospitality",
    href: "/discover/hospitality",
    formValue: "Hospitality",
    image: "/images/cat-hospitality.jpg",
    imageWidth: 735,
    imageHeight: 903,
    imagePosition: "center 55%",
    readerDescriptor: "Hotels, stays & hospitality destinations.",
    businessDescriptor: "Hotels, stays & hospitality destinations",
    readerStatement:
      "Places to stay and experience — hospitality with atmosphere, intention, and a sense of place.",
    discoverItems: [
      "Hotels",
      "Boutique hotels",
      "Resorts",
      "Stays",
      "Hospitality destinations",
      "Hospitality concepts",
    ],
    editorialCopy:
      "Hospitality is about how a place makes you feel. LOVA looks for hotels, stays, and hospitality destinations that people remember — and want to share.",
    businessHeading: "Own a hospitality business?",
    businessCopy:
      "LOVA gives hotels, stays, and hospitality concepts a way to introduce their atmosphere, experience, and point of view to new potential guests.",
  },
  {
    slug: "services",
    name: "Services",
    shortName: "Services",
    href: "/discover/services",
    formValue: "Services",
    image: "/images/cat-services.jpg",
    imageWidth: 735,
    imageHeight: 1103,
    imagePosition: "center 25%",
    imagePositionMobile: "center 20%",
    readerDescriptor: "Professionals & businesses worth knowing.",
    businessDescriptor: "Creative, professional & service-based businesses",
    readerStatement:
      "Professionals and service-based businesses worth knowing — skilled, considered, and easy to trust.",
    discoverItems: [
      "Interior designers",
      "Creative studios",
      "Consultants",
      "Real estate",
      "Professional services",
      "Creative businesses",
      "Specialists",
    ],
    editorialCopy:
      "Some of the most valuable discoveries aren’t places — they’re people and services. LOVA highlights professionals and businesses you may not have found otherwise.",
    businessHeading: "Own a service-based business?",
    businessCopy:
      "Designers, creatives, real estate professionals, and other service businesses can use LOVA as another way to introduce what they offer to potential clients.",
  },
  {
    slug: "lifestyle-experiences",
    name: "Lifestyle & Experiences",
    shortName: "Lifestyle & Experiences",
    href: "/discover/lifestyle-experiences",
    formValue: "Lifestyle & Experiences",
    image: "/images/cat-lifestyle.jpg",
    imageWidth: 736,
    imageHeight: 924,
    imagePosition: "center 45%",
    readerDescriptor: "Places, activities & experiences to discover.",
    businessDescriptor: "Places, activities, culture & lifestyle finds",
    readerStatement:
      "Places, activities, and lifestyle finds — things worth doing, seeing, and discovering.",
    discoverItems: [
      "Lifestyle destinations",
      "Activities",
      "Cultural experiences",
      "Art & culture",
      "Home & living",
      "Lifestyle brands",
      "Places worth visiting",
    ],
    editorialCopy:
      "Not everything worth knowing fits neatly into one box. LOVA makes room for places, activities, and lifestyle businesses that expand how people explore.",
    businessHeading: "Own a lifestyle or experience-based business?",
    businessCopy:
      "If you create places, activities, culture, or lifestyle offerings people love to discover, LOVA can be another place to introduce what you do.",
  },
  {
    slug: "events-entertainment",
    name: "Events & Entertainment",
    shortName: "Events & Entertainment",
    href: "/discover/events-entertainment",
    formValue: "Events & Entertainment",
    image: "/images/cat-events.jpg",
    imageWidth: 736,
    imageHeight: 1104,
    imagePosition: "center 35%",
    imagePositionMobile: "center 30%",
    readerDescriptor: "Events, venues & experiences worth discovering.",
    businessDescriptor: "Venues, planners, production & event services",
    readerStatement:
      "Events, venues, and experiences worth discovering — celebrations, gatherings, and creative production.",
    discoverItems: [
      "Event venues",
      "Event planners",
      "Florists",
      "Photographers",
      "Caterers",
      "Entertainment companies",
      "Event production",
      "Creative event services",
      "Entertainment venues",
      "Experiences",
    ],
    editorialCopy:
      "From intimate celebrations to polished productions, LOVA highlights event and entertainment businesses that help create moments worth remembering.",
    businessHeading: "Own an events or entertainment business?",
    businessCopy:
      "Venues, planners, florists, photographers, caterers, production companies, and related creative services can use LOVA to introduce what they offer to people planning and discovering experiences.",
  },
];

export const categorySlugs = categories.map((c) => c.slug);

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

/** Dropdown values for application form */
export const applicationCategoryOptions = [
  ...categories.map((c) => c.formValue),
  "Other",
] as const;

