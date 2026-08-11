export const siteConfig = {
  name: "LOVA",
  fullName: "LOVA Magazine",
  tagline: "Discover Businesses You’ll Love.",
  description:
    "LOVA is a discovery publication curating businesses, places, products, experiences, and services worth knowing.",
  email: "hello@lovamagazine.com",
  url: "https://lovamagazine.com",
  instagram: "https://www.instagram.com/thelovamagazine/",
  instagramHandle: "@thelovamagazine",
  issue: "Issue 001 — Coming Soon",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/discover", label: "Discover" },
  { href: "/be-featured#application", label: "Be Featured" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

/** Canonical destination for every Be Featured / apply CTA */
export const beFeaturedApplyHref = "/be-featured#application";

export type FaqGroup = {
  id: string;
  label: string;
  items: { question: string; answer: string }[];
};

export const faqGroups: FaqGroup[] = [
  {
    id: "about",
    label: "About LOVA",
    items: [
      {
        question: "What is LOVA?",
        answer:
          "LOVA is a discovery publication curating businesses, places, products, experiences, and services worth knowing. It was created primarily for women looking for a more intentional way to find what’s worth discovering.",
      },
      {
        question: "Who is LOVA for?",
        answer:
          "LOVA is for readers who want an easier way to discover restaurants, beauty destinations, boutiques, wellness spaces, hospitality, services, lifestyle experiences, and events — and for businesses that want another place to introduce what they do.",
      },
      {
        question: "What types of businesses does LOVA feature?",
        answer:
          "LOVA features businesses across dining, beauty, wellness, fashion and retail, hospitality, services, lifestyle and experiences, and events and entertainment. Categories are a guide — not a hard limit.",
      },
      {
        question: "What industries does LOVA cover?",
        answer:
          "Dining, Beauty, Wellness, Fashion & Retail, Hospitality, Services, Lifestyle & Experiences, and Events & Entertainment. If your business doesn’t fit neatly into one category, you’re still welcome to apply.",
      },
      {
        question: "Is LOVA limited to certain industries?",
        answer:
          "No. The eight sectors help organize discovery, but LOVA remains open to businesses that feel like a strong editorial fit — even when they sit outside a single category.",
      },
    ],
  },
  {
    id: "businesses",
    label: "For Businesses",
    items: [
      {
        question: "How can my business be featured?",
        answer:
          "Submit an application through the Be Featured page. Our team reviews submissions and contacts selected businesses with available feature opportunities for Issue 001.",
      },
      {
        question: "What information do I need to submit?",
        answer:
          "You’ll share your business name, contact details, location, industry, and a short description of what you do. Website and social links are helpful but optional.",
      },
      {
        question: "Can newly opened businesses apply?",
        answer:
          "Yes. Newly opened businesses may apply. Each submission is reviewed individually.",
      },
      {
        question: "Can established businesses apply?",
        answer:
          "Yes. Established businesses are welcome to apply.",
      },
      {
        question: "Can online businesses or brands apply?",
        answer:
          "Yes. Online businesses and brands may apply. Fit for LOVA is determined during review.",
      },
      {
        question: "Can service-based businesses apply?",
        answer:
          "Yes. Service-based businesses are welcome to apply.",
      },
      {
        question: "Can event businesses apply?",
        answer:
          "Yes. Event venues, planners, florists, photographers, caterers, production companies, entertainment businesses, and related creative services may apply under Events & Entertainment — or under another sector if that fits more closely.",
      },
      {
        question: "Where will featured businesses appear?",
        answer:
          "Selected businesses may appear in LOVA’s editorial discovery content as Issue 001 develops. Specific placements and formats vary by opportunity and are shared after review.",
      },
      {
        question: "What happens after I submit an application?",
        answer:
          "Our team reviews your application. If your business is selected for a feature opportunity, we will follow up with next steps and available options. Not every applicant will be contacted.",
      },
      {
        question: "Does submitting an application guarantee a feature?",
        answer:
          "No. Applications are reviewed to determine whether a business is a fit for LOVA before any feature opportunity is offered.",
      },
      {
        question: "Can I submit more than one business?",
        answer:
          "Yes. Please submit a separate application for each business.",
      },
    ],
  },
  {
    id: "issue",
    label: "Issue 001",
    items: [
      {
        question: "When is Issue 001 coming out?",
        answer:
          "Issue 001 is currently in development. Release details will be announced through LOVA’s website and social channels.",
      },
      {
        question: "Where will LOVA be available?",
        answer:
          "Distribution details for Issue 001 will be announced as the first edition approaches launch.",
      },
      {
        question: "What will Issue 001 include?",
        answer:
          "The first edition will bring together businesses across dining, beauty, wellness, fashion and retail, hospitality, services, lifestyle and experiences, events and entertainment, and more.",
      },
      {
        question: "How can I know when it launches?",
        answer:
          "Follow LOVA on Instagram (@thelovamagazine) and check back on the website. You can also join the email list in the footer to be notified when Issue 001 launches.",
      },
    ],
  },
  {
    id: "general",
    label: "General",
    items: [
      {
        question: "How can I contact LOVA?",
        answer:
          "Visit the Contact page or email hello@lovamagazine.com for general questions, partnerships, and editorial inquiries. For business features, use the Be Featured application.",
      },
      {
        question: "How can I stay updated?",
        answer:
          "Follow LOVA on Instagram (@thelovamagazine) and join the email list on the website for updates as Issue 001 develops.",
      },
    ],
  },
];

/** Flat list for homepage preview */
export const faqPreview = faqGroups[0].items.slice(0, 4);

export const beFeaturedFaqItems = faqGroups[1].items.filter((item) =>
  [
    "How can my business be featured?",
    "What information do I need to submit?",
    "Does submitting an application guarantee a feature?",
    "What happens after I submit an application?",
    "Can event businesses apply?",
  ].includes(item.question)
);
