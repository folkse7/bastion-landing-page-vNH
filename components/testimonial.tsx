export function Testimonial() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <svg className="w-12 h-12 text-accent/30 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        
        <blockquote className="text-2xl lg:text-3xl font-medium text-foreground leading-relaxed mb-8 text-balance">
          We were spending 8 hours before every IC meeting just getting the data together. The numbers were always stale by the time we presented.
        </blockquote>
        
        <cite className="text-muted-foreground not-italic">
          — Partner at a $500M growth equity fund
        </cite>
      </div>
    </section>
  );
}
