"use client";

import { useState } from "react";

export function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden bg-[#131318]">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-500/8 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[100px]" />
      </div>
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(rgba(168,85,247,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="rounded-3xl border border-purple-500/20 p-8 lg:p-12 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(24,24,27,0.9) 0%, rgba(39,39,42,0.6) 100%)',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5), 0 0 80px rgba(168,85,247,0.08), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          {/* 3D Floating Elements */}
          <div 
            className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-2xl"
            style={{ transform: 'perspective(500px) rotateX(20deg) rotateY(-20deg) rotateZ(10deg)' }}
          />
          <div 
            className="absolute -bottom-8 -left-8 w-24 h-24 bg-violet-500/10 rounded-xl"
            style={{ transform: 'perspective(500px) rotateX(-15deg) rotateY(15deg) rotateZ(-5deg)' }}
          />
          
          <div className="text-center mb-10 relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-6 border border-purple-500/20">
              Get Started
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Ready to transform your
              <span className="block bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                portfolio management?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Book a personalized demo and see how Bastion can help your team.
            </p>
          </div>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto relative z-10">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all backdrop-blur-sm"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all backdrop-blur-sm"
                    placeholder="john@firm.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all backdrop-blur-sm"
                  placeholder="Your Venture Firm"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all resize-none backdrop-blur-sm"
                  placeholder="Tell us about your portfolio management needs..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 via-purple-500 to-violet-500 text-white px-8 py-4 rounded-xl font-semibold hover:scale-[1.02] transition-transform duration-300 shadow-lg shadow-purple-500/25 animate-gradient bg-[length:200%_200%]"
                style={{
                  boxShadow: '0 10px 40px rgba(168,85,247,0.3), 0 0 20px rgba(168,85,247,0.2)',
                }}
              >
                Book Your Demo
              </button>
              
              <p className="text-center text-sm text-muted-foreground">
                No commitment required. We typically respond within 24 hours.
              </p>
            </form>
          ) : (
            <div className="text-center py-8 relative z-10">
              <div 
                className="w-20 h-20 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-success/20"
                style={{ 
                  transform: 'perspective(500px) rotateX(10deg)',
                  boxShadow: '0 15px 30px rgba(34,197,94,0.1)'
                }}
              >
                <svg className="w-10 h-10 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Thank you for your interest!</h3>
              <p className="text-muted-foreground">
                We&apos;ll be in touch within 24 hours to schedule your personalized demo.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
