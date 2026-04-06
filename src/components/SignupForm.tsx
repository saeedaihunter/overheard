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
  "w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all duration-200";

export default function SignupForm() {
  const [state, formAction, isPending] = useActionState(submitSignup, initialState);
  const [delivery, setDelivery] = useState<"email" | "telegram">("email");

  if (state.success) {
    return (
      <section id="signup" className="px-6 py-20 max-w-3xl mx-auto text-center">
        <div className="animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Done. You&apos;re on the list.
          </h2>
          <p className="text-zinc-400 text-lg">
            We&apos;ll send your first digest soon. Go do literally anything else
            with your morning now.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="signup" className="px-6 py-20 max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Alright, you&apos;re in. Let&apos;s set you up.
        </h2>
      </FadeIn>

      <FadeIn delay={150}>
        <form action={formAction} className="space-y-8">
          {/* Basics */}
          <div className="space-y-4">
            <input
              name="email"
              type="email"
              required
              placeholder="Your email"
              aria-label="Your email"
              className={inputClass}
            />
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

          {/* Competitor 1 (required) */}
          <div className="space-y-4">
            <p className="text-sm font-bold text-zinc-400 uppercase tracking-wide">
              Competitor 1 (required)
            </p>
            <input
              name="competitor_1_name"
              type="text"
              required
              placeholder="Competitor name"
              aria-label="Competitor name"
              className={inputClass}
            />
            <input
              name="competitor_1_website"
              type="url"
              required
              placeholder="Website URL"
              aria-label="Website URL"
              className={inputClass}
            />
            <input
              name="competitor_1_linkedin"
              type="url"
              placeholder="LinkedIn URL (optional)"
              aria-label="LinkedIn URL"
              className={inputClass}
            />
          </div>

          {/* Competitor 2 (optional) */}
          <div className="space-y-4">
            <p className="text-sm font-bold text-zinc-400 uppercase tracking-wide">
              Competitor 2 (optional)
            </p>
            <input
              name="competitor_2_name"
              type="text"
              placeholder="Competitor name"
              aria-label="Competitor name"
              className={inputClass}
            />
            <input
              name="competitor_2_website"
              type="url"
              placeholder="Website URL"
              aria-label="Website URL"
              className={inputClass}
            />
            <input
              name="competitor_2_linkedin"
              type="url"
              placeholder="LinkedIn URL (optional)"
              aria-label="LinkedIn URL"
              className={inputClass}
            />
          </div>

          {/* Competitor 3 (optional) */}
          <div className="space-y-4">
            <p className="text-sm font-bold text-zinc-400 uppercase tracking-wide">
              Competitor 3 (optional)
            </p>
            <input
              name="competitor_3_name"
              type="text"
              placeholder="Competitor name"
              aria-label="Competitor name"
              className={inputClass}
            />
            <input
              name="competitor_3_website"
              type="url"
              placeholder="Website URL"
              aria-label="Website URL"
              className={inputClass}
            />
            <input
              name="competitor_3_linkedin"
              type="url"
              placeholder="LinkedIn URL (optional)"
              aria-label="LinkedIn URL"
              className={inputClass}
            />
          </div>

          {/* Delivery method */}
          <div className="space-y-4">
            <p className="text-sm font-bold text-zinc-400 uppercase tracking-wide">
              How should we reach you?
            </p>
            <input type="hidden" name="delivery_method" value={delivery} />
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setDelivery("email")}
                className={`px-6 py-3 rounded-lg font-bold transition-all duration-200 ${
                  delivery === "email"
                    ? "bg-white text-black scale-[1.02]"
                    : "bg-zinc-900 text-zinc-400 border border-zinc-700 hover:border-zinc-500"
                }`}
              >
                Email
              </button>
              <button
                type="button"
                onClick={() => setDelivery("telegram")}
                className={`px-6 py-3 rounded-lg font-bold transition-all duration-200 ${
                  delivery === "telegram"
                    ? "bg-white text-black scale-[1.02]"
                    : "bg-zinc-900 text-zinc-400 border border-zinc-700 hover:border-zinc-500"
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
                className={inputClass}
              />
            )}
          </div>

          {/* Error */}
          {state.error && (
            <p className="text-red-400 text-sm">{state.error}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-white text-black font-bold py-4 rounded-lg text-lg hover:bg-zinc-200 hover:scale-[1.01] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isPending ? "Sending..." : "Start Monitoring"}
          </button>
        </form>
      </FadeIn>
    </section>
  );
}
