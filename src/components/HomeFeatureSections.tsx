import { Link } from "react-router-dom";
import {
  Accessibility,
  ArrowUpRight,
  BookOpen,
  Leaf,
  Armchair,
  TreePine,
  Minus,
  Plus,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-primary">
    {children}
  </p>
);
const wrap = "mx-auto max-w-[1440px] px-6 md:px-20";

const moments = [
  {
    cat: "Morning",
    title: "A gentle start",
    text: "A cup of tea, a favourite spot in the sunshine and support with morning routines when you need it.",
    img: "src/assets/side-view-man-having-lunch-restaurant (1).jpg",
  },
  {
    cat: "Afternoon",
    title: "Something to look forward to",
    text: "A walk, a creative project or a friendly conversation with a healthcare aide who knows your home.",
    img: "https://images.unsplash.com/photo-1559234938-b60fff04894d?w=900&q=85",
  },
  {
    cat: "Evening",
    title: "Good company",
    text: "Music, familiar stories and time to unwind in familiar company.",
    img: "src/assets/happy-family-having-nice-thanksgiving-dinner-together (1).jpg",
  },
];

export const DayToDaySection = () => (
  <section className="section-pattern pattern-dots bg-card py-24">
    <div className={wrap}>
      <Label>From morning to evening</Label>
      <div className="mt-3 grid gap-4 md:grid-cols-2 md:items-end">
        <h2 className="text-4xl text-foreground md:text-[44px]">
          A day with room for you.
        </h2>
        <p className="max-w-[440px] text-[15px] leading-7 text-muted-foreground">
          See a few ways help can fit into familiar parts of the day.
        </p>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {moments.map((m) => (
          <article key={m.title}>
            <img
              src={m.img}
              alt=""
              loading="lazy"
              className="aspect-[4/3] w-full rounded-md object-cover"
            />
            <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.06em] text-primary">
              {m.cat}
            </p>
            <h3 className="mt-2 text-2xl text-foreground">{m.title}</h3>
            <p className="mt-2 text-[15px] leading-6 text-muted-foreground">
              {m.text}
            </p>
          </article>
        ))}
      </div>
      <p className="mt-10 text-[11px] text-muted-foreground">
        Examples only; activities should reflect each person's interests,
        preferences and abilities.
      </p>
    </div>
  </section>
);

export const HomeVisitSection = () => (
  <section className="section-pattern pattern-contours bg-[#eee6dc] py-24">
    <div
      className={`${wrap} grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]`}
    >
      <div>
        <Label>Routines, your way</Label>
        <h2 className="mt-4 text-4xl leading-tight text-foreground md:text-[44px]">
          A visit shaped around your day.
        </h2>
        <p className="mt-6 max-w-[440px] text-[15px] leading-7 text-muted-foreground">
          Decide together what a visit should focus on—from getting ready in the
          morning to sharing a meal or enjoying company.
        </p>
        <ul className="mt-6 space-y-3">
          {[
            "Choose the routines to focus on",
            "Share preferences and familiar habits",
            "Revisit the plan when things change",
          ].map((i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-sm text-foreground"
            >
              <Leaf size={14} strokeWidth={1.4} className="text-primary" />
              {i}
            </li>
          ))}
        </ul>
      </div>
      <figure>
        <img
          src="https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&q=85"
          alt="A meal shared at home"
          loading="lazy"
          className="aspect-[16/10] w-full rounded-md object-cover"
        />
        <figcaption className="mt-4 text-[11px] text-muted-foreground">
          Support that respects your home, your routines and your preferences.
        </figcaption>
      </figure>
    </div>
  </section>
);

const chips = [
  { icon: Armchair, t: "Support tailored to your home" },
  { icon: TreePine, t: "Licensed healthcare aides" },
  { icon: BookOpen, t: "CPR certified" },
  { icon: Accessibility, t: "Police checked" },
];

export const HomeGallerySection = () => (
  <section className="bg-background py-24">
    <div className={wrap}>
      <Label>Your independence, supported</Label>
      <div className="mt-3 grid gap-4 md:grid-cols-2 md:items-end">
        <h2 className="max-w-[480px] text-4xl leading-tight text-foreground md:text-[44px]">
          Support that respects your home.
        </h2>
        <p className="max-w-[400px] text-[15px] leading-7 text-muted-foreground">
          Dependable support can help you stay safe, confident and connected in
          the place that feels most like yours.
        </p>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-[1.45fr_1fr]">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=85"
            alt="A bright, comfortable bedroom"
            loading="lazy"
            className="h-[330px] w-full rounded-md object-cover md:h-[360px]"
          />
          <figcaption className="mt-3 flex items-baseline justify-between">
            <span className="font-serif text-2xl text-foreground">
              Support that fits your home
            </span>
            <span className="text-[11px] text-muted-foreground">
              Concept support
            </span>
          </figcaption>
        </figure>
        <figure>
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1000&q=85"
            alt="A welcoming living room"
            loading="lazy"
            className="h-[330px] w-full rounded-md object-cover md:h-[360px]"
          />
          <figcaption className="mt-3 font-serif text-2xl text-foreground">
            A familiar place to stay
          </figcaption>
        </figure>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {chips.map(({ icon: Icon, t }) => (
          <div
            key={t}
            className="flex items-center justify-center gap-3 rounded-md border border-border py-4 text-xs text-foreground"
          >
            <Icon size={14} strokeWidth={1.4} />
            {t}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const decision = [
  {
    t: "Tell us what matters",
    x: "Talk through daily routines, preferences and the support you're looking for. Bring your questions — and the people you trust.",
  },
  {
    t: "Get a feel for the support",
    x: "Explore the services, ask about availability and imagine how dependable in-home support could feel.",
  },
  {
    t: "Consider the next chapter",
    x: "Before making a decision, review care suitability, a written fee breakdown and what settling into support would involve.",
  },
];

export const DecisionStepsSection = () => (
  <section className="section-pattern pattern-dots bg-[#f0f1ea] py-24">
    <div className={`${wrap} grid gap-12 md:grid-cols-[1.2fr_0.8fr]`}>
      <div>
        <Label>For you and your family</Label>
        <h2 className="mt-4 max-w-[340px] text-4xl leading-tight text-foreground md:text-[44px]">
          A big decision. Small, thoughtful steps.
        </h2>
        <p className="mt-6 max-w-[360px] text-[15px] leading-7 text-muted-foreground">
          You don't need to have all the answers. Start with a conversation, and
          take the time you need to explore your options together.
        </p>
        <Link
          to="/contact"
          className="mt-5 inline-flex items-center gap-2 text-[13px] font-medium text-primary underline underline-offset-4"
        >
          Questions to bring to a care conversation <ArrowUpRight size={13} />
        </Link>
      </div>
      <div>
        {decision.map((s, i) => (
          <div
            key={s.t}
            className="flex gap-5 border-b border-primary/15 py-6 first:pt-0"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e6ebde] font-serif text-sm text-primary">
              0{i + 1}
            </span>
            <div>
              <h3 className="text-2xl text-foreground">{s.t}</h3>
              <p className="mt-2 text-[15px] leading-6 text-muted-foreground">
                {s.x}
              </p>
            </div>
          </div>
        ))}
        <p className="mt-6 text-[11px] text-muted-foreground">
          Your voice matters. So does the voice of the person who will receive
          the support.
        </p>
      </div>
    </div>
  </section>
);

const faqs = [
  {
    q: "How do I know which service is right?",
    a: "Begin with the person's preferences, everyday routines and current support needs. In a real home-care service, a care discussion and suitability review would help clarify what is offered and whether it is the right fit.",
  },
  {
    q: "What should we ask about fees?",
    a: "Ask for a written fee breakdown, what is included in each visit and how changes to the schedule would be handled.",
  },
  {
    q: "Are healthcare aides available 24/7?",
    a: "Care schedules depend on needs and location. In a real service, visit times, overnight care and ongoing support would be discussed individually.",
  },
  {
    q: "What can someone bring from home?",
    a: "Familiar routines, preferences and personal touches help shape support around the person. Practical details would be discussed together.",
  },
];

export const FaqSection = () => (
  <section className="bg-card py-24">
    <div className={`${wrap} grid gap-12 md:grid-cols-[0.8fr_1.2fr]`}>
      <Accordion
        type="single"
        collapsible
        defaultValue="q0"
        className="w-full border-t border-border"
      >
        {faqs.map((f, i) => (
          <AccordionItem key={f.q} value={`q${i}`} className="border-border">
            <AccordionTrigger className="group py-5 text-left text-[15px] font-normal text-foreground hover:no-underline [&>svg]:hidden">
              {f.q}
              <Plus
                size={16}
                className="shrink-0 group-data-[state=open]:hidden"
              />
              <Minus
                size={16}
                className="hidden shrink-0 group-data-[state=open]:block"
              />
            </AccordionTrigger>
            <AccordionContent className="text-[15px] leading-7 text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="flex flex-col items-end text-right">
        <Label>A little clarity</Label>
        <h2 className="mt-4 max-w-[340px] text-4xl leading-tight text-foreground md:text-[44px]">
          It's natural to have questions.
        </h2>
        <p className="mt-6 max-w-[320px] text-[15px] leading-7 text-muted-foreground">
          A few helpful starting points for older adults and their families.
        </p>
        <Link
          to="/contact"
          className="mt-5 inline-flex items-center gap-2 text-[13px] font-medium text-primary underline underline-offset-4"
        >
          Ask us a question <ArrowUpRight size={13} />
        </Link>
      </div>
    </div>
  </section>
);
