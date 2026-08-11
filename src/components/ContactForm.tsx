"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/CTA";

type FormStatus = "idle" | "submitting" | "success" | "error";

/**
 * Contact form — UI + validation only until backend is connected.
 */
export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      subject: String(formData.get("subject") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      submittedAt: new Date().toISOString(),
      formType: "contact",
    };

    try {
      // CONNECT BACKEND HERE — e.g. POST /api/contact
      await new Promise((resolve) => setTimeout(resolve, 700));
      console.info("[LOVA] Contact ready for backend:", payload);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        `Something went wrong. Please try again or email ${siteConfig.email}.`
      );
    }
  }

  if (status === "success") {
    return (
      <div className="border border-line bg-white px-6 py-12 text-center">
        <p className="font-display text-2xl md:text-3xl text-ink">
          Message received.
        </p>
        <p className="mt-4 text-ink-muted text-[0.95rem]">
          Thank you for reaching out. We’ll get back to you soon.
        </p>
        <button
          type="button"
          className="mt-8 text-[0.65rem] uppercase tracking-[0.16em] underline underline-offset-4 text-ink-muted"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  const fieldClass =
    "w-full max-w-full bg-transparent border-0 border-b border-line px-0 py-3.5 text-base text-ink placeholder:text-warm-muted focus:outline-none focus:border-ink transition-colors min-h-[48px]";
  const labelClass =
    "block text-[0.65rem] uppercase tracking-[0.16em] text-ink-muted mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-7" noValidate>
      <div>
        <label htmlFor="name" className={labelClass}>
          Name *
        </label>
        <input
          id="name"
          name="name"
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

      <div>
        <label htmlFor="subject" className={labelClass}>
          Subject *
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-y min-h-[130px]`}
        />
      </div>

      {status === "error" && errorMessage ? (
        <p className="text-sm text-ink" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <Button type="submit" disabled={status === "submitting"} size="large">
        {status === "submitting" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
