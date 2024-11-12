import AboutSection from "@/components/AboutSection";
import ContactCTASection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SlickSite",
    url: "https://www.slick-site.com",
    description: "Professional Web Design Services for businesses looking to grow.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+07462636123",
      contactType: "Customer Service",
      areaServed: "UK",
      availableLanguage: "English",
    },
  };

  return (
    <>
      <Head>
      <title>SlickSite – Professional Web Design Services</title>
        <meta
          name="SlickSite"
          content="SlickSite offers professional web design, branding, and digital solutions for businesses. Transform your ideas into stunning websites."
        />
        <meta name="keywords" content="web design, professional web design, responsive design, branding" />
        <meta name="author" content="SwiftSites" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SlickSite – Professional Web Design Services" />
        <meta property="og:description" content="Transform your ideas into stunning websites with SlickSite. Offering professional web design and branding services." />
        <meta property="og:image" content="/path-to-image.jpg" />
        <meta property="og:url" content="https://www.slick-site.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SlickSite – Professional Web Design Services" />
        <meta name="twitter:description" content="Transform your ideas into stunning websites with SlickSite." />
        <meta name="twitter:image" content="/path-to-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Head>

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactCTASection />
      <Footer />
    </>
  );
}
