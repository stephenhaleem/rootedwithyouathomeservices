import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, ChevronDown, Menu, Phone } from "lucide-react";
import { contactPhone, contactPhoneHref } from "@/lib/contact";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
    <img
      src="/logo-96.png"
      alt="Caring Hands Elder Care emblem"
      className="h-10 w-10 shrink-0 rounded-full border border-primary/60 bg-background object-contain shadow-sm sm:h-12 sm:w-12"
      width="96"
      height="96"
      decoding="async"
    />
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

  useEffect(() => {
    if (!open) setAboutOpen(false);
  }, [open]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
    <header className="sticky top-0 z-50 px-3 pt-[calc(env(safe-area-inset-top)+0.5rem)] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-[env(safe-area-inset-top)] before:bg-primary before:content-[''] sm:px-5 sm:pt-[calc(env(safe-area-inset-top)+0.75rem)]">
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

          <SheetTrigger asChild>
            <button
              type="button"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-foreground transition-colors hover:bg-secondary/60 lg:hidden"
              aria-label="Open navigation"
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              <Menu size={21} />
            </button>
          </SheetTrigger>

        </div>
      </div>
    </header>
    <SheetContent
      id="mobile-navigation"
      side="left"
      className="h-dvh w-full max-w-none overflow-y-auto overscroll-contain border-r-0 px-6 pb-[calc(env(safe-area-inset-bottom)+1.5rem)] pt-[calc(env(safe-area-inset-top)+1rem)] sm:max-w-none"
    >
      <SheetTitle className="sr-only">Rooted With You navigation</SheetTitle>
      <div className="flex min-h-[68px] items-center justify-between gap-4 border-b border-border pb-4">
        <Logo />
      </div>

      <nav
        className="flex min-h-[calc(100dvh-14rem)] flex-col pt-8"
        aria-label="Mobile primary"
      >
        <button
          type="button"
          onClick={() => setAboutOpen((isOpen) => !isOpen)}
          className="flex w-full items-center justify-between border-b border-border py-5 text-left font-serif text-3xl text-foreground"
          aria-expanded={aboutOpen}
        >
          About us
          <ChevronDown
            size={20}
            className={`transition-transform ${aboutOpen ? "rotate-180" : ""}`}
          />
        </button>
        {aboutOpen && (
          <div className="grid gap-1 border-b border-border py-3 pl-3">
            {aboutLinks.map((item) => (
              <Link
                key={item.label}
                to={`/about${item.hash}`}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-primary"
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
            onClick={() => setOpen(false)}
            className="border-b border-border py-5 font-serif text-3xl text-foreground transition-colors hover:text-primary"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Link
        to="/contact"
        onClick={() => setOpen(false)}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-4 text-base font-medium text-white transition-colors hover:bg-primary/90"
      >
        Talk to our team <ArrowRight size={18} />
      </Link>
      <a
        href={contactPhoneHref}
        className="mt-5 block text-center text-sm text-muted-foreground"
      >
        {contactPhone}
      </a>
    </SheetContent>
    </Sheet>
  );
};

export default Navbar;
