"use client";

import { useRef, useEffect, useState, useCallback } from "react";

const demoSlides = [
  {
    id: 1,
    title: "Portfolio Dashboard",
    description: "Get a complete overview of all your portfolio companies in one place",
    placeholder: "Dashboard View",
  },
  {
    id: 2,
    title: "Company Metrics",
    description: "Track revenue, EBITDA, runway, and custom KPIs for each company",
    placeholder: "Metrics View",
  },
  {
    id: 3,
    title: "Document Processing",
    description: "AI-powered extraction from board decks and financial reports",
    placeholder: "Document View",
  },
  {
    id: 4,
    title: "Excel Integration",
    description: "Sync data directly to your existing spreadsheets",
    placeholder: "Excel View",
  },
  {
    id: 5,
    title: "Alerts & Insights",
    description: "Get notified about missing updates and declining metrics",
    placeholder: "Alerts View",
  },
];

export function DemoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [hasAutoScrolled, setHasAutoScrolled] = useState(false);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToSlide = useCallback((index: number) => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    const slideWidth = scrollContainer.clientWidth * 0.85 + 24;
    scrollContainer.scrollTo({ left: slideWidth * index, behavior: "smooth" });
  }, []);

  // Auto-scroll when section comes into view
  useEffect(() => {
    if (isInView && !hasAutoScrolled) {
      setHasAutoScrolled(true);
      
      // Start auto-scrolling through slides
      let currentSlide = 0;
      autoScrollIntervalRef.current = setInterval(() => {
        currentSlide++;
        if (currentSlide >= demoSlides.length) {
          if (autoScrollIntervalRef.current) {
            clearInterval(autoScrollIntervalRef.current);
          }
          return;
        }
        scrollToSlide(currentSlide);
      }, 2000);
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isInView, hasAutoScrolled, scrollToSlide]);

  // Stop auto-scroll on user interaction
  const handleUserInteraction = useCallback(() => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const slideWidth = scrollContainer.clientWidth * 0.85 + 24;
      const newActiveSlide = Math.round(scrollLeft / slideWidth);
      setActiveSlide(Math.min(newActiveSlide, demoSlides.length - 1));
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="demo"
      ref={containerRef}
      className="py-24 lg:py-32 bg-background relative"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(168,85,247,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-6 border border-purple-500/20">
            Product Demo
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            See Bastion in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how Bastion transforms portfolio management
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollContainerRef}
        onMouseDown={handleUserInteraction}
        onTouchStart={handleUserInteraction}
        onWheel={handleUserInteraction}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-8 snap-x snap-mandatory"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {/* Left Spacer */}
        <div className="shrink-0 w-[calc((100vw-85%)/2-1rem)]" />
        
        {demoSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`shrink-0 w-[85vw] max-w-5xl snap-center transition-all duration-500 ${
              activeSlide === index
                ? "scale-100 opacity-100"
                : "scale-[0.92] opacity-50"
            }`}
            style={{
              transform: activeSlide === index 
                ? 'perspective(1000px) rotateY(0deg) scale(1)' 
                : `perspective(1000px) rotateY(${index < activeSlide ? '5deg' : '-5deg'}) scale(0.92)`,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Demo Card - Light Mode with 3D effect */}
            <div 
              className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden relative"
              style={{
                boxShadow: activeSlide === index 
                  ? '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(168, 85, 247, 0.15)' 
                  : '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
              }}
            >
              {/* Browser Chrome */}
              <div className="bg-gradient-to-b from-gray-100 to-gray-50 px-4 py-3 border-b border-gray-200 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400 shadow-inner" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-inner" />
                  <div className="w-3 h-3 rounded-full bg-green-400 shadow-inner" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-white rounded-lg px-4 py-1.5 text-xs text-gray-500 border border-gray-200 max-w-xs w-full text-center shadow-sm">
                    app.bastion.ai/dashboard
                  </div>
                </div>
                <div className="w-16" />
              </div>

              {/* Demo Content Placeholder */}
              <div className="aspect-[16/9] bg-gradient-to-br from-slate-50 via-white to-slate-50 flex flex-col items-center justify-center p-8 relative overflow-hidden">
                {/* 3D Decorative Elements */}
                <div className="absolute inset-0">
                  <div 
                    className="absolute top-8 left-8 w-40 h-28 bg-purple-100 rounded-xl"
                    style={{ transform: 'perspective(500px) rotateX(10deg) rotateY(-5deg)', boxShadow: '0 10px 30px rgba(168,85,247,0.1)' }}
                  />
                  <div 
                    className="absolute bottom-16 right-12 w-52 h-32 bg-purple-50 rounded-xl"
                    style={{ transform: 'perspective(500px) rotateX(-5deg) rotateY(5deg)', boxShadow: '0 10px 30px rgba(168,85,247,0.1)' }}
                  />
                  <div 
                    className="absolute top-1/4 right-1/4 w-28 h-44 bg-violet-50 rounded-lg"
                    style={{ transform: 'perspective(500px) rotateX(5deg) rotateY(-8deg)', boxShadow: '0 10px 30px rgba(168,85,247,0.08)' }}
                  />
                </div>
                
                {/* Placeholder Content */}
                <div className="relative z-10 text-center">
                  <div 
                    className="w-24 h-24 bg-gradient-to-br from-purple-100 to-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-purple-200/50"
                    style={{ 
                      transform: 'perspective(500px) rotateX(10deg)',
                      boxShadow: '0 20px 40px rgba(168,85,247,0.15), 0 0 0 1px rgba(168,85,247,0.1)'
                    }}
                  >
                    <svg className="w-12 h-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <p className="text-xl font-semibold text-gray-800 mb-2">{slide.placeholder}</p>
                  <p className="text-sm text-gray-500">Figma demo coming soon</p>
                </div>

                {/* Simulated UI Elements with 3D */}
                <div className="absolute bottom-8 left-8 right-8 flex gap-4">
                  <div 
                    className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden border border-gray-200"
                    style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)' }}
                  >
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-violet-500 rounded-full" 
                      style={{ width: `${30 + index * 15}%` }} 
                    />
                  </div>
                </div>
              </div>

              {/* Slide Info */}
              <div className="bg-gradient-to-b from-white to-gray-50 px-6 py-5 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">{slide.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Right Spacer */}
        <div className="shrink-0 w-[calc((100vw-85%)/2-1rem)]" />
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {demoSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              handleUserInteraction();
              scrollToSlide(index);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? "bg-purple-500 w-8"
                : "bg-muted hover:bg-purple-500/50 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
