import Link from "next/link";

const services = [
  { title: "DJ Services", slug: "dj-services" },
  { title: "Photo Booths", slug: "photo-booths" },
  { title: "Catering", slug: "catering" },
  { title: "Event Rentals", slug: "event-rentals" },
  { title: "Bar Services", slug: "bar-services" },
  { title: "Lighting & Audio", slug: "lighting-audio" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span
                className="text-[1.7rem] font-bold text-white tracking-tight leading-none"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                I DO
              </span>
              <span className="text-gold text-[1.7rem] font-bold leading-none">.</span>
              <span
                className="text-2xl text-white tracking-[0.1em]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                ENTERTAINMENT
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              Full-service event planning, premium rentals, and custom
              entertainment for weddings, corporate events, and celebrations
              across Toronto and the GTA.
            </p>
          </div>

          <div>
            <h4
              className="text-sm text-white/70 uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-white/40 hover:text-gold text-sm transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-sm text-white/70 uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Service Areas
            </h4>
            <ul className="space-y-2">
              {[
                "Toronto",
                "Mississauga",
                "Brampton",
                "Vaughan",
                "Etobicoke",
                "Oakville",
                "North York",
              ].map((area, i) => (
                <li key={i} className="text-white/40 text-sm">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; 2026 I DO Entertainment. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-white/30 hover:text-gold text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/30 hover:text-gold text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
