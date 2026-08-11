import Link from "next/link";
import { CTA } from "@/components/CTA";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center bg-white">
      <div className="editorial-container py-32 text-center">
        <p className="text-[0.65rem] uppercase tracking-[0.2em] text-ink-muted mb-6">
          404
        </p>
        <h1 className="font-display text-4xl md:text-6xl text-ink">
          Page not found
        </h1>
        <p className="mt-6 text-ink-muted max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
          <CTA href="/">Back to Home</CTA>
          <CTA href="/be-featured#application" variant="secondary">
            Be Featured
          </CTA>
        </div>
        <p className="mt-10">
          <Link
            href="/contact"
            className="text-[0.65rem] uppercase tracking-[0.16em] text-ink-muted underline underline-offset-4"
          >
            Contact LOVA
          </Link>
        </p>
      </div>
    </section>
  );
}
