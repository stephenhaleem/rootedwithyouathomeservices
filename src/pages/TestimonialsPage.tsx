import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const TestimonialsPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="animate-section border-b border-border bg-background py-20">
      <div className="container max-w-2xl">
        <p className="section-label">Making an informed choice</p>
        <h1 className="mt-5 text-4xl font-semibold leading-tight text-foreground md:text-6xl">
          What to look for in home care.
        </h1>
        <p className="mt-5 text-sm leading-6 text-muted-foreground">
          Every person's needs and preferences are different. Use these
          considerations to guide your questions and decide whether a service
          feels like the right fit for you or your family.
        </p>
      </div>
    </section>
    <TestimonialsSection />
    <CtaBanner />
    <Footer />
  </div>
);

export default TestimonialsPage;
