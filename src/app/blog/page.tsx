import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | I DO Entertainment - Event Planning Tips & Insights",
  description:
    "Expert tips on DJs, photo booths, catering, and event planning for weddings and corporate events in Toronto and the GTA.",
  openGraph: {
    title: "Blog | I DO Entertainment",
    description:
      "Expert event planning tips for Toronto weddings and corporate events.",
    url: "https://idoentertainment.ca/blog",
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar solid />

      {/* Hero */}
      <section className="bg-charcoal pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span
            className="text-sm text-gold tracking-[0.3em] block mb-3 italic"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Insights & Tips
          </span>
          <h1
            className="text-5xl md:text-7xl text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            OUR BLOG
          </h1>
          <p
            className="text-lg text-white/60 max-w-xl mx-auto italic"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Expert advice on making your next event unforgettable
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          {posts.length === 0 ? (
            <p className="text-center text-charcoal/50 text-lg">
              Coming soon - stay tuned for expert event planning insights.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: `url('${post.image}')` }}
                      role="img"
                      aria-label={post.imageAlt}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gold/10 text-gold-dark px-2.5 py-1 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2
                      className="text-xl text-charcoal mb-2 group-hover:text-gold-dark transition-colors leading-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {post.title.toUpperCase()}
                    </h2>

                    <p className="text-charcoal/60 text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-charcoal/40">
                        <span>
                          {new Date(post.date).toLocaleDateString("en-CA", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {post.readingTime}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-charcoal group-hover:text-gold-dark transition-colors flex items-center gap-1">
                        Read
                        <ArrowRight
                          size={14}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
