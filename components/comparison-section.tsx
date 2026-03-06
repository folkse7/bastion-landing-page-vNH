export function ComparisonSection() {
  const rows = [
    {
      feature: "Setup time",
      traditional: "Weeks",
      diy: "Ongoing",
      bastion: "< 1 week",
    },
    {
      feature: "Workflow change required",
      traditional: true,
      diy: false,
      bastion: false,
    },
    {
      feature: "Excel integration",
      traditional: false,
      diy: true,
      bastion: true,
    },
    {
      feature: "AI document processing",
      traditional: false,
      diy: false,
      bastion: true,
    },
    {
      feature: "Data provenance",
      traditional: "Partial",
      diy: false,
      bastion: true,
    },
    {
      feature: "Customizable KPIs",
      traditional: "Limited",
      diy: true,
      bastion: true,
    },
  ];

  return (
    <section id="comparison" className="py-20 lg:py-28 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4 text-balance">
          Not another dashboard you won&apos;t use.
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          See how Bastion compares to traditional portfolio tools and DIY solutions.
        </p>
        
        <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 p-4 bg-muted/50 border-b border-border">
            <div className="text-sm font-semibold text-muted-foreground">Feature</div>
            <div className="text-sm font-semibold text-muted-foreground text-center">Traditional Tools</div>
            <div className="text-sm font-semibold text-muted-foreground text-center">DIY (Excel + Email)</div>
            <div className="text-sm font-semibold text-accent text-center">Bastion</div>
          </div>
          
          {/* Rows */}
          <div className="divide-y divide-border">
            {rows.map((row, i) => (
              <div key={i} className="grid grid-cols-4 gap-4 p-4 items-center">
                <div className="text-sm font-medium text-foreground">{row.feature}</div>
                <div className="flex justify-center">
                  <CellValue value={row.traditional} highlight={false} />
                </div>
                <div className="flex justify-center">
                  <CellValue value={row.diy} highlight={false} />
                </div>
                <div className="flex justify-center">
                  <CellValue value={row.bastion} highlight={true} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CellValue({ value, highlight }: { value: boolean | string; highlight: boolean }) {
  if (typeof value === "boolean") {
    if (value) {
      return (
        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${highlight ? "bg-success/20" : "bg-muted"}`}>
          <svg className={`w-4 h-4 ${highlight ? "text-success" : "text-muted-foreground"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      );
    } else {
      return (
        <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
          <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      );
    }
  }
  
  return (
    <span className={`text-sm ${highlight ? "font-semibold text-success" : "text-muted-foreground"}`}>
      {value}
    </span>
  );
}
