import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script"; // Import Script from Next.js for optimized script loading

// Load local fonts
const geistSans = localFont({
  src: "/fonts/GeistVF.woff", // Ensure correct path if the fonts are in the public folder
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "/fonts/GeistMonoVF.woff", // Ensure correct path if the fonts are in the public folder
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SlickSite – Professional Web Design Services",
  description:
    "SlickSite offers professional web design, branding, and digital solutions to help businesses grow. Transform your ideas into stunning websites with our expert services.",
  keywords: "web design, branding, responsive websites, professional web design, digital solutions, web development",
  authors: [{ name: "SlickSite Team" }],
  openGraph: {
    title: "SlickSite – Professional Web Design Services",
    description:
      "Transform your ideas into stunning websites with SlickSite. Offering web design, branding, and digital solutions for businesses.",
    url: "https://www.slick-site.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SlickSite – Professional Web Design Services",
    description:
      "Transform your ideas into stunning websites with SlickSite. Offering web design, branding, and digital solutions for businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Trustpilot Widget Script */}
        <Script
          src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          strategy="afterInteractive" // Ensures the script loads after the page is interactive
        />
        {/* Include the Meta Pixel code here */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '554312357590690');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=554312357590690&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
        </noscript>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
