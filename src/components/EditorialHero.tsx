type EditorialHeroProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  children?: React.ReactNode;
};

export function EditorialHero({
  title,
  description,
  eyebrow,
  children,
}: EditorialHeroProps) {
  return (
    <section className="bg-ivory border-b border-line">
      <div className="editorial-container pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="max-w-2xl">
          {eyebrow ? (
            <p className="label-caps text-ink-muted mb-5">{eyebrow}</p>
          ) : null}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-ink">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-xl text-[0.95rem] md:text-base text-ink-muted leading-relaxed">
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
