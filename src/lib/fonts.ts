import { Cormorant_Garamond, Outfit } from "next/font/google";

/**
 * Body / UI — clean modern sans
 */
export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
});

/**
 * Temporary display/wordmark serif until The Seasons is installed.
 * Only loads the weights actually used — keeps first paint fast.
 */
export const displaySerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal"],
  variable: "--font-display-fallback",
  display: "swap",
  preload: true,
});
