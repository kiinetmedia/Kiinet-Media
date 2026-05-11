/**
 * Calendly popup helper.
 *
 * The Calendly widget script is loaded asynchronously from index.html.
 * `openCalendly()` triggers the centered popup with our brand colours
 * baked in. If the script hasn't finished loading yet (rare but possible
 * on a cold load), we fall back to opening Calendly directly so the user
 * never sees a dead button.
 */

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: {
        url: string;
        pageSettings?: {
          backgroundColor?: string;
          primaryColor?: string;
          textColor?: string;
          hideEventTypeDetails?: boolean;
          hideLandingPageDetails?: boolean;
          hideGdprBanner?: boolean;
        };
        prefill?: Record<string, string>;
        utm?: Record<string, string>;
      }) => void;
      closePopupWidget?: () => void;
    };
  }
}

const CALENDLY_URL = "https://calendly.com/kiinetmedia/30min";

const POPUP_OPTS = {
  url: CALENDLY_URL,
  pageSettings: {
    backgroundColor: "0a0a0a",
    primaryColor: "ffffff",
    textColor: "f5f5f7",
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    hideGdprBanner: true,
  },
};

export function openCalendly() {
  if (typeof window === "undefined") return;
  if (window.Calendly?.initPopupWidget) {
    window.Calendly.initPopupWidget(POPUP_OPTS);
    return;
  }
  // Script not loaded yet — wait briefly, then retry once before falling back.
  let waited = 0;
  const interval = window.setInterval(() => {
    waited += 100;
    if (window.Calendly?.initPopupWidget) {
      window.clearInterval(interval);
      window.Calendly.initPopupWidget(POPUP_OPTS);
    } else if (waited >= 1500) {
      window.clearInterval(interval);
      // Last-resort fallback so the user always lands on a booking page
      window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    }
  }, 100);
}
