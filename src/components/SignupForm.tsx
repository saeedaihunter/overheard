"use client";

import { useActionState, useState } from "react";
import { submitSignup, type SignupState } from "@/actions/signup";
import FadeIn from "./FadeIn";

const industries = [
  "SaaS",
  "Fintech",
  "E-commerce",
  "Health / Biotech",
  "AI / ML",
  "Dev Tools",
  "Marketplace",
  "EdTech",
  "Other",
];

const initialState: SignupState = { success: false, error: null };

const inputClass =
  "w-full bg-[var(--color-surface-raised)] border border-[var(--color-border)] rounded-lg px-4 py-3.5 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-muted)] focus:ring-1 focus:ring-[var(--color-accent-muted)] transition-all duration-200 font-sans";

export default function SignupForm() {
  const [state, formAction, isPending] = useActionState(submitSignup, initialState);
  const [delivery, setDelivery] = useState<"email" | "telegram">("email");

  if (state.success) {
    return (
      <section id="signup" className="px-6 md:px-12 py-24 max-w-4xl mx-auto">
        <div className="animate-fade-up text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-accent)] mb-6">
            <svg className="w-8 h-8 text-[var(--color-surface)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-[var(--color-text-primary)] mb-4">
            You&apos;re on the list.
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-md mx-auto">
            We&apos;ll send your first digest soon. Go do literally anything else
            with your morning now.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="signup" className="px-6 md:px-12 py-24 max-w-4xl mx-auto">
      <FadeIn>
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-[var(--color-border)]" />
          <span className="text-xs font-mono tracking-widest uppercase text-[var(--color-text-muted)]">
            Early access
          </span>
          <div className="h-px flex-1 bg-[var(--color-border)]" />
        </div>
      </FadeIn>

      <FadeIn>
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl text-[var(--color-text-primary)] mb-3">
          Alright, let&apos;s set you up.
        </h2>
        <p className="text-[var(--color-text-muted)] mb-12 text-lg">
          Takes about 60 seconds. Free for the first 100 users — no credit card, no catch.
        </p>
      </FadeIn>

      <FadeIn delay={150}>
        <form action={formAction} className="space-y-10">
          {/* Basics */}
          <div>
            <p className="text-xs font-mono tracking-widest uppercase text-[var(--color-accent-muted)] mb-4">
              About you
            </p>
            <div className="space-y-3">
              <input
                name="email"
                type="email"
                required
                placeholder="Your email"
                aria-label="Your email"
                className={inputClass}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  name="brand_name"
                  type="text"
                  required
                  placeholder="Your brand / product name"
                  aria-label="Your brand or product name"
                  className={inputClass}
                />
                <select
                  name="industry"
                  required
                  defaultValue=""
                  aria-label="Your industry"
                  className={inputClass}
                >
                  <option value="" disabled>
                    Pick your industry
                  </option>
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Competitors */}
          <div>
            <p className="text-xs font-mono tracking-widest uppercase text-[var(--color-accent-muted)] mb-4">
              Who to watch
            </p>

            {/* Competitor 1 */}
            <div className="mb-6">
              <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-3">
                Competitor 1 <span className="text-[var(--color-text-muted)]">— required</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <input
                  name="competitor_1_name"
                  type="text"
                  required
                  placeholder="Name"
                  aria-label="Competitor 1 name"
                  className={inputClass}
                />
                <input
                  name="competitor_1_website"
                  type="url"
                  required
                  placeholder="Website URL"
                  aria-label="Competitor 1 website URL"
                  className={inputClass}
                />
                <input
                  name="competitor_1_linkedin"
                  type="url"
                  placeholder="LinkedIn (optional)"
                  aria-label="Competitor 1 LinkedIn URL"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Competitor 2 */}
            <div className="mb-6">
              <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-3">
                Competitor 2 <span className="text-[var(--color-text-muted)]">— optional</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <input
                  name="competitor_2_name"
                  type="text"
                  placeholder="Name"
                  aria-label="Competitor 2 name"
                  className={inputClass}
                />
                <input
                  name="competitor_2_website"
                  type="url"
                  placeholder="Website URL"
                  aria-label="Competitor 2 website URL"
                  className={inputClass}
                />
                <input
                  name="competitor_2_linkedin"
                  type="url"
                  placeholder="LinkedIn (optional)"
                  aria-label="Competitor 2 LinkedIn URL"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Competitor 3 */}
            <div>
              <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-3">
                Competitor 3 <span className="text-[var(--color-text-muted)]">— optional</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <input
                  name="competitor_3_name"
                  type="text"
                  placeholder="Name"
                  aria-label="Competitor 3 name"
                  className={inputClass}
                />
                <input
                  name="competitor_3_website"
                  type="url"
                  placeholder="Website URL"
                  aria-label="Competitor 3 website URL"
                  className={inputClass}
                />
                <input
                  name="competitor_3_linkedin"
                  type="url"
                  placeholder="LinkedIn (optional)"
                  aria-label="Competitor 3 LinkedIn URL"
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          {/* Delivery method */}
          <div>
            <p className="text-xs font-mono tracking-widest uppercase text-[var(--color-accent-muted)] mb-4">
              Delivery
            </p>
            <input type="hidden" name="delivery_method" value={delivery} />
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setDelivery("email")}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  delivery === "email"
                    ? "bg-[var(--color-text-primary)] text-[var(--color-surface)] scale-[1.02]"
                    : "bg-[var(--color-surface-raised)] text-[var(--color-text-muted)] border border-[var(--color-border)] hover:border-[var(--color-text-muted)]"
                }`}
              >
                Email
              </button>
              <button
                type="button"
                onClick={() => setDelivery("telegram")}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  delivery === "telegram"
                    ? "bg-[var(--color-text-primary)] text-[var(--color-surface)] scale-[1.02]"
                    : "bg-[var(--color-surface-raised)] text-[var(--color-text-muted)] border border-[var(--color-border)] hover:border-[var(--color-text-muted)]"
                }`}
              >
                Telegram
              </button>
            </div>
            {delivery === "telegram" && (
              <input
                name="telegram_username"
                type="text"
                required
                placeholder="Your Telegram username"
                aria-label="Your Telegram username"
                className={`${inputClass} mt-3`}
              />
            )}
          </div>

          {/* Error */}
          {state.error && (
            <p className="text-red-400 text-sm font-medium">{state.error}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-[var(--color-text-primary)] text-[var(--color-surface)] font-bold py-4 rounded-lg text-lg hover:scale-[1.01] active:scale-[0.99] transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isPending ? "Setting things up..." : "Start Monitoring"}
          </button>
        </form>
      </FadeIn>
    </section>
  );
}
