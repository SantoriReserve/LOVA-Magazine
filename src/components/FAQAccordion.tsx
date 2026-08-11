"use client";

import Link from "next/link";
import { useState } from "react";
import type { FaqItem } from "@/lib/site";

export function FAQAccordion({
  items,
  defaultOpen = null,
}: {
  items: readonly FaqItem[] | FaqItem[];
  defaultOpen?: number | null;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <div className="border-t border-line">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}-${item.question.slice(0, 12)}`;
        const buttonId = `faq-button-${index}-${item.question.slice(0, 12)}`;

        return (
          <div key={item.question} className="border-b border-line">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-start justify-between gap-4 py-4 md:py-5 text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="text-[0.85rem] md:text-[0.95rem] text-ink pr-2 leading-snug">
                  {item.question}
                </span>
                <span
                  className="mt-0.5 shrink-0 text-ink-muted text-lg leading-none w-5 text-center"
                  aria-hidden
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-3 max-w-2xl text-sm text-ink-muted leading-relaxed">
                  {item.answer}
                </p>
                {item.link ? (
                  <p className="pb-5">
                    <Link
                      href={item.link.href}
                      className="text-[0.65rem] uppercase tracking-[0.16em] text-ink hover:opacity-60"
                    >
                      {item.link.label}
                    </Link>
                  </p>
                ) : (
                  <div className="pb-2" />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
