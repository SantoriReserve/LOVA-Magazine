import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import {
  categories,
  categorySlugs,
  getCategoryBySlug,
  type CategorySlug,
} from "@/lib/categories";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categorySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Discover" };

  return {
    title: category.name,
    description: category.readerStatement,
  };
}

export default async function DiscoverCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const applyHref = `/be-featured?category=${encodeURIComponent(category.formValue)}#application`;

  return (
    <>
      {/* Editorial intro — compact image + copy (not a hero banner) */}
      <section className="bg-ivory border-b border-line">
        <div className="editorial-container pt-24 pb-12 sm:pt-28 sm:pb-14 md:pt-36 md:pb-20">
          <p className="label-caps text-ink-muted mb-8 md:mb-10">Discover</p>

          <div className="grid md:grid-cols-12 gap-8 md:gap-10 lg:gap-14 items-start max-w-5xl">
            {/* Image — ~homepage grid scale; never full-width hero */}
            <div className="md:col-span-5 lg:col-span-4 order-2 md:order-1">
              <figure className="img-frame relative mx-auto md:mx-0 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] aspect-[3/4]">
                <Image
                  src={category.image}
                  alt={`${category.name} — LOVA discovery`}
                  fill
                  quality={85}
                  priority
                  sizes="(max-width: 768px) 280px, 360px"
                  className="object-cover"
                  style={{
                    objectPosition:
                      category.imagePositionMobile ||
                      category.imagePosition ||
                      "center",
                  }}
                />
              </figure>
            </div>

            {/* Copy */}
            <div className="md:col-span-7 lg:col-span-8 order-1 md:order-2 md:pt-2">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink tracking-[0.02em] uppercase leading-[1.05]">
                {category.name}
              </h1>
              <p className="mt-4 sm:mt-5 max-w-md text-sm sm:text-[0.95rem] text-ink-muted leading-relaxed">
                {category.readerDescriptor}
              </p>
              <p className="mt-5 sm:mt-6 max-w-lg text-sm sm:text-[0.95rem] text-ink-muted leading-relaxed">
                {category.readerStatement}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-line">
        <div className="editorial-container section-pad">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14">
            <div className="lg:col-span-4">
              <h2 className="font-display text-2xl md:text-3xl text-ink">
                What You’ll Discover
              </h2>
              <p className="mt-4 text-sm text-ink-muted leading-relaxed max-w-xs">
                For readers exploring something new — and for businesses that
                belong in this world.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid sm:grid-cols-2 gap-x-10">
                {category.discoverItems.map((item) => (
                  <li
                    key={item}
                    className="border-t border-line py-3.5 text-[0.72rem] sm:text-[0.8rem] uppercase tracking-[0.12em] text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 sm:mt-10 text-sm sm:text-[0.95rem] text-ink-muted leading-relaxed max-w-lg">
                {category.editorialCopy}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="editorial-container section-pad">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-snug">
              {category.businessHeading}
            </h2>
            <p className="mt-5 sm:mt-6 text-warm-muted text-sm sm:text-[0.95rem] leading-relaxed">
              {category.businessCopy}
            </p>
            <div className="mt-8 sm:mt-9">
              <CTA href={applyHref} variant="outline-light">
                Apply to Be Featured →
              </CTA>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="editorial-container py-12 sm:py-14 md:py-16">
          <p className="label-caps text-ink-muted mb-5 sm:mb-6">
            Explore other sectors
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-8">
            {categories
              .filter((c) => c.slug !== (slug as CategorySlug))
              .map((c) => (
                <li key={c.slug} className="border-t border-line">
                  <Link
                    href={c.href}
                    className="flex items-center justify-between gap-4 py-4 text-[0.7rem] sm:text-[0.75rem] uppercase tracking-[0.14em] text-ink hover:opacity-60 transition-opacity"
                  >
                    <span>{c.name}</span>
                    <span aria-hidden>→</span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </>
  );
}
