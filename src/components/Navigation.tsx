"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { navLinks, beFeaturedApplyHref } from "@/lib/site";
import { Wordmark } from "@/components/Wordmark";

function pathOnly(href: string) {
  return href.split("#")[0] || "/";
}

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setOpen((wasOpen) => !wasOpen);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const isActive = (href: string) => {
    const path = pathOnly(href);
    return path === "/" ? pathname === "/" : pathname.startsWith(path);
  };

  const handleApplyClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      setOpen(false);
      if (pathname !== "/be-featured") return;
      event.preventDefault();
      window.history.pushState(null, "", beFeaturedApplyHref);
      document
        .getElementById("application")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [pathname]
  );

  /* Mount menu only while open — less paint work when closed */
  const menuPanel =
    mounted &&
    open &&
    createPortal(
      <div
        id={menuId}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className="lg:hidden fixed inset-0 z-[200] bg-ivory pt-16"
      >
        <div className="editorial-container flex h-[calc(100dvh-4rem)] flex-col overflow-y-auto overscroll-contain py-6 pb-10">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-line">
                <Link
                  href={link.href}
                  prefetch
                  onClick={
                    pathOnly(link.href) === "/be-featured"
                      ? handleApplyClick
                      : closeMenu
                  }
                  className={`block py-4 text-[0.75rem] uppercase tracking-[0.16em] touch-manipulation ${
                    isActive(link.href) ? "text-ink" : "text-ink-muted"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-10">
            <Link
              href={beFeaturedApplyHref}
              prefetch
              onClick={handleApplyClick}
              className="inline-flex w-full items-center justify-center px-6 py-3.5 text-[0.65rem] uppercase tracking-[0.16em] bg-ink text-white min-h-[48px] touch-manipulation"
            >
              Be Featured
            </Link>
          </div>
        </div>
      </div>,
      document.body
    );

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[210] border-b border-line bg-ivory">
        <nav className="editorial-container flex h-16 items-center justify-between md:h-[4.25rem]">
          <Wordmark size="nav" />

          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 xl:gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  prefetch
                  onClick={
                    pathOnly(link.href) === "/be-featured"
                      ? handleApplyClick
                      : undefined
                  }
                  className={`text-[0.62rem] uppercase tracking-[0.18em] transition-opacity hover:opacity-50 ${
                    isActive(link.href) ? "opacity-100" : "opacity-55"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link
              href={beFeaturedApplyHref}
              prefetch
              onClick={handleApplyClick}
              className="border border-ink px-4 py-2 text-[0.62rem] uppercase tracking-[0.16em] transition-colors duration-200 hover:bg-ink hover:text-white"
            >
              Be Featured
            </Link>
          </div>

          <button
            type="button"
            className="relative z-[220] -mr-1 flex h-12 w-12 touch-manipulation flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={toggleMenu}
          >
            <span
              aria-hidden
              className={`block h-px w-5 bg-ink transition-transform duration-200 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              aria-hidden
              className={`block h-px w-5 bg-ink transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              aria-hidden
              className={`block h-px w-5 bg-ink transition-transform duration-200 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {menuPanel}
    </>
  );
}
