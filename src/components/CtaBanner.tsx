import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactPhoneHref } from "@/lib/contact";

const CtaBanner = () => (
  <section className="animate-section section-pattern pattern-contours bg-primary py-20 text-primary-foreground">
    <div className="container grid items-end gap-10 md:grid-cols-[1fr_auto]">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-70">Start with a conversation</p>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl"><span className="animate-word">Let’s build the right</span> <span className="animate-word text-secondary [animation-delay:120ms]">care plan, together.</span></h2>
        <p className="mt-5 max-w-xl text-sm leading-6 opacity-80">Book a free, no-obligation assessment with our care team. We are available to answer questions 24 hours a day.</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button asChild variant="secondary" size="lg" className="rounded-md transition-colors hover:bg-secondary/80"><Link to="/contact">Book assessment <ArrowRight /></Link></Button>
        <Button asChild size="lg" className="rounded-md border border-primary-foreground/30 bg-transparent transition-colors hover:bg-primary-foreground/10"><a href={contactPhoneHref}><Phone /> Call us</a></Button>
      </div>
    </div>
  </section>
);

export default CtaBanner;