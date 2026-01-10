"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Name */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/Sky Query Lab.jpeg"
                alt="GJS Corp Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-2xl font-bold text-blue-600 tracking-tight">
                GJS Corp
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-600 transition">
              About
            </Link>
            <Link href="/services" className="hover:text-blue-600 transition">
              Services
            </Link>
            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="https://calendly.com/d/cs3b-79s-mj3/30-minute-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Book a Free Call
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-label="Toggle menu"
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
            >
              {/* Simple Hamburger Icon */}
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden px-2 pt-2 pb-4 space-y-1 bg-white shadow-md rounded-b">
            <Link href="/" className="block px-3 py-2 rounded hover:bg-blue-100">
              Home
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded hover:bg-blue-100">
              About
            </Link>
            <Link href="/services" className="block px-3 py-2 rounded hover:bg-blue-100">
              Services
            </Link>
            <Link href="/contact" className="block px-3 py-2 rounded hover:bg-blue-100">
              Contact
            </Link>
            <a
              href="https://calendly.com/d/cs3b-79s-mj3/30-minute-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 mt-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
            >
              Book a Free Call
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
