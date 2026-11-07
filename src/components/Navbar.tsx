import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  Phone,
  Sprout,
  X,
} from "lucide-react";
import { contactPhone, contactPhoneHref } from "@/lib/contact";

const aboutLinks = [
  {
    label: "Our character",
    description: "The values that shape the way we think about care.",
    hash: "#our-character",
  },
  {
    label: "Our experience",
    description: "What a thoughtful, home-centred approach can look like.",
    hash: "#our-experience",
  },
  {
    label: "Who we are",
    description: "Get to know Rooted With You and what matters to us.",
    hash: "#who-we-are",
  },
];

const navLinks = [
  { label: "Services", path: "/services" },
  { label: "Choosing care", path: "/testimonials" },
  { label: "For families", path: "/contact" },
];

export const Logo = () => (
  <Link
    to="/"
    className="flex min-w-0 items-center gap-2.5 sm:gap-3"
    aria-label="Rooted With You home"
  >
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/60 text-primary sm:h-10 sm:w-10">
      <Sprout size={18} strokeWidth={1.4} />
    </span>
    <span className="leading-none">
      <span className="block whitespace-nowrap font-serif text-[19px] text-foreground sm:text-[22px]">
        Rooted With You
      </span>
      <span className="mt-1 block whitespace-nowrap text-[7px] font-medium uppercase tracking-[0.08em] text-muted-foreground sm:text-[8px]">
        In-home healthcare aide support
      </span>
    </span>
  </Link>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    setOpen(false);
    setAboutOpen(false);
    if (hash) {
      requestAnimationFrame(() => {
        document
          .getElementById(hash.slice(1))
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [pathname, hash]);

  useEffect(() => {
    if (!aboutOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setAboutOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [aboutOpen]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-[calc(env(safe-area-inset-top)+0.5rem)] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-[env(safe-area-inset-top)] before:bg-primary before:content-[''] sm:px-5 sm:pt-[calc(env(safe-area-inset-top)+0.75rem)]">
      <div className="mx-auto mb-2 flex max-w-[1440px] justify-center text-primary-foreground sm:justify-end">
        <a
          href={contactPhoneHref}
          className="inline-flex min-h-8 items-center gap-2 rounded-md bg-primary px-3 py-1 text-xs font-medium tracking-wide transition-colors hover:bg-primary/90 sm:px-4"
          aria-label={`Call us at ${contactPhone}`}
        >
          <Phone size={13} aria-hidden="true" />
          <span>Call us</span>
          <span>{contactPhone}</span>
        </a>
      </div>

      <div className="relative mx-auto max-w-[1440px] rounded-xl border border-border/80 bg-background/85 px-4 shadow-lg backdrop-blur-xl supports-[backdrop-filter]:bg-background/70 sm:px-6 lg:rounded-[1.25rem]">
        <div className="flex h-[68px] items-center justify-between gap-3">
          <Logo />

          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="Primary"
          >
            <div className="relative">
              <button
                type="button"
                aria-expanded={aboutOpen}
                aria-controls="about-mega-menu"
                onClick={() => setAboutOpen((isOpen) => !isOpen)}
                className={`inline-flex items-center gap-1.5 py-3 text-sm transition-colors hover:text-primary ${
                  pathname === "/about" ? "text-primary" : "text-foreground/80"
                }`}
              >
                About us
                <ChevronDown
                  size={15}
                  className={`transition-transform ${aboutOpen ? "rotate-180" : ""}`}
                />
              </button>
              {aboutOpen && (
                <div
                  id="about-mega-menu"
                  className="absolute left-1/2 top-[calc(100%+0.75rem)] z-50 grid w-[min(42rem,calc(100vw-2rem))] -translate-x-1/2 gap-5 rounded-lg border border-border bg-background/95 p-5 shadow-xl backdrop-blur-xl sm:grid-cols-[0.8fr_1.2fr] sm:p-6"
                >
                  <div className="rounded-md bg-secondary/60 p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                      Rooted With You
                    </p>
                    <h2 className="mt-3 font-serif text-2xl text-foreground">
                      Care that starts with people.
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Learn about the values and approach behind our in-home
                      support.
                    </p>
                    <Link
                      to="/about"
                      onClick={() => setAboutOpen(false)}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      About us <ArrowRight size={15} />
                    </Link>
                  </div>
                  <div className="grid content-center gap-1">
                    {aboutLinks.map((item) => (
                      <Link
                        key={item.label}
                        to={`/about${item.hash}`}
                        onClick={() => setAboutOpen(false)}
                        className="rounded-md px-4 py-3 transition-colors hover:bg-secondary/60"
                      >
                        <span className="block text-sm font-medium text-foreground">
                          {item.label}
                        </span>
                        <span className="mt-1 block text-xs leading-5 text-muted-foreground">
                          {item.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`text-sm transition-colors hover:text-primary ${
                  pathname === link.path ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90 xl:inline-flex"
          >
            Talk to our team <ArrowRight size={16} />
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-foreground transition-colors hover:bg-secondary/60 lg:hidden"
            onClick={() => setOpen((isOpen) => !isOpen)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {open && (
          <nav
            id="mobile-navigation"
            className="border-t border-border pb-4 pt-2 lg:hidden"
            aria-label="Mobile primary"
          >
            <button
              type="button"
              onClick={() => setAboutOpen((isOpen) => !isOpen)}
              className="flex w-full items-center justify-between border-b border-border py-3 text-left text-sm font-medium text-foreground"
              aria-expanded={aboutOpen}
            >
              About us
              <ChevronDown
                size={16}
                className={`transition-transform ${aboutOpen ? "rotate-180" : ""}`}
              />
            </button>
            {aboutOpen && (
              <div className="grid gap-1 border-b border-border py-2 pl-3">
                {aboutLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={`/about${item.hash}`}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="block border-b border-border py-3 text-sm text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
            >
              Talk to our team <ArrowRight size={16} />
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
