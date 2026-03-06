export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Your portfolio data, finally in one place.
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty">
              Bastion gives VC and PE teams a single source of truth for portfolio company metrics — powered by AI, delivered where you already work: Excel.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#cta"
                className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-colors text-center"
              >
                Request Early Access
              </a>
              <a
                href="#features"
                className="border-2 border-border text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-colors text-center"
              >
                See How It Works
              </a>
            </div>
            
          </div>
          
          {/* Right Content - Dashboard Mockup */}
          <div className="relative">
            <div className="animate-float">
              {/* Main Dashboard Card */}
              <div className="bg-card rounded-2xl shadow-2xl border border-border overflow-hidden transform perspective-1000 rotate-y-[-5deg]">
                <div className="bg-primary/5 px-4 py-3 border-b border-border flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-warning/60" />
                    <div className="w-3 h-3 rounded-full bg-success/60" />
                  </div>
                  <span className="text-xs text-muted-foreground ml-2">Portfolio Overview</span>
                </div>
                
                <div className="p-4">
                  {/* Table Header */}
                  <div className="grid grid-cols-5 gap-4 text-xs font-semibold text-muted-foreground pb-3 border-b border-border">
                    <span>Company</span>
                    <span>Revenue</span>
                    <span>EBITDA</span>
                    <span>Runway</span>
                    <span>Status</span>
                  </div>
                  
                  {/* Table Rows */}
                  <div className="divide-y divide-border">
                    <div className="grid grid-cols-5 gap-4 py-3 text-sm items-center">
                      <span className="font-medium text-foreground">HealthStream AI</span>
                      <span className="text-foreground">$4.2M</span>
                      <span className="text-foreground">$820K</span>
                      <span className="text-foreground">18 mo</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-success/10 text-success w-fit">
                        Healthy
                      </span>
                    </div>
                    <div className="grid grid-cols-5 gap-4 py-3 text-sm items-center">
                      <span className="font-medium text-foreground">FinCore Tech</span>
                      <span className="text-foreground">$2.8M</span>
                      <span className="text-foreground">$340K</span>
                      <span className="text-foreground">12 mo</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-success/10 text-success w-fit">
                        Healthy
                      </span>
                    </div>
                    <div className="grid grid-cols-5 gap-4 py-3 text-sm items-center">
                      <span className="font-medium text-foreground">LogiPath</span>
                      <span className="text-foreground">$1.9M</span>
                      <span className="text-foreground">-$120K</span>
                      <span className="text-foreground">8 mo</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-warning/10 text-warning w-fit">
                        Review
                      </span>
                    </div>
                    <div className="grid grid-cols-5 gap-4 py-3 text-sm items-center">
                      <span className="font-medium text-foreground">MediLink</span>
                      <span className="text-foreground">$890K</span>
                      <span className="text-foreground">-$210K</span>
                      <span className="text-foreground">5 mo</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-destructive/10 text-destructive w-fit">
                        Alert
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Excel Add-in Floating Panel */}
              <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-card rounded-xl shadow-xl border border-border p-4 w-56 animation-delay-200">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-success/20 rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-foreground">Excel Add-in</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Last sync:</span>
                    <span className="text-success font-medium">2 min ago</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Metrics:</span>
                    <span className="text-foreground font-medium">24 updated</span>
                  </div>
                </div>
                <button className="mt-3 w-full bg-accent text-accent-foreground text-xs font-semibold py-2 rounded-lg hover:bg-accent/90 transition-colors">
                  Sync Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
