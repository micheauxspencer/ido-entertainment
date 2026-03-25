import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogGrid from "@/components/BlogGrid";
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

      {/* Posts */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <BlogGrid posts={posts} />
        </div>
      </section>

      <Footer />
    </>
  );
}
