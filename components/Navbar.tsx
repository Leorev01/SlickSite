'use client'
import React, { useState } from 'react';
import Link from 'next/link'; // If using Next.js for routing
import logo from "@/public/images/SlickSite3.png";
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-950 text-white fixed w-full z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-semibold">
          <Link href="/">
            <Image src={logo} alt="SlickSite Logo" width={200} height={200}/>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/services" className="hover:text-gray-300">
            Services
          </Link>
          <Link href="/work" className="hover:text-gray-300">
            Our Work
          </Link>
          <Link href="/articles" className="hover:text-gray-300">
            Articles
          </Link>
          <button className='bg-white text-blue-950 px-4 py-2 rounded-lg font-bold hover:bg-gray-200'>
            Free Quote
          </button>
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
        <Link href="/services" className="block text-white hover:text-gray-300">
          Services
        </Link>
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
