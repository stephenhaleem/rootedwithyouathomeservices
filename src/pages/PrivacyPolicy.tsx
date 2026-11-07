import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { contactPhone, contactPhoneHref } from "@/lib/contact";

const PrivacyPolicy = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="animate-section border-b border-border bg-background py-20">
      <div className="container max-w-2xl">
        <p className="section-label">Legal</p>
        <h1 className="section-title mt-5">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: April 2026</p>
      </div>
    </section>
    <section className="py-20 bg-card">
      <div className="container max-w-3xl prose prose-sm sm:prose">
        <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
        <p className="text-muted-foreground mb-6">We collect personal information you provide directly, such as your name, email address, phone number, and health-related details when you request care assessments. We also collect usage data automatically through cookies and analytics tools.</p>

        <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
        <p className="text-muted-foreground mb-6">Your information is used to provide and improve our home care services, match you with appropriate caregivers, process inquiries, communicate important updates, and comply with Canadian healthcare regulations (PIPEDA).</p>

        <h2 className="text-2xl font-bold text-foreground mb-4">3. Data Protection</h2>
        <p className="text-muted-foreground mb-6">We implement industry-standard security measures including encryption, secure servers, and access controls. All personal health information is handled in compliance with provincial and federal privacy legislation.</p>

        <h2 className="text-2xl font-bold text-foreground mb-4">4. Information Sharing</h2>
        <p className="text-muted-foreground mb-6">We do not sell your personal information. We may share data with assigned caregivers (as necessary for service delivery), healthcare partners (with your consent), and legal authorities when required by law.</p>

        <h2 className="text-2xl font-bold text-foreground mb-4">5. Your Rights</h2>
        <p className="text-muted-foreground mb-6">You may withdraw your cookie consent at any time using Cookie settings in the footer. For privacy questions, call us at <a className="text-primary underline" href={contactPhoneHref}>{contactPhone}</a>.</p>

        <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookies</h2>
        <p className="text-muted-foreground mb-6">Necessary storage saves your cookie choice in this browser. You can accept all cookies, reject optional cookies, or customize your choice using the cookie banner. Change your choice any time with Cookie settings in the footer. Optional analytics and personalization cookies are not currently enabled on this site.</p>

        <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Us</h2>
        <p className="text-muted-foreground">If you have questions about this Privacy Policy, call us at <a className="text-primary underline" href={contactPhoneHref}>{contactPhone}</a>.</p>
      </div>
    </section>
    <Footer />
  </div>
);

export default PrivacyPolicy;
