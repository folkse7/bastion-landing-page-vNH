import { Navigation } from "@/components/navigation";
import { Hero2 } from "@/components/hero2";
import { DemoSection } from "@/components/demo-section";
import { FeatureSections } from "@/components/feature-sections";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer2";
import { ComingSoon } from "@/components/coming-soon";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero2 />
      <ComingSoon />
      {/* <DemoSection /> */}
      <FeatureSections />
      {/* <CTASection /> */}
      <Footer />
    </main>
  );
}
