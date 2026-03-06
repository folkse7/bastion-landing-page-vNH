export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Connect",
      description: "Link your email, set up your portfolio companies, and define your KPI schema.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Ingest",
      description: "Forward board packs and financials. Bastion processes, extracts, and structures the data automatically.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Monitor",
      description: "View everything in the dashboard, pull live data into Excel, and get alerts when something needs attention.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-16 text-balance">
          Up and running in under a week.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line - desktop only */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-border" />
          
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="flex flex-col items-center text-center">
                {/* Icon circle */}
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 relative z-10 border border-accent/20">
                  {step.icon}
                </div>
                
                {/* Number badge */}
                <span className="text-xs font-bold text-accent mb-2">{step.number}</span>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
              
              {/* Arrow for mobile */}
              {i < steps.length - 1 && (
                <div className="flex justify-center my-6 md:hidden">
                  <svg className="w-6 h-6 text-border" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
