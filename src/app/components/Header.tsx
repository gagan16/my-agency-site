import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Name */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600 tracking-tight">
              Sky Query Labs
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
            <a href="#services" className="hover:text-blue-600 transition">
              Services
            </a>
            <a href="#about" className="hover:text-blue-600 transition">
              About Us
            </a>
            <a href="#solutions" className="hover:text-blue-600 transition">
              Solutions
            </a>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Book a Free Call
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
