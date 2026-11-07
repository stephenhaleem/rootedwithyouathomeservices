import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import CookieConsent from "@/components/CookieConsent";
import { openCookieSettings } from "@/lib/cookie-preferences";

const renderConsent = () =>
  render(
    <MemoryRouter>
      <CookieConsent />
    </MemoryRouter>,
  );

afterEach(() => {
  window.localStorage.clear();
});

describe("CookieConsent", () => {
  it("stores a rejection and keeps the banner dismissed", () => {
    renderConsent();

    fireEvent.click(screen.getByRole("button", { name: "Reject optional" }));

    expect(window.localStorage.getItem("rooted-cookie-consent")).toBe(
      JSON.stringify({
        necessary: true,
        analytics: false,
        personalization: false,
      }),
    );
    expect(screen.queryByRole("region", { name: "Cookie preferences" })).toBeNull();
  });

  it("lets visitors customize preferences and reopen settings", () => {
    renderConsent();

    fireEvent.click(screen.getByRole("button", { name: "Customize" }));
    fireEvent.click(screen.getByLabelText("Analytics"));
    fireEvent.click(screen.getByRole("button", { name: "Save choices" }));

    expect(JSON.parse(window.localStorage.getItem("rooted-cookie-consent")!)).toEqual({
      necessary: true,
      analytics: true,
      personalization: false,
    });

    act(() => {
      openCookieSettings();
    });
    expect(screen.getByLabelText("Analytics")).toBeChecked();
  });
});
