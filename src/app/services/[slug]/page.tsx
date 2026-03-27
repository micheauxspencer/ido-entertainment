import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Check,
  ArrowRight,
  Star,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HoneyBookForm from "@/components/HoneyBookForm";
import { TrustBar } from "@/components/Counter";

/* ─── Service Data ─── */
interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubline: string;
  heroDescription: string;
  heroImage: string;
  features: { title: string; desc: string }[];
  galleryImages: string[];
  faqs: { q: string; a: string }[];
  testimonial: { name: string; text: string; event: string; date: string };
  ctaHeadline: string;
}

const servicesData: Record<string, ServiceData> = {
  "dj-services": {
    slug: "dj-services",
    title: "DJ Services",
    shortTitle: "DJ Services",
    metaTitle: "Wedding DJ Toronto | Corporate Event DJ Hire GTA",
    metaDescription: "Hire a wedding DJ or corporate event DJ in Toronto & GTA. Custom playlists, MC services, 500+ events, 5.0 rating. Get a free quote today.",
    heroHeadline: "SET THE PERFECT",
    heroSubline: "Mood",
    heroDescription: "Our professional DJs don't just play music - they read the room, curate the energy, and keep your guests dancing all night. Custom playlists for every moment, from ceremony to last call.",
    heroImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1920&q=80&fm=webp",
    features: [
      { title: "Custom Playlist Curation", desc: "We build your playlist around your taste, your crowd, and your event timeline - not a generic setlist." },
      { title: "Professional MC Services", desc: "Seamless announcements, introductions, and crowd engagement that keeps the energy flowing." },
      { title: "State-of-the-Art Equipment", desc: "Premium sound systems, wireless mics, and backup gear so nothing interrupts your event." },
      { title: "Genre Versatility", desc: "From Top 40 to Bollywood, Latin to Classic Rock - our DJs are fluent in every genre your guests love." },
      { title: "Ceremony + Reception Coverage", desc: "Full-day packages covering ceremony music, cocktail hour, dinner, and the dance floor." },
      { title: "Lighting Integration", desc: "Optional dance floor lighting, uplighting, and effects that sync with the music for a club-quality experience." },
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop&fm=webp",
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&h=400&fit=crop&fm=webp",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop&fm=webp",
    ],
    faqs: [
      { q: "How far in advance should we book a DJ?", a: "We recommend booking 3-6 months ahead for wedding dates. Popular summer Saturdays book out 6-12 months in advance. Corporate events typically need 4-6 weeks lead time." },
      { q: "Can we provide our own song requests?", a: "Absolutely. We send you a planning form where you can share must-play songs, do-not-play lists, and special moment songs. Your DJ builds the set around your preferences." },
      { q: "What happens if the DJ gets sick on our event day?", a: "We always have backup DJs available. In 8+ years, we have never missed an event. Your celebration is guaranteed regardless of circumstances." },
      { q: "What types of events do you DJ?", a: "Weddings, corporate galas, holiday parties, birthday celebrations, school dances, bar and bat mitzvahs, fundraisers, and private parties of all sizes across the GTA." },
      { q: "Do you serve areas outside Toronto?", a: "Yes. We cover the entire GTA including Mississauga, Brampton, Vaughan, Oakville, Markham, and surrounding areas. Fill out the quote form with your venue details and we will confirm availability." },
      { q: "How do we get started?", a: "Fill out the quote form on this page with your event date, venue, and any details you have. We will reach out within 24 hours to schedule a free consultation and walk through your options." },
    ],
    testimonial: { name: "Nicholas Vecchiarelli", text: "I DO Entertainment made our wedding absolutely incredible. The DJ read the room perfectly and the lighting transformed our venue. Every single guest commented on how amazing the atmosphere was.", event: "Wedding", date: "Oct 2025" },
    ctaHeadline: "BOOK YOUR DJ",
  },
  "photo-booths": {
    slug: "photo-booths",
    title: "Photo Booths",
    shortTitle: "Photo Booths",
    metaTitle: "Photo Booth Rental Toronto | 360 Booth Hire Wedding & Events",
    metaDescription: "Rent a photo booth or 360 video booth in Toronto & GTA. Instant prints, digital sharing, props included. 500+ events. Get a free quote.",
    heroHeadline: "CAPTURE EVERY",
    heroSubline: "Moment",
    heroDescription: "State-of-the-art photo booths and 360 video experiences that give your guests instant keepsakes and shareable content. Custom branding, props, and an attendant included with every package.",
    heroImage: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=1920&q=80&fm=webp",
    features: [
      { title: "360 Video Booth", desc: "Cinematic slow-motion videos from every angle. Guests get instant shareable clips with custom overlays." },
      { title: "Classic Photo Booth", desc: "High-quality DSLR photos with studio lighting, green screen options, and instant 4x6 prints." },
      { title: "Custom Branding", desc: "Your event name, hashtag, logo, or wedding monogram on every print and digital share." },
      { title: "Instant Digital Sharing", desc: "Guests text or email their photos instantly. QR code gallery for all event photos." },
      { title: "Premium Props Included", desc: "Curated prop selection themed to your event - not dollar store quality." },
      { title: "Dedicated Attendant", desc: "A trained booth attendant manages the line, helps with props, and ensures everything runs smoothly." },
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1540575467063-178a50e2fd60?w=600&h=400&fit=crop&fm=webp",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop&fm=webp",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop&fm=webp",
    ],
    faqs: [
      { q: "What's the difference between a photo booth and a 360 booth?", a: "A classic photo booth captures posed photos with instant prints. A 360 booth records cinematic slow-motion video as the camera rotates around you, creating shareable social media content." },
      { q: "How much space does the booth need?", a: "A classic booth needs about 8x8 feet and the 360 platform needs about 10x10 feet. We confirm exact space requirements during your free consultation." },
      { q: "Can you set up outdoors?", a: "Yes, with a covered area. We need protection from rain and direct sunlight for the best photo quality. Tented outdoor events work perfectly." },
      { q: "How long does it take to set up?", a: "Setup takes about 60-90 minutes. We arrive well before your event starts so everything is tested and ready for your guests." },
      { q: "Can the booth be branded for a corporate event?", a: "Yes. We can add your company logo, event hashtag, and custom color scheme to every print and digital share. Fill out the quote form and let us know your branding needs." },
      { q: "How do we book a photo booth?", a: "Fill out the quote form on this page with your event date, venue, and guest count. We will get back to you within 24 hours with a consultation to discuss your options." },
    ],
    testimonial: { name: "Alex D", text: "We hired I DO for our corporate gala and they delivered beyond expectations. From the photo booth to the bar service, everything was seamless and professional. Would book again in a heartbeat.", event: "Corporate Gala", date: "Sep 2025" },
    ctaHeadline: "BOOK YOUR BOOTH",
  },
  "catering": {
    slug: "catering",
    title: "Catering Services",
    shortTitle: "Catering",
    metaTitle: "Wedding Catering Toronto | Corporate Event Catering GTA",
    metaDescription: "Wedding and corporate event catering in Toronto & GTA. Custom menus, dietary accommodations, tastings included. Get a free quote.",
    heroHeadline: "EXQUISITE",
    heroSubline: "Cuisine",
    heroDescription: "Talented chefs crafting custom menus tailored to your event, your guests, and your vision. From elegant plated dinners to interactive food stations, we make every bite memorable.",
    heroImage: "https://images.unsplash.com/photo-1555244162-803834f70033?w=1920&q=80&fm=webp",
    features: [
      { title: "Custom Menu Design", desc: "Our chef works with you to design a menu that matches your theme, budget, and dietary requirements." },
      { title: "Full Dietary Accommodations", desc: "Vegan, gluten-free, halal, kosher, allergy-friendly options - every guest is taken care of." },
      { title: "Complimentary Tasting", desc: "For events over 100 guests, enjoy a complimentary tasting session to finalize your menu selections." },
      { title: "Multiple Service Styles", desc: "Plated dinner, family style, buffet, food stations, or passed appetizers - your call." },
      { title: "Professional Service Staff", desc: "Uniformed servers, kitchen staff, and a catering manager on-site to ensure flawless execution." },
      { title: "Setup & Cleanup Included", desc: "We handle everything from table settings to kitchen cleanup. You just enjoy the meal." },
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&fm=webp",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=400&fit=crop&fm=webp",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop&fm=webp",
    ],
    faqs: [
      { q: "Can you accommodate multiple dietary restrictions at one event?", a: "Absolutely. We regularly handle events with 5+ dietary requirements simultaneously including vegan, gluten-free, halal, kosher, and allergy-specific meals. Each is individually labeled and tracked." },
      { q: "How far in advance should we finalize the menu?", a: "We recommend finalizing 4-6 weeks before your event. Initial menu planning should start 2-3 months out for weddings to allow time for tastings and revisions." },
      { q: "What service styles do you offer?", a: "We handle plated dinners, family-style service, buffets, food stations, and passed appetizers. The best style depends on your event format, and we will walk you through options during the consultation." },
      { q: "Do you offer tastings before we commit?", a: "Yes. We offer tasting sessions so you can try your menu selections before making final decisions. Reach out via the quote form to schedule yours." },
      { q: "What areas do you serve?", a: "We cater events across the entire GTA including Toronto, Mississauga, Brampton, Vaughan, Oakville, and surrounding areas. Share your venue details in the quote form." },
      { q: "How do we get started with catering?", a: "Fill out the quote form on this page with your event date, venue, estimated guest count, and any dietary considerations. We will schedule a free consultation to start planning your menu." },
    ],
    testimonial: { name: "DJ Salaya-Nguyen", text: "The team at I DO is next level. They handled everything for our event - catering, rentals, audio setup - and it all went off without a hitch. True professionals who care about every detail.", event: "Private Party", date: "Jul 2025" },
    ctaHeadline: "BOOK YOUR CATERING",
  },
  "event-rentals": {
    slug: "event-rentals",
    title: "Event Rentals",
    shortTitle: "Event Rentals",
    metaTitle: "Party & Event Rentals Toronto | Tent, Furniture & Decor Hire",
    metaDescription: "Rent tents, furniture, decor, and table settings for weddings and corporate events in Toronto & GTA. Free delivery. Get a free quote.",
    heroHeadline: "TRANSFORM YOUR",
    heroSubline: "Venue",
    heroDescription: "Premium tents, stylish furniture, elegant decor, and game rentals that elevate any space. From intimate garden parties to grand ballroom events, we have everything you need.",
    heroImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&q=80&fm=webp",
    features: [
      { title: "Tent & Canopy Rentals", desc: "Frame tents, pole tents, and clear-top canopies sized from 20x20 to 60x120 for any outdoor event." },
      { title: "Furniture Collections", desc: "Lounge sets, farm tables, chiavari chairs, ghost chairs, and modern furniture that match any aesthetic." },
      { title: "Decor & Styling", desc: "Centerpieces, backdrops, arches, table runners, and custom decor elements designed for your theme." },
      { title: "Table Settings", desc: "China, glassware, flatware, charger plates, and linen in multiple colors and styles." },
      { title: "Games & Entertainment", desc: "Lawn games, arcade machines, casino tables, and interactive entertainment rentals." },
      { title: "Delivery & Setup", desc: "We deliver, set up, and pick up everything. Your venue is transformed and restored with zero effort on your part." },
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop&fm=webp",
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&h=400&fit=crop&fm=webp",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop&fm=webp",
    ],
    faqs: [
      { q: "How far in advance should I book rentals?", a: "4-8 weeks for standard items. Specialty items and peak season (May through October) should be booked 2-3 months out to guarantee availability." },
      { q: "What if something gets damaged during the event?", a: "Normal wear and tear is covered. We carry insurance for all our rental inventory. We walk you through our damage policy upfront so there are no surprises." },
      { q: "Can I see the rental items before booking?", a: "Yes. We can arrange a showroom visit or send you a detailed photo catalog of available inventory so you can see exactly what you are getting." },
      { q: "Do you handle setup at any venue type?", a: "We set up at indoor venues, outdoor spaces, backyards, rooftops, parks, and everything in between across Toronto and the GTA. Share your venue details in the quote form." },
      { q: "Can rentals be combined with your other services?", a: "Absolutely. Many clients bundle rentals with DJ, lighting, or catering for a seamless experience with one point of contact. Mention everything you need in the quote form." },
      { q: "How do we get started?", a: "Fill out the quote form on this page with your event date, venue, and a description of what you are envisioning. We will reach out within 24 hours to schedule a free consultation." },
    ],
    testimonial: { name: "Nicholas Vecchiarelli", text: "I DO Entertainment made our wedding absolutely incredible. The DJ read the room perfectly and the lighting transformed our venue. Every single guest commented on how amazing the atmosphere was.", event: "Wedding", date: "Oct 2025" },
    ctaHeadline: "BOOK YOUR RENTALS",
  },
  "bar-services": {
    slug: "bar-services",
    title: "Bar Services",
    shortTitle: "Bar Services",
    metaTitle: "Mobile Bar Hire Toronto | Bartender & Cocktail Service Weddings",
    metaDescription: "Hire a mobile bar with bartenders for weddings and events in Toronto & GTA. Craft cocktails, licensed, insured. Get a free quote.",
    heroHeadline: "ELEVATE YOUR",
    heroSubline: "Bar",
    heroDescription: "Premium mobile bar service with craft cocktails, professional bartenders, and a stunning setup. Licensed, insured, and equipped to handle events from 50 to 500+ guests.",
    heroImage: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1920&q=80&fm=webp",
    features: [
      { title: "Craft Cocktail Menu", desc: "Custom signature cocktails designed for your event, plus a full bar of classic drinks your guests know and love." },
      { title: "Professional Bartenders", desc: "Experienced, personable bartenders who keep the line moving and the drinks perfect." },
      { title: "Full Bar Setup", desc: "We bring the bar, glassware, ice, garnishes, mixers, and tools. You just tell us where to set up." },
      { title: "Licensed & Insured", desc: "Fully licensed with Smart Serve certification. Liability insurance included for your peace of mind." },
      { title: "Flexible Packages", desc: "Open bar, cash bar, drink tickets, or consumption-based billing - whatever fits your budget." },
      { title: "Non-Alcoholic Options", desc: "Mocktail menu, craft sodas, and specialty non-alcoholic beverages so every guest feels included." },
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=400&fit=crop&fm=webp",
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&h=400&fit=crop&fm=webp",
      "https://images.unsplash.com/photo-1574096079513-d8259312b785?w=600&h=400&fit=crop&fm=webp",
    ],
    faqs: [
      { q: "Are your bartenders licensed and insured?", a: "Yes. All our bartenders are Smart Serve certified. We carry full commercial liability insurance and can provide a certificate of insurance for your venue if required." },
      { q: "Can you create custom signature cocktails?", a: "Absolutely. We work with you to design 2-3 signature drinks that match your event theme, color scheme, or personal taste. Share your ideas in the quote form." },
      { q: "Do you offer non-alcoholic options?", a: "Yes. We always provide a full mocktail menu and specialty non-alcoholic beverages so every guest feels included regardless of their drinking preferences." },
      { q: "How far in advance should we book bar service?", a: "We recommend booking 4-8 weeks before your event. Peak season dates (May through October) should be booked 2-3 months out." },
      { q: "Can bar service be added to an existing event package?", a: "Yes. Many clients bundle bar service with DJ, catering, or other services for a seamless experience with one team managing everything. Let us know in the quote form." },
      { q: "How do we get started?", a: "Fill out the quote form on this page with your event date, venue, estimated guest count, and any ideas you have for the bar. We will schedule a free consultation to plan everything." },
    ],
    testimonial: { name: "Alex D", text: "We hired I DO for our corporate gala and they delivered beyond expectations. From the photo booth to the bar service, everything was seamless and professional. Would book again in a heartbeat.", event: "Corporate Gala", date: "Sep 2025" },
    ctaHeadline: "BOOK YOUR BAR",
  },
  "lighting-audio": {
    slug: "lighting-audio",
    title: "Lighting & Audio",
    shortTitle: "Lighting & Audio",
    metaTitle: "Uplighting & Event Lighting Rental Toronto | Sound System Hire",
    metaDescription: "Rent uplighting, dance floor lighting, PA systems, and wireless mics for weddings and events in Toronto & GTA. Get a free quote.",
    heroHeadline: "CREATE THE PERFECT",
    heroSubline: "Atmosphere",
    heroDescription: "Expert lighting design and high-quality audio systems that transform any venue. From dramatic uplighting to crystal-clear speeches, we set the mood and ensure everyone is heard.",
    heroImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80&fm=webp",
    features: [
      { title: "Uplighting & Wash Lighting", desc: "Color-matched LED uplighting that transforms walls, ceilings, and columns to match your event palette." },
      { title: "Dance Floor Lighting", desc: "Moving heads, laser effects, fog machines, and intelligent lighting that syncs with the music." },
      { title: "PA & Sound Systems", desc: "Professional speakers, subwoofers, and monitors sized for your venue - from intimate rooms to 500+ guest halls." },
      { title: "Wireless Microphones", desc: "Lapel, handheld, and headset mics for speeches, toasts, and ceremonies. Backup mics always on standby." },
      { title: "String & Fairy Lights", desc: "Overhead string lighting, fairy light curtains, and canopy lighting for magical outdoor and indoor spaces." },
      { title: "Custom Gobo Projections", desc: "Project your monogram, logo, or custom design onto walls or dance floors with precision gobo lights." },
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=600&h=400&fit=crop&fm=webp",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop&fm=webp",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop&fm=webp",
    ],
    faqs: [
      { q: "Can you visit our venue before the event?", a: "Yes. For weddings and large events, we offer a complimentary venue walkthrough to assess lighting placement, power access, and sound system positioning before your event day." },
      { q: "Do you handle power and electrical requirements?", a: "We bring our own power distribution and cables. For outdoor events or venues with limited power, we can arrange generator rentals to keep everything running." },
      { q: "Can lighting colors be customized to our theme?", a: "Absolutely. Our LED fixtures can be set to any color. We color-match to your decor, invitations, or any specific hex code you provide." },
      { q: "How far in advance should we book lighting and audio?", a: "We recommend booking 4-8 weeks before your event. Weddings and peak season dates should be booked 2-3 months out to ensure availability." },
      { q: "Can lighting and audio be combined with DJ services?", a: "Yes, and most clients do exactly that. Bundling lighting, audio, and DJ creates a seamless experience with one team managing the entire atmosphere. Mention everything you need in the quote form." },
      { q: "How do we get started?", a: "Fill out the quote form on this page with your event date, venue, and a description of the atmosphere you are envisioning. We will reach out within 24 hours to schedule a free consultation." },
    ],
    testimonial: { name: "Nicholas Vecchiarelli", text: "I DO Entertainment made our wedding absolutely incredible. The DJ read the room perfectly and the lighting transformed our venue. Every single guest commented on how amazing the atmosphere was.", event: "Wedding", date: "Oct 2025" },
    ctaHeadline: "BOOK YOUR SETUP",
  },
};

/* ─── Static Params ─── */
export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

/* ─── Metadata ─── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = servicesData[slug];
  if (!svc) return { title: "Service Not Found" };
  return {
    title: svc.metaTitle,
    description: svc.metaDescription,
    alternates: {
      canonical: `https://idoentertainment.ca/services/${svc.slug}`,
    },
    openGraph: {
      title: svc.metaTitle,
      description: svc.metaDescription,
      type: "website",
      url: `https://idoentertainment.ca/services/${svc.slug}`,
      siteName: "I DO Entertainment",
    },
    twitter: {
      card: "summary_large_image",
      title: svc.metaTitle,
      description: svc.metaDescription,
    },
  };
}

/* ─── Page Component ─── */
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = servicesData[slug];
  if (!svc) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: svc.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.title,
    description: svc.heroDescription,
    url: `https://idoentertainment.ca/services/${svc.slug}`,
    provider: {
      "@type": "EventPlanningBusiness",
      name: "I DO Entertainment",
      url: "https://idoentertainment.ca",
      telephone: "+14378763357",
    },
    areaServed: { "@type": "City", name: "Toronto" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-charcoal">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${svc.heroImage}')` }}
          role="img"
          aria-label={`${svc.title} by I DO Entertainment Toronto`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 mb-8 text-sm text-white/50">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/#services" className="hover:text-gold transition-colors">Services</Link>
            <ChevronRight size={14} />
            <span className="text-gold">{svc.title}</span>
          </div>

          <h1 className="mb-6">
            <span
              className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.9] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {svc.heroHeadline}
            </span>
            <span
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gold italic mt-2"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {svc.heroSubline}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            {svc.heroDescription}
          </p>

          <a
            href="#quote"
            className="btn-primary pulse-ring inline-flex items-center gap-2 bg-gold text-charcoal px-10 py-4 rounded-full text-lg font-bold tracking-wide uppercase"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            Get a Free Quote
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* ═══════════ TRUST BAR ═══════════ */}
      <TrustBar />

      {/* ═══════════ WHAT'S INCLUDED ═══════════ */}
      <section className="py-24 md:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span
              className="text-lg text-gold-dark tracking-[0.15em] block mb-3 italic"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              What You Get
            </span>
            <h2
              className="text-5xl md:text-7xl text-charcoal mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              WHAT&apos;S INCLUDED
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {svc.features.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-black/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gold/15 rounded-xl flex items-center justify-center mb-4">
                  <Check size={20} className="text-gold-dark" />
                </div>
                <h3
                  className="text-xl text-charcoal mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {f.title.toUpperCase()}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ HOW IT WORKS ═══════════ */}
      <section className="py-24 md:py-32 bg-charcoal">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span
              className="text-lg text-gold tracking-[0.15em] block mb-3 italic"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Simple Process
            </span>
            <h2
              className="text-5xl md:text-7xl text-white mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              HOW IT WORKS
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Free Consultation", desc: "Tell us about your event vision, guest count, venue, and budget. We'll recommend the perfect package." },
              { step: "02", title: "Custom Planning", desc: "We design a tailored plan with timeline, equipment list, and all logistics handled. You approve, we execute." },
              { step: "03", title: "Flawless Execution", desc: "We arrive early, set up everything, run your event seamlessly, and handle all cleanup. You just enjoy." },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-6xl text-gold/20 mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.step}
                </div>
                <h3
                  className="text-2xl text-white mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.title.toUpperCase()}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ GALLERY ═══════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span
              className="text-lg text-gold-dark tracking-[0.15em] block mb-3 italic"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Our Work
            </span>
            <h2
              className="text-5xl md:text-7xl text-charcoal mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              GALLERY
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {svc.galleryImages.map((img, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <div
                  className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url('${img}')` }}
                  role="img"
                  aria-label={`${svc.title} gallery photo ${i + 1} - I DO Entertainment`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="py-24 md:py-32 bg-off-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span
              className="text-lg text-gold-dark tracking-[0.15em] block mb-3 italic"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Common Questions
            </span>
            <h2
              className="text-5xl md:text-7xl text-charcoal mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              FAQ
            </h2>
          </div>

          <div className="space-y-6">
            {svc.faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-black/5 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-charcoal pr-4" style={{ fontFamily: "var(--font-accent)" }}>
                    {faq.q}
                  </span>
                  <ChevronRight
                    size={20}
                    className="text-charcoal/30 group-open:rotate-90 transition-transform flex-shrink-0"
                  />
                </summary>
                <div className="px-6 pb-6 text-charcoal/60 text-sm leading-relaxed -mt-2">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIAL ═══════════ */}
      <section className="py-24 md:py-32 bg-charcoal">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-1 mb-6">
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <Star key={i} size={24} className="fill-gold text-gold" />
              ))}
          </div>
          <blockquote
            className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8 italic"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            &ldquo;{svc.testimonial.text}&rdquo;
          </blockquote>
          <div>
            <div className="text-white font-semibold" style={{ fontFamily: "var(--font-accent)" }}>
              {svc.testimonial.name}
            </div>
            <div className="text-white/40 text-sm">
              {svc.testimonial.event} &middot; {svc.testimonial.date}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA + CONTACT ═══════════ */}
      <section id="quote" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <span
                className="text-lg text-gold-dark tracking-[0.15em] block mb-3 italic"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Ready to Start?
              </span>
              <h2
                className="text-5xl md:text-6xl text-charcoal mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {svc.ctaHeadline}
              </h2>
              <p className="text-charcoal/60 text-lg leading-relaxed mb-10">
                Tell us about your event and we&apos;ll put together a custom
                {" "}{svc.shortTitle.toLowerCase()} package tailored to your vision,
                venue, and budget.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                    <Phone size={20} className="text-gold-dark" />
                  </div>
                  <div>
                    <div className="text-xs text-charcoal/50 uppercase tracking-wider mb-0.5 italic" style={{ fontFamily: "var(--font-serif)" }}>Call Us</div>
                    <a href="tel:+14378763357" className="text-charcoal font-medium hover:text-gold-dark transition-colors">(437) 876-3357</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                    <Mail size={20} className="text-gold-dark" />
                  </div>
                  <div>
                    <div className="text-xs text-charcoal/50 uppercase tracking-wider mb-0.5 italic" style={{ fontFamily: "var(--font-serif)" }}>Email Us</div>
                    <a href="mailto:info@idoentertainment.ca" className="text-charcoal font-medium hover:text-gold-dark transition-colors">info@idoentertainment.ca</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                    <MapPin size={20} className="text-gold-dark" />
                  </div>
                  <div>
                    <div className="text-xs text-charcoal/50 uppercase tracking-wider mb-0.5 italic" style={{ fontFamily: "var(--font-serif)" }}>Service Area</div>
                    <span className="text-charcoal font-medium">Toronto, Mississauga, Brampton, Vaughan &amp; GTA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <HoneyBookForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
