"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Unified Dashboard",
    description: "See revenue, EBITDA, runway, and custom KPIs across your entire portfolio at a glance.",
    metric: "Real-time",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Excel Integration",
    description: "Native Excel add-in syncs live data directly into your existing spreadsheets.",
    metric: "=BASTION()",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "AI Document Processing",
    description: "Forward board decks and reports to your inbox. AI extracts KPIs automatically.",
    metric: "10x faster",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: "Smart Alerts",
    description: "Get proactive notifications for missing updates and declining metrics.",
    metric: "Proactive",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Data Lineage",
    description: "Every data point is traced back to its source document for full audit trails.",
    metric: "100% tracked",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Team Collaboration",
    description: "Share insights across your team with role-based access controls.",
    metric: "Secure",
  },
];

export function FeatureSections() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="product" className="py-24 lg:py-32 bg-[#08080a] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-600/5 rounded-full blur-[180px]" />
        <div 
          className="absolute inset-0 opacity-30" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(168,85,247,0.08) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-6 border border-purple-500/20">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Features
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 text-balance">
            Everything you need for
            <span className="block mt-1 bg-gradient-to-r from-purple-400 via-purple-300 to-violet-400 bg-clip-text text-transparent">
              portfolio intelligence
            </span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Powerful features designed specifically for VC and PE teams
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl p-6 transition-all duration-500 cursor-pointer ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                background: hoveredIndex === index 
                  ? 'linear-gradient(135deg, rgba(168,85,247,0.1) 0%, rgba(139,92,246,0.05) 100%)' 
                  : 'linear-gradient(135deg, rgba(24,24,27,0.6) 0%, rgba(24,24,27,0.3) 100%)',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Border */}
              <div 
                className="absolute inset-0 rounded-2xl border transition-all duration-300"
                style={{
                  borderColor: hoveredIndex === index ? 'rgba(168,85,247,0.4)' : 'rgba(63,63,70,0.5)',
                }}
              />
              
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                style={{
                  boxShadow: '0 0 60px rgba(168,85,247,0.15)',
                }}
              />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-purple-400 mb-4 transition-all duration-300"
                  style={{
                    background: hoveredIndex === index 
                      ? 'linear-gradient(135deg, rgba(168,85,247,0.2) 0%, rgba(139,92,246,0.1) 100%)' 
                      : 'rgba(168,85,247,0.1)',
                    border: `1px solid ${hoveredIndex === index ? 'rgba(168,85,247,0.3)' : 'rgba(168,85,247,0.15)'}`,
                    transform: hoveredIndex === index ? 'scale(1.1) rotateZ(-5deg)' : 'scale(1)',
                  }}
                >
                  {feature.icon}
                </div>
                
                {/* Title & Metric */}
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <span className="px-2 py-0.5 text-xs font-medium bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">
                    {feature.metric}
                  </span>
                </div>
                
                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
