import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import {
  applyHref,
  featureOptions,
  featureStartingPrice,
} from "@/lib/featureOptions";

export const metadata: Metadata = {
  title: "Feature Options",
  description:
    "LOVA Issue 001 paid business feature opportunities — Quarter Page $250, Half Page $375, and Full Page $700.",
};

export default function FeatureOptionsPage() {
  return (
    <>
      <section className="bg-ivory border-b border-line">
        <div className="editorial-container pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-36 md:pb-16">
          <p className="label-caps text-ink-muted mb-4">Issue 001</p>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl text-ink tracking-[0.02em] uppercase leading-[1.05]">
            Feature Options
          </h1>
          <p className="mt-5 sm:mt-6 max-w-xl text-sm sm:text-[0.95rem] text-ink-muted leading-relaxed">
            LOVA offers a selection of paid feature opportunities for businesses
            selected to appear in Issue 001.
          </p>
          <p className="mt-4 max-w-xl text-sm sm:text-[0.95rem] text-ink-muted leading-relaxed">
            Choose the placement size that best fits how you’d like your
            business presented.
          </p>
        </div>
      </section>

      <section className="bg-ivory border-b border-line">
        <div className="editorial-container pb-14 md:pb-20">
          <div className="grid gap-0 md:grid-cols-3 md:gap-0 border-t border-line">
            {featureOptions.map((option) => (
              <article
                key={option.id}
                className="border-b border-line md:border-b-0 md:border-r md:last:border-r-0 py-10 md:py-12 md:px-8 first:md:pl-0 last:md:pr-0"
              >
                <h2 className="font-display text-2xl md:text-3xl text-ink leading-snug">
                  {option.name}
                </h2>
                <p className="mt-4 font-display text-3xl text-ink tracking-wide">
                  {option.priceLabel}
                </p>
                <p className="mt-6 text-sm text-ink-muted leading-relaxed max-w-sm">
                  {option.summary}
                </p>
                <ul className="mt-8 space-y-0">
                  {option.includes.map((item) => (
                    <li
                      key={item}
                      className="border-t border-line py-3 text-[0.7rem] uppercase tracking-[0.12em] text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <CTA href={applyHref} variant="secondary">
                    Apply to Be Featured →
                  </CTA>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-sm text-ink-muted leading-relaxed">
            All business submissions are reviewed for fit before placement is
            confirmed. Submitting an application does not guarantee inclusion in
            LOVA.
          </p>
        </div>
      </section>

      <section className="bg-white border-b border-line">
        <div className="editorial-container section-pad">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-ink max-w-xl leading-snug">
            Which feature is right for your business?
          </h2>
          <div className="mt-10 space-y-0 max-w-2xl">
            {featureOptions.map((option) => (
              <div key={option.id} className="border-t border-line py-6">
                <p className="text-[0.72rem] uppercase tracking-[0.14em] text-ink">
                  {option.name} — {option.priceLabel}
                </p>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                  {option.bestFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory border-b border-line">
        <div className="editorial-container section-pad">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl sm:text-3xl text-ink">
              How Features Work
            </h2>
            <div className="mt-6 space-y-4 text-sm sm:text-[0.95rem] text-ink-muted leading-relaxed">
              <p>
                LOVA is a curated discovery publication. Businesses submit an
                application before a feature is confirmed so we can ensure each
                business is appropriate for the publication.
              </p>
              <p>
                Selected businesses can choose from the available Issue 001
                feature options.
              </p>
              <p>
                Payment is only required after a feature opportunity has been
                confirmed.
              </p>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:items-center">
              <CTA href={applyHref}>Apply to Be Featured</CTA>
              <p className="text-sm text-ink-muted">
                Paid opportunities start at {featureStartingPrice}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
