import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { openCookieSettings } from "@/lib/cookie-preferences";

const STORAGE_KEY = "rooted-cookie-consent";

type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  personalization: boolean;
};

const readPreferences = (): CookiePreferences | null => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return null;

    const parsed: unknown = JSON.parse(saved);
    if (
      typeof parsed === "object" &&
      parsed !== null &&
      "analytics" in parsed &&
      "personalization" in parsed &&
      typeof parsed.analytics === "boolean" &&
      typeof parsed.personalization === "boolean"
    ) {
      return {
        necessary: true,
        analytics: parsed.analytics,
        personalization: parsed.personalization,
      };
    }
  } catch (error) {
    console.warn("Unable to read cookie preferences.", error);
  }
  return null;
};

const CookieConsent = () => {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(
    readPreferences,
  );
  const [customizing, setCustomizing] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [personalization, setPersonalization] = useState(false);

  useEffect(() => {
    const openSettings = () => {
      const current = preferences ?? readPreferences();
      setAnalytics(current?.analytics ?? false);
      setPersonalization(current?.personalization ?? false);
      setCustomizing(true);
    };
    window.addEventListener("rooted-open-cookie-settings", openSettings);
    return () =>
      window.removeEventListener("rooted-open-cookie-settings", openSettings);
  }, [preferences]);

  const savePreferences = (next: CookiePreferences) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch (error) {
      console.warn("Unable to save cookie preferences.", error);
    }
    setPreferences(next);
    setCustomizing(false);
  };

  if (preferences && !customizing) return null;

  return (
    <aside
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-card p-5 shadow-[0_-8px_30px_-18px_hsl(24_22%_20%/0.35)] sm:p-6"
      role="region"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-lg text-foreground">Your cookie choices</h2>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            Necessary storage keeps the site working. With your permission, we
            may also use optional analytics or personalization cookies.{" "}
            <Link to="/privacy" className="text-primary underline underline-offset-2">
              Privacy details
            </Link>
          </p>
          {customizing && (
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm text-foreground">
              <label className="flex items-center gap-2">
                <input type="checkbox" checked disabled />
                Necessary (always on)
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(event) => setAnalytics(event.target.checked)}
                />
                Analytics
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={personalization}
                  onChange={(event) => setPersonalization(event.target.checked)}
                />
                Personalization
              </label>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          {customizing ? (
            <>
              <button
                type="button"
                onClick={() =>
                  savePreferences({ necessary: true, analytics, personalization })
                }
                className="rounded-md bg-primary px-4 py-3 text-sm font-medium text-white hover:bg-primary/90"
              >
                Save choices
              </button>
              <button
                type="button"
                onClick={() =>
                  savePreferences({
                    necessary: true,
                    analytics: false,
                    personalization: false,
                  })
                }
                className="rounded-md border border-border px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary/40"
              >
                Reject optional
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() =>
                  savePreferences({
                    necessary: true,
                    analytics: false,
                    personalization: false,
                  })
                }
                className="rounded-md border border-border px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary/40"
              >
                Reject optional
              </button>
              <button
                type="button"
                onClick={() => setCustomizing(true)}
                className="rounded-md border border-border px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary/40"
              >
                Customize
              </button>
              <button
                type="button"
                onClick={() =>
                  savePreferences({
                    necessary: true,
                    analytics: true,
                    personalization: true,
                  })
                }
                className="rounded-md bg-primary px-4 py-3 text-sm font-medium text-white hover:bg-primary/90"
              >
                Accept all
              </button>
            </>
          )}
        </div>
      </div>
    </aside>
  );
};

export default CookieConsent;
