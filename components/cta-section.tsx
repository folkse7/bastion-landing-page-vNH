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
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden bg-[#0f0f12]">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-purple-600/8 rounded-full blur-[180px]" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[120px]" />
        <div 
          className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `linear-gradient(rgba(168,85,247,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.02) 1px, transparent 1px)`,
            backgroundSize: '64px 64px'
          }}
        />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Info */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-6 border border-purple-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Accepting New Partners
            </span>
            
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to increase portfolio visibility by{" "}
              <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                10x?
              </span>
            </h2>
            
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              Start free. See the difference in one call. Join leading VC and PE firms already using Bastion.
            </p>
            
            {/* Benefits */}
            <div className="space-y-4">
              {[
                { icon: "M5 13l4 4L19 7", text: "30-minute personalized demo" },
                { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "Same-day response guaranteed" },
                { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", text: "No commitment required" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-zinc-300">
                  <div className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side - Form */}
          <div>
            <div 
              className="rounded-3xl p-8 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(24,24,27,0.9) 0%, rgba(15,15,18,0.95) 100%)',
                border: '1px solid rgba(63,63,70,0.5)',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.6), 0 0 80px rgba(168,85,247,0.05)',
              }}
            >
              {/* Decorative Elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl" />
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Schedule a Demo</h3>
                    <p className="text-sm text-zinc-500">Fill out the form and we&apos;ll be in touch shortly</p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <label 
                        htmlFor="name" 
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                          focusedField === 'name' || formData.name 
                            ? 'text-xs text-purple-400 top-2' 
                            : 'text-sm text-zinc-500 top-1/2 -translate-y-1/2'
                        }`}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 pt-6 pb-2 rounded-xl bg-zinc-900/50 border border-zinc-800 text-white placeholder:text-transparent focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                      />
                    </div>
                    <div className="relative">
                      <label 
                        htmlFor="email" 
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                          focusedField === 'email' || formData.email 
                            ? 'text-xs text-purple-400 top-2' 
                            : 'text-sm text-zinc-500 top-1/2 -translate-y-1/2'
                        }`}
                      >
                        Work Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 pt-6 pb-2 rounded-xl bg-zinc-900/50 border border-zinc-800 text-white placeholder:text-transparent focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label 
                      htmlFor="company" 
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        focusedField === 'company' || formData.company 
                          ? 'text-xs text-purple-400 top-2' 
                          : 'text-sm text-zinc-500 top-1/2 -translate-y-1/2'
                      }`}
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 pt-6 pb-2 rounded-xl bg-zinc-900/50 border border-zinc-800 text-white placeholder:text-transparent focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                    />
                  </div>
                  
                  <div className="relative">
                    <label 
                      htmlFor="message" 
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        focusedField === 'message' || formData.message 
                          ? 'text-xs text-purple-400 top-2' 
                          : 'text-sm text-zinc-500 top-4'
                      }`}
                    >
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={3}
                      className="w-full px-4 pt-6 pb-2 rounded-xl bg-zinc-900/50 border border-zinc-800 text-white placeholder:text-transparent focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all resize-none"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="group relative w-full overflow-hidden"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300 animate-pulse-glow" />
                    <div className="relative bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 animate-gradient bg-[length:200%_200%]">
                      Book Your Demo
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </button>
                  
                  <p className="text-center text-xs text-zinc-500">
                    By submitting, you agree to our Privacy Policy
                  </p>
                </form>
              ) : (
                <div className="text-center py-8 relative z-10">
                  <div className="w-20 h-20 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                    <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Thank you!</h3>
                  <p className="text-zinc-400">
                    We&apos;ll be in touch within 24 hours to schedule your personalized demo.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
