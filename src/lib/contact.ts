export const contactPhone = "+1 587 433 9921";
export const contactPhoneHref = "tel:+15874339921";
export const contactEmail = "support@rootedwithyou.ca";
export const contactEmailHref = `mailto:${contactEmail}`;

const formspreeEndpoint = "https://formspree.io/f/xaeezkdo";

export const submitContactForm = async (formData: FormData) => {
  const response = await fetch(formspreeEndpoint, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Form submission failed (${response.status}).`);
  }
};
