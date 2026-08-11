import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Wordmark } from "@/components/Wordmark";
import { FAQAccordion } from "@/components/FAQAccordion";
import { categories } from "@/lib/categories";
import { faqPreview, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "LOVA Magazine | Discover Businesses You’ll Love",
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-ivory min-h-[min(88svh,920px)] flex items-center border-b border-line">
        <div className="editorial-container w-full py-20 sm:py-24 md:py-32 text-center">
          <Wordmark href={false} size="hero" as="h1" className="text-ink" />

          <p className="mt-8 sm:mt-10 md:mt-12 font-display text-[1.65rem] sm:text-3xl md:text-[2.15rem] text-ink leading-snug px-2">
            Discover Businesses You’ll Love.
          </p>

          <p className="mt-5 sm:mt-6 mx-auto max-w-md text-sm md:text-[0.95rem] text-ink-muted leading-relaxed px-1">
            A discovery publication for women, curating businesses, places,
            products, services, and experiences worth knowing.
          </p>

          <p className="mt-8 sm:mt-10 label-caps text-ink-muted">
            Issue 001 — Coming Soon
          </p>

          <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-sm sm:max-w-none mx-auto">
            <CTA href="/about">Discover LOVA</CTA>
            <CTA href="/be-featured#application" variant="secondary">
              Be Featured
            </CTA>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL FIND */}
      <section id="explore" className="bg-ivory scroll-mt-20 border-b border-line">
        <div className="editorial-container section-pad">
          <div className="max-w-xl mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-display text-2xl sm:text-3xl text-ink leading-snug">
              What You’ll Find in LOVA
            </h2>
            <p className="mt-3 sm:mt-4 text-sm text-ink-muted leading-relaxed max-w-sm">
              A curated guide to businesses, places, and services worth
              discovering.
            </p>
            <div className="mt-5 sm:mt-6">
              <CTA href="/discover" variant="text">
                Explore all sectors →
              </CTA>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-7 sm:gap-x-5 sm:gap-y-9">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={category.href}
                className="group block min-w-0"
              >
                <div className="relative aspect-[3/4] img-frame">
                  <Image
                    src={category.image}
                    alt={`${category.name} — curated in LOVA`}
                    fill
                    className="object-cover img-hover-zoom"
                    style={{
                      objectPosition:
                        category.imagePositionMobile ||
                        category.imagePosition ||
                        "center",
                    }}
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    quality={80}
                    loading="lazy"
                  />
                </div>
                <p className="mt-2.5 sm:mt-3 label-caps text-ink tracking-[0.12em] sm:tracking-[0.14em] text-[0.58rem] sm:text-[0.65rem] leading-snug">
                  {category.shortName}
                </p>
                <p className="mt-1 sm:mt-1.5 text-[0.68rem] sm:text-[0.7rem] text-ink-muted leading-snug">
                  {category.readerDescriptor.replace(/\.$/, "")} →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DISCOVERY SPREAD */}
      <section className="bg-white border-b border-line">
        <div className="editorial-container section-pad">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-ink leading-[1.05]">
                Find your
                <br />
                next favorite.
              </h2>
              <div className="mt-6 sm:mt-8 space-y-4 text-ink-muted text-sm sm:text-[0.95rem] leading-relaxed max-w-sm">
                <p>
                  There’s always a new restaurant to try, a beauty spot to book,
                  a boutique to shop, or a business you haven’t discovered yet.
                </p>
                <p>
                  LOVA brings them together so finding something new is a little
                  easier.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/5] sm:aspect-[16/10] img-frame">
                <Image
                  src="/images/editorial-dining.jpg"
                  alt="An evening toast over a curated dining table"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 35%" }}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  quality={85}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLACK BUSINESS SECTION */}
      <section className="bg-ink text-white">
        <div className="editorial-container section-pad">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-4 hidden lg:block">
              <div className="relative aspect-[4/5] img-frame">
                <Image
                  src="/images/editorial-featured.jpg"
                  alt="A professional preparing work in a refined setting"
                  fill
                  className="object-cover opacity-90"
                  style={{ objectPosition: "center 20%" }}
                  sizes="30vw"
                  quality={80}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="w-12 h-px bg-white/40 mb-6 sm:mb-8" />
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.1] text-balance">
                Your business deserves to be seen.
              </h2>
              <div className="mt-6 sm:mt-7 space-y-4 text-warm-muted text-sm sm:text-[0.95rem] leading-relaxed max-w-lg">
                <p>
                  Building a great business is only part of the equation. The
                  right people also need to know it exists.
                </p>
                <p>
                  LOVA gives businesses another opportunity to introduce
                  themselves to potential customers through a publication built
                  around discovery.
                </p>
              </div>
              <div className="mt-8 sm:mt-9">
                <CTA href="/be-featured#application" variant="outline-light">
                  Be Featured
                </CTA>
              </div>
              <p className="mt-6 sm:mt-8 label-caps text-warm-muted tracking-[0.2em]">
                Business features for Issue 001 are now open.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IS YOUR BUSINESS A FIT */}
      <section className="bg-ivory border-b border-line">
        <div className="editorial-container section-pad">
          <div className="max-w-2xl mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-ink leading-[1.1]">
              Is your business a fit for LOVA?
            </h2>
            <p className="mt-4 sm:mt-5 text-sm sm:text-[0.95rem] text-ink-muted leading-relaxed max-w-lg">
              LOVA features businesses across a wide range of industries. If you
              have a business, place, product, experience, or service you want
              more people to discover, there’s a place for it in LOVA.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-8">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={category.href}
                className="group border-t border-line py-4 sm:py-5 hover:opacity-70 transition-opacity"
              >
                <p className="text-[0.68rem] sm:text-[0.72rem] uppercase tracking-[0.14em] text-ink">
                  {category.name}
                </p>
                <p className="mt-2 text-sm text-ink-muted leading-snug">
                  {category.businessDescriptor}
                </p>
                <p className="mt-3 text-[0.65rem] uppercase tracking-[0.16em] text-ink">
                  Learn more →
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-line max-w-xl">
            <p className="label-caps text-ink-muted mb-3">
              Don’t see your industry?
            </p>
            <p className="text-sm sm:text-[0.95rem] text-ink-muted leading-relaxed mb-6">
              LOVA isn’t limited to the categories above. If you believe your
              business belongs in a publication built around discovery, we’d
              still like to hear from you.
            </p>
            <CTA href="/be-featured#application" variant="text">
              Apply to Be Featured →
            </CTA>
          </div>
        </div>
      </section>

      {/* ISSUE 001 */}
      <section className="bg-white border-b border-line">
        <div className="editorial-container section-pad">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/5] md:aspect-[5/6] img-frame">
                <Image
                  src="/images/editorial-issue.jpg"
                  alt="Editorial lifestyle moment — Issue 001 coming soon"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 30%" }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={80}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-ink leading-[1.05]">
                Issue 001
                <br />
                Coming Soon.
              </h2>
              <p className="mt-4 sm:mt-5 text-sm text-ink-muted tracking-wide">
                Places. People. Businesses.
              </p>
              <p className="mt-5 sm:mt-6 text-sm sm:text-[0.95rem] text-ink-muted leading-relaxed max-w-sm">
                The first edition of LOVA will bring together businesses across
                dining, beauty, wellness, fashion & retail, hospitality,
                services, lifestyle & experiences, and events & entertainment.
              </p>
              <div className="mt-8 sm:mt-9">
                <CTA href="/be-featured#application">Be Part of Issue 001</CTA>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="bg-ivory">
        <div className="editorial-container section-pad">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-ink leading-snug">
                Questions?
                <br />
                We’ve got answers.
              </h2>
              <div className="mt-5 sm:mt-6">
                <CTA href="/faq" variant="text">
                  View all FAQs →
                </CTA>
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <FAQAccordion items={faqPreview} defaultOpen={0} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
