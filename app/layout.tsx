import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
    //image: "/path-to-image.jpg", // Add your image path here for social sharing
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SlickSite – Professional Web Design Services",
    description:
      "Transform your ideas into stunning websites with SlickSite. Offering web design, branding, and digital solutions for businesses.",
    //image: "/path-to-image.jpg", // Add your image path here for social sharing
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
        <script
          type="text/javascript"
          src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
