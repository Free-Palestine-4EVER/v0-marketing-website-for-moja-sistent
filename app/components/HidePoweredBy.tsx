"use client";

import { useEffect } from "react";

export function HidePoweredBy() {
  useEffect(() => {
    const checkAndHidePoweredBy = () => {
      const widget = document.querySelector("elevenlabs-convai");

      if (widget?.shadowRoot) {
        const allElements = widget.shadowRoot.querySelectorAll("*");

        allElements.forEach((el) => {
          if (el.textContent?.toLowerCase().includes("powered by")) {
            (el as HTMLElement).style.display = "none";
            console.log("Hidden powered by element:", el);
          }
        });
      }
    };

    // Check immediately
    checkAndHidePoweredBy();

    // Also check after widget loads (with delay)
    const timer = setTimeout(checkAndHidePoweredBy, 1000);

    // Watch for DOM changes
    const observer = new MutationObserver(checkAndHidePoweredBy);
    const widget = document.querySelector("elevenlabs-convai");

    if (widget) {
      observer.observe(widget, { childList: true, subtree: true });
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return null;
}
