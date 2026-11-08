import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const considerations = [
  {
    number: "01",
    title: "Think about the day-to-day",
    description:
      "Consider which parts of the day are becoming more difficult, tiring, or less enjoyable. It might be a particular routine, a household responsibility, or simply wanting more companionship throughout the week.",
  },
  {
    number: "02",
    title: "Consider what matters personally",
    description:
      "Everyone has their own way of doing things. Think about preferences, familiar routines, personal boundaries, and what independence means to the person receiving support.",
  },
  {
    number: "03",
    title: "Talk through the practical details",
    description:
      "How often might support be helpful? What time of day would work best? Who should be involved in planning? These details can help shape a more suitable arrangement.",
  },
  {
    number: "04",
    title: "Allow for things to change",
    description:
      "Needs rarely stay exactly the same. It's worth discussing how an arrangement can be reviewed and what happens when additional or different support becomes necessary.",
  },
];

const practicalDetails = [
  {
    label: "The right level of support",
    description:
      "Understand which services are available and how they relate to the individual's needs, routines, and preferences.",
  },
  {
    label: "Visits and scheduling",
    description:
      "Discuss how often visits may be needed, preferred times, availability, and what happens if a schedule needs to change.",
  },
  {
    label: "Communication",
    description:
      "Establish who to contact with questions, how concerns are addressed, and how approved family members can stay informed.",
  },
  {
    label: "Costs and expectations",
    description:
      "Make sure you understand the fees, what is included in a visit, and any terms that apply before agreeing to an arrangement.",
  },
];

const ServicesPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <main>
      {/* PAGE INTRODUCTION */}
      <section className="animate-section section-pattern pattern-dots border-b border-border bg-background text-foreground">
        <div className="container max-w-6xl pb-20 pt-24 md:pb-28 md:pt-32">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                What we offer
              </p>
            </div>

            <div className="md:col-span-9">
              <h1 className="max-w-4xl font-serif text-5xl font-normal leading-[1.13] tracking-tight text-foreground sm:text-6xl md:text-[clamp(4rem,6.5vw,6.5rem)]">
                The right support,
                <br />
                for everyday life.
              </h1>

              <div className="mt-12 max-w-xl md:ml-auto md:mt-16">
                <p className="text-lg leading-8 text-foreground">
                  A little help can make a meaningful difference to the way
                  someone experiences their day.
                </p>

                <p className="mt-6 text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
                  Whether it's assistance with familiar routines, a helping hand
                  around the home, or the reassurance of having someone there,
                  support should feel comfortable, respectful, and suited to the
                  individual.
                </p>

                <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
                  At Rooted With You, we believe care should work around the
                  person receiving it, not the other way around.
                </p>

                <a
                  href="#available-services"
                  className="mt-8 inline-flex items-center gap-3 border-b border-foreground pb-2 text-sm font-medium text-foreground transition-opacity hover:opacity-60"
                >
                  Explore our services
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXISTING SERVICES LISTING */}
      <div id="available-services" className="scroll-mt-24">
        <ServicesSection />
      </div>

      {/* SERVICE PHILOSOPHY */}
      <section className="animate-section section-pattern pattern-contours border-y border-border bg-card py-20 text-foreground md:py-28">
        <div className="container max-w-6xl">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                A personal approach
              </p>
            </div>

            <div className="md:col-span-9">
              <h2 className="max-w-4xl font-serif text-3xl font-normal leading-[1.3] tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Not everyone needs the same kind of help. And that's exactly
                where the conversation should begin.
              </h2>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-12">
                <p className="text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
                  One person may need help with everyday activities, while
                  another may simply benefit from more companionship or
                  occasional practical assistance.
                </p>

                <p className="text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
                  What matters is understanding the individual, their
                  circumstances, and the kind of support that would genuinely
                  make life easier without taking away independence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHOOSING SUPPORT */}
      <section
        id="finding-the-right-care"
        className="scroll-mt-36 animate-section section-pattern pattern-dots py-20 md:py-32"
      >
        <div className="container max-w-6xl">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                01 / Finding the right fit
              </p>

              <h2 className="mt-6 max-w-sm font-serif text-4xl font-normal leading-tight text-foreground md:text-5xl">
                Where do you begin?
              </h2>

              <p className="mt-7 max-w-xs text-sm leading-7 text-muted-foreground">
                You don't need to have everything figured out before exploring
                care. Often, the most useful starting point is simply looking at
                everyday life.
              </p>

              <p className="mt-5 max-w-xs text-sm leading-7 text-muted-foreground">
                These are some of the things worth considering when deciding
                what kind of support may be appropriate.
              </p>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <div className="border-t border-border">
                {considerations.map((item) => (
                  <article
                    key={item.number}
                    className="grid grid-cols-[2rem_1fr] gap-5 border-b border-border py-8 sm:gap-8 md:py-10"
                  >
                    <span className="pt-1 text-xs text-muted-foreground">
                      {item.number}
                    </span>

                    <div>
                      <h3 className="font-serif text-2xl font-normal leading-snug text-foreground md:text-3xl">
                        {item.title}
                      </h3>

                      <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPECTATIONS */}
      <section className="animate-section section-pattern pattern-contours border-t border-border bg-card py-20 md:py-32">
        <div className="container max-w-6xl">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                02 / Before care begins
              </p>

              <h2 className="mt-6 max-w-md font-serif text-4xl font-normal leading-tight text-foreground md:text-5xl">
                Good support starts with clear expectations.
              </h2>

              <p className="mt-7 max-w-sm text-sm leading-7 text-muted-foreground">
                Choosing care involves more than deciding which tasks need
                attention. It's also about knowing what to expect, feeling
                comfortable with the arrangements, and understanding who to
                speak to when questions arise.
              </p>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <div className="divide-y divide-border border-t border-border">
                {practicalDetails.map((item) => (
                  <div key={item.label} className="py-7 md:py-9">
                    <h3 className="text-lg font-medium text-foreground">
                      {item.label}
                    </h3>

                    <p className="mt-3 max-w-lg text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT CAN CHANGE */}
      <section className="animate-section section-pattern pattern-dots border-t border-border py-20 md:py-28">
        <div className="container max-w-6xl">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                03 / Looking ahead
              </p>

              <h2 className="mt-6 max-w-sm font-serif text-4xl font-normal leading-tight text-foreground md:text-5xl">
                Needs change. Life changes.
              </h2>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <p className="text-lg leading-8 text-foreground">
                The support that makes sense today may look different a few
                months or years from now.
              </p>

              <p className="mt-6 text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
                Sometimes someone becomes more independent. Sometimes their
                circumstances change, or a new challenge arises. A thoughtful
                approach to care makes room for those changes rather than
                assuming one arrangement will always fit.
              </p>

              <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
                That's why ongoing communication matters. When routines,
                preferences, or support needs evolve, there should be a clear
                way to discuss whether the current arrangement remains suitable.
              </p>

              <div className="mt-10 border-l-2 border-foreground/20 pl-6">
                <p className="max-w-md font-serif text-2xl leading-relaxed text-foreground">
                  Care should make room for the person you are today, and the
                  person you may become tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE CLARITY */}
      <section className="border-t border-border py-12 md:py-16">
        <div className="container max-w-6xl">
          <div className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="font-serif text-2xl text-foreground">
                A note about our services.
              </h2>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <p className="text-sm leading-7 text-muted-foreground">
                The availability and suitability of individual services can
                depend on location, scheduling, and personal circumstances.
                Before arranging care, please confirm the services available,
                the scope of support, visit arrangements, and applicable fees.
                Home support does not replace emergency services or professional
                medical advice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <CtaBanner />
    <Footer />
  </div>
);

export default ServicesPage;
