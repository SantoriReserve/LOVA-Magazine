"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Ensures /be-featured#application lands on the form, including same-page CTA clicks.
 * Accounts for sticky header via CSS scroll-margin-top on #application.
 */
export function ApplicationHashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    function scrollToApplication() {
      if (typeof window === "undefined") return;
      if (window.location.hash !== "#application") return;
      const el = document.getElementById("application");
      if (!el) return;
      // Defer until layout is ready (fixed header + form)
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    scrollToApplication();
    window.addEventListener("hashchange", scrollToApplication);
    return () => window.removeEventListener("hashchange", scrollToApplication);
  }, [pathname]);

  return null;
}
