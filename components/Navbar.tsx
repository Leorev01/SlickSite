'use client'
import React, { useState } from 'react';
import Link from 'next/link'; // If using Next.js for routing
import logo from "@/public/images/SlickSite3.png";
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDesignOpen, setIsDesignOpen] = useState(false);
  const [isDevelopmentOpen, setIsDevelopmentOpen] = useState(false);
  const [isMarketingOpen, setIsMarketingOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleDesign = () => {
    setIsDesignOpen(!isDesignOpen);
  };

  const toggleDevelopment = () => {
    setIsDevelopmentOpen(!isDevelopmentOpen);
  };

  const toggleMarketing = () => {
    setIsMarketingOpen(!isMarketingOpen);
  };

  return (
    <header className="bg-blue-950 text-white fixed w-full z-50">
      <nav className="flex items-center justify-between px-6 py-4 w-full">
        {/* Logo */}
        <div className="text-2xl font-semibold">
          <Link href="/">
            <Image src={logo} alt="SlickSite Logo" width={200} height={200} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center relative">
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>

          {/* Services Menu with Mega Menu */}
          <div className="relative group">
            <Link
              href="/services"
              className="hover:text-gray-300 cursor-pointer py-6"
            >
              Services
            </Link>

            {/* Mega Menu (this only appears when hovering the Services link) */}
            <div className="fixed left-0 mt-4 hidden group-hover:block bg-blue-950 p-8 w-screen rounded-lg shadow-lg transition-all duration-300 ease-in-out">
              <div className="grid grid-cols-3 gap-16">
                {/* Design Category */}
                <div className="space-y-6">
                  <Link href='/services/web-design' className="font-semibold text-white text-xl hover:text-gray-300">Design</Link>
                  <Link href="/services/web-design" className="block text-white hover:text-gray-300 text-lg">
                    Web Design
                  </Link>
                  <Link href="/services/graphic-design" className="block text-white hover:text-gray-300 text-lg">
                    Graphic Design
                  </Link>
                </div>

                {/* Development Category */}
                <div className="space-y-6">
                  <Link href="/services/web-development" className="font-semibold text-white text-xl hover:text-gray-300">Development</Link>
                  <Link href="/services/custom-webdev" className="block text-white hover:text-gray-300 text-lg">
                    Web Development
                  </Link>
                  <Link href="/services/ecommerce-development" className="block text-white hover:text-gray-300 text-lg">
                    E-commerce Development
                  </Link>
                  <Link href="/services/landing-page-development" className="block text-white hover:text-gray-300 text-lg">
                    Landing Page Development
                  </Link>
                </div>

                {/* Digital Marketing Category */}
                <div className="space-y-6">
                  <Link href="/services/digital-marketing" className="font-semibold text-white text-xl hover:text-gray-300">Digital Marketing</Link>
                  <Link href="/services/seo" className="block text-white hover:text-gray-300 text-lg">
                    SEO
                  </Link>
                  <Link href="/services/articles" className="block text-white hover:text-gray-300 text-lg">
                    Articles
                  </Link>
                  <Link href="/services/web-hosting" className="block text-white hover:text-gray-300 text-lg">
                    Web Hosting
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="/work" className="hover:text-gray-300">
            Our Work
          </Link>
          <Link href="/articles" className="hover:text-gray-300">
            Articles
          </Link>
          <Link href="/quote" className="bg-white text-blue-950 px-4 py-2 rounded-lg font-bold hover:bg-gray-200">
            Free Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-blue-950 p-4 space-y-4`}
      >
        <Link href="/about" className="block text-white hover:text-gray-300">
          About
        </Link>

        {/* Services Dropdown with Nested Dropdowns */}
        <div>
          <div className="flex justify-between w-full items-center">
            <Link href="/services" className="text-white hover:text-gray-300 text-lg">
              Services
            </Link>
            <button
              className="focus:outline-none"
              onClick={toggleServices}
              aria-label="Toggle Services Dropdown"
            >
              <svg
                className={`w-4 h-4 transform ${isServicesOpen ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {isServicesOpen && (
            <div className="space-y-4 pl-4">
              {/* Design Dropdown */}
              <div>
                <div className="flex justify-between w-full items-center">
                  <Link href="/services/design" className="text-white hover:text-gray-300 text-lg">
                    Design
                  </Link>
                  <button
                    className="focus:outline-none"
                    onClick={toggleDesign}
                    aria-label="Toggle Design Dropdown"
                  >
                    <svg
                      className={`w-4 h-4 transform ${isDesignOpen ? 'rotate-180' : ''}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>

                {isDesignOpen && (
                  <div className="space-y-2 pl-6">
                    <Link href="/services/web-design" className="block text-white hover:text-gray-300">
                      Web Design
                    </Link>
                    <Link href="/services/graphic-design" className="block text-white hover:text-gray-300">
                      Graphic Design
                    </Link>
                  </div>
                )}
              </div>

              {/* Development Dropdown */}
              <div>
                <div className="flex justify-between w-full items-center">
                  <Link href="/services/development" className="text-white hover:text-gray-300 text-lg">
                    Development
                  </Link>
                  <button
                    className="focus:outline-none"
                    onClick={toggleDevelopment}
                    aria-label="Toggle Development Dropdown"
                  >
                    <svg
                      className={`w-4 h-4 transform ${isDevelopmentOpen ? 'rotate-180' : ''}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>

                {isDevelopmentOpen && (
                  <div className="space-y-2 pl-6">
                    <Link href="/services/web-development" className="block text-white hover:text-gray-300">
                      Web Development
                    </Link>
                    <Link href="/services/ecommerce-development" className="block text-white hover:text-gray-300">
                      E-commerce Development
                    </Link>
                    <Link href="/services/landing-page-development" className="block text-white hover:text-gray-300">
                      Landing Page Development
                    </Link>
                  </div>
                )}
              </div>

              {/* Marketing Dropdown */}
              <div>
                <div className="flex justify-between w-full items-center">
                  <Link href="/services/marketing" className="text-white hover:text-gray-300 text-lg">
                    Digital Marketing
                  </Link>
                  <button
                    className="focus:outline-none"
                    onClick={toggleMarketing}
                    aria-label="Toggle Marketing Dropdown"
                  >
                    <svg
                      className={`w-4 h-4 transform ${isMarketingOpen ? 'rotate-180' : ''}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>

                {isMarketingOpen && (
                  <div className="space-y-2 pl-6">
                    <Link href="/services/seo" className="block text-white hover:text-gray-300">
                      SEO
                    </Link>
                    <Link href="/articles" className="block text-white hover:text-gray-300">
                      Articles
                    </Link>
                    <Link href="/services/web-hosting" className="block text-white hover:text-gray-300">
                      Web Hosting
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>


        <Link href="/work" className="block text-white hover:text-gray-300">
          Our Work
        </Link>
        <Link href="/articles" className="block text-white hover:text-gray-300">
          Articles
        </Link>
        <Link href="/quote" className="block text-white hover:text-gray-300">
          Free Quote
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
