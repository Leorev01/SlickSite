// app/landing/layout.tsx (Custom Layout for Landing Page)

import { Geist, Geist_Mono } from "next/font/google";
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

  return (
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Custom Navbar for Landing Page */}
        <NavbarLanding />
        {children}
      </body>
  );
}
