"use client";

import { useState } from "react";

export function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the email to a backend
    setSubmitted(true);
  };

  return (
    <section id="cta" className="py-20 lg:py-28 bg-accent">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4 text-balance">
          Stop chasing data. Start making decisions.
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-10">
          Bastion is currently in early access for select VC and PE firms.
        </p>
        
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              required
              className="flex-1 px-4 py-3 rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-background"
            />
            <button
              type="submit"
              className="bg-background text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors whitespace-nowrap"
            >
              Request Access
            </button>
          </form>
        ) : (
          <div className="bg-primary-foreground/10 rounded-lg p-6 max-w-md mx-auto">
            <svg className="w-12 h-12 text-success mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-primary-foreground font-semibold">Thank you for your interest!</p>
            <p className="text-primary-foreground/70 text-sm mt-2">We&apos;ll be in touch shortly.</p>
          </div>
        )}
        
        <p className="mt-6 text-sm text-primary-foreground/60">
          No credit card required. Onboarding takes less than a week.
        </p>
      </div>
    </section>
  );
}
