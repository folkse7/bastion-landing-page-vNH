"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function Hero2() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
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
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            {/* Badge */}
            {/* <div 
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-sm text-purple-300 font-medium">Now in Early Access</span>
            </div> */}
            
            {/* Main Headline */}
            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight text-balance transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '100ms' }}
            >
              Your portfolio data,
              <span className="block mt-2 bg-gradient-to-r from-purple-400 via-purple-300 to-violet-400 bg-clip-text text-transparent">
                finally in one place.
              </span>
            </h1>
            
            {/* Subheadline */}
            <p 
              className={`mt-6 text-lg lg:text-xl text-zinc-400 leading-relaxed max-w-xl text-pretty transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '200ms' }}
            >
              Bastion gives VC and PE teams a single source of truth for all portfolio company related data, designed for your existing workflows.
            </p>
            
            {/* CTAs */}
            <div 
              className={`mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '300ms' }}
            >
              {/* <a
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
              </a> */}
              <a
                href="https://cal.com/omgole"
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
            {/* <div 
              className={`mt-12 grid grid-cols-3 gap-4 lg:gap-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '400ms' }}
            >
              {[
                { value: "50+", label: "Portfolio Companies" },
                { value: "2M+", label: "Data Points" },
                { value: "10x", label: "Faster Reporting" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs lg:text-sm text-zinc-500">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </div>
          {/* Right – Image/Dashboard Preview */}
<div
  className={`relative transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
  style={{ transitionDelay: '400ms' }}
>
  {/* Floating 3D squares */}
  <div className="absolute -top-8 -left-6 w-12 h-12 rounded-xl bg-purple-900/60 border border-purple-700/40 backdrop-blur-sm rotate-12 animate-float-slow shadow-lg shadow-purple-900/30" />
  <div className="absolute -top-4 right-8 w-7 h-7 rounded-lg bg-violet-800/50 border border-violet-600/30 backdrop-blur-sm -rotate-6 animate-float-medium shadow-md shadow-violet-900/20" />
  <div className="absolute bottom-12 -left-8 w-9 h-9 rounded-xl bg-purple-800/40 border border-purple-600/30 backdrop-blur-sm rotate-45 animate-float-fast shadow-md shadow-purple-900/20" />
  <div className="absolute -bottom-4 right-4 w-14 h-14 rounded-2xl bg-violet-900/50 border border-violet-700/30 backdrop-blur-sm -rotate-12 animate-float-slow shadow-lg shadow-violet-900/30" />
  <div className="absolute top-1/2 -right-6 w-6 h-6 rounded-lg bg-purple-700/40 border border-purple-500/30 backdrop-blur-sm rotate-20 animate-float-medium" />

  {/* Purple glow behind */}
  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-violet-600/20 to-purple-600/20 rounded-3xl blur-2xl" />
  <div className="absolute inset-0 bg-purple-600/10 rounded-3xl blur-3xl scale-110" />

  {/* Dashboard Preview */}
  <div className="relative rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-900 shadow-2xl">
    {/* Browser Chrome */}
    <div className="bg-zinc-900 px-4 py-3 border-b border-zinc-800 flex items-center gap-3">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-zinc-700" />
        <div className="w-3 h-3 rounded-full bg-zinc-700" />
        <div className="w-3 h-3 rounded-full bg-zinc-700" />
      </div>
      <div className="flex-1 flex justify-center">
        <div className="flex items-center gap-2 bg-zinc-800/80 rounded-lg px-4 py-1.5 max-w-xs w-full">
          <svg className="w-3.5 h-3.5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="text-xs text-zinc-500">app.bastion.ai/dashboard</span>
        </div>
      </div>
    </div>

    {/* Dashboard Image */}
    <div className="relative">
      <img
        src="/figma3.png"
        alt="Bastion Dashboard"
        className="w-full h-full object-contain object-top"
      />
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}
