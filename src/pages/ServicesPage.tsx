import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const ServicesPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <section className="animate-section border-b border-border bg-background py-20">
      <div className="container max-w-2xl">
        <p className="section-label">Our Services</p>
        <h1 className="mt-5 text-4xl font-semibold leading-tight text-foreground md:text-6xl">
          Home care for everyday life.
        </h1>
        <p className="mt-5 text-sm leading-6 text-muted-foreground">
          Explore the kinds of help available and choose what best fits your
          household's needs and routines.
        </p>
      </div>
    </section>
    <ServicesSection />
    <section className="border-y border-border bg-card py-20">
      <div className="container">
        <div className="max-w-2xl">
          <p className="section-label">Finding a fit</p>
          <h2 className="section-title mt-4">
            Begin with the everyday details.
          </h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            The right support depends on what would make home life easier for
            you. Start with the tasks, times of day and routines that matter
            most, then ask what can be included in a visit.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "What would help?",
              text: "List daily activities that feel difficult, tiring or better with company. A short list is a helpful place to start.",
            },
            {
              title: "What should a visit include?",
              text: "Ask which tasks are included, how the schedule works and whether the same aide can visit regularly.",
            },
            {
              title: "What happens if needs change?",
              text: "Discuss how to request a schedule change, who to contact and how updates to the support plan are agreed.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-border bg-background p-6"
            >
              <h3 className="text-xl text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {item.text}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-xs leading-5 text-muted-foreground">
          Service availability and suitability depend on location and individual
          needs. Confirm scope, schedule and pricing directly before arranging
          care.
        </p>
      </div>
    </section>
    <CtaBanner />
    <Footer />
  </div>
);

export default ServicesPage;
