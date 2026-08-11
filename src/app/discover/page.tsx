import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Discover",
  description:
    "Explore LOVA’s categories — dining, beauty, wellness, fashion & retail, hospitality, services, lifestyle & experiences, and events & entertainment.",
};

export default function DiscoverIndexPage() {
  return (
    <section className="bg-ivory">
      <div className="editorial-container pt-24 pb-14 sm:pt-28 sm:pb-16 md:pt-36 md:pb-24">
        <div className="max-w-xl mb-8 sm:mb-12">
          <h1 className="font-display text-3xl sm:text-5xl text-ink">
            Discover
          </h1>
          <p className="mt-4 sm:mt-5 text-sm sm:text-[0.95rem] text-ink-muted leading-relaxed">
            Explore the categories LOVA covers — for readers looking for
            something new, and for businesses looking to be discovered.
          </p>
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
                  alt={`${category.name} — LOVA`}
                  fill
                  className="object-cover img-hover-zoom"
                  style={{
                    objectPosition: category.imagePosition || "center",
                  }}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <p className="mt-2.5 sm:mt-3 text-[0.62rem] sm:text-[0.72rem] uppercase tracking-[0.12em] sm:tracking-[0.16em] text-ink leading-snug">
                {category.name} →
              </p>
              <p className="mt-1 text-[0.68rem] sm:text-sm text-ink-muted leading-snug">
                {category.readerDescriptor}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
