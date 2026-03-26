import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllSlugs, getPostBySlug } from "@/lib/sanity";
import MarkdownBody from "@/components/MarkdownBody";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `https://idoentertainment.ca/blog/${post.slug}`,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "I DO Entertainment",
      url: "https://idoentertainment.ca",
    },
    publisher: {
      "@type": "Organization",
      name: "I DO Entertainment",
      url: "https://idoentertainment.ca",
    },
    mainEntityOfPage: `https://idoentertainment.ca/blog/${post.slug}`,
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <Navbar solid />

      {/* Hero */}
      <section className="relative bg-charcoal pt-28 pb-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-6 text-sm text-white/40">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
            <ChevronRight size={14} />
            <span className="text-gold truncate max-w-[200px]">{post.title}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs bg-white/10 text-white/60 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <h1
            className="text-3xl md:text-4xl lg:text-5xl text-white leading-snug mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-white/40">
            <span>{post.author}</span>
            <span>|</span>
            <span>
              {new Date(post.date).toLocaleDateString("en-CA", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span>|</span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {post.readingTime}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-6 -mt-16 relative z-10">
        <div className="aspect-[2/1] rounded-2xl overflow-hidden shadow-2xl">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${post.image}')` }}
            role="img"
            aria-label={post.imageAlt}
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <MarkdownBody content={post.body} />
        </div>
      </article>

      {/* Author Bio */}
      <section className="py-12 bg-off-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span
                className="text-2xl text-gold-dark font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                ID
              </span>
            </div>
            <div>
              <h3
                className="text-lg text-charcoal font-bold mb-1"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                I DO Entertainment
              </h3>
              <p className="text-charcoal/60 text-sm leading-relaxed">
                Full-service event entertainment company serving Toronto and the
                GTA. Over 500 events delivered with a 5.0 Google rating. We
                specialize in DJ services, photo booths, catering, event
                rentals, bar services, and lighting & audio for weddings,
                corporate events, and private celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal text-center">
        <div className="max-w-2xl mx-auto px-6">
          <span
            className="text-sm text-gold tracking-[0.3em] block mb-3 italic"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Ready to plan your event?
          </span>
          <h2
            className="text-4xl md:text-5xl text-white mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            GET A FREE QUOTE
          </h2>
          <p className="text-white/50 mb-8">
            Tell us about your event and we&apos;ll put together a custom package.
          </p>
          <Link
            href="/#contact"
            className="btn-primary inline-flex items-center gap-2 bg-gold text-charcoal px-10 py-4 rounded-full text-lg font-bold tracking-wide uppercase"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Back to Blog */}
      <div className="max-w-3xl mx-auto px-6 py-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-charcoal/50 hover:text-gold-dark transition-colors text-sm"
        >
          <ArrowLeft size={16} />
          Back to all articles
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Footer />
    </>
  );
}
