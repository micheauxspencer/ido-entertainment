import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Check,
  ArrowRight,
  Star,
  ChevronRight,
  Music,
  Camera,
  UtensilsCrossed,
  Tent,
  Wine,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HoneyBookForm from "@/components/HoneyBookForm";
import { TrustBar } from "@/components/Counter";

/* ─── City Data ─── */
interface CityData {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroDescription: string;
  localImage: string;
  localContent: string[];
  popularVenues: string[];
  nearbyAreas: string[];
  faqs: { q: string; a: string }[];
}

const services = [
  { icon: Music, title: "DJ Services", slug: "dj-services", desc: "Custom playlists and professional MCs who read the room and keep your guests on the dance floor.", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop&fm=webp" },
  { icon: Camera, title: "Photo Booths", slug: "photo-booths", desc: "360 video booths and classic photo booths with instant prints, digital sharing, and custom branding.", image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&h=400&fit=crop&fm=webp" },
  { icon: UtensilsCrossed, title: "Catering", slug: "catering", desc: "Chef-crafted menus with full dietary accommodations, from plated dinners to interactive food stations.", image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop&fm=webp" },
  { icon: Tent, title: "Event Rentals", slug: "event-rentals", desc: "Tents, furniture, decor, table settings, and game rentals that transform any venue.", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=400&fit=crop&fm=webp" },
  { icon: Wine, title: "Bar Services", slug: "bar-services", desc: "Licensed mobile bar with craft cocktails, professional bartenders, and a full non-alcoholic menu.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&h=400&fit=crop&fm=webp" },
  { icon: Lightbulb, title: "Lighting & Audio", slug: "lighting-audio", desc: "Uplighting, dance floor effects, PA systems, wireless mics, and custom gobo projections.", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop&fm=webp" },
];

const citiesData: Record<string, CityData> = {
  toronto: {
    slug: "toronto",
    name: "Toronto",
    metaTitle: "Wedding DJ & Event Rentals Toronto | Photo Booth, Catering, Bar",
    metaDescription: "Full-service event entertainment in Toronto. Professional DJs, photo booths, catering, bar services, lighting, and rentals for weddings and corporate events across Toronto.",
    heroImage: "https://images.unsplash.com/photo-1517090504332-6f084180cadf?w=1920&q=80&fm=webp",
    heroDescription: "From King West lofts to Liberty Grand ballrooms, we bring world-class entertainment to every corner of Toronto. Over 300 events delivered across the city with a perfect 5.0 Google rating.",
    localImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80&fm=webp",
    localContent: [
      "Toronto hosts some of the most diverse and vibrant events in Canada. Whether it is a waterfront wedding at the Distillery District, a corporate gala at the Royal Ontario Museum, or a rooftop celebration in King West, I DO Entertainment has the experience and equipment to match the energy of this city.",
      "Our team knows Toronto venues inside and out. We have worked at Liberty Grand, The Fermenting Cellar, Casa Loma, Palais Royale, The Carlu, Evergreen Brick Works, and dozens of boutique spaces across the city. That venue knowledge means we show up prepared with the right equipment, the right setup plan, and zero surprises on your event day.",
      "Toronto events run the full spectrum from intimate 50-person dinners in Yorkville to 500-guest productions at the Metro Toronto Convention Centre. We scale our services to fit, whether you need a single DJ and uplighting or a full-service package with catering, bar, photo booth, and rentals.",
    ],
    popularVenues: ["Liberty Grand", "The Fermenting Cellar", "Casa Loma", "Palais Royale", "Evergreen Brick Works"],
    nearbyAreas: ["Etobicoke", "North York", "Scarborough", "Mississauga"],
    faqs: [
      { q: "What areas of Toronto do you serve?", a: "We serve all of Toronto including downtown, midtown, East York, Scarborough, and the waterfront. If your venue is in the city, we cover it." },
      { q: "Do you have experience at Toronto's major venues?", a: "Yes. We have worked at Liberty Grand, Casa Loma, The Fermenting Cellar, Palais Royale, Evergreen Brick Works, and many more. Fill out the quote form with your venue and we will confirm our experience there." },
      { q: "How far in advance should I book for a Toronto wedding?", a: "Toronto wedding dates book fast, especially summer Saturdays. We recommend booking 6-12 months ahead for peak season and 3-6 months for off-peak dates." },
      { q: "Can you handle large corporate events in Toronto?", a: "Absolutely. We have produced corporate events for 50 to 500+ guests at venues across the city including convention centres, hotel ballrooms, and unique event spaces." },
      { q: "How do we get started?", a: "Fill out the quote form on this page with your event date, venue, and details. We will reach out within 24 hours to schedule a free consultation." },
    ],
  },
  mississauga: {
    slug: "mississauga",
    name: "Mississauga",
    metaTitle: "Wedding DJ & Party Rentals Mississauga | Photo Booth, Catering",
    metaDescription: "Premium event entertainment in Mississauga. Professional DJs, photo booths, catering, bar services, lighting, and rentals for weddings and corporate events in Mississauga and Peel Region.",
    heroImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&q=80&fm=webp",
    heroDescription: "Mississauga couples and corporate planners trust I DO Entertainment for full-service event production. From Lakefront Promenade celebrations to grand banquet hall weddings, we deliver flawless entertainment across Peel Region.",
    localImage: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80&fm=webp",
    localContent: [
      "Mississauga is home to some of the GTA's most popular banquet halls and event venues. Spaces like Paramount Event Space, Versailles Convention Centre, Le Jardin, and the Waterside Inn host hundreds of weddings and corporate events each year, and I DO Entertainment has been a preferred vendor at many of them.",
      "The city's multicultural community means we regularly handle events spanning South Asian weddings with baraat processions and sangeet nights, Middle Eastern celebrations with traditional music integration, Caribbean parties, and classic Western receptions. Our DJs are fluent in every genre and our team understands the cultural nuances that make each event unique.",
      "Mississauga's proximity to Pearson International Airport also makes it a hub for corporate conferences and out-of-town guest events. We handle the logistics so you can focus on your guests, whether your venue is in City Centre, Port Credit, Streetsville, or Erin Mills.",
    ],
    popularVenues: ["Paramount Event Space", "Versailles Convention Centre", "Le Jardin", "The Waterside Inn", "Lakefront Promenade"],
    nearbyAreas: ["Toronto", "Brampton", "Oakville", "Etobicoke"],
    faqs: [
      { q: "Do you serve all of Mississauga?", a: "Yes. We cover Mississauga end to end including City Centre, Port Credit, Streetsville, Erin Mills, Meadowvale, and Malton." },
      { q: "Do you have experience with multicultural events?", a: "Absolutely. We regularly produce South Asian, Middle Eastern, Caribbean, and multicultural weddings with genre-specific music, cultural traditions, and the right energy for each celebration." },
      { q: "What Mississauga venues have you worked at?", a: "We have worked at Paramount Event Space, Versailles Convention Centre, Le Jardin, The Waterside Inn, and many more. Share your venue in the quote form and we will confirm our experience there." },
      { q: "How far in advance should I book?", a: "Mississauga venues book up fast. We recommend 6-12 months ahead for wedding dates and 4-8 weeks for corporate events." },
      { q: "How do we get started?", a: "Fill out the quote form on this page with your event date, venue, and what services you need. We will schedule a free consultation within 24 hours." },
    ],
  },
  brampton: {
    slug: "brampton",
    name: "Brampton",
    metaTitle: "Wedding DJ & Event Rentals Brampton | Photo Booth, Catering",
    metaDescription: "Full-service event entertainment in Brampton. Professional DJs, photo booths, catering, bar services, lighting, and rentals for weddings and corporate events in Brampton.",
    heroImage: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80&fm=webp",
    heroDescription: "Brampton is one of the fastest-growing event markets in the GTA, and I DO Entertainment has been serving the community for 8+ years. From grand banquet hall weddings to intimate backyard celebrations, we bring the same premium experience to every event.",
    localImage: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80&fm=webp",
    localContent: [
      "Brampton's event scene has exploded in recent years with venues like Chateau Le Jardin, Embassy Grand Convention Centre, and Pearson Convention Centre hosting hundreds of celebrations annually. I DO Entertainment has built strong relationships with venues across the city, which means smoother load-in, better setup coordination, and a team that already knows the space.",
      "The South Asian wedding market in Brampton is one of the largest in the GTA. Our DJs carry extensive Bollywood, Bhangra, and Punjabi libraries, and our team understands the flow of multi-day celebrations from Mehndi to reception. We also produce corporate events, holiday parties, school dances, and community celebrations throughout Peel Region.",
      "Brampton's central location in the GTA means many guests are traveling from Toronto, Mississauga, Vaughan, and beyond. We help coordinate event timelines that account for travel and parking logistics, so everything runs on schedule.",
    ],
    popularVenues: ["Chateau Le Jardin", "Embassy Grand", "Pearson Convention Centre", "Crystal Grand Banquet Hall", "Royal King Event Centre"],
    nearbyAreas: ["Mississauga", "Vaughan", "Caledon", "Georgetown"],
    faqs: [
      { q: "Do you serve all of Brampton?", a: "Yes. We cover all Brampton neighborhoods including Bramalea, Heart Lake, Springdale, Mount Pleasant, and the downtown core." },
      { q: "Do you have experience with South Asian weddings?", a: "Extensive experience. We regularly produce multi-day South Asian celebrations with genre-specific DJs, cultural music integration, and the right energy for each event from Mehndi to reception." },
      { q: "What Brampton venues have you worked at?", a: "We have worked at Chateau Le Jardin, Embassy Grand, Pearson Convention Centre, Crystal Grand, and many more. Let us know your venue in the quote form." },
      { q: "Can you handle outdoor events in Brampton?", a: "Yes. We have the tents, generators, weatherproof equipment, and backup plans needed for outdoor events in Brampton parks, backyards, and estate properties." },
      { q: "How do we get started?", a: "Fill out the quote form on this page with your event details. We respond within 24 hours to schedule a free consultation." },
    ],
  },
  vaughan: {
    slug: "vaughan",
    name: "Vaughan",
    metaTitle: "Wedding DJ & Party Rentals Vaughan | Photo Booth, Catering, Bar",
    metaDescription: "Premium event entertainment in Vaughan. Professional DJs, photo booths, catering, bar services, lighting, and rentals for weddings and corporate events in Vaughan and York Region.",
    heroImage: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=1920&q=80&fm=webp",
    heroDescription: "Vaughan is home to some of the GTA's most stunning banquet halls and event venues. I DO Entertainment brings premium entertainment, flawless execution, and 8+ years of experience to every event in Vaughan and York Region.",
    localImage: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80&fm=webp",
    localContent: [
      "Vaughan has become one of the premier event destinations in the GTA. Venues like Terrace Banquet Centre, Universal EventSpace, Hazelton Manor, and The Venetian host thousands of celebrations each year ranging from lavish Italian weddings to large-scale corporate productions.",
      "The Italian, Portuguese, and Jewish communities in Vaughan have a strong tradition of grand celebrations, and our team understands the cultural expectations that come with those events. From Hora dances to tarantella circles, from cocktail-heavy receptions to multi-course sit-down dinners, we tailor the entertainment to match the energy and traditions your family expects.",
      "Vaughan's location along Highway 400 and the 407 makes it accessible from across the GTA, which is why so many couples choose Vaughan venues even when their guests are coming from Toronto, Brampton, or Markham. We handle the timing and logistics so your event flows seamlessly regardless of where guests are traveling from.",
    ],
    popularVenues: ["Terrace Banquet Centre", "Universal EventSpace", "Hazelton Manor", "The Venetian", "Paradise Banquet Hall"],
    nearbyAreas: ["Toronto", "Brampton", "Richmond Hill", "Markham"],
    faqs: [
      { q: "Do you serve all of Vaughan?", a: "Yes. We cover Vaughan end to end including Woodbridge, Maple, Kleinburg, Thornhill, and Concord." },
      { q: "What Vaughan venues have you worked at?", a: "We have extensive experience at Terrace Banquet Centre, Universal EventSpace, Hazelton Manor, The Venetian, Paradise Banquet Hall, and many more." },
      { q: "Do you handle large-scale Vaughan weddings?", a: "Absolutely. Vaughan venues regularly host 300-500+ guest weddings. We scale our team, equipment, and services to match the size and energy of your celebration." },
      { q: "Can you accommodate cultural traditions?", a: "Yes. Our team has deep experience with Italian, Portuguese, Jewish, South Asian, and multicultural celebrations. We adapt our DJs, MC style, and timing to honor your traditions." },
      { q: "How do we get started?", a: "Fill out the quote form on this page with your event date, venue, and details. We will reach out within 24 hours for a free consultation." },
    ],
  },
  etobicoke: {
    slug: "etobicoke",
    name: "Etobicoke",
    metaTitle: "Wedding DJ & Event Rentals Etobicoke | Photo Booth, Catering",
    metaDescription: "Full-service event entertainment in Etobicoke. Professional DJs, photo booths, catering, bar services, lighting, and rentals for weddings and corporate events in Etobicoke.",
    heroImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&q=80&fm=webp",
    heroDescription: "Etobicoke offers some of the most charming and versatile event spaces in the west end of Toronto. I DO Entertainment brings full-service entertainment to every venue in Etobicoke, from historic estates to modern event halls.",
    localImage: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80&fm=webp",
    localContent: [
      "Etobicoke sits at the crossroads of Toronto and Mississauga, making it an ideal location for events drawing guests from across the GTA. Venues like The Old Mill Toronto, The Waterside Inn, Islington Golf Club, and the Humber Valley offer a mix of historic charm and modern elegance that pairs perfectly with premium entertainment.",
      "The neighborhood character of Etobicoke means events here tend to feel more intimate and personal compared to downtown Toronto. Whether it is a garden wedding at a Humber River estate, a retirement dinner at a golf club, or a holiday party at a waterfront restaurant, the atmosphere calls for entertainment that matches the setting without overpowering it.",
      "Our team has extensive experience calibrating sound levels, lighting intensity, and energy pacing for Etobicoke's diverse venue sizes. From cozy 50-person dinners to 250-guest receptions, we bring the right setup for the space.",
    ],
    popularVenues: ["The Old Mill Toronto", "The Waterside Inn", "Islington Golf Club", "Humber Valley Resort", "The Queensway Convention Centre"],
    nearbyAreas: ["Toronto", "Mississauga", "Oakville", "Vaughan"],
    faqs: [
      { q: "Do you serve all of Etobicoke?", a: "Yes. We cover Etobicoke fully including Mimico, New Toronto, Long Branch, The Kingsway, Islington Village, and Rexdale." },
      { q: "What Etobicoke venues have you worked at?", a: "We have worked at The Old Mill, The Waterside Inn, Islington Golf Club, and many more. Share your venue in the quote form and we will confirm our experience there." },
      { q: "Can you handle both indoor and outdoor events in Etobicoke?", a: "Yes. Etobicoke has beautiful outdoor spaces along the Humber River and lakeshore. We bring weatherproof equipment and backup plans for outdoor celebrations." },
      { q: "How far in advance should I book for an Etobicoke event?", a: "We recommend 4-8 weeks for corporate events and 6-12 months for weddings, especially for popular summer dates." },
      { q: "How do we get started?", a: "Fill out the quote form on this page with your event date, venue, and what you are envisioning. We will schedule a free consultation within 24 hours." },
    ],
  },
  oakville: {
    slug: "oakville",
    name: "Oakville",
    metaTitle: "Wedding DJ & Event Rentals Oakville | Photo Booth, Catering, Bar",
    metaDescription: "Premium event entertainment in Oakville. Professional DJs, photo booths, catering, bar services, lighting, and rentals for weddings and corporate events in Oakville and Halton Region.",
    heroImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80&fm=webp",
    heroDescription: "Oakville's elegant venues and lakefront setting create the perfect backdrop for unforgettable events. I DO Entertainment delivers refined, full-service entertainment tailored to Oakville's sophisticated event scene.",
    localImage: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80&fm=webp",
    localContent: [
      "Oakville is one of the GTA's most sought-after event destinations, known for its waterfront charm, estate properties, and upscale venues. Spaces like Paletta Lakefront, Glen Abbey Golf Club, Oakville Conference Centre, and The Raithby offer settings that demand entertainment to match.",
      "Events in Oakville tend to lean toward refined elegance. Our team excels at reading the room and matching the energy, whether that means a jazz trio during cocktails transitioning to a high-energy dance set, or sophisticated uplighting that transforms a lakefront tent into a magazine-worthy reception space.",
      "Many Oakville clients bundle multiple services for a seamless experience. A typical Oakville wedding package might include DJ and MC services, uplighting and dance floor lighting, a 360 photo booth, and bar service, all managed by one team with one point of contact. That coordination eliminates vendor confusion and keeps your event running perfectly.",
    ],
    popularVenues: ["Paletta Lakefront", "Glen Abbey Golf Club", "Oakville Conference Centre", "The Raithby", "Holiday Inn Oakville"],
    nearbyAreas: ["Mississauga", "Burlington", "Milton", "Etobicoke"],
    faqs: [
      { q: "Do you serve all of Oakville?", a: "Yes. We cover all of Oakville including downtown, Bronte, Lakeshore, Glen Abbey, and the surrounding Halton Region." },
      { q: "What Oakville venues have you worked at?", a: "We have worked at Paletta Lakefront, Glen Abbey Golf Club, Oakville Conference Centre, The Raithby, and many private estates along the lakeshore." },
      { q: "Do you offer bundled packages for Oakville events?", a: "Yes. Most of our Oakville clients bundle DJ, lighting, photo booth, and bar services for a seamless experience. Tell us everything you need in the quote form." },
      { q: "Can you handle outdoor lakefront events?", a: "Absolutely. We have extensive experience with outdoor events along Oakville's lakeshore including tented receptions, garden ceremonies, and waterfront cocktail hours." },
      { q: "How do we get started?", a: "Fill out the quote form on this page with your event date, venue, and what services you need. We will reach out within 24 hours for a free consultation." },
    ],
  },
  "north-york": {
    slug: "north-york",
    name: "North York",
    metaTitle: "Wedding DJ & Party Rentals North York | Photo Booth, Catering",
    metaDescription: "Full-service event entertainment in North York. Professional DJs, photo booths, catering, bar services, lighting, and rentals for weddings and corporate events in North York.",
    heroImage: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=1920&q=80&fm=webp",
    heroDescription: "North York is home to some of the GTA's most iconic banquet halls and event venues. I DO Entertainment delivers full-service entertainment for weddings, corporate events, and private celebrations across the entire North York area.",
    localImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80&fm=webp",
    localContent: [
      "North York's event scene is anchored by legendary venues like The Montecassino, Grand Luxe Event Boutique, York Mills Gallery, and the Toronto Botanical Garden. These spaces host everything from 100-person intimate dinners to 600-guest grand celebrations, and I DO Entertainment has produced events at many of them.",
      "The cultural diversity of North York means we regularly produce Persian, Korean, Chinese, Filipino, South Asian, and multicultural events, each with unique music requirements, traditions, and energy levels. Our DJ team carries libraries spanning every genre and our MCs adapt their style to match the cultural tone of your celebration.",
      "North York's central location along the 401 corridor makes it one of the most accessible event hubs in the GTA. Guests traveling from downtown Toronto, Vaughan, Markham, or Scarborough can reach most North York venues within 20-30 minutes, making it an ideal choice for events with guests coming from across the region.",
    ],
    popularVenues: ["The Montecassino", "Grand Luxe Event Boutique", "York Mills Gallery", "Toronto Botanical Garden", "The Manor Event Venue"],
    nearbyAreas: ["Toronto", "Vaughan", "Markham", "Scarborough"],
    faqs: [
      { q: "Do you serve all of North York?", a: "Yes. We cover all of North York including Willowdale, Don Mills, York Mills, Bayview Village, Downsview, and Jane and Finch." },
      { q: "What North York venues have you worked at?", a: "We have extensive experience at The Montecassino, Grand Luxe Event Boutique, York Mills Gallery, and many more. Let us know your venue in the quote form." },
      { q: "Do you have experience with multicultural events in North York?", a: "Extensive experience. We produce Persian, Korean, Chinese, Filipino, South Asian, and multicultural celebrations regularly, with genre-specific DJs and cultural awareness." },
      { q: "How far in advance should I book for a North York event?", a: "North York venues are in high demand. We recommend 6-12 months for weddings and 4-8 weeks for corporate events." },
      { q: "How do we get started?", a: "Fill out the quote form on this page with your event date, venue, and details. We will schedule a free consultation within 24 hours." },
    ],
  },
};

/* ─── Static Params ─── */
export function generateStaticParams() {
  return Object.keys(citiesData).map((slug) => ({ slug }));
}

/* ─── Metadata ─── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = citiesData[slug];
  if (!city) return { title: "Area Not Found" };
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: {
      canonical: `https://idoentertainment.ca/areas/${city.slug}`,
    },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      type: "website",
      url: `https://idoentertainment.ca/areas/${city.slug}`,
      siteName: "I DO Entertainment",
    },
  };
}

/* ─── Page ─── */
export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = citiesData[slug];
  if (!city) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EventPlanningBusiness",
    name: "I DO Entertainment",
    url: `https://idoentertainment.ca/areas/${city.slug}`,
    telephone: "+14378363359",
    email: "info@idoentertainment.ca",
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: { "@type": "AdministrativeArea", name: "Ontario, Canada" },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "85",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-charcoal">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${city.heroImage}')` }}
          role="img"
          aria-label={`Event entertainment venue in ${city.name}`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-28 pb-16">
          <div className="flex items-center justify-center gap-2 mb-8 text-sm text-white/50">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-gold">{city.name}</span>
          </div>

          <h1 className="mb-6">
            <span
              className="block text-base text-gold/80 tracking-[0.3em] uppercase mb-4 italic"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Event Entertainment in
            </span>
            <span
              className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.9] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {city.name.toUpperCase()}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            {city.heroDescription}
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

      {/* ═══════════ SERVICES GRID ═══════════ */}
      <section className="py-24 md:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span
              className="text-base text-gold-dark tracking-[0.2em] uppercase block mb-3 italic"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              What We Bring to {city.name}
            </span>
            <h2
              className="text-5xl md:text-7xl text-charcoal mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              OUR SERVICES
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  aria-label={`Learn more about ${svc.title} in ${city.name}`}
                  className="service-card group bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="service-image absolute inset-0 bg-cover bg-center transition-transform duration-700"
                      style={{ backgroundImage: `url('${svc.image}')` }}
                      role="img"
                      aria-label={`${svc.title} in ${city.name} - I DO Entertainment`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
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
                    <span
                      className="inline-flex items-center gap-1 text-sm font-semibold text-charcoal group-hover:text-gold-dark transition-colors"
                      style={{ fontFamily: "var(--font-accent)" }}
                    >
                      Learn More
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ LOCAL CONTENT ═══════════ */}
      <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${city.localImage}')` }}
                  role="img"
                  aria-label={`Event entertainment in ${city.name}`}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold rounded-2xl p-6 shadow-2xl max-w-[240px]">
                <div
                  className="text-4xl font-bold text-charcoal mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  500+
                </div>
                <div className="text-sm text-charcoal/70 font-medium">
                  Successful events across {city.name} and the GTA
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <span
                className="text-base text-gold tracking-[0.2em] block mb-3 italic"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Why {city.name}
              </span>
              <h2
                className="text-5xl md:text-6xl text-white mb-6 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                LOCAL
                <br />
                <span
                  className="text-gold italic"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Expertise
                </span>
              </h2>

              <div className="space-y-5 mb-10">
                {city.localContent.map((p, i) => (
                  <p key={i} className="text-white/60 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* Popular Venues */}
              <div className="mb-8">
                <h3
                  className="text-lg text-white mb-4"
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  Venues we work with in {city.name}:
                </h3>
                <div className="flex flex-wrap gap-3">
                  {city.popularVenues.map((venue) => (
                    <div
                      key={venue}
                      className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10"
                    >
                      <Check size={14} className="text-gold" />
                      <span className="text-white/70 text-sm">{venue}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nearby Areas */}
              <div className="pt-6 border-t border-white/10">
                <span className="text-sm text-white/40 mr-3">Also serving:</span>
                {city.nearbyAreas.map((area, i) => {
                  const areaSlug = area.toLowerCase().replace(/\s+/g, "-");
                  const hasPage = citiesData[areaSlug];
                  return (
                    <span key={area}>
                      {hasPage ? (
                        <Link
                          href={`/areas/${areaSlug}`}
                          className="text-gold/70 hover:text-gold text-sm transition-colors underline underline-offset-2"
                        >
                          {area}
                        </Link>
                      ) : (
                        <span className="text-white/40 text-sm">{area}</span>
                      )}
                      {i < city.nearbyAreas.length - 1 && <span className="text-white/20 mx-2">|</span>}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="py-24 md:py-32 bg-off-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span
              className="text-base text-gold-dark tracking-[0.2em] uppercase block mb-3 italic"
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
            {city.faqs.map((faq, i) => (
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
            {Array(5).fill(null).map((_, i) => (
              <Star key={i} size={24} className="fill-gold text-gold" />
            ))}
          </div>
          <blockquote
            className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8 italic"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            &ldquo;I DO Entertainment made our event absolutely incredible. Every single guest commented on how amazing the atmosphere was. True professionals who care about every detail.&rdquo;
          </blockquote>
          <div>
            <div className="text-white font-semibold" style={{ fontFamily: "var(--font-accent)" }}>
              Verified Google Review
            </div>
            <div className="text-white/40 text-sm">
              {city.name} Event &middot; 5.0 Rating
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA + FORM ═══════════ */}
      <section id="quote" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span
                className="text-base text-gold-dark tracking-[0.2em] uppercase block mb-3 italic"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Ready to Start?
              </span>
              <h2
                className="text-5xl md:text-6xl text-charcoal mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                BOOK YOUR {city.name.toUpperCase()} EVENT
              </h2>
              <p className="text-charcoal/60 text-lg leading-relaxed mb-10">
                Tell us about your {city.name} event and we will put together a
                custom entertainment package tailored to your venue, vision, and budget.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                    <Phone size={20} className="text-gold-dark" />
                  </div>
                  <div>
                    <div className="text-xs text-charcoal/50 uppercase tracking-wider mb-0.5 italic" style={{ fontFamily: "var(--font-serif)" }}>Call Us</div>
                    <a href="tel:+14378363359" className="text-charcoal font-medium hover:text-gold-dark transition-colors">(437) 836-3359</a>
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
                    <span className="text-charcoal font-medium">{city.name} and surrounding areas</span>
                  </div>
                </div>
              </div>
            </div>

            <HoneyBookForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
