export function LogoBar() {
  return (
    <section className="py-12 bg-secondary/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by portfolio teams at
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {/* Abstract geometric placeholder logos */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-2 opacity-40 hover:opacity-60 transition-opacity"
            >
              <LogoShape variant={i} />
              <span className="text-sm font-medium text-muted-foreground hidden sm:block">
                {["Venture Co", "Capital Partners", "Growth Fund", "Equity Group", "Alpha Ventures", "Summit Capital"][i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoShape({ variant }: { variant: number }) {
  const shapes = [
    // Hexagon
    <svg key="hex" className="w-8 h-8 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" />
    </svg>,
    // Circle with dot
    <svg key="circle" className="w-8 h-8 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" fill="white" />
    </svg>,
    // Square stack
    <svg key="stack" className="w-8 h-8 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="10" width="10" height="10" rx="2" />
      <rect x="8" y="4" width="10" height="10" rx="2" opacity="0.6" />
    </svg>,
    // Triangle
    <svg key="tri" className="w-8 h-8 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L22 20H2L12 2Z" />
    </svg>,
    // Diamond
    <svg key="diamond" className="w-8 h-8 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L22 12L12 22L2 12L12 2Z" />
    </svg>,
    // Bars
    <svg key="bars" className="w-8 h-8 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="14" width="6" height="8" rx="1" />
      <rect x="9" y="8" width="6" height="14" rx="1" />
      <rect x="16" y="2" width="6" height="20" rx="1" />
    </svg>,
  ];
  
  return shapes[variant % shapes.length];
}
