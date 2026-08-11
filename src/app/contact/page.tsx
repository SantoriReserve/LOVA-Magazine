import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { CTA } from "@/components/CTA";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact LOVA Magazine for general questions, partnerships, editorial inquiries, or anything else.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-ivory">
        <div className="editorial-container pt-28 pb-10 md:pt-36 md:pb-12">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink">
              Contact LOVA
            </h1>
            <p className="mt-5 text-[0.95rem] text-ink-muted leading-relaxed">
              For general questions, partnerships, editorial inquiries, or
              anything else, get in touch below.
            </p>
            <p className="mt-4 text-sm text-ink-muted">
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:opacity-60 transition-opacity"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory border-b border-line">
        <div className="editorial-container pb-16 md:pb-20">
          <div className="mx-auto max-w-xl">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="editorial-container py-12 md:py-14">
          <div className="mx-auto max-w-xl text-center">
            <p className="label-caps text-ink-muted mb-3">
              Interested in being featured?
            </p>
            <p className="text-[0.95rem] text-ink-muted leading-relaxed mb-6">
              If you’d like your business considered for LOVA, use our business
              application instead.
            </p>
            <CTA href="/be-featured#application" variant="text">
              Apply to Be Featured →
            </CTA>
          </div>
        </div>
      </section>
    </>
  );
}
