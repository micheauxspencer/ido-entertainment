"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    _HB_?: { pid?: string };
  }
}

export default function HoneyBookForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window._HB_ = window._HB_ || {};
    window._HB_.pid = "648142dd1137d90008b1b420";

    const existingScript = document.querySelector(
      'script[src*="placement-controller"]'
    );

    if (existingScript) {
      // Script already loaded from a previous page - remove and re-add
      // to force HoneyBook to re-scan for new widget containers
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js";
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount so next mount gets a fresh init
      script.remove();
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-off-white rounded-3xl p-6 md:p-10">
      <div className="hb-p-648142dd1137d90008b1b420-1" />
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.honeybook.com/p.png?pid=648142dd1137d90008b1b420"
        alt=""
      />
    </div>
  );
}
