import { MapPin, Phone, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { contactPhone, contactPhoneHref } from "@/lib/contact";

const serviceAreas = [
  "Calgary",
  "Edmonton",
  "Red Deer",
  "Lethbridge",
  "Medicine Hat",
  "Grande Prairie",
  "Airdrie",
  "Spruce Grove",
  "Okotoks",
  "Fort McMurray",
  "Lloydminster",
  "Brooks",
];

const FindUsSection = () => (
  <section
    className="animate-section section-pattern pattern-contours border-b border-border bg-secondary/35 py-20 sm:py-24"
    id="service-areas"
  >
    <div className="container">
      <div className="theme-card p-6 sm:p-9">
        <p className="section-label flex items-center gap-2">
          <MapPin size={12} /> Service coverage
        </p>
        <div className="mt-4 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h2 className="section-title">Care where you call home.</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
              Our team travels to clients. There is no office to visit. Contact
              us to check availability in your community.
            </p>
          </div>
          <a
            href={contactPhoneHref}
            className="inline-flex items-center gap-2 self-start rounded-md bg-primary px-5 py-3 text-sm font-medium text-white hover:bg-primary/90 md:self-auto"
          >
            <Phone size={15} /> {contactPhone}
          </a>
        </div>
        <div className="mt-8 border-t border-border pt-6">
          <p className="mb-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
            <CheckCircle2 size={13} /> Alberta communities
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className="h-1.5 w-1.5 shrink-0 bg-primary/60" />
                {area}
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Outside these areas?{" "}
            <Link
              to="/contact"
              className="font-medium text-primary underline underline-offset-2"
            >
              Ask us about coverage
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default FindUsSection;
