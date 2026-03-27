"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Search, X } from "lucide-react";
import type { PostMeta } from "@/lib/sanity";

const POSTS_PER_PAGE = 9;

export default function BlogGrid({ posts }: { posts: PostMeta[] }) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  // Collect all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return Array.from(tags).sort();
  }, [posts]);

  // Filter posts by search query and active tag
  const filtered = useMemo(() => {
    let result = posts;

    if (activeTag) {
      result = result.filter((p) => p.tags.includes(activeTag));
    }

    if (query.trim()) {
      const q = query.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.searchContent.includes(q)
      );
    }

    return result;
  }, [posts, query, activeTag]);

  // Pagination
  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice(0, page * POSTS_PER_PAGE);
  const hasMore = page * POSTS_PER_PAGE < filtered.length;

  // Reset page when filters change
  const handleSearch = (val: string) => {
    setQuery(val);
    setPage(1);
  };
  const handleTag = (tag: string | null) => {
    setActiveTag(tag);
    setPage(1);
  };

  return (
    <div>
      {/* Search + Filters */}
      <div className="mb-10 space-y-5">
        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/30"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search articles..."
            className="w-full bg-white border border-black/10 rounded-full pl-11 pr-10 py-3 text-charcoal placeholder:text-charcoal/30 transition-all text-sm"
            style={{ fontFamily: "var(--font-body)" }}
          />
          {query && (
            <button
              onClick={() => handleSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/30 hover:text-charcoal transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Tag Filters */}
        {allTags.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => handleTag(null)}
              className={`text-xs px-4 py-1.5 rounded-full transition-all ${
                activeTag === null
                  ? "bg-gold text-charcoal font-semibold"
                  : "bg-white border border-black/10 text-charcoal/50 hover:text-charcoal hover:border-black/20"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTag(activeTag === tag ? null : tag)}
                className={`text-xs px-4 py-1.5 rounded-full transition-all ${
                  activeTag === tag
                    ? "bg-gold text-charcoal font-semibold"
                    : "bg-white border border-black/10 text-charcoal/50 hover:text-charcoal hover:border-black/20"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Results Count */}
      {(query || activeTag) && (
        <p className="text-sm text-charcoal/40 text-center mb-6">
          {filtered.length} {filtered.length === 1 ? "article" : "articles"} found
          {activeTag && (
            <>
              {" "}in <span className="text-gold-dark font-medium">{activeTag}</span>
            </>
          )}
          {query && (
            <>
              {" "}for &ldquo;<span className="text-charcoal/60">{query}</span>&rdquo;
            </>
          )}
        </p>
      )}

      {/* Posts Grid */}
      {paginated.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-charcoal/40 text-lg mb-2">No articles found</p>
          <p className="text-charcoal/30 text-sm">
            Try a different search term or clear your filters
          </p>
          <button
            onClick={() => {
              handleSearch("");
              handleTag(null);
            }}
            className="mt-4 text-sm text-gold-dark hover:text-gold transition-colors underline underline-offset-2"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginated.map((post) => (
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
                    className="text-xl text-charcoal mb-2 group-hover:text-gold-dark transition-colors leading-snug"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {post.title}
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

          {/* Load More */}
          {hasMore && (
            <div className="text-center mt-12">
              <button
                onClick={() => setPage(page + 1)}
                className="btn-primary bg-gold text-charcoal px-8 py-3 rounded-full text-sm font-bold tracking-wide uppercase"
                style={{ fontFamily: "var(--font-accent)" }}
              >
                Load More Articles
              </button>
              <p className="text-xs text-charcoal/30 mt-2">
                Showing {paginated.length} of {filtered.length}
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
