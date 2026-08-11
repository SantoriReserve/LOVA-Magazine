import type { Metadata } from "next";
import Image from "next/image";
import { EditorialHero } from "@/components/EditorialHero";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "LOVA is a discovery publication created to make finding businesses worth knowing easier — for readers and for businesses.",
};

export default function AboutPage() {
  return (
    <>
      <EditorialHero
        title="About LOVA"
        description="Discover Businesses You’ll Love."
      />

      <section className="bg-ivory border-b border-line">
        <div className="editorial-container py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="label-caps text-ink-muted">What is LOVA?</p>
            </div>
            <div className="lg:col-span-7 space-y-5 text-[0.95rem] md:text-base text-ink-muted leading-relaxed">
              <p>
                LOVA is a discovery publication created to make finding
                businesses worth knowing easier.
              </p>
              <p>
                It brings businesses, places, products, experiences, and
                services together in one curated editorial guide — created
                primarily for women.
              </p>
            </div>
          </div>

          <div className="divider my-14 md:my-16" />

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="label-caps text-ink-muted">Why LOVA?</p>
            </div>
            <div className="lg:col-span-7 space-y-5 text-[0.95rem] md:text-base text-ink-muted leading-relaxed">
              <p>
                Great businesses exist everywhere, but discovering them isn’t
                always simple. Recommendations, word of mouth, social media, and
                chance still shape how most people find somewhere new.
              </p>
              <p>
                LOVA creates another dedicated place for discovery — intentional,
                curated, and easy to return to.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-line">
        <div className="editorial-container py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-5">
                For readers
              </h2>
              <p className="text-ink-muted text-[0.95rem] leading-relaxed">
                LOVA creates one place to discover restaurants, beauty
                destinations, boutiques, wellness spaces, hospitality, services,
                lifestyle experiences, events, and businesses they may otherwise
                miss.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-ink mb-5">
                For businesses
              </h2>
              <p className="text-ink-muted text-[0.95rem] leading-relaxed">
                LOVA gives businesses another place to introduce themselves,
                tell people what they offer, and reach potential customers
                through a publication built around discovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="editorial-container py-16 md:py-24">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl md:text-4xl mb-6">Issue 001</h2>
            <p className="text-warm-muted text-[0.95rem] leading-relaxed">
              The first edition is currently being developed. It will bring
              together businesses across dining, beauty, wellness, fashion &
              retail, hospitality, services, lifestyle & experiences, events &
              entertainment, and more. LOVA also offers paid feature
              opportunities for selected businesses.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <CTA href="/be-featured#application" variant="outline-light">
                Be Featured
              </CTA>
              <CTA href="/feature-options" variant="outline-light">
                Feature Options
              </CTA>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="editorial-container py-16 md:py-24">
          <div className="relative aspect-[4/5] sm:aspect-[16/10] max-w-4xl img-frame mb-10 sm:mb-12">
            <Image
              src="/images/editorial-about.jpg"
              alt="Curating an editorial mood board"
              fill
              className="object-cover"
              style={{ objectPosition: "center 30%" }}
              sizes="(max-width: 1024px) 100vw, 80vw"
            />
          </div>
          <p className="font-display text-2xl md:text-3xl text-ink max-w-md leading-snug">
            Places. People. Businesses.
          </p>
        </div>
      </section>
    </>
  );
}
