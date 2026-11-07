import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import FindUsSection from "@/components/Findussection";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";
import { contactPhone, contactPhoneHref } from "@/lib/contact";

const ContactPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="animate-section border-b border-border bg-background py-20">
      <div className="container max-w-2xl">
        <p className="section-label">Contact us</p>
        <h1 className="mt-5 text-4xl font-semibold leading-tight text-foreground md:text-6xl">
          Get in Touch with Rooted With You
        </h1>
        <p className="mt-5 text-sm leading-6 text-muted-foreground">
          Have questions about in-home support or service coverage? Call us to
          start a conversation. There is no office to visit.
        </p>
        <a
          href={contactPhoneHref}
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-white hover:bg-primary/90"
        >
          <Phone size={16} /> Call {contactPhone}
        </a>
      </div>
    </section>

    <section className="border-b border-border bg-card py-16">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-label">A useful first conversation</p>
            <h2 className="section-title mt-4">
              Start wherever you are.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              You do not need to have a care plan figured out before reaching
              out. A few practical details can help you get clear answers.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Where care is needed",
                text: "Share your city or community so you can check whether service may be available in your area.",
              },
              {
                title: "What would make a difference",
                text: "Consider the routines or tasks where help would be most useful, and the times of day you have in mind.",
              },
              {
                title: "Who should be involved",
                text: "If you are calling for someone else, think about how they would like to take part in the conversation.",
              },
              {
                title: "Questions you want answered",
                text: "Ask about service scope, caregiver qualifications, scheduling, fees and what happens if needs change.",
              },
            ].map((item) => (
              <article key={item.title} className="border-t border-border pt-4">
                <h3 className="text-lg text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>

    <ContactForm />
    <FindUsSection />
    <Footer />
  </div>
);

export default ContactPage;
