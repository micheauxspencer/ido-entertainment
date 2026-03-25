"use client";

import { useState, useEffect, useRef } from "react";

export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView();
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function TrustBar() {
  return (
    <section className="bg-charcoal border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { num: 500, suffix: "+", label: "Events Completed" },
          { num: 5, suffix: ".0", label: "Google Rating" },
          { num: 8, suffix: "+", label: "Years Experience" },
          { num: 100, suffix: "%", label: "Client Satisfaction" },
        ].map((s, i) => (
          <div key={i} className="space-y-1">
            <div
              className="text-4xl md:text-5xl font-bold text-gold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <Counter end={s.num} suffix={s.suffix} />
            </div>
            <div
              className="text-sm text-white/50 uppercase tracking-wider italic"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
