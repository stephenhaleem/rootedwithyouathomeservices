import { render, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import SiteSeo from "@/components/SiteSeo";

describe("SiteSeo", () => {
  it("sets route-specific metadata and structured data", async () => {
    render(
      <MemoryRouter initialEntries={["/services"]}>
        <SiteSeo />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(document.title).toBe(
        "In-Home Care Services in Alberta | Rooted With You",
      );
    });

    expect(
      document.querySelector<HTMLMetaElement>('meta[name="description"]')
        ?.content,
    ).toContain("Explore personal care");
    expect(
      document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href,
    ).toBe(`${window.location.origin}/services`);

    const schema = JSON.parse(
      document.querySelector("#rooted-with-you-structured-data")?.textContent ??
        "null",
    );
    expect(schema["@graph"]).toHaveLength(3);
    expect(schema["@graph"][0].areaServed.name).toBe("Alberta, Canada");
  });
});
