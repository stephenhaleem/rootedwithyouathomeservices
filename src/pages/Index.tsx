import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyUsSection from "@/components/WhyUsSection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/Trustsection";
import {
  DayToDaySection,
  HomeVisitSection,
  DecisionStepsSection,
  FaqSection,
} from "@/components/HomeFeatureSections";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <WhyUsSection />
    <ServicesSection limit={6} />
    <TrustSection />
    <DayToDaySection />
    <HomeVisitSection />
    <DecisionStepsSection />
    <FaqSection />
    <ContactForm />
    <Footer />
  </div>
);

export default Index;
