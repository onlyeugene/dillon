import React, { useState } from "react";
import { navLinks } from "../../constants/data";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";

const Navbar = () => {
  const [active, setActive] = useState(navLinks[0].href);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClick = (href) => {
    setActive(href);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white fixed w-full z-50">
      <div className="container flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10 h-8" />
          <p className="text-xs uppercase text-black font-bold flex flex-col leading-none">
            Dillon <span className="text-xs uppercase">Pet-Store & Kennel</span>
          </p>
        </div>

        {/* Desktop Navigation */}
        <div className="md:flex gap-4 text-sm hidden">
          {navLinks.map((link) => (
            <button
              key={link.name}
              className={`text-black items-center gap-2 cursor-pointer ${
                active === link.href
                  ? "text-yellow-500 underline underline-offset-4"
                  : "hover:underline hover:underline-offset-4"
              }`}
              onClick={() => handleClick(link.href)}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
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

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-end mb-8">
            <button
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                className={`text-left text-lg font-medium ${
                  active === link.href
                    ? "text-yellow-500"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => handleClick(link.href)}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
