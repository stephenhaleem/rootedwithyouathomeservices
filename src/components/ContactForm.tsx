import { ArrowRight, Mail, Phone } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import {
  contactEmail,
  contactEmailHref,
  contactPhone,
  contactPhoneHref,
  submitContactForm,
} from "@/lib/contact";

const field =
  "h-12 w-full rounded-md border border-input bg-card px-3.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";
const lab = "mb-2 block text-[13px] font-medium text-foreground";

const ContactForm = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", "Care conversation request");
    formData.append("formType", "care-request");
    setSubmitting(true);

    try {
      await submitContactForm(formData);
      toast({
        title: "Request sent",
        description: "Our care team will be in touch.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Unable to send your request",
        description:
          error instanceof Error
            ? `${error.message} Please try again or email ${contactEmail}.`
            : `Please try again or email ${contactEmail}.`,
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="section-pattern pattern-dots bg-[#334534] py-24 text-white">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 md:px-20 lg:grid-cols-2">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-white/80">
            The next step can be simple
          </p>
          <h2 className="mt-5 max-w-[480px] text-4xl leading-tight text-white md:text-[52px]">
            Talk to a care coordinator. Ask your questions.
          </h2>
          <p className="mt-6 max-w-[500px] text-[17px] leading-8 text-white/85">
            Talk through what kind of help might fit your home and get answers
            to the questions on your mind.
          </p>
          <div className="mt-8 space-y-3 text-[17px]">
            <a href={contactPhoneHref} className="flex items-center gap-3">
              <Phone size={18} strokeWidth={1.4} /> {contactPhone}
            </a>
            <a href={contactEmailHref} className="flex items-center gap-3">
              <Mail size={18} strokeWidth={1.4} /> {contactEmail}
            </a>
          </div>
        </div>
        <form
          onSubmit={submit}
          className="rounded-xl bg-card p-8 text-foreground"
        >
          <h3 className="font-serif text-[28px]">
            Let's arrange a care conversation
          </h3>
          <p className="mt-2 text-xs text-muted-foreground">
            Your request will be sent to our care team.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <label className={lab} htmlFor="contact-name">Your name</label>
              <input id="contact-name" name="name" className={field} placeholder="Full name" required />
            </div>
            <div>
              <label className={lab} htmlFor="contact-phone">Phone number</label>
              <input
                id="contact-phone"
                name="phone"
                className={field}
                type="tel"
                placeholder="Your phone number"
              />
            </div>
            <div className="sm:col-span-2">
              <label className={lab} htmlFor="contact-email">Email address</label>
              <input
                id="contact-email"
                name="email"
                className={field}
                type="email"
                placeholder="you@example.ca"
                required
              />
            </div>
            <div className="relative sm:col-span-2">
              <label className={lab} htmlFor="contact-support-for">I'm exploring support for...</label>
              <select
                id="contact-support-for"
                name="supportFor"
                className={`${field} appearance-none text-muted-foreground`}
                defaultValue=""
              >
                <option value="" disabled>
                  Please choose
                </option>
                <option>Myself</option>
                <option>A parent</option>
                <option>A partner</option>
                <option>Someone else</option>
              </select>
              <ChevronDown
                size={16}
                className="pointer-events-none absolute bottom-4 right-4"
              />
            </div>
            <label className="flex items-center gap-3 text-[11px] text-muted-foreground sm:col-span-2">
              <input
                type="checkbox"
                name="consent"
                value="yes"
                className="h-4 w-4 rounded border-input"
                required
              />
              I agree to be contacted about my enquiry. Please don't include
              medical or sensitive information.
            </label>
          </div>
          <div className="mt-6 flex items-center justify-between gap-4">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-4 rounded-md bg-primary px-6 py-4 text-sm font-medium text-white hover:bg-primary/90 disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Request a care conversation"}{" "}
              <ArrowRight size={16} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
