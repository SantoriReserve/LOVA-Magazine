"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type CTAProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline-light" | "ghost" | "text";
  className?: string;
  size?: "default" | "large";
};

const variants = {
  primary: "bg-ink text-white border border-ink hover:bg-ink-soft",
  secondary: "bg-transparent text-ink border border-ink hover:bg-ink hover:text-white",
  "outline-light":
    "bg-transparent text-white border border-white hover:bg-white hover:text-ink",
  ghost:
    "bg-transparent text-ink border border-transparent underline underline-offset-4 decoration-1 hover:opacity-60",
  text: "bg-transparent text-ink border-0 px-0 py-0 tracking-[0.16em] hover:opacity-60",
};

function scrollToHashTarget(href: string, pathname: string) {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return false;

  const beforeHash = href.slice(0, hashIndex);
  const hash = href.slice(hashIndex + 1);
  const path = beforeHash.split("?")[0] || pathname;

  if (path !== pathname) return false;

  const el = document.getElementById(hash);
  if (!el) return false;

  window.history.pushState(null, "", href.includes("?") ? href : `${pathname}#${hash}`);
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

export function CTA({
  href,
  children,
  variant = "primary",
  className = "",
  size = "default",
}: CTAProps) {
  const pathname = usePathname();
  const sizeClass =
    variant === "text"
      ? "text-[0.68rem]"
      : size === "large"
        ? "px-8 py-3.5 text-[0.68rem] tracking-[0.18em]"
        : "px-6 py-3 text-[0.65rem] tracking-[0.16em]";

  return (
    <Link
      href={href}
      onClick={(event) => {
        if (scrollToHashTarget(href, pathname)) {
          event.preventDefault();
        }
      }}
      className={`inline-flex items-center justify-center uppercase font-medium rounded-none transition-colors duration-200 ${
        variant === "text" ? "" : "w-full sm:w-auto min-h-[44px]"
      } ${variants[variant]} ${sizeClass} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  className = "",
  size = "default",
  type = "submit",
  disabled = false,
}: {
  children: React.ReactNode;
  variant?: CTAProps["variant"];
  className?: string;
  size?: CTAProps["size"];
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}) {
  const sizeClass =
    size === "large"
      ? "px-8 py-3.5 text-[0.68rem] tracking-[0.18em]"
      : "px-6 py-3 text-[0.65rem] tracking-[0.16em]";

  return (
    <button
      type={type}
      disabled={disabled}
      className={`inline-flex items-center justify-center uppercase font-medium rounded-none transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant ?? "primary"]} ${sizeClass} ${className}`}
    >
      {children}
    </button>
  );
}
