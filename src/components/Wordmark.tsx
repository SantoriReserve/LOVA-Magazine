import Link from "next/link";

type WordmarkProps = {
  href?: string | false;
  className?: string;
  size?: "nav" | "hero" | "footer" | "inline";
  as?: "h1" | "p" | "span";
};

const sizeClasses = {
  nav: "text-[1.65rem] md:text-[1.85rem] tracking-[0.04em]",
  hero: "text-[clamp(3.5rem,16vw,11.5rem)] leading-[0.85] tracking-[0.01em]",
  footer: "text-3xl md:text-[2.5rem] tracking-[0.04em]",
  inline: "text-[1.15em] tracking-[0.03em]",
};

/**
 * Official LOVA wordmark.
 * Prefers "The Seasons" via @font-face; falls back to Cormorant Garamond
 * until the licensed file is added to /public/fonts/the-seasons/.
 */
export function Wordmark({
  href = "/",
  className = "",
  size = "nav",
  as: Tag = "span",
}: WordmarkProps) {
  const classes = `font-wordmark ${sizeClasses[size]} ${className}`.trim();
  const content = <Tag className={classes}>LOVA</Tag>;

  if (href === false) return content;

  return (
    <Link
      href={href}
      className="inline-block text-inherit"
      aria-label="LOVA Magazine home"
    >
      {content}
    </Link>
  );
}
