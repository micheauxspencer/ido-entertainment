import type { MDXComponents } from "mdx/types";
import { Check } from "lucide-react";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="text-3xl md:text-4xl text-charcoal mb-6 mt-12 first:mt-0"
      style={{ fontFamily: "var(--font-serif)" }}
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="text-2xl md:text-3xl text-charcoal mb-4 mt-12"
      style={{ fontFamily: "var(--font-serif)" }}
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-lg md:text-xl text-charcoal mb-3 mt-8"
      style={{ fontFamily: "var(--font-serif)" }}
      {...props}
    />
  ),
  p: (props) => (
    <p className="text-charcoal/80 leading-relaxed mb-5 text-[1.05rem]" {...props} />
  ),
  a: (props) => (
    <a
      className="text-gold-dark hover:text-gold underline underline-offset-2 transition-colors"
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="text-charcoal font-semibold" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-gold pl-6 py-2 my-8 bg-gold/5 rounded-r-xl"
      style={{ fontFamily: "var(--font-serif)" }}
      {...props}
    />
  ),
  ul: (props) => <ul className="space-y-3 mb-6 ml-1" {...props} />,
  ol: (props) => (
    <ol className="space-y-3 mb-6 ml-1 list-decimal list-inside" {...props} />
  ),
  li: (props) => (
    <li className="flex items-start gap-3 text-charcoal/80 leading-relaxed text-[1.05rem]">
      <Check
        size={18}
        className="text-gold-dark mt-1 flex-shrink-0"
      />
      <span {...props} />
    </li>
  ),
  hr: () => <hr className="border-t border-black/10 my-10" />,
  code: (props) => (
    <code
      className="bg-charcoal/5 text-charcoal px-1.5 py-0.5 rounded text-sm"
      {...props}
    />
  ),
};
