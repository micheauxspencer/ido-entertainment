"use client";

import { ArrowRight, Check } from "lucide-react";

export default function ContactForm({ preselectedService }: { preselectedService?: string }) {
  return (
    <div className="bg-off-white rounded-3xl p-8 md:p-10">
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label
              className="block text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-2"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Full Name *
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-charcoal placeholder:text-charcoal/30 transition-all"
              required
            />
          </div>
          <div>
            <label
              className="block text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-2"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Email *
            </label>
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-charcoal placeholder:text-charcoal/30 transition-all"
              required
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label
              className="block text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-2"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Phone Number *
            </label>
            <input
              type="tel"
              placeholder="(647) 000-0000"
              className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-charcoal placeholder:text-charcoal/30 transition-all"
              required
            />
          </div>
          <div>
            <label
              className="block text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-2"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Event Date
            </label>
            <input
              type="date"
              className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-charcoal transition-all"
            />
          </div>
        </div>

        <div>
          <label
            className="block text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-2"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            Venue Address
          </label>
          <input
            type="text"
            placeholder="Address of venue"
            className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-charcoal placeholder:text-charcoal/30 transition-all"
          />
        </div>

        <div>
          <label
            className="block text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-3"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            Services Interested In *
          </label>
          <div className="grid grid-cols-2 gap-3">
            {[
              "DJ Services",
              "Photo Booths",
              "Catering",
              "Event Rentals",
              "Bar Services",
              "Lighting & Audio",
            ].map((svc) => (
              <label
                key={svc}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  defaultChecked={preselectedService === svc}
                  className="w-4 h-4 rounded border-black/20 text-gold accent-gold-dark"
                />
                <span className="text-sm text-charcoal/70 group-hover:text-charcoal transition-colors">
                  {svc}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label
            className="block text-xs font-semibold text-charcoal/70 uppercase tracking-wider mb-2"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            Tell us about your event
          </label>
          <textarea
            rows={4}
            placeholder="Share your vision, guest count, budget, or any special requirements..."
            className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-charcoal placeholder:text-charcoal/30 transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          className="btn-primary w-full bg-gold text-charcoal py-4 rounded-xl text-lg font-bold tracking-wide uppercase flex items-center justify-center gap-2"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          Send Message
          <ArrowRight size={20} />
        </button>

        <p className="text-xs text-charcoal/40 text-center">
          We typically respond within 2 hours during business hours
        </p>
      </form>

      {/* Trust Badges */}
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {["Free Consultation", "Custom Packages", "Flexible Pricing"].map(
          (badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 bg-white rounded-full px-4 py-2"
            >
              <Check size={14} className="text-gold-dark" />
              <span className="text-xs font-medium text-charcoal/70">
                {badge}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
