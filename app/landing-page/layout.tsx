// app/landing/layout.tsx (Custom Layout for Landing Page)

import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import NavbarLanding from "./components/NavbarLanding";  // Custom navbar for landing page

// Load fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  const pixelId = process.env.FACEBOOK_PIXEL_ID;

  return (
    <html lang="en">
      <head>
        <>
          {/* Meta Pixel Script for Landing Page Only */}
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
          >
            {`
              !function(f,b,e,v,n,t,s) {
                if(f.fbq) return;
                n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq) f._fbq=n;
                n.push=n;
                n.loaded=!0;
                n.version='2.0';
                n.queue=[];
                t=b.createElement(e);
                t.async=!0;
                t.src=v;
                s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)
              }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${pixelId}');
              fbq('track', 'PageView');
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
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Custom Navbar for Landing Page */}
        <NavbarLanding />
        {children}
      </body>
    </html>
  );
}
