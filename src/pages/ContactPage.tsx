import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import FindUsSection from "@/components/Findussection";
import Footer from "@/components/Footer";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import {
  contactEmail,
  contactEmailHref,
  contactPhone,
  contactPhoneHref,
} from "@/lib/contact";

const conversationTopics = [
  {
    number: "01",
    title: "Where support is needed",
    description:
      "Let us know your city or community so we can discuss whether services may be available in your area.",
  },
  {
    number: "02",
    title: "What everyday life looks like",
    description:
      "Share which routines are becoming difficult, where extra help might be useful, or what kind of companionship would make a difference.",
  },
  {
    number: "03",
    title: "Who the care is for",
    description:
      "Whether you're reaching out for yourself or someone close to you, it helps to understand their preferences and how they'd like to be involved.",
  },
  {
    number: "04",
    title: "Anything you'd like to ask",
    description:
      "Questions about available services, scheduling, fees or what happens next are all welcome. There's no need to have everything figured out.",
  },
];

const ContactPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <main>
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-border bg-background py-20 text-foreground md:py-28">
        {/* Very subtle dotted background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 0.7px, transparent 0.7px)",
            backgroundSize: "24px 24px",
            maskImage: "linear-gradient(105deg, black 0%, transparent 85%)",
            WebkitMaskImage:
              "linear-gradient(105deg, black 0%, transparent 85%)",
          }}
        />

        <div className="container relative z-10 max-w-6xl">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Contact / Rooted With You
              </p>
            </div>

            <div className="md:col-span-9">
              <h1 className="max-w-4xl font-serif text-5xl font-normal leading-[1.12] tracking-tight text-foreground sm:text-6xl md:text-[clamp(4rem,6.5vw,6.5rem)]">
                Let's talk about
                <br />
                care at home.
              </h1>

              <div className="mt-12 max-w-xl md:ml-auto md:mt-16">
                <p className="text-lg leading-8 text-foreground md:text-xl md:leading-9">
                  Looking for support for yourself or someone you care about?
                  We're here to have that conversation.
                </p>

                <p className="mt-6 text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
                  Finding the right care can bring up a lot of questions. You
                  might know exactly what you're looking for, or you might still
                  be exploring what's possible.
                </p>

                <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
                  Either way, you're welcome to get in touch. Tell us a little
                  about your situation, ask whatever is on your mind, and we'll
                  begin from there.
                </p>

                <a
                  href="#contact-form"
                  className="group mt-9 inline-flex items-center gap-3 border-b border-foreground pb-2 text-sm font-medium text-foreground transition-opacity hover:opacity-60"
                >
                  Send us a message
                  <ArrowDown
                    size={16}
                    strokeWidth={1.5}
                    className="transition-transform duration-200 group-hover:translate-y-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="border-b border-border bg-background py-14 md:py-20">
        <div className="container max-w-6xl">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Reach us directly
              </p>

              <p className="mt-4 max-w-[230px] text-sm leading-7 text-muted-foreground">
                Choose whichever way of getting in touch feels most comfortable.
              </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 md:col-span-9 md:gap-12">
              {/* PHONE */}
              <div className="border-t border-border pt-6">
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  By phone
                </p>

                <a
                  href={contactPhoneHref}
                  className="group mt-5 flex items-start justify-between gap-4 text-foreground"
                >
                  <span className="break-words font-serif text-2xl leading-snug md:text-3xl">
                    {contactPhone}
                  </span>

                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.4}
                    className="mt-1 shrink-0 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>

                <p className="mt-5 text-sm leading-7 text-muted-foreground">
                  Give us a call to talk about your questions or explore the
                  support you have in mind.
                </p>
              </div>

              {/* EMAIL */}
              <div className="border-t border-border pt-6">
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  By email
                </p>

                <a
                  href={contactEmailHref}
                  className="group mt-5 flex items-start justify-between gap-3 text-foreground"
                >
                  <span className="min-w-0 break-all font-serif text-xl leading-snug sm:text-2xl lg:text-3xl">
                    {contactEmail}
                  </span>

                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.4}
                    className="mt-1 shrink-0 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>

                <p className="mt-5 text-sm leading-7 text-muted-foreground">
                  Prefer to write things down? Send us an email with a little
                  about your situation.
                </p>
              </div>
            </div>
          </div>

          {/* NO WALK-IN OFFICE */}
          <div className="mt-14 grid gap-4 border-t border-border pt-7 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="text-xs font-medium text-foreground">Visiting us</p>
            </div>

            <div className="md:col-span-9">
              <p className="max-w-xl text-sm leading-7 text-muted-foreground">
                We don't have a walk-in office. The best way to reach Rooted
                With You is by phone, email, or the contact form below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDANCE BEFORE CONTACTING */}
      <section className="border-b border-border bg-card py-20 md:py-28">
        <div className="container max-w-6xl">
          <div className="grid gap-12 md:grid-cols-12">
            {/* LEFT SIDE */}
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Before you reach out
              </p>

              <h2 className="mt-6 max-w-sm font-serif text-4xl font-normal leading-[1.2] tracking-tight text-foreground md:text-5xl">
                A good place to begin.
              </h2>

              <p className="mt-7 max-w-sm text-sm leading-7 text-muted-foreground">
                You don't need a care plan, a detailed list of requirements, or
                all the right words.
              </p>

              <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
                Sometimes a few simple details are enough to get the
                conversation started. Here are some things you might find useful
                to consider.
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="md:col-span-7 md:col-start-6">
              <div className="border-t border-border">
                {conversationTopics.map((item) => (
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

      {/* CONTACT FORM */}
      <div id="contact-form" className="scroll-mt-24">
        <ContactForm />
      </div>

      {/* SERVICE AREA / FIND US */}
      <FindUsSection />
    </main>

    <Footer />
  </div>
);

export default ContactPage;
