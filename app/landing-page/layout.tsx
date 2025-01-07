'use client'
import Script from "next/script"; // Optimized script loading
import "./globals.css";

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get the Meta Pixel ID from environment variables
  const pixelId = process.env.FACEBOOK_PIXEL_ID;

  // This flag should ideally be set from a server-side condition, like checking if you're on the landing page
  const isLandingPage = typeof window !== 'undefined' && window.location.pathname === '/';

  return (
    <html lang="en">
      <head>
        {/* Check if we are on the landing page, then load the Meta Pixel */}
        {isLandingPage && pixelId && (
          <>
            {/* Meta Pixel Script for Landing Page Only */}
            <Script
              id="meta-pixel"
              strategy="afterInteractive" // Ensures the script loads after the page is interactive
            >
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
                n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${pixelId}'); // Use the Pixel ID from env
                fbq('track', 'PageView');
                fbq('track', 'ViewContent'); // Add the ViewContent event here
              `}
            </Script>

            {/* ViewContent Event Code (for content pages like landing pages) */}
            <Script
              id="view-content-event"
              strategy="afterInteractive" // Ensures this script loads after the page is interactive
            >
              {`
                fbq('track', 'ViewContent');
              `}
            </Script>

            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
                alt="Meta Pixel"
              />
            </noscript>
          </>
        )}
      </head>
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
