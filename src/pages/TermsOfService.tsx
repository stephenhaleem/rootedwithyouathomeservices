import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { contactPhone, contactPhoneHref } from "@/lib/contact";

const TermsOfService = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="animate-section section-pattern pattern-dots border-b border-border bg-background py-20">
      <div className="container max-w-2xl">
        <p className="section-label">Legal</p>
        <h1 className="section-title mt-5">Terms of Service</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: April 2026</p>
      </div>
    </section>
    <section className="py-20 bg-card">
      <div className="container max-w-3xl prose prose-sm sm:prose">
        <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
        <p className="text-muted-foreground mb-6">By using Rooted With You's website and services, you agree to these Terms of Service. If you do not agree, please discontinue use of our services.</p>

        <h2 className="text-2xl font-bold text-foreground mb-4">2. Services</h2>
        <p className="text-muted-foreground mb-6">Rooted With You provides non-medical and supportive home care services including personal care, companionship, meal preparation, and related assistance. All services are delivered by licensed healthcare aides with valid CPR certification and police background checks.</p>

        <h2 className="text-2xl font-bold text-foreground mb-4">3. Client Responsibilities</h2>
        <p className="text-muted-foreground mb-6">Clients agree to provide accurate health and personal information, maintain a safe environment for caregivers, give reasonable notice for schedule changes (minimum 24 hours), and treat caregivers with respect and dignity.</p>

        <h2 className="text-2xl font-bold text-foreground mb-4">4. Payments & Billing</h2>
        <p className="text-muted-foreground mb-6">Service rates are provided during the initial care assessment. Invoices are issued bi-weekly and payment is due within 15 days. We accept major credit cards, direct debit, and e-Transfer.</p>

        <h2 className="text-2xl font-bold text-foreground mb-4">5. Cancellation Policy</h2>
        <p className="text-muted-foreground mb-6">Services may be cancelled with 7 days' written notice. A cancellation fee of one day's service rate applies for cancellations with less than 24 hours' notice.</p>

        <h2 className="text-2xl font-bold text-foreground mb-4">6. Liability</h2>
        <p className="text-muted-foreground mb-6">Rooted With You carries comprehensive liability insurance. However, we are not liable for pre-existing conditions, outcomes beyond our control, or damages resulting from client non-compliance with care plans.</p>

        <h2 className="text-2xl font-bold text-foreground mb-4">7. Governing Law</h2>
        <p className="text-muted-foreground mb-6">These terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein.</p>

        <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact</h2>
        <p className="text-muted-foreground">For questions regarding these terms, call us at <a className="text-primary underline" href={contactPhoneHref}>{contactPhone}</a>.</p>
      </div>
    </section>
    <Footer />
  </div>
);

export default TermsOfService;
