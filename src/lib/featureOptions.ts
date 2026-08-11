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
    id: "quarter-page",
    name: "Quarter Page",
    price: 250,
    priceLabel: "$250",
    summary:
      "A concise introduction to your business within LOVA Issue 001.",
    includes: [
      "Quarter-page placement",
      "Business name",
      "Short business description",
      "Selected imagery where space allows",
      "Relevant business information such as website or social media",
    ],
    bestFor:
      "Best for businesses looking for a simple, concise introduction within LOVA.",
  },
  {
    id: "half-page",
    name: "Half Page",
    price: 375,
    priceLabel: "$375",
    summary:
      "Additional space for imagery and information, giving readers a more complete introduction to your business.",
    includes: [
      "Half-page placement",
      "Business name",
      "Expanded business description",
      "Selected imagery",
      "Relevant business information such as website or social media",
    ],
    bestFor:
      "Best for businesses that want additional room for imagery and information.",
  },
  {
    id: "full-page",
    name: "Full Page",
    price: 700,
    priceLabel: "$700",
    summary:
      "A dedicated page offering the most space to showcase your business through imagery, information, and a stronger visual presence.",
    includes: [
      "Dedicated full-page placement",
      "Business name",
      "Expanded business introduction",
      "Larger editorial imagery",
      "Relevant business information such as website or social media",
    ],
    bestFor:
      "Best for businesses that want a dedicated page and the greatest amount of space to present their business.",
  },
];

export const featureInterestOptions = [
  "Quarter Page — $250",
  "Half Page — $375",
  "Full Page — $700",
  "Not Sure Yet",
] as const;

export const featureOptionsHref = "/feature-options";
export const applyHref = beFeaturedApplyHref;

export const featureStartingPrice = "$250";
