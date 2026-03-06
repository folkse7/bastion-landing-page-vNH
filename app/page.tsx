import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { LogoBar } from "@/components/logo-bar";
import { ProblemSection } from "@/components/problem-section";
import { FeatureSections } from "@/components/feature-sections";
import { HowItWorks } from "@/components/how-it-works";
import { ComparisonSection } from "@/components/comparison-section";
import { Testimonial } from "@/components/testimonial";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <LogoBar />
      <ProblemSection />
      <FeatureSections />
      <HowItWorks />
      <ComparisonSection />
      <Testimonial />
      <CTASection />
      <Footer />
    </main>
  );
}
