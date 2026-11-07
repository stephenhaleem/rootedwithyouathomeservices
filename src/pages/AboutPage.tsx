import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

const AboutPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <section
      id="who-we-are"
      className="scroll-mt-36 animate-section border-b border-border bg-background py-20"
    >
      <div className="container max-w-2xl">
        <p className="section-label">About us</p>
        <h1 className="mt-5 text-4xl font-semibold leading-tight text-foreground md:text-6xl">
          About Rooted With You
        </h1>
        <p className="mt-5 text-sm leading-6 text-muted-foreground">
          A thoughtful approach to support at home.
        </p>
      </div>
    </section>
    <section className="animate-section theme-wash py-20">
      <div className="container max-w-4xl">
        <div className="grid gap-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Care should support the life you already have.
            </h2>
            <p className="mb-4 max-w-2xl text-muted-foreground">
              Good home care is practical and personal. It should make everyday
              tasks easier without taking over choices, routines or the things
              that bring comfort.
            </p>
            <p className="max-w-2xl text-muted-foreground">
              Our focus is helping each person keep their sense of agency and
              connection in the place they know best.
            </p>
          </div>
        </div>

        <div id="our-character" className="mt-16 scroll-mt-36">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            What good care should protect
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Independence",
                desc: "Offer help where it is wanted while leaving space for familiar routines and choices.",
              },
              {
                title: "Respect",
                desc: "Protect privacy, personal preferences and the familiar feel of someone's home.",
              },
              {
                title: "Connection",
                desc: "Make time for the conversations and relationships that bring meaning to a day.",
              },
            ].map((v) => (
              <div key={v.title} className="rounded-md border border-border bg-background p-6">
                <h3 className="text-xl font-semibold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          id="our-experience"
          className="mt-16 scroll-mt-36 border-t border-border pt-12"
        >
          <p className="section-label">Our experience</p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-tight text-foreground md:text-4xl">
            A considered approach to support at home.
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Start with what matters",
                text: "Talk about daily habits, personal preferences and the tasks where an extra pair of hands would make a difference.",
              },
              {
                title: "Keep family in the loop",
                text: "With the person's permission, include trusted family or friends in conversations and practical planning.",
              },
              {
                title: "Make room for change",
                text: "Needs and routines can shift. Revisit the plan together and discuss adjustments when circumstances change.",
              },
            ].map((item) => (
              <article key={item.title} className="border-t border-primary/25 pt-5">
                <h3 className="text-xl text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-lg bg-card p-6 sm:p-8">
          <h2 className="text-2xl text-foreground">Care with clear boundaries</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
            Home support is not a substitute for emergency services or medical
            advice. Before care begins, make sure the services, schedule,
            responsibilities and fees are clearly explained, and ask whether a
            particular health need is within the team's scope.
          </p>
        </div>
      </div>
    </section>
    <CtaBanner />
    <Footer />
  </div>
);

export default AboutPage;
