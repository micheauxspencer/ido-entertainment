"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    _HB_?: { pid?: string };
  }
}

export default function HoneyBookForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  // Reset on navigation so widget re-inits
  useEffect(() => {
    setIsVisible(false);
    const el = containerRef.current;
    if (!el) return;
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

  // Load HoneyBook script when visible
  useEffect(() => {
    if (!isVisible) return;

    window._HB_ = window._HB_ || {};
    window._HB_.pid = "648142dd1137d90008b1b420";

    // Always remove and re-add to force re-init on navigation
    const existingScript = document.querySelector(
      'script[src*="placement-controller"]'
    );
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js";
    document.head.appendChild(script);

    // Fix iframe accessibility
    const observer = new MutationObserver(() => {
      const iframe = containerRef.current?.querySelector("iframe");
      if (iframe && !iframe.title) {
        iframe.title = "I DO Entertainment Contact Form";
      }
    });
    if (containerRef.current) {
      observer.observe(containerRef.current, { childList: true, subtree: true });
    }

    return () => {
      script.remove();
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <div ref={containerRef} className="bg-off-white rounded-3xl p-6 md:p-10 min-h-[400px]">
      {isVisible ? (
        <>
          <div className="hb-p-648142dd1137d90008b1b420-1" />
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.honeybook.com/p.png?pid=648142dd1137d90008b1b420"
            alt=""
          />
        </>
      ) : (
        <div className="flex items-center justify-center h-64 text-charcoal/60">
          <span className="text-sm" style={{ fontFamily: "var(--font-accent)" }}>Loading contact form...</span>
        </div>
      )}
    </div>
  );
}
