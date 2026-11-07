import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BookOpen,
  Check,
  Coffee,
  Flower2,
  HandHeart,
  Sun,
  TreePine,
} from "lucide-react";

const services = [
  {
    title: "Personal care",
    icon: HandHeart,
    desc: "Help with bathing, dressing, grooming and daily routines in the comfort of your own home.",
    details: [
      "Bathing and grooming support",
      "Dressing and morning routines",
      "Support shaped around your day",
    ],
  },
  {
    title: "Dementia care",
    icon: Flower2,
    desc: "Gentle, reassuring support for people living with dementia and those who care for them at home.",
    details: [
      "Gentle, familiar daily rhythms",
      "Meaningful activities and connection",
      "Family involvement in planning",
    ],
  },
  {
    title: "Respite care",
    icon: Sun,
    desc: "A short-term break for family caregivers, with trusted help at home.",
    details: [
      "Time to settle in and feel at ease",
      "Everyday meals and companionship",
      "A supported introduction to care",
    ],
  },
  {
    title: "Meal preparation",
    icon: BookOpen,
    desc: "Healthy meal planning and preparation that respects your tastes, dietary needs and kitchen.",
    details: [
      "Healthy meal planning and prep",
      "Dietary needs and preferences",
      "Light kitchen support",
    ],
  },
  {
    title: "Companionship",
    icon: Coffee,
    desc: "Social connection, conversation and emotional support that helps days feel more engaging.",
    details: [
      "Conversation and social connection",
      "Shared activities and interests",
      "Emotional support and reassurance",
    ],
  },
  {
    title: "Overnight care",
    icon: TreePine,
    desc: "Support through the night so you can rest with confidence and wake up feeling supported.",
    details: [
      "Nighttime reassurance and safety",
      "Help with nighttime routines",
      "Support when you need it most",
    ],
  },
];

const ServicesSection = ({ limit }: { limit?: number }) => (
  <section className="bg-background py-24">
    <div className="mx-auto max-w-[1440px] px-6 md:px-20">
      <div className="grid gap-6 md:grid-cols-2 md:items-start">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-primary">
            Support tailored to home
          </p>
          <h2 className="mt-4 max-w-[480px] text-4xl leading-tight text-foreground md:text-[44px]">
            Six ways we can help.
          </h2>
        </div>
        <p className="max-w-[400px] text-[15px] leading-7 text-muted-foreground md:pt-8">
          Find practical help for daily routines, shared activities and
          overnight reassurance.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {(limit ? services.slice(0, limit) : services).map(
          ({ title, icon: Icon, desc, details }) => (
            <article
              key={title}
              className="rounded-lg border border-border bg-card p-7"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e6ebde] text-primary">
                <Icon size={18} strokeWidth={1.4} />
              </span>
              <h3 className="mt-6 text-2xl text-foreground">{title}</h3>
              <p className="mt-5 text-[15px] leading-7 text-muted-foreground">
                {desc}
              </p>
              <ul className="mt-5 space-y-2.5">
                {details.map((d) => (
                  <li
                    key={d}
                    className="flex items-center gap-2.5 text-[13px] text-muted-foreground"
                  >
                    <Check size={13} className="text-foreground/70" />
                    {d}
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                className="mt-7 inline-flex items-center gap-2 text-[13px] font-medium text-primary underline underline-offset-4"
              >
                Explore {title.toLowerCase()} <ArrowUpRight size={13} />
              </Link>
            </article>
          ),
        )}
      </div>
    </div>
  </section>
);

export default ServicesSection;
