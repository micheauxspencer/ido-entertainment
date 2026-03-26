import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://idoentertainment.ca"),
  title: {
    default: "Event Rentals & Planning Toronto | Wedding DJ & Corporate Party Services",
    template: "%s | I DO Entertainment Toronto",
  },
  description:
    "Wedding DJ, photo booth, catering, bar service, and event rentals in Toronto & GTA. 500+ events, 5.0 Google rating. Get a free quote for your wedding or corporate event today.",
  keywords: [
    "wedding dj toronto",
    "photo booth rental toronto",
    "event rentals toronto",
    "wedding catering toronto",
    "mobile bar service toronto",
    "corporate event planning toronto",
    "360 photo booth rental gta",
    "wedding planner toronto",
    "event lighting rental toronto",
    "party rentals mississauga",
    "wedding dj brampton",
    "corporate party planning gta",
    "event catering mississauga",
    "tent rental toronto",
    "uplighting rental toronto",
  ],
  openGraph: {
    title: "Event Rentals & Planning Toronto | Wedding DJ & Corporate Party Services",
    description:
      "Wedding DJ, photo booth, catering, bar service, and event rentals in Toronto & GTA. 500+ events, 5.0 Google rating. Free quotes available.",
    type: "website",
    locale: "en_CA",
    url: "https://idoentertainment.ca",
    siteName: "I DO Entertainment",
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Rentals & Planning Toronto | Wedding DJ & Corporate Party Services",
    description:
      "Wedding DJ, photo booth, catering, bar service, and event rentals in Toronto & GTA. 500+ events, 5.0 Google rating. Free quotes available.",
  },
  alternates: {
    canonical: "https://idoentertainment.ca",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  additionalType: "https://schema.org/EventPlanningBusiness",
  name: "I DO Entertainment",
  url: "https://idoentertainment.ca",
  telephone: "+14378763359",
  email: "info@idoentertainment.ca",
  description:
    "Full-service event planning, premium rentals, and custom entertainment for weddings, corporate events, and private celebrations across Toronto and the GTA.",
  areaServed: [
    { "@type": "City", name: "Toronto" },
    { "@type": "City", name: "Mississauga" },
    { "@type": "City", name: "Brampton" },
    { "@type": "City", name: "Vaughan" },
    { "@type": "City", name: "Etobicoke" },
    { "@type": "City", name: "Oakville" },
    { "@type": "City", name: "North York" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    ratingCount: "500",
    reviewCount: "50",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Event Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "DJ Services", url: "https://idoentertainment.ca/services/dj-services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Photo Booths", url: "https://idoentertainment.ca/services/photo-booths" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Catering", url: "https://idoentertainment.ca/services/catering" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Event Rentals", url: "https://idoentertainment.ca/services/event-rentals" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bar Services", url: "https://idoentertainment.ca/services/bar-services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lighting & Audio", url: "https://idoentertainment.ca/services/lighting-audio" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://widget.honeybook.com" />
        <link rel="preconnect" href="https://reviews.unskripted.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Instrument+Serif:ital@0;1&family=Montserrat:wght@400;500;600;700&family=Public+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">
        {children}
        <Script
          id="schema-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
