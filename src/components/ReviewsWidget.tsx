"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function ReviewsWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  // Lazy-load: only trigger when widget scrolls into view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    setIsVisible(false);
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [pathname]);

  // Load/reload the reviews script when visible
  useEffect(() => {
    if (!isVisible) return;

    // Remove any existing reviews script to force re-init
    const existing = document.querySelector(
      'script[src*="reviews.unskripted.com"]'
    );
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.src =
      "https://reviews.unskripted.com/js/v2/embed.js?id=1f20bba7a0b19c74df97d87d1a9e782a";
    script.type = "text/javascript";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [isVisible]);

  return (
    <div ref={containerRef} className="min-h-[200px]">
      {isVisible && (
        <div
          data-romw-token="jz3UgUh0puKKKAGjvmhknKEdDQ1FXeo19SwEAs6u51tNVnMOgi"
          data-romw-lazy
        />
      )}
    </div>
  );
}
