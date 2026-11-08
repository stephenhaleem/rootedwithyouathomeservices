import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { contactEmail, contactPhone } from "@/lib/contact";

const productionOrigin = "https://rootedwithyou.ca";

const pageMetadata: Record<
  string,
  { title: string; description: string; index?: boolean }
> = {
  "/": {
    title: "Home Care & In-Home Support in Alberta",
    description:
      "Explore respectful, personalized in-home support from Rooted With You. Learn about home care services for older adults and families across Alberta.",
  },
  "/about": {
    title: "About Rooted With You",
    description:
      "Learn about Rooted With You's person-centred approach to home care, the values behind our work, and how we support individuals and families.",
  },
  "/services": {
    title: "In-Home Care Services in Alberta",
    description:
      "Explore personal care, dementia care, respite, meal preparation, companionship, and overnight support from Rooted With You in Alberta.",
  },
  "/testimonials": {
    title: "Choosing Home Care",
    description:
      "Learn what to ask when choosing home care, from caregiver qualifications and communication to schedules, costs, and personal preferences.",
  },
  "/contact": {
    title: "Contact Rooted With You",
    description:
      "Talk with Rooted With You about in-home support in Alberta. Call, email, or send a care request to discuss your questions and needs.",
  },
  "/privacy": {
    title: "Privacy Policy",
    description:
      "Read the Rooted With You privacy policy to understand how information is collected, used, and protected.",
  },
  "/terms": {
    title: "Terms of Service",
    description:
      "Review the terms for using the Rooted With You website and home care services.",
  },
};

const updateMeta = (
  attribute: "name" | "property",
  key: string,
  content: string,
) => {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
};

const SiteSeo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const routePath =
      pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
    const page = pageMetadata[routePath] ?? {
      title: "Page Not Found",
      description: "The page you requested could not be found.",
      index: false,
    };
    const title = `${page.title} | Rooted With You`;
    const origin = import.meta.env.PROD
      ? productionOrigin
      : window.location.origin;
    const pageUrl = new URL(routePath, origin).href;
    const logoUrl = new URL("/logo-512.png", origin).href;

    document.title = title;
    updateMeta("name", "description", page.description);
    updateMeta("name", "robots", page.index === false ? "noindex, follow" : "index, follow");
    updateMeta("property", "og:type", "website");
    updateMeta("property", "og:site_name", "Rooted With You");
    updateMeta("property", "og:title", title);
    updateMeta("property", "og:description", page.description);
    updateMeta("property", "og:url", pageUrl);
    updateMeta("property", "og:image", logoUrl);
    updateMeta("property", "og:image:alt", "Rooted With You");
    updateMeta("property", "og:locale", "en_CA");
    updateMeta("name", "twitter:card", "summary_large_image");
    updateMeta("name", "twitter:title", title);
    updateMeta("name", "twitter:description", page.description);
    updateMeta("name", "twitter:image", logoUrl);

    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = pageUrl;

    const organizationId = `${origin}/#organization`;
    const websiteId = `${origin}/#website`;
    let structuredData = document.head.querySelector<HTMLScriptElement>(
      "#rooted-with-you-structured-data",
    );
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.id = "rooted-with-you-structured-data";
      structuredData.type = "application/ld+json";
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": organizationId,
          name: "Rooted With You",
          url: origin,
          logo: logoUrl,
          email: contactEmail,
          telephone: contactPhone,
          areaServed: {
            "@type": "AdministrativeArea",
            name: "Alberta, Canada",
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: contactEmail,
            telephone: contactPhone,
            availableLanguage: "English",
          },
        },
        {
          "@type": "WebSite",
          "@id": websiteId,
          name: "Rooted With You",
          url: origin,
          publisher: { "@id": organizationId },
          inLanguage: "en-CA",
        },
        {
          "@type": "WebPage",
          name: title,
          description: page.description,
          url: pageUrl,
          isPartOf: { "@id": websiteId },
          inLanguage: "en-CA",
        },
      ],
    });
  }, [pathname]);

  return null;
};

export default SiteSeo;
