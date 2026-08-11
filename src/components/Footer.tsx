"use client";

import { FormEvent, useState } from "react";
import { Wordmark } from "@/components/Wordmark";
import { navLinks, siteConfig } from "@/lib/site";
import Link from "next/link";

export function Footer() {
  const [joined, setJoined] = useState(false);

  function handleNewsletter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // UI only — connect to email provider later
    setJoined(true);
    event.currentTarget.reset();
  }

  return (
    <footer className="bg-ink text-white">
      <div className="editorial-container py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Wordmark href="/" size="footer" className="text-white" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-warm-muted">
              Discover Businesses You’ll Love.
            </p>
            <p className="mt-8 text-[0.62rem] uppercase tracking-[0.22em] text-warm-muted">
              Issue 001 — Coming Soon.
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[0.62rem] uppercase tracking-[0.2em] text-warm-muted mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[0.62rem] uppercase tracking-[0.2em] text-warm-muted mb-5">
              Connect
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/80 hover:text-white"
                >
                  Instagram {siteConfig.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-white/80 hover:text-white break-all"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[0.62rem] uppercase tracking-[0.2em] text-warm-muted mb-5">
              Stay in the know
            </p>
            <p className="text-sm text-warm-muted leading-relaxed mb-6 max-w-sm">
              Be the first to know when Issue 001 launches.
            </p>
            {joined ? (
              <p className="text-sm text-white">Thank you — you’re on the list.</p>
            ) : (
              <form
                onSubmit={handleNewsletter}
                className="flex flex-col sm:flex-row gap-3"
              >
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  className="flex-1 bg-transparent border border-white/30 px-4 py-3 text-sm text-white placeholder:text-warm-muted focus:outline-none focus:border-white"
                />
                <button
                  type="submit"
                  className="px-6 py-3 text-[0.65rem] uppercase tracking-[0.16em] bg-white text-ink hover:bg-ivory transition-colors"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="divider-dark mt-14 mb-8" />

        <p className="text-center text-[0.65rem] tracking-[0.04em] text-warm-muted">
          © 2026 LOVA Magazine. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
