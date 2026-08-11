import { beFeaturedApplyHref } from "@/lib/site";

export type FeatureOption = {
  id: string;
  name: string;
  price: number;
  priceLabel: string;
  summary: string;
  includes: string[];
  bestFor: string;
};

/** Single source of truth for Issue 001 paid feature options */
export const featureOptions: FeatureOption[] = [
  {
    id: "business",
    name: "Business Feature",
    price: 250,
    priceLabel: "$250",
    summary:
      "A curated half-page introduction to your business within LOVA Issue 001. Designed for businesses that want a concise, visually polished presence within the publication.",
    includes: [
      "Half-page placement",
      "Business name",
      "Business description",
      "Selected imagery",
      "Website / social information where appropriate",
    ],
    bestFor:
      "Best for businesses looking for a concise introduction within the publication.",
  },
  {
    id: "full-page",
    name: "Full-Page Feature",
    price: 450,
    priceLabel: "$450",
    summary:
      "A dedicated full-page feature offering additional space to introduce your business, what you offer, and what makes it worth discovering.",
    includes: [
      "Dedicated full-page placement",
      "Expanded business introduction",
      "Larger editorial imagery",
      "Business information",
      "Website / social information where appropriate",
    ],
    bestFor:
      "Best for businesses that want more room for imagery, information, and a more substantial introduction.",
  },
  {
    id: "premier",
    name: "Premier Feature",
    price: 650,
    priceLabel: "$650",
    summary:
      "An elevated full-page feature with premium positioning within LOVA Issue 001.",
    includes: [
      "Dedicated full-page placement",
      "Expanded business introduction",
      "Larger editorial imagery",
      "Business information",
      "Website / social information where appropriate",
      "Priority positioning within the issue",
    ],
    bestFor:
      "Best for businesses looking for a larger editorial presence with priority positioning within the issue.",
  },
];

export const featureInterestOptions = [
  "Business Feature — $250",
  "Full-Page Feature — $450",
  "Premier Feature — $650",
  "Not Sure Yet",
] as const;

export const featureOptionsHref = "/feature-options";
export const applyHref = beFeaturedApplyHref;

export const featureStartingPrice = "$250";
