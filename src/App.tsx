import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import Lenis from "lenis";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteSeo from "@/components/SiteSeo";
import CookieConsent from "@/components/CookieConsent";

const Index = lazy(() => import("./pages/Index.tsx"));
const AboutPage = lazy(() => import("./pages/AboutPage.tsx"));
const ServicesPage = lazy(() => import("./pages/ServicesPage.tsx"));
const TestimonialsPage = lazy(() => import("./pages/TestimonialsPage.tsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.tsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.tsx"));
const TermsOfService = lazy(() => import("./pages/TermsOfService.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const SmoothScroll = () => {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (reducedMotion || isTouch) return;

    const lenis = new Lenis({ autoRaf: true, lerp: 0.05 });
    return () => lenis.destroy();
  }, []);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SmoothScroll />
        <SiteSeo />
        <Suspense
          fallback={
            <main
              className="min-h-screen bg-background"
              aria-busy="true"
              aria-label="Loading page"
            />
          }
        >
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
