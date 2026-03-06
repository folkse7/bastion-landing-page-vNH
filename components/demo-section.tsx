"use client";

import { useRef, useEffect, useState, useCallback } from "react";

const demoSlides = [
  {
    id: 1,
    title: "Portfolio Dashboard",
    description: "Get a complete overview of all your portfolio companies in one place",
    comment: {
      author: "Sarah K.",
      role: "Partner at Apex Ventures",
      text: "This dashboard view saves me hours every week. Everything I need in one glance.",
      avatar: "SK",
    },
  },
  {
    id: 2,
    title: "Company Metrics",
    description: "Track revenue, EBITDA, runway, and custom KPIs for each company",
    comment: {
      author: "Michael R.",
      role: "Principal at Growth Capital",
      text: "The real-time metrics tracking has transformed how we monitor portfolio health.",
      avatar: "MR",
    },
  },
  {
    id: 3,
    title: "Document Processing",
    description: "AI-powered extraction from board decks and financial reports",
    comment: {
      author: "Jennifer L.",
      role: "VP at Summit Partners",
      text: "AI document extraction is like magic. No more manual data entry from PDFs.",
      avatar: "JL",
    },
  },
  {
    id: 4,
    title: "Excel Integration",
    description: "Sync data directly to your existing spreadsheets",
    comment: {
      author: "David T.",
      role: "Analyst at Sequoia",
      text: "The Excel integration means I never have to leave my workflow. Game changer.",
      avatar: "DT",
    },
  },
  {
    id: 5,
    title: "Alerts & Insights",
    description: "Get notified about missing updates and declining metrics",
    comment: {
      author: "Amanda C.",
      role: "Director at Insight Partners",
      text: "Proactive alerts help us catch issues before they become problems.",
      avatar: "AC",
    },
  },
];

export function DemoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [hasStartedAutoScroll, setHasStartedAutoScroll] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const autoScrollRef = useRef<number | null>(null);

  const scrollToSlide = useCallback((index: number) => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    const slideWidth = scrollContainer.offsetWidth;
    scrollContainer.scrollTo({ left: slideWidth * index, behavior: "smooth" });
  }, []);

  // Seamless auto-scroll animation
  useEffect(() => {
    if (isInView && !hasStartedAutoScroll) {
      setHasStartedAutoScroll(true);
      
      let progress = 0;
      const totalSlides = demoSlides.length;
      const duration = 12000; // Total duration for all slides
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        progress = Math.min(elapsed / duration, 1);
        setScrollProgress(progress);
        
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
          const maxScroll = scrollContainer.scrollWidth - scrollContainer.offsetWidth;
          scrollContainer.scrollLeft = maxScroll * progress;
          
          const currentSlide = Math.floor(progress * totalSlides);
          setActiveSlide(Math.min(currentSlide, totalSlides - 1));
        }
        
        if (progress < 1) {
          autoScrollRef.current = requestAnimationFrame(animate);
        }
      };
      
      autoScrollRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
      }
    };
  }, [isInView, hasStartedAutoScroll]);

  // Intersection observer
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Manual scroll tracking
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const slideWidth = scrollContainer.offsetWidth;
      const newActiveSlide = Math.round(scrollLeft / slideWidth);
      setActiveSlide(Math.min(newActiveSlide, demoSlides.length - 1));
      
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.offsetWidth;
      setScrollProgress(scrollLeft / maxScroll);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  const handleUserInteraction = useCallback(() => {
    if (autoScrollRef.current) {
      cancelAnimationFrame(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  }, []);

  return (
    <section
      id="demo"
      ref={containerRef}
      className="py-20 lg:py-28 bg-[#0a0a0c] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-purple-600/5 rounded-full blur-[150px]" />
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-6 border border-purple-500/20">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Platform Preview
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 text-balance">
            See Bastion in Action
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8">
            Watch how Bastion transforms portfolio management with intelligent automation
          </p>
          
          {/* Progress Bar */}
          <div className="flex items-center justify-center gap-3 text-sm text-zinc-500">
            <span>Scroll to watch</span>
            <div className="w-32 h-1 bg-zinc-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-violet-500 transition-all duration-100"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
            <span className="text-purple-400">Live demo</span>
          </div>
        </div>
      </div>

      {/* Demo Carousel with Comments */}
      <div className="relative">
        {/* Left Comment */}
        <div className="hidden xl:block absolute left-8 top-1/2 -translate-y-1/2 w-72 z-20">
          <div 
            className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-xl transition-all duration-500"
            style={{
              opacity: activeSlide > 0 ? 1 : 0.3,
              transform: `perspective(1000px) rotateY(15deg) translateX(${activeSlide > 0 ? 0 : -20}px)`,
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white text-sm font-semibold">
                {demoSlides[Math.max(0, activeSlide - 1)]?.comment.avatar}
              </div>
              <div>
                <div className="text-sm font-medium text-white">{demoSlides[Math.max(0, activeSlide - 1)]?.comment.author}</div>
                <div className="text-xs text-zinc-500">{demoSlides[Math.max(0, activeSlide - 1)]?.comment.role}</div>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              &ldquo;{demoSlides[Math.max(0, activeSlide - 1)]?.comment.text}&rdquo;
            </p>
          </div>
        </div>

        {/* Right Comment */}
        <div className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2 w-72 z-20">
          <div 
            className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-xl transition-all duration-500"
            style={{
              opacity: activeSlide < demoSlides.length - 1 ? 1 : 0.3,
              transform: `perspective(1000px) rotateY(-15deg) translateX(${activeSlide < demoSlides.length - 1 ? 0 : 20}px)`,
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-sm font-semibold">
                {demoSlides[Math.min(demoSlides.length - 1, activeSlide + 1)]?.comment.avatar}
              </div>
              <div>
                <div className="text-sm font-medium text-white">{demoSlides[Math.min(demoSlides.length - 1, activeSlide + 1)]?.comment.author}</div>
                <div className="text-xs text-zinc-500">{demoSlides[Math.min(demoSlides.length - 1, activeSlide + 1)]?.comment.role}</div>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              &ldquo;{demoSlides[Math.min(demoSlides.length - 1, activeSlide + 1)]?.comment.text}&rdquo;
            </p>
          </div>
        </div>

        {/* Main Carousel */}
        <div
          ref={scrollContainerRef}
          onMouseDown={handleUserInteraction}
          onTouchStart={handleUserInteraction}
          onWheel={handleUserInteraction}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {demoSlides.map((slide, index) => (
            <div
              key={slide.id}
              className="shrink-0 w-full snap-center px-6 lg:px-0 flex justify-center"
            >
              <div 
                className="w-full max-w-4xl transition-all duration-700"
                style={{
                  transform: activeSlide === index 
                    ? 'perspective(1200px) rotateY(0deg) scale(1)' 
                    : `perspective(1200px) rotateY(${index < activeSlide ? '8deg' : '-8deg'}) scale(0.9)`,
                  opacity: activeSlide === index ? 1 : 0.4,
                }}
              >
                {/* Browser Window */}
                <div 
                  className="rounded-2xl overflow-hidden border border-zinc-800"
                  style={{
                    boxShadow: activeSlide === index 
                      ? '0 50px 100px -20px rgba(0,0,0,0.8), 0 0 60px rgba(168,85,247,0.15)' 
                      : '0 25px 50px -12px rgba(0,0,0,0.5)',
                  }}
                >
                  {/* Browser Chrome */}
                  <div className="bg-zinc-900 px-4 py-3 border-b border-zinc-800 flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-red-500 transition-colors cursor-pointer" />
                      <div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-yellow-500 transition-colors cursor-pointer" />
                      <div className="w-3 h-3 rounded-full bg-zinc-700 hover:bg-green-500 transition-colors cursor-pointer" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="flex items-center gap-2 bg-zinc-800 rounded-lg px-4 py-1.5 max-w-sm w-full">
                        <svg className="w-3.5 h-3.5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span className="text-xs text-zinc-500">app.bastion.ai/{slide.title.toLowerCase().replace(' ', '-')}</span>
                      </div>
                    </div>
                    <div className="w-16" />
                  </div>

                  {/* App Content - Light Mode */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
                    {/* Simulated Dashboard UI */}
                    <div className="absolute inset-0 p-6">
                      {/* Top Nav */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div className="h-2 w-20 bg-slate-200 rounded" />
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-2 w-16 bg-slate-200 rounded" />
                          <div className="h-2 w-16 bg-slate-200 rounded" />
                          <div className="w-8 h-8 rounded-full bg-slate-200" />
                        </div>
                      </div>

                      {/* Main Content Grid */}
                      <div className="grid grid-cols-12 gap-4 h-[calc(100%-80px)]">
                        {/* Sidebar */}
                        <div className="col-span-2 space-y-3">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className={`h-8 rounded-lg ${i === 1 ? 'bg-purple-100' : 'bg-slate-100'}`} />
                          ))}
                        </div>

                        {/* Main Area */}
                        <div className="col-span-10 space-y-4">
                          {/* Stats Row */}
                          <div className="grid grid-cols-4 gap-3">
                            {[1, 2, 3, 4].map((i) => (
                              <div key={i} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                                <div className="h-2 w-12 bg-slate-200 rounded mb-2" />
                                <div className="h-6 w-20 bg-gradient-to-r from-purple-200 to-violet-200 rounded" />
                              </div>
                            ))}
                          </div>

                          {/* Chart Area */}
                          <div className="flex-1 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                              <div className="h-2 w-32 bg-slate-200 rounded" />
                              <div className="flex gap-2">
                                <div className="h-6 w-16 bg-slate-100 rounded" />
                                <div className="h-6 w-16 bg-purple-100 rounded" />
                              </div>
                            </div>
                            {/* Chart Bars */}
                            <div className="flex items-end justify-between h-32 gap-2 px-4">
                              {[40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 95].map((h, i) => (
                                <div 
                                  key={i} 
                                  className="flex-1 bg-gradient-to-t from-purple-500 to-violet-400 rounded-t opacity-80"
                                  style={{ height: `${h}%` }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Slide Label Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white/90 to-transparent">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full">
                          Screen {index + 1}
                        </span>
                        <span className="text-xs text-slate-400">Figma demo coming soon</span>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900">{slide.title}</h3>
                      <p className="text-sm text-slate-500">{slide.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Comment (shown below carousel on small screens) */}
      <div className="xl:hidden mt-8 px-6">
        <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-xl max-w-md mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white text-sm font-semibold">
              {demoSlides[activeSlide]?.comment.avatar}
            </div>
            <div>
              <div className="text-sm font-medium text-white">{demoSlides[activeSlide]?.comment.author}</div>
              <div className="text-xs text-zinc-500">{demoSlides[activeSlide]?.comment.role}</div>
            </div>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed">
            &ldquo;{demoSlides[activeSlide]?.comment.text}&rdquo;
          </p>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-10">
        {demoSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              handleUserInteraction();
              scrollToSlide(index);
            }}
            className={`relative h-2 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? "bg-purple-500 w-8"
                : "bg-zinc-700 hover:bg-zinc-600 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
