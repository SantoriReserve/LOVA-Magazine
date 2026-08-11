"use client";

import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { applicationCategoryOptions } from "@/lib/categories";
import { Button } from "@/components/CTA";

type FormStatus = "idle" | "submitting" | "success" | "error";

/**
 * Business feature application form.
 *
 * BACKEND: Not connected yet.
 * Replace the placeholder in handleSubmit with a POST to your API,
 * Formspree, Resend, etc. Field names are stable for mapping.
 */
export function ApplicationForm({
  defaultCategory = "",
}: {
  defaultCategory?: string;
}) {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [industry, setIndustry] = useState(defaultCategory);
  const [showOtherIndustry, setShowOtherIndustry] = useState(false);

  useEffect(() => {
    const fromQuery = searchParams.get("category") || defaultCategory;
    if (fromQuery) {
      const match = applicationCategoryOptions.find(
        (opt) => opt.toLowerCase() === fromQuery.toLowerCase()
      );
      if (match) {
        setIndustry(match);
        setShowOtherIndustry(match === "Other");
      }
    }
  }, [searchParams, defaultCategory]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      businessName: String(formData.get("businessName") || "").trim(),
      contactName: String(formData.get("contactName") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      website: String(formData.get("website") || "").trim(),
      social: String(formData.get("social") || "").trim(),
      location: String(formData.get("location") || "").trim(),
      industry: String(formData.get("industry") || "").trim(),
      otherIndustry: String(formData.get("otherIndustry") || "").trim(),
      about: String(formData.get("about") || "").trim(),
      whyFeatured: String(formData.get("whyFeatured") || "").trim(),
      additional: String(formData.get("additional") || "").trim(),
      submittedAt: new Date().toISOString(),
      formType: "business-feature-application",
    };

    try {
      // --------------------------------------------------
      // CONNECT BACKEND HERE
      // const response = await fetch("/api/applications", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(payload),
      // });
      // if (!response.ok) throw new Error("Submission failed");
      // --------------------------------------------------

      await new Promise((resolve) => setTimeout(resolve, 700));
      console.info("[LOVA] Application ready for backend:", payload);

      setStatus("success");
      form.reset();
      setIndustry("");
      setShowOtherIndustry(false);
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong. Please try again or email hello@lovamagazine.com."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="border border-line bg-white px-6 py-12 md:px-10 md:py-16 text-center">
        <p className="font-display text-2xl md:text-3xl text-ink leading-snug">
          Thank you for introducing your business to LOVA.
        </p>
        <p className="mt-6 mx-auto max-w-md text-ink-muted leading-relaxed text-[0.95rem]">
          Your submission has been received. If your business is selected for
          the next stage, we’ll be in touch with additional information.
        </p>
        <button
          type="button"
          className="mt-10 text-[0.65rem] uppercase tracking-[0.16em] underline underline-offset-4 text-ink-muted hover:text-ink"
          onClick={() => setStatus("idle")}
        >
          Submit another application
        </button>
      </div>
    );
  }

  const fieldClass =
    "w-full max-w-full bg-transparent border-0 border-b border-line px-0 py-3.5 text-base text-ink placeholder:text-warm-muted focus:outline-none focus:border-ink transition-colors min-h-[48px]";
  const labelClass =
    "block text-[0.65rem] uppercase tracking-[0.16em] text-ink-muted mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-7 sm:space-y-8" noValidate>
      <div>
        <label htmlFor="businessName" className={labelClass}>
          Business Name *
        </label>
        <input
          id="businessName"
          name="businessName"
          type="text"
          required
          autoComplete="organization"
          className={fieldClass}
        />
      </div>

      <div className="grid gap-7 sm:gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="contactName" className={labelClass}>
            Contact Name *
          </label>
          <input
            id="contactName"
            name="contactName"
            type="text"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-7 sm:gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="website" className={labelClass}>
            Website
          </label>
          <input
            id="website"
            name="website"
            type="url"
            placeholder="https://"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="social" className={labelClass}>
            Instagram / Social Media
          </label>
          <input
            id="social"
            name="social"
            type="text"
            placeholder="@yourbusiness"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="location" className={labelClass}>
          Business Location *
        </label>
        <input
          id="location"
          name="location"
          type="text"
          required
          placeholder="City, State / Region"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="industry" className={labelClass}>
          Industry *
        </label>
        <select
          id="industry"
          name="industry"
          required
          value={industry}
          onChange={(e) => {
            setIndustry(e.target.value);
            setShowOtherIndustry(e.target.value === "Other");
          }}
          className={`${fieldClass} appearance-none cursor-pointer bg-transparent`}
        >
          <option value="" disabled>
            Select an industry
          </option>
          {applicationCategoryOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {showOtherIndustry ? (
        <div>
          <label htmlFor="otherIndustry" className={labelClass}>
            Tell us your industry
          </label>
          <input
            id="otherIndustry"
            name="otherIndustry"
            type="text"
            className={fieldClass}
          />
        </div>
      ) : null}

      <div>
        <label htmlFor="about" className={labelClass}>
          Tell Us About Your Business *
        </label>
        <textarea
          id="about"
          name="about"
          required
          rows={4}
          className={`${fieldClass} resize-y min-h-[110px]`}
        />
      </div>

      <div>
        <label htmlFor="whyFeatured" className={labelClass}>
          Why would you like to be featured in LOVA?
        </label>
        <textarea
          id="whyFeatured"
          name="whyFeatured"
          rows={3}
          className={`${fieldClass} resize-y min-h-[96px]`}
        />
      </div>

      <div>
        <label htmlFor="additional" className={labelClass}>
          Additional Information
        </label>
        <textarea
          id="additional"
          name="additional"
          rows={3}
          className={`${fieldClass} resize-y min-h-[96px]`}
        />
      </div>

      {status === "error" && errorMessage ? (
        <p className="text-sm text-ink" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <div className="pt-2">
        <Button type="submit" disabled={status === "submitting"} size="large">
          {status === "submitting" ? "Submitting…" : "Submit Application"}
        </Button>
      </div>
    </form>
  );
}
