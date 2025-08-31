declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

let initialized = false;

export function initGA(measurementId?: string) {
  if (initialized) return;
  const GA_ID = measurementId || (import.meta as any).env?.VITE_GA_ID || "G-XXXXXXXXXX";

  // If GA script or gtag already present (e.g., from index.html), just mark initialized
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    initialized = true;
    return;
  }

  if (!document.getElementById("ga4-script")) {
    const script = document.createElement("script");
    script.async = true;
    script.id = "ga4-script";
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);
  }

  if (!window.dataLayer) window.dataLayer = [];
  // Define gtag and configure
  window.gtag = function gtag() {
    window.dataLayer.push(arguments as any);
  } as any;

  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
  initialized = true;
}

export function trackEvent(event: string, params?: Record<string, any>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, params || {});
}
