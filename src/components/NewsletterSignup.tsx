import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { contactEmail, submitContactForm } from "@/lib/contact";

const NewsletterSignup = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", "Newsletter subscription");
    setSubmitting(true);

    try {
      await submitContactForm(formData);
      toast({
        title: "Signup request sent",
        description: "Thanks for your interest in Rooted With You updates.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Unable to subscribe",
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
    <div>
      <p className="text-sm font-semibold text-foreground">Stay connected</p>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        Get occasional updates and practical care tips by email.
      </p>
      <form onSubmit={submit} className="mt-4 grid gap-3">
        <input type="hidden" name="formType" value="newsletter-subscription" />
        <label className="sr-only" htmlFor="newsletter-email">Your email address</label>
        <input
          id="newsletter-email"
          name="email"
          className="h-11 w-full rounded-md border border-input bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          type="email"
          placeholder="Your email address"
          autoComplete="email"
          required
        />
        <label className="flex items-start gap-2 text-xs leading-5 text-muted-foreground">
          <input
            className="mt-1 h-4 w-4 shrink-0"
            type="checkbox"
            name="newsletterConsent"
            value="yes"
            required
          />
          I agree to receive email updates. I can unsubscribe at any time.
        </label>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex w-fit items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary/90 disabled:opacity-60"
        >
          {submitting ? "Subscribing…" : "Subscribe"} <ArrowRight size={16} />
        </button>
        <p className="text-xs text-muted-foreground">
          Your email address will be sent to our team for newsletter updates.
        </p>
      </form>
    </div>
  );
};

export default NewsletterSignup;
