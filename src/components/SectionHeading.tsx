type SectionHeadingProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  title,
  description,
  eyebrow,
  align = "left",
  tone = "light",
  className = "",
  as: Tag = "h2",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const colorClass = tone === "dark" ? "text-white" : "text-ink";
  const mutedClass = tone === "dark" ? "text-warm-muted" : "text-ink-muted";

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow ? (
        <p className={`label-caps mb-4 ${mutedClass}`}>{eyebrow}</p>
      ) : null}
      <Tag
        className={`font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.1] ${colorClass} text-balance`}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={`mt-5 text-[0.95rem] md:text-base leading-relaxed ${mutedClass} ${
            align === "center" ? "max-w-xl mx-auto" : "max-w-lg"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
