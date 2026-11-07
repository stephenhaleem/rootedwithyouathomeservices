import { Heart, ShieldCheck, MessageCircle, Clock3, House, Users } from "lucide-react";

const priorities = [
  {
    icon: Heart,
    title: "Dignity in daily care",
    text: "Personal support should follow the person's preferences, respect privacy and move at a comfortable pace.",
  },
  {
    icon: ShieldCheck,
    title: "Confidence and safety",
    text: "Families often want to understand screening, qualifications, supervision and how concerns are handled.",
  },
  {
    icon: MessageCircle,
    title: "Clear communication",
    text: "Agree on who to contact, how updates are shared and how the person receiving care is included.",
  },
  {
    icon: Clock3,
    title: "A schedule that fits",
    text: "Talk through visit times, consistency, cancellations and options if routines or support needs change.",
  },
  {
    icon: House,
    title: "Respect for home",
    text: "A good visit takes account of the person's space, household habits and the way they like things done.",
  },
  {
    icon: Users,
    title: "A team approach",
    text: "With consent, involve family or other trusted people in planning and communicating about support.",
  },
];

const TestimonialsSection = ({ limit }: { limit?: number }) => {
  const shown = limit ? priorities.slice(0, limit) : priorities;
  return (
    <section className="animate-section border-b border-border bg-card py-24">
      <div className="container">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="section-label">Choosing home support</p>
            <h2 className="section-title mt-5 max-w-2xl">
              The details that help care feel right.
            </h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {shown.map(({ icon: Icon, title, text }) => (
            <article key={title} className="theme-card motion-hover min-h-[220px] p-7 transition-colors hover:bg-secondary/40">
              <Icon size={22} strokeWidth={1.5} className="text-primary" />
              <h3 className="mt-6 text-xl text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-xs leading-5 text-muted-foreground">
          These are general considerations, not client testimonials or a
          representation of specific care outcomes. Ask questions and decide
          what matters most for your situation.
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;