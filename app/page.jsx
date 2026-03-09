import { HeroSection }       from "@/components/landing/HeroSection.jsx";
import { ModuleHighlights }  from "@/components/landing/ModuleHighlights.jsx";
import { BenefitsSection }   from "@/components/landing/BenefitsSection.jsx";
import { HowItWorks }        from "@/components/landing/HowItWorks.jsx";
import { TestimonialsSection }from "@/components/landing/TestimonialsSection.jsx";
import { PricingSection }    from "@/components/landing/PricingSection.jsx";
import { Navbar }            from "@/components/layout/Navbar.jsx";
import { Footer }            from "@/components/layout/Footer.jsx";

export default function LandingPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ModuleHighlights />
        <HowItWorks />
        <BenefitsSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}
