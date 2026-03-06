export function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-16 text-balance">
          Portfolio data shouldn&apos;t live in 5 different places.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8h4m-4 4h2m-2 4h3" opacity="0.5" />
              </svg>
            </div>
            <div className="text-4xl font-bold text-foreground mb-2">5+ tools</div>
            <p className="text-muted-foreground leading-relaxed">
              Board packs in email, KPIs in Excel, notes in Notion, updates on Slack. Sound familiar?
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-4xl font-bold text-foreground mb-2">6+ hours/week</div>
            <p className="text-muted-foreground leading-relaxed">
              Analysts spend hours manually copying data between systems before every IC meeting.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="text-4xl font-bold text-foreground mb-2">Stale data</div>
            <p className="text-muted-foreground leading-relaxed">
              By the time your portfolio review deck is ready, the numbers are already outdated.
            </p>
          </div>
        </div>
        
        <p className="text-center mt-12 text-xl font-semibold text-accent">
          Bastion fixes this.
        </p>
      </div>
    </section>
  );
}
