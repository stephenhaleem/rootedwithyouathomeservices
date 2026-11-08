import trustImage from "@/assets/female-nurse-doing-checkup-consultation-with-old-patient-hospital-waiting-area-having-walking-frame-medical-assistant-writing-clinical-report-appointment-form-health-center.jpg";

const steps = [
  {
    title: "Listen first",
    text: "Make space for your wishes, culture and way of life.",
  },
  {
    title: "Plan together",
    text: "Include you, and the people you choose, in care conversations.",
  },
  {
    title: "Keep the conversation open",
    text: "Revisit support as your preferences and needs change.",
  },
];

const TrustSection = () => (
  <section className="section-pattern pattern-dots bg-[#e6ebde] py-24">
    <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 md:px-20 lg:grid-cols-2">
      <img
        src={trustImage}
        alt="A healthcare worker consulting with an older adult"
        loading="lazy"
        className="h-[420px] w-full rounded-md object-cover lg:max-w-[550px]"
      />
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-primary">
          The person comes first
        </p>
        <h2 className="mt-4 text-4xl leading-tight text-foreground md:text-[44px]">
          Good support begins with getting to know you.
        </h2>
        <p className="mt-6 text-[15px] leading-7 text-muted-foreground">
          Your story, your preferences, your small daily rituals. These are the
          starting points for the kind of dependable in-home support we imagine
          at Rooted With You.
        </p>
        <div className="mt-6">
          {steps.map((s) => (
            <div key={s.title} className="border-t border-primary/15 py-3.5">
              <h3 className="font-sans text-sm font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TrustSection;
