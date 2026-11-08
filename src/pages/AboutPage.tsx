import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";

const values = [
  {
    number: "01",
    title: "Respect, always",
    description:
      "A person's home, preferences and decisions deserve consideration. Support should never come at the expense of dignity.",
  },
  {
    number: "02",
    title: "Independence matters",
    description:
      "The goal isn't to take over. It's to make everyday life a little easier while protecting the choices that make it yours.",
  },
  {
    number: "03",
    title: "Care is personal",
    description:
      "No two people live the same way. We believe good support begins with understanding routines, personalities and individual needs.",
  },
  {
    number: "04",
    title: "Connection counts",
    description:
      "Being listened to, having a conversation and feeling understood are important parts of a meaningful day.",
  },
];

const steps = [
  {
    number: "01",
    title: "A conversation",
    description:
      "We start by understanding your situation, your concerns and what you'd like support to look like.",
  },
  {
    number: "02",
    title: "Understanding your needs",
    description:
      "We talk through daily routines, preferences and the areas where additional help could make a difference.",
  },
  {
    number: "03",
    title: "Finding a way forward",
    description:
      "We discuss appropriate support options, practical arrangements and what the next steps could involve.",
  },
];

const questions = [
  {
    question: "When is the right time to consider home care?",
    answer:
      "There isn't one right moment. Sometimes support becomes useful when everyday tasks start feeling more difficult, when someone would benefit from companionship, or when family members need additional help. Having a conversation early can make the decision easier.",
  },
  {
    question: "Can family members be involved?",
    answer:
      "Absolutely. With the permission of the person receiving support, family members or trusted friends can join conversations, share concerns and help with planning.",
  },
  {
    question: "What if care needs change?",
    answer:
      "Needs and circumstances change. It's important to review arrangements, communicate concerns and discuss adjustments when the current level of support is no longer suitable.",
  },
  {
    question: "Is home support the same as medical care?",
    answer:
      "Not necessarily. Everyday home support and medical care can involve different services and qualifications. It's important to confirm which services are available and whether a specific health need falls within the provider's scope.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* INTRODUCTION */}
        <section
          id="who-we-are"
          className="section-pattern pattern-dots scroll-mt-36 border-b border-border bg-background text-foreground"
        >
          <div className="container max-w-6xl pb-20 pt-24 md:pb-32 md:pt-32">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-3">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  About Rooted With You
                </p>
              </div>

              <div className="md:col-span-9">
                <h1 className="max-w-4xl font-serif text-5xl font-normal leading-[1.13] tracking-tight text-foreground sm:text-6xl md:text-[clamp(4rem,6.5vw,6.5rem)]">
                  Good care begins
                  <br />
                  with understanding.
                </h1>

                <div className="mt-12 max-w-xl md:ml-auto md:mt-16">
                  <p className="text-lg leading-8 text-foreground">
                    We believe everyone deserves to feel comfortable, respected
                    and supported in the place they call home.
                  </p>

                  <p className="mt-6 text-sm leading-7 text-muted-foreground md:text-base">
                    Rooted With You is guided by a simple belief: receiving
                    support shouldn't mean losing the routines, choices and
                    connections that make life meaningful.
                  </p>

                  <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-base">
                    Whether you're looking for yourself or someone close to you,
                    we believe the first step should be a thoughtful
                    conversation about what really matters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="section-pattern pattern-contours py-20 md:py-32">
          <div className="container max-w-6xl">
            <div className="grid gap-10 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  01 / Our perspective
                </p>

                <h2 className="mt-6 font-serif text-4xl font-normal leading-tight text-foreground md:text-5xl">
                  Home means
                  <br />
                  something
                  <br />
                  different to
                  <br />
                  everyone.
                </h2>
              </div>

              <div className="md:col-span-7 md:col-start-6">
                <div className="space-y-6 text-base leading-8 text-muted-foreground">
                  <p>
                    For some, it's a familiar morning routine. For others, it's
                    a favourite chair by the window, a garden they've cared for
                    over the years, or simply the comfort of being surrounded by
                    their own things.
                  </p>

                  <p>
                    These are the details that make a place feel like home. And
                    when someone begins to need additional support, those
                    details shouldn't be overlooked.
                  </p>

                  <p>
                    We believe care should fit into someone's life, rather than
                    asking them to reshape their life around it. That means
                    taking time to listen, understanding what independence means
                    to them, and respecting the way they choose to live.
                  </p>

                  <p className="text-foreground">
                    It's a simple idea, but one we believe makes all the
                    difference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATEMENT */}
        <section className="section-pattern pattern-contours border-y border-border bg-card py-20 text-foreground md:py-28">
          <div className="container max-w-6xl">
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-3">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  What we believe
                </p>
              </div>

              <div className="md:col-span-9">
                <p className="max-w-4xl font-serif text-3xl leading-[1.35] tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  Care should help people continue living the life they know and
                  love, with the right support beside them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section id="our-character" className="section-pattern pattern-dots scroll-mt-36 py-20 md:py-32">
          <div className="container max-w-6xl">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  02 / What matters to us
                </p>

                <h2 className="mt-6 max-w-xs font-serif text-4xl font-normal leading-tight text-foreground md:text-5xl">
                  The things we won't compromise on.
                </h2>

                <p className="mt-6 max-w-xs text-sm leading-7 text-muted-foreground">
                  Beyond schedules and practical arrangements, certain things
                  should always remain at the heart of care.
                </p>
              </div>

              <div className="md:col-span-7 md:col-start-6">
                <div className="border-t border-border">
                  {values.map((value) => (
                    <div
                      key={value.number}
                      className="grid grid-cols-[2rem_1fr] gap-5 border-b border-border py-8 sm:gap-8 md:py-10"
                    >
                      <span className="pt-1 text-xs text-muted-foreground">
                        {value.number}
                      </span>

                      <div>
                        <h3 className="font-serif text-2xl font-normal text-foreground md:text-3xl">
                          {value.title}
                        </h3>

                        <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR APPROACH */}
        <section
          id="our-experience"
          className="scroll-mt-36 border-y border-border bg-card py-20 md:py-32"
        >
          <div className="container max-w-6xl">
            <div className="grid gap-12 md:grid-cols-12">
              <div className="md:col-span-5">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  03 / Our approach
                </p>

                <h2 className="mt-6 max-w-md font-serif text-4xl font-normal leading-tight text-foreground md:text-5xl">
                  It starts with a conversation.
                </h2>

                <p className="mt-7 max-w-sm text-sm leading-7 text-muted-foreground">
                  Reaching out about care can feel like a big step. You might
                  know exactly what you need, or you might still be figuring
                  things out.
                </p>

                <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
                  Either way, you deserve the time and space to ask questions,
                  understand your options and feel comfortable with what comes
                  next.
                </p>
              </div>

              <div className="md:col-span-6 md:col-start-7">
                <div className="divide-y divide-border border-t border-border">
                  {steps.map((step) => (
                    <div key={step.number} className="py-8 md:py-10">
                      <div className="flex items-baseline gap-5">
                        <span className="text-xs text-muted-foreground">
                          {step.number}
                        </span>

                        <h3 className="font-serif text-2xl font-normal text-foreground">
                          {step.title}
                        </h3>
                      </div>

                      <p className="ml-9 mt-4 max-w-md text-sm leading-7 text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAMILY */}
        <section id="for-families" className="section-pattern pattern-dots scroll-mt-36 py-20 md:py-32">
          <div className="container max-w-6xl">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  04 / For families
                </p>

                <h2 className="mt-6 font-serif text-4xl font-normal leading-tight text-foreground md:text-5xl">
                  Supporting someone you love.
                </h2>
              </div>

              <div className="md:col-span-7 md:col-start-6">
                <p className="text-lg leading-8 text-foreground">
                  Looking for care for a loved one can bring a lot of questions,
                  and sometimes difficult decisions.
                </p>

                <div className="mt-7 space-y-5 text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
                  <p>
                    You may be concerned about a parent managing alone, trying
                    to balance work with family responsibilities, or simply
                    wanting someone close to you to have more support during the
                    day.
                  </p>

                  <p>
                    Whatever brings you here, we believe families should feel
                    comfortable asking questions and being part of the
                    conversation.
                  </p>

                  <p>
                    At the same time, the person receiving care should always
                    have a voice. Their preferences, comfort and independence
                    remain central to any discussion about support.
                  </p>
                </div>

                <div className="mt-10 border-l-2 border-foreground/20 pl-6">
                  <p className="font-serif text-2xl leading-relaxed text-foreground">
                    Peace of mind begins with knowing that someone's individual
                    needs are being taken seriously.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* A MORE PERSONAL EXPERIENCE */}
        <section className="section-pattern pattern-contours border-y border-border py-20 md:py-28">
          <div className="container max-w-6xl">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-3">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  The everyday details
                </p>
              </div>

              <div className="md:col-span-9">
                <h2 className="max-w-3xl font-serif text-4xl font-normal leading-tight text-foreground md:text-5xl">
                  It's often the smallest things that matter most.
                </h2>

                <div className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-12">
                  <p className="text-sm leading-7 text-muted-foreground">
                    Remembering how someone takes their tea. Knowing which
                    activities they enjoy. Understanding when they'd rather have
                    company and when they'd prefer some quiet.
                  </p>

                  <p className="text-sm leading-7 text-muted-foreground">
                    These may seem like ordinary details, but they're part of a
                    person's identity. We believe they deserve just as much
                    consideration as the practical side of care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="frequently-asked-questions"
          className="section-pattern pattern-contours scroll-mt-36 py-20 md:py-32"
        >
          <div className="container max-w-6xl">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  05 / Helpful answers
                </p>

                <h2 className="mt-6 font-serif text-4xl font-normal leading-tight text-foreground md:text-5xl">
                  Questions are always welcome.
                </h2>

                <p className="mt-6 max-w-xs text-sm leading-7 text-muted-foreground">
                  Finding the right support begins with feeling informed. Here
                  are a few things you might be wondering about.
                </p>
              </div>

              <div className="md:col-span-7 md:col-start-6">
                <div className="divide-y divide-border border-t border-border">
                  {questions.map((item) => (
                    <details key={item.question} className="group py-6">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-6 [&::-webkit-details-marker]:hidden">
                        <span className="text-base font-medium leading-7 text-foreground">
                          {item.question}
                        </span>

                        <span
                          aria-hidden="true"
                          className="shrink-0 text-xl font-light text-muted-foreground transition-transform group-open:rotate-45"
                        >
                          +
                        </span>
                      </summary>

                      <p className="mt-5 max-w-lg pr-8 text-sm leading-7 text-muted-foreground">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRANSPARENCY */}
        <section className="border-t border-border py-14 md:py-20">
          <div className="container max-w-6xl">
            <div className="grid gap-6 md:grid-cols-12">
              <div className="md:col-span-4">
                <h2 className="font-serif text-2xl text-foreground">
                  A note on care and transparency.
                </h2>
              </div>

              <div className="md:col-span-7 md:col-start-6">
                <p className="text-sm leading-7 text-muted-foreground">
                  Good care should come with clear expectations. Before support
                  begins, services, schedules, responsibilities and fees should
                  be explained. Home support is not a replacement for emergency
                  services or medical advice, and specific health needs should
                  always be discussed to establish whether they fall within the
                  provider's scope.
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
};

export default AboutPage;
