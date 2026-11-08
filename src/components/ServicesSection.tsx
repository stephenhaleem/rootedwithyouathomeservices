import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Personal care",
    desc: "Everyday personal support, provided with sensitivity and respect for your comfort, dignity and independence.",
    details: [
      "Bathing and personal hygiene",
      "Dressing and grooming",
      "Morning and evening routines",
    ],
  },
  {
    title: "Dementia care",
    desc: "Thoughtful, reassuring support for people living with dementia, with an emphasis on familiarity, patience and meaningful daily experiences.",
    details: [
      "Familiar routines and activities",
      "Companionship and reassurance",
      "Family involvement in planning",
    ],
  },
  {
    title: "Respite care",
    desc: "Short-term home support that allows family caregivers to take a break, attend to other responsibilities or simply find time to rest.",
    details: [
      "Temporary caregiving support",
      "Assistance with everyday routines",
      "Companionship during visits",
    ],
  },
  {
    title: "Meal preparation",
    desc: "Help with planning and preparing everyday meals, taking individual tastes, preferences and dietary requirements into consideration.",
    details: [
      "Meal planning and preparation",
      "Personal dietary preferences",
      "Light kitchen assistance",
    ],
  },
  {
    title: "Companionship",
    desc: "Meaningful company, conversation and shared activities that bring a sense of connection and enjoyment to everyday life.",
    details: [
      "Friendly conversation",
      "Shared hobbies and activities",
      "Social and emotional connection",
    ],
  },
  {
    title: "Overnight care",
    desc: "Support and reassurance during the night, helping individuals feel more comfortable with their nighttime routines.",
    details: [
      "Nighttime assistance",
      "Bedtime and morning routines",
      "Reassurance and companionship",
    ],
  },
];

interface ServicesSectionProps {
  limit?: number;
}

const ServicesSection = ({ limit }: ServicesSectionProps) => {
  const isPreview = typeof limit === "number";

  const visibleServices = isPreview
    ? services.slice(0, Math.max(0, limit))
    : services;

  return (
    <section
      aria-labelledby="services-heading"
      className="bg-background py-20 md:py-28"
    >
      <div className="container max-w-6xl">
        {/* SECTION INTRODUCTION */}
        <div className="grid gap-8 border-b border-border pb-12 md:grid-cols-12 md:gap-12 md:pb-16">
          <div className="md:col-span-6">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Our services
            </p>

            <h2
              id="services-heading"
              className="mt-5 max-w-xl font-serif text-4xl font-normal leading-[1.15] tracking-tight text-foreground sm:text-5xl"
            >
              A little help can go a long way.
            </h2>
          </div>

          <div className="md:col-span-5 md:col-start-8 md:self-end">
            <p className="max-w-md text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
              From the practical parts of daily life to moments of companionship
              and reassurance, explore the ways support can make life at home
              more comfortable.
            </p>
          </div>
        </div>

        {/* SERVICES LIST */}
        <div className="divide-y divide-border">
          {visibleServices.map((service, index) => (
            <article
              key={service.title}
              className="grid gap-5 py-10 md:grid-cols-12 md:gap-8 md:py-12"
            >
              {/* SERVICE NUMBER */}
              <div className="md:col-span-1">
                <span className="text-xs font-medium tracking-wider text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* SERVICE TITLE */}
              <div className="md:col-span-4">
                <h3 className="max-w-xs font-serif text-3xl font-normal leading-tight tracking-tight text-foreground md:text-[34px]">
                  {service.title}
                </h3>
              </div>

              {/* DESCRIPTION AND DETAILS */}
              <div className="md:col-span-7 md:col-start-6">
                <p className="max-w-xl text-[15px] leading-8 text-muted-foreground md:text-base">
                  {service.desc}
                </p>

                <div className="mt-7">
                  <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    How we can help
                  </p>

                  <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-3 text-sm leading-6 text-foreground/75"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[11px] h-[3px] w-[3px] shrink-0 rounded-full bg-foreground/50"
                        />

                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* HOMEPAGE ONLY: VIEW ALL SERVICES */}
        {isPreview && (
          <div className="flex flex-col gap-6 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-sm leading-7 text-muted-foreground">
              Every person's needs are different. Explore the full range of
              support available through Rooted With You.
            </p>

            <Link
              to="/services"
              className="group inline-flex w-fit items-center gap-3 border-b border-foreground pb-2 text-sm font-medium text-foreground transition-opacity hover:opacity-65"
            >
              View all services
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
