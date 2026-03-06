"use client";

import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-purple-600/20 rounded-full blur-[150px]" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(rgba(168,85,247,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.03) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
        <div 
          className={`absolute top-32 left-[8%] transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-violet-500/10 border border-purple-500/20 backdrop-blur-sm animate-float" 
            style={{ transform: 'perspective(500px) rotateX(15deg) rotateY(-15deg)', animationDelay: '0s' }} 
          />
        </div>
        <div 
          className={`absolute top-48 right-[12%] transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/10 border border-violet-500/20 backdrop-blur-sm animate-float" 
            style={{ transform: 'perspective(500px) rotateX(-10deg) rotateY(20deg)', animationDelay: '1s' }} 
          />
        </div>
        <div 
          className={`absolute bottom-32 left-[15%] transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500/15 to-violet-500/5 border border-purple-500/10 backdrop-blur-sm animate-float" 
            style={{ transform: 'perspective(500px) rotateX(10deg) rotateY(-10deg)', animationDelay: '2s' }} 
          />
        </div>
        <div 
          className={`absolute bottom-48 right-[8%] transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-500/15 to-purple-500/5 border border-violet-500/10 backdrop-blur-sm animate-float" 
            style={{ transform: 'perspective(500px) rotateX(-15deg) rotateY(15deg)', animationDelay: '0.5s' }} 
          />
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <div 
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          <span className="text-sm text-purple-300 font-medium">Now in Early Access</span>
        </div>
        
        {/* Main Headline */}
        <h1 
          className={`text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight text-balance transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '100ms' }}
        >
          Your portfolio data,
          <span className="block mt-2 bg-gradient-to-r from-purple-400 via-purple-300 to-violet-400 bg-clip-text text-transparent">
            finally in one place.
          </span>
        </h1>
        
        {/* Subheadline */}
        <p 
          className={`mt-8 text-lg lg:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto text-pretty transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '200ms' }}
        >
          Bastion gives VC and PE teams a single source of truth for portfolio company metrics — powered by AI, delivered where you already work.
        </p>
        
        {/* CTAs */}
        <div 
          className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '300ms' }}
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300" />
            <div className="relative flex items-center gap-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-4 rounded-full font-semibold">
              Get Started
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>
          <a
            href="#demo"
            className="group inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-purple-500/50 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-500/5 transition-all duration-300"
          >
            <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            See How It Works
          </a>
        </div>
        
        {/* Stats */}
        <div 
          className={`mt-20 grid grid-cols-3 gap-4 lg:gap-8 max-w-3xl mx-auto transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '400ms' }}
        >
          {[
            { value: "50+", label: "Portfolio Companies" },
            { value: "2M+", label: "Data Points" },
            { value: "10x", label: "Faster Reporting" },
          ].map((stat, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div 
                className="relative text-center p-5 lg:p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300"
                style={{ 
                  transform: `perspective(1000px) rotateY(${(index - 1) * -3}deg)`,
                }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
