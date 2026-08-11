import type { Metadata } from "next";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTA } from "@/components/CTA";
import { faqGroups } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Everything you need to know about LOVA, Issue 001, discovering businesses, and being featured.",
};

export default function FAQPage() {
  return (
    <>
      <section className="bg-ivory border-b border-line">
        <div className="editorial-container pt-28 pb-12 md:pt-36 md:pb-16">
          <div className="mx-auto max-w-[880px] text-center">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink">
              FAQ
            </h1>
            <p className="mt-5 mx-auto max-w-lg text-[0.95rem] text-ink-muted leading-relaxed">
              Everything you need to know about LOVA, Issue 001, discovering
              businesses, and being featured.
            </p>
            <nav
              aria-label="FAQ sections"
              className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2"
            >
              {faqGroups.map((group) => (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  className="text-[0.62rem] uppercase tracking-[0.16em] text-ink-muted hover:text-ink transition-colors"
                >
                  {group.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="editorial-container pb-16 md:pb-24">
          <div className="mx-auto max-w-[880px] space-y-14">
            {faqGroups.map((group) => (
              <div key={group.id} id={group.id} className="scroll-mt-28">
                <h2 className="label-caps text-ink-muted mb-4">{group.label}</h2>
                <FAQAccordion items={group.items} defaultOpen={null} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="editorial-container py-12 md:py-14">
          <div className="mx-auto max-w-[880px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <p className="font-display text-2xl md:text-3xl">
              Still have a question?
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <CTA href="/contact" variant="outline-light">
                Contact LOVA
              </CTA>
              <CTA href="/be-featured#application" variant="outline-light">
                Be Featured
              </CTA>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
