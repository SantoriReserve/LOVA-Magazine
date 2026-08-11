import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { EditorialHero } from "@/components/EditorialHero";
import { ApplicationForm } from "@/components/ApplicationForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTA } from "@/components/CTA";
import { categories } from "@/lib/categories";
import { beFeaturedFaqItems } from "@/lib/site";
import { ApplicationHashScroll } from "@/components/ApplicationHashScroll";

export const metadata: Metadata = {
  title: "Be Featured",
  description:
    "Apply to have your business featured in LOVA Magazine Issue 001. Business features are now open.",
};

const steps = [
  {
    number: "01",
    title: "Apply",
    description: "Tell us about your business.",
  },
  {
    number: "02",
    title: "Review",
    description:
      "LOVA reviews submissions for fit with the publication.",
  },
  {
    number: "03",
    title: "Next Steps",
    description:
      "Selected businesses will receive additional information regarding the feature opportunity and Issue 001.",
  },
] as const;

export default function BeFeaturedPage() {
  return (
    <>
      <ApplicationHashScroll />
      <EditorialHero
        title="Get Your Business Discovered."
        description="LOVA gives businesses a simple way to introduce what they do to new potential customers through a publication built around discovery."
      >
        <p className="label-caps text-ink-muted">
          Business features for Issue 001 are now open.
        </p>
      </EditorialHero>

      <section className="bg-ivory border-b border-line">
        <div className="editorial-container py-14 md:py-16 max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl text-ink mb-5">
            Why LOVA
          </h2>
          <div className="space-y-4 text-[0.95rem] text-ink-muted leading-relaxed">
            <p>
              Building a great business is only part of the equation. The right
              people also need to know it exists.
            </p>
            <p>
              A LOVA feature gives your business a dedicated place to share what
              you offer — within a publication designed for discovery, not
              noise.
            </p>
            <p className="text-sm">
              Submitting an application does not guarantee placement. Feature
              opportunities are shared with selected businesses after review.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-line">
        <div className="editorial-container py-14 md:py-16">
          <h2 className="font-display text-2xl md:text-3xl text-ink mb-8">
            Who We Feature
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-8">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={category.href}
                className="border-t border-line py-4 hover:opacity-70 transition-opacity"
              >
                <p className="text-[0.68rem] sm:text-[0.72rem] uppercase tracking-[0.14em] text-ink">
                  {category.name}
                </p>
                <p className="mt-2 text-sm text-ink-muted">
                  {category.businessDescriptor}
                </p>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-muted max-w-lg">
            Don’t see your exact industry? You’re still welcome to apply —
            categories are a guide, not a limit.
          </p>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="editorial-container py-14 md:py-20">
          <h2 className="font-display text-3xl md:text-4xl mb-3">How It Works</h2>
          <p className="text-warm-muted mb-10 max-w-lg text-sm">
            A simple process. Applying does not guarantee publication.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div key={step.number} className="border-t border-line-dark pt-7">
                <p className="label-caps text-warm-muted mb-4">{step.number}</p>
                <h3 className="font-display text-2xl md:text-3xl mb-3">
                  {step.title}
                </h3>
                <p className="text-warm-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="application"
        className="bg-ivory scroll-mt-24 md:scroll-mt-28 border-b border-line"
      >
        <div className="editorial-container py-14 md:py-20">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display text-3xl md:text-4xl text-ink">
              Apply to Be Featured
            </h2>
            <p className="mt-5 text-ink-muted text-[0.95rem] leading-relaxed">
              Tell us about your business. Selected businesses will receive
              additional information about Issue 001 feature opportunities.
            </p>
          </div>
          <div className="max-w-2xl">
            <Suspense
              fallback={
                <p className="text-sm text-ink-muted">Loading application…</p>
              }
            >
              <ApplicationForm />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="editorial-container py-14 md:py-16">
          <h2 className="font-display text-2xl md:text-3xl text-ink mb-6">
            FAQ
          </h2>
          <div className="max-w-2xl">
            <FAQAccordion items={beFeaturedFaqItems} defaultOpen={0} />
          </div>
          <div className="mt-8">
            <CTA href="/faq" variant="text">
              View all FAQs →
            </CTA>
          </div>
        </div>
      </section>
    </>
  );
}
