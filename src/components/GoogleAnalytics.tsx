"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

// Public stream identifier for OpenOats, owned by yazin87@gmail.com.
const MEASUREMENT_ID = "G-X0HJVY8K6T";

export function GoogleAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(["openoats.com", "www.openoats.com"].includes(window.location.hostname));
  }, []);

  // Keep localhost and preview traffic out of the production property.
  if (!enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="openoats-google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${MEASUREMENT_ID}', {
            allow_google_signals: false,
            allow_ad_personalization_signals: false
          });
        `}
      </Script>
    </>
  );
}
