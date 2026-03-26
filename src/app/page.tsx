"use client";

import { useState, useEffect, useRef } from "react";
import HoneyBookForm from "@/components/HoneyBookForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Music,
  Camera,
  UtensilsCrossed,
  Tent,
  Wine,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Check,
} from "lucide-react";

/* ─── Intersection Observer Hook ─── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─── Animated Counter ─── */
function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView();
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ─── Services Data ─── */
const services = [
  {
    icon: Music,
    title: "DJ Services",
    slug: "dj-services",
    desc: "Professional DJs with customized playlists that read the room and keep your guests dancing all night long.",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop",
  },
  {
    icon: Camera,
    title: "Photo Booths",
    slug: "photo-booths",
    desc: "State-of-the-art photo booths and 360 experiences with instant prints, digital sharing, and custom branding.",
    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&h=400&fit=crop",
  },
  {
    icon: UtensilsCrossed,
    title: "Catering",
    slug: "catering",
    desc: "Exquisite cuisine crafted by talented chefs, tailored to your preferences with full dietary accommodations.",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop",
  },
  {
    icon: Tent,
    title: "Event Rentals",
    slug: "event-rentals",
    desc: "Premium tents, stylish furniture, decor, and game rentals that elevate the atmosphere of any venue.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=400&fit=crop",
  },
  {
    icon: Wine,
    title: "Bar Services",
    slug: "bar-services",
    desc: "Premium mobile bar with craft cocktails and professional bartenders who wow your guests with every pour.",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&h=400&fit=crop",
  },
  {
    icon: Lightbulb,
    title: "Lighting & Audio",
    slug: "lighting-audio",
    desc: "Expert lighting design and high-quality audio systems that create the perfect atmosphere for your event.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
  },
];

/* ─── Main Page ─── */
export default function Home() {
  return (
    <>
      <Navbar />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80')",
          }}
          role="img"
          aria-label="Wedding couple at elegant event venue in Toronto"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-10 md:pt-16 pb-28 md:pb-32">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-8 md:mb-10">
            <Sparkles size={14} className="text-gold" />
            <span
              className="text-xs text-white/90 tracking-wider uppercase"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Now Booking 2026 &amp; 2027 Events
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 md:mb-8">
            <span
              className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.9] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              UNFORGETTABLE
            </span>
            <span
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gold italic mt-2"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Events
            </span>
          </h1>

          <p
            className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed px-2 md:px-0"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Full-service event planning, premium rentals, and custom
            entertainment for weddings, corporate events, and private
            celebrations across Toronto and the Greater Toronto Area.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="btn-primary pulse-ring bg-gold text-charcoal px-8 py-3.5 rounded-full text-base font-bold tracking-wide uppercase flex items-center gap-2"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Get a Free Quote
              <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="group flex items-center gap-2 text-white/80 hover:text-gold transition-colors px-6 py-3"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Explore Services
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-white/40 tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ═══════════ TRUSTED BY ═══════════ */}
      <section className="bg-charcoal border-t border-white/10 py-12 overflow-hidden">
        <div className="text-center mb-8">
          <span
            className="text-base text-gold-dark tracking-[0.15em] italic"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Trusted by leading brands
          </span>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-charcoal to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-charcoal to-transparent z-10" />
          <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex items-center gap-16 shrink-0">
                {[
                  { name: "TD Canada Trust", domain: "td.com" },
                  { name: "McDonald's", domain: "mcdonalds.com" },
                  { name: "Disney", domain: "disney.com" },
                  { name: "Pepsi", domain: "pepsi.com" },
                  { name: "Yamaha", domain: "yamaha.com" },
                  { name: "Mitsubishi", domain: "mitsubishi.com" },
                  { name: "Holt Renfrew", domain: "holtrenfrew.com" },
                  { name: "Sheraton", domain: "sheraton.marriott.com" },
                ].map((brand) => (
                  <div
                    key={brand.name}
                    className="group flex items-center justify-center h-12 w-36 shrink-0"
                    title={brand.name}
                  >
                    <img
                      src={`https://cdn.brandfetch.io/${brand.domain}/theme/light/logo?c=1idtj7claCaB5vdJ3fl`}
                      alt={brand.name}
                      className="max-h-full max-w-full object-contain brightness-0 invert opacity-50 group-hover:opacity-90 transition-all"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ MARQUEE ═══════════ */}
      <div className="bg-gold py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {Array(10)
            .fill(null)
            .map((_, i) => (
              <span
                key={i}
                className="text-charcoal text-lg tracking-wider mx-8 italic"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                NOW BOOKING FOR 2026 &amp; 2027 &nbsp;&#47;&#47;&nbsp;
              </span>
            ))}
        </div>
      </div>

      {/* ═══════════ SERVICES ═══════════ */}
      <section id="services" className="py-24 md:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <span
              className="text-lg text-gold-dark tracking-[0.15em] block mb-3 italic"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              What We Offer
            </span>
            <h2
              className="text-5xl md:text-7xl text-charcoal mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              OUR SERVICES
            </h2>
            <p
              className="text-lg text-charcoal/60 max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              <i>
                Let&apos;s define the goals for your next event and set the
                stage by creating an unforgettable experience
              </i>
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={i}
                  className="service-card group bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <div
                      className="service-image absolute inset-0 bg-cover bg-center transition-transform duration-700"
                      style={{ backgroundImage: `url('${svc.image}')` }}
                      role="img"
                      aria-label={`${svc.title} - I DO Entertainment Toronto`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center">
                        <Icon size={20} className="text-charcoal" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3
                      className="text-2xl text-charcoal mb-3"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {svc.title.toUpperCase()}
                    </h3>
                    <p className="text-charcoal/60 leading-relaxed text-sm mb-4">
                      {svc.desc}
                    </p>
                    <a
                      href={`/services/${svc.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-charcoal hover:text-gold-dark transition-colors group/link"
                      style={{ fontFamily: "var(--font-accent)" }}
                    >
                      Learn More
                      <ChevronRight
                        size={16}
                        className="group-hover/link:translate-x-1 transition-transform"
                      />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ WHY CHOOSE US ═══════════ */}
      <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image Collage */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80')",
                  }}
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-gold rounded-2xl p-6 shadow-2xl max-w-[240px]">
                <div
                  className="text-4xl font-bold text-charcoal mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  500+
                </div>
                <div className="text-sm text-charcoal/70 font-medium">
                  Successful events across Toronto and the GTA
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <span
                className="text-lg text-gold tracking-[0.15em] block mb-3 italic"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Why Choose Us
              </span>
              <h2
                className="text-5xl md:text-6xl text-white mb-6 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                YOUR EVENT,
                <br />
                <span
                  className="text-gold italic"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Our Passion
                </span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-10">
                At I DO Entertainment, we don&apos;t just plan events - we craft
                experiences. Every detail is curated to reflect your vision,
                from the first beat of music to the last toast of the evening.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "One Team, Every Service",
                    desc: "DJ, photo booth, catering, bar, rentals, lighting - all coordinated under one roof. No juggling vendors.",
                  },
                  {
                    title: "Toronto & GTA Coverage",
                    desc: "Serving Toronto, Mississauga, Brampton, Vaughan, Oakville, and beyond with consistent quality.",
                  },
                  {
                    title: "Tailored to You",
                    desc: "Every package is custom-built around your event, your budget, and your vision. No cookie-cutter setups.",
                  },
                  {
                    title: "Stress-Free Experience",
                    desc: "From first call to final cleanup, we handle the logistics so you can enjoy every moment.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center mt-0.5">
                      <Check size={16} className="text-gold" />
                    </div>
                    <div>
                      <h4
                        className="text-white font-semibold mb-1"
                        style={{ fontFamily: "var(--font-accent)" }}
                      >
                        {item.title}
                      </h4>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section id="reviews" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span
              className="text-lg text-gold-dark tracking-[0.15em] block mb-3 italic"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Testimonials
            </span>
            <h2
              className="text-5xl md:text-7xl text-charcoal mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              REVIEWS
            </h2>
            <p
              className="text-lg text-charcoal/60 max-w-xl mx-auto"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              <i>
                Every event tells a story. Here are a few of theirs.
              </i>
            </p>
          </div>

          {/* Reviews Widget */}
          <div
            data-romw-token="jz3UgUh0puKKKAGjvmhknKEdDQ1FXeo19SwEAs6u51tNVnMOgi"
            data-romw-lazy
          />
        </div>
      </section>

      {/* ═══════════ CTA SECTION ═══════════ */}
      <section
        id="about"
        className="relative py-24 md:py-32 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-charcoal/85" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-6xl text-white mb-2"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            <i>let&apos;s create some</i>
          </h2>
          <h2
            className="text-5xl md:text-8xl text-white mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            UNFORGETTABLE
            <br />
            <span className="text-gradient">EXPERIENCES</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you&apos;re planning a wedding, corporate event, birthday
            party, or private celebration, our team is here to bring your
            vision to life from start to finish.
          </p>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2 bg-gold text-charcoal px-10 py-4 rounded-full text-lg font-bold tracking-wide uppercase"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            Get Your Free Quote
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* ═══════════ CONTACT ═══════════ */}
      <section id="contact" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Info */}
            <div>
              <span
                className="text-lg text-gold-dark tracking-[0.15em] block mb-3 italic"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Get In Touch
              </span>
              <h2
                className="text-5xl md:text-6xl text-charcoal mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                SAY HELLO
              </h2>
              <p className="text-charcoal/60 text-lg leading-relaxed mb-10">
                Ready to take your next event to new heights? Let&apos;s bring
                your event vision to life. Our team is here to help from start
                to finish.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                    <Phone size={20} className="text-gold-dark" />
                  </div>
                  <div>
                    <div
                      className="text-xs text-charcoal/50 uppercase tracking-wider mb-0.5"
                      style={{ fontFamily: "var(--font-accent)" }}
                    >
                      Call Us
                    </div>
                    <a
                      href="tel:+14378763359"
                      className="text-charcoal font-medium hover:text-gold-dark transition-colors"
                    >
                      (437) 876-3359
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                    <Mail size={20} className="text-gold-dark" />
                  </div>
                  <div>
                    <div
                      className="text-xs text-charcoal/50 uppercase tracking-wider mb-0.5"
                      style={{ fontFamily: "var(--font-accent)" }}
                    >
                      Email Us
                    </div>
                    <a
                      href="mailto:info@idoentertainment.ca"
                      className="text-charcoal font-medium hover:text-gold-dark transition-colors"
                    >
                      info@idoentertainment.ca
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                    <MapPin size={20} className="text-gold-dark" />
                  </div>
                  <div>
                    <div
                      className="text-xs text-charcoal/50 uppercase tracking-wider mb-0.5"
                      style={{ fontFamily: "var(--font-accent)" }}
                    >
                      Service Area
                    </div>
                    <span className="text-charcoal font-medium">
                      Toronto, Mississauga, Brampton, Vaughan &amp; GTA
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-10 pt-8 border-t border-black/5">
                <div className="flex flex-wrap gap-4">
                  {[
                    "Free Consultation",
                    "Custom Packages",
                    "Flexible Pricing",
                  ].map((badge) => (
                    <div
                      key={badge}
                      className="flex items-center gap-2 bg-off-white rounded-full px-4 py-2"
                    >
                      <Check size={14} className="text-gold-dark" />
                      <span className="text-xs font-medium text-charcoal/70">
                        {badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - HoneyBook Form */}
            <HoneyBookForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
