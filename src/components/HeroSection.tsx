import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg"; // swap for your exported Figma hero image

const HeroSection = () => (
  <section className="border-b border-border bg-background pb-24 pt-8">
    <div className="mx-auto grid max-w-[1440px] items-start gap-12 px-6 md:px-20 lg:grid-cols-2">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-primary">
          In-home support across Alberta
        </p>
        <h1 className="mt-7 text-[clamp(2.5rem,8vw,4.25rem)] leading-[1.08] text-foreground">
          Personal care.
          <br className="hidden sm:block" />
          Dependable support.
          <br className="hidden sm:block" />
          <span className="text-primary">At home.</span>
        </h1>
        <p className="mt-9 max-w-[480px] text-[17px] leading-8 text-muted-foreground">
          Licensed healthcare aides provide dependable, one-to-one support so
          loved ones can live safely, confidently and comfortably in their own
          home.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-md bg-primary px-5 py-4 text-sm font-medium text-white hover:bg-primary/90"
          >
            Talk to a care coordinator <ArrowRight size={16} />
          </Link>
          <Link
            to="/services"
            className="rounded-md border border-border px-6 py-4 text-sm font-medium text-foreground hover:bg-white/60"
          >
            Explore our services
          </Link>
        </div>
      </div>

      <div className="relative">
        <img
          src={heroImage}
          alt="A healthcare aide enjoying tea with an older adult in a garden"
          className="h-[500px] w-full rounded-t-[260px] rounded-b-md object-cover md:h-[540px]"
        />
        <div className="absolute bottom-[-28px] left-0 w-[240px] rounded-md bg-card p-5 shadow-sm sm:-left-6">
          <p className="font-serif text-xl leading-snug text-foreground">
            Care that fits your home.
          </p>
          <p className="mt-3 text-xs leading-5 text-muted-foreground">
            Practical help with everyday routines, companionship and meals.
          </p>
        </div>
        <p className="absolute -bottom-10 left-8 text-[10px] text-muted-foreground">
          Support that stays close to home.
        </p>
      </div>
    </div>
  </section>
);

export default HeroSection;
