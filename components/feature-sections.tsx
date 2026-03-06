export function FeatureSections() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-32">
        
        {/* Feature 1: Single Source of Truth */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
              One dashboard. Every portfolio company.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              See revenue, EBITDA, runway, headcount, and custom KPIs across your entire portfolio at a glance. Every data point is traced back to its source document.
            </p>
          </div>
          <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
            <div className="bg-primary/5 px-4 py-3 border-b border-border flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Portfolio Overview</span>
              <span className="text-xs text-muted-foreground">Last updated: 2 hours ago</span>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-4 gap-4 text-xs font-semibold text-muted-foreground pb-3 border-b border-border">
                <span>Company</span>
                <span>Revenue</span>
                <span>Runway</span>
                <span>Health</span>
              </div>
              <div className="divide-y divide-border">
                {[
                  { name: "HealthStream AI", revenue: "$4.2M", runway: "18 mo", status: "healthy" },
                  { name: "FinCore Tech", revenue: "$2.8M", runway: "12 mo", status: "healthy" },
                  { name: "LogiPath", revenue: "$1.9M", runway: "8 mo", status: "review" },
                ].map((company, i) => (
                  <div key={i} className="grid grid-cols-4 gap-4 py-3 text-sm items-center">
                    <span className="font-medium text-foreground">{company.name}</span>
                    <span>{company.revenue}</span>
                    <span>{company.runway}</span>
                    <StatusBadge status={company.status} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Excel-Native Workflow */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
              <div className="bg-[#217346] px-4 py-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.17 3H7.83A.83.83 0 007 3.83v16.34c0 .46.37.83.83.83h13.34c.46 0 .83-.37.83-.83V3.83A.83.83 0 0021.17 3zM17 17h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6V7h6v2z" />
                </svg>
                <span className="text-white text-sm font-medium">Portfolio_Metrics.xlsx</span>
              </div>
              <div className="p-4 bg-[#f5f5f5]">
                <div className="grid grid-cols-4 gap-px bg-[#d4d4d4]">
                  <div className="bg-[#f0f0f0] p-2 text-xs font-medium text-muted-foreground"></div>
                  <div className="bg-[#f0f0f0] p-2 text-xs font-medium text-center">A</div>
                  <div className="bg-[#f0f0f0] p-2 text-xs font-medium text-center">B</div>
                  <div className="bg-[#f0f0f0] p-2 text-xs font-medium text-center">C</div>
                  
                  <div className="bg-[#f0f0f0] p-2 text-xs font-medium text-center">1</div>
                  <div className="bg-white p-2 text-xs font-medium">Company</div>
                  <div className="bg-white p-2 text-xs font-medium">Revenue</div>
                  <div className="bg-white p-2 text-xs font-medium">Formula</div>
                  
                  <div className="bg-[#f0f0f0] p-2 text-xs font-medium text-center">2</div>
                  <div className="bg-white p-2 text-xs">HealthStream AI</div>
                  <div className="bg-white p-2 text-xs text-success font-medium">$4.2M</div>
                  <div className="bg-[#e8f5e9] p-2 text-xs font-mono text-[10px]">=BASTION(&quot;Revenue&quot;)</div>
                  
                  <div className="bg-[#f0f0f0] p-2 text-xs font-medium text-center">3</div>
                  <div className="bg-white p-2 text-xs">FinCore Tech</div>
                  <div className="bg-white p-2 text-xs text-success font-medium">$2.8M</div>
                  <div className="bg-[#e8f5e9] p-2 text-xs font-mono text-[10px]">=BASTION(&quot;Revenue&quot;)</div>
                </div>
              </div>
              {/* Sidebar panel */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-card rounded-xl shadow-lg border border-border p-3 w-44 hidden lg:block">
                <div className="text-xs font-semibold text-foreground mb-2">Bastion Add-in</div>
                <div className="text-xs text-muted-foreground mb-3">Connected to workspace</div>
                <button className="w-full bg-accent text-accent-foreground text-xs font-semibold py-1.5 rounded">
                  Sync Now
                </button>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
              Works where you work — inside Excel.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              No new tools to learn. Bastion&apos;s Excel add-in syncs live portfolio data directly into your existing spreadsheets. Use =BASTION.METRIC() to pull any KPI into any cell.
            </p>
          </div>
        </div>

        {/* Feature 3: AI Document Processing */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
              Forward a board pack. Get structured data back.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Email board decks and financial updates to your Bastion inbox. AI extracts KPIs, generates summaries, and flags anomalies — with a human-in-the-loop review queue for anything it&apos;s not sure about.
            </p>
          </div>
          <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
            <div className="bg-primary/5 px-4 py-3 border-b border-border">
              <span className="text-sm font-medium text-foreground">Document Inbox</span>
            </div>
            <div className="divide-y divide-border">
              {[
                { name: "Q3 Board Deck - HealthStream.pdf", status: "processed", time: "2h ago" },
                { name: "Monthly Financials - FinCore.xlsx", status: "processed", time: "5h ago" },
                { name: "Investor Update - LogiPath.pdf", status: "review", time: "1d ago" },
              ].map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{doc.name}</p>
                      <p className="text-xs text-muted-foreground">{doc.time}</p>
                    </div>
                  </div>
                  {doc.status === "processed" ? (
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-success/10 text-success">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Processed
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-warning/10 text-warning">
                      Review Required
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature 4: Intelligent Alerts */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-card rounded-2xl shadow-xl border border-border p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">MediLink</h4>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-destructive/10 text-destructive">
                      Action Required
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    No financial update received in 127 days. Last update was Q2 Board Deck.
                  </p>
                  <div className="flex gap-2">
                    <button className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-lg">
                      Request Update
                    </button>
                    <button className="border border-border text-muted-foreground text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-muted transition-colors">
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
              Know when something&apos;s off — before it&apos;s a problem.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bastion monitors for missing updates, declining metrics, and data inconsistencies. Get proactive alerts so nothing falls through the cracks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles = {
    healthy: "bg-success/10 text-success",
    review: "bg-warning/10 text-warning",
    alert: "bg-destructive/10 text-destructive",
  };
  
  const labels = {
    healthy: "Healthy",
    review: "Review",
    alert: "Alert",
  };
  
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium w-fit ${styles[status as keyof typeof styles]}`}>
      {labels[status as keyof typeof labels]}
    </span>
  );
}
