export function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-500/15 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background" />
      </div>

      {/* 3D Floating Elements */}
      <div 
        className="absolute top-32 left-[10%] w-20 h-20 bg-purple-500/10 rounded-xl border border-purple-500/20 hidden lg:block"
        style={{ transform: 'perspective(500px) rotateX(20deg) rotateY(-15deg) rotateZ(10deg)' }}
      />
      <div 
        className="absolute top-48 right-[15%] w-16 h-16 bg-violet-500/10 rounded-lg border border-violet-500/20 hidden lg:block"
        style={{ transform: 'perspective(500px) rotateX(-15deg) rotateY(20deg) rotateZ(-5deg)' }}
      />
      <div 
        className="absolute bottom-32 left-[20%] w-12 h-12 bg-purple-500/8 rounded-lg border border-purple-500/10 hidden lg:block"
        style={{ transform: 'perspective(500px) rotateX(10deg) rotateY(-10deg) rotateZ(15deg)' }}
      />
      <div 
        className="absolute bottom-48 right-[10%] w-24 h-24 bg-violet-500/8 rounded-2xl border border-violet-500/10 hidden lg:block"
        style={{ transform: 'perspective(500px) rotateX(-20deg) rotateY(15deg) rotateZ(-10deg)' }}
      />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8"
          style={{ boxShadow: '0 0 20px rgba(168,85,247,0.1)' }}
        >
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          <span className="text-sm text-purple-300 font-medium">Now in Early Access</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight text-balance">
          Your portfolio data,
          <span className="block mt-2 bg-gradient-to-r from-purple-400 via-purple-500 to-violet-400 bg-clip-text text-transparent">
            finally in one place.
          </span>
        </h1>
        
        <p className="mt-8 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
          Bastion gives VC and PE teams a single source of truth for portfolio company metrics — powered by AI, delivered where you already work.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 via-purple-500 to-violet-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 animate-gradient bg-[length:200%_200%]"
            style={{ boxShadow: '0 10px 40px rgba(168,85,247,0.3), 0 0 20px rgba(168,85,247,0.2)' }}
          >
            Get Started
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#demo"
            className="inline-flex items-center justify-center gap-2 border border-purple-500/30 text-foreground px-8 py-4 rounded-full font-semibold hover:bg-purple-500/10 hover:border-purple-500/50 transition-all"
          >
            See How It Works
          </a>
        </div>
        
        {/* Stats with 3D cards */}
        <div className="mt-20 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div 
            className="text-center p-4 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
            style={{ 
              transform: 'perspective(1000px) rotateY(-5deg)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2), 0 0 20px rgba(168,85,247,0.05)'
            }}
          >
            <div className="text-3xl lg:text-4xl font-bold text-foreground">50+</div>
            <div className="text-sm text-muted-foreground mt-1">Portfolio Companies</div>
          </div>
          <div 
            className="text-center p-4 rounded-2xl bg-card/50 border border-purple-500/20 backdrop-blur-sm"
            style={{ 
              transform: 'perspective(1000px) rotateY(0deg)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2), 0 0 30px rgba(168,85,247,0.1)'
            }}
          >
            <div className="text-3xl lg:text-4xl font-bold text-foreground">2M+</div>
            <div className="text-sm text-muted-foreground mt-1">Data Points</div>
          </div>
          <div 
            className="text-center p-4 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
            style={{ 
              transform: 'perspective(1000px) rotateY(5deg)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2), 0 0 20px rgba(168,85,247,0.05)'
            }}
          >
            <div className="text-3xl lg:text-4xl font-bold text-foreground">10x</div>
            <div className="text-sm text-muted-foreground mt-1">Faster Reporting</div>
          </div>
        </div>
      </div>
    </section>
  );
}
