import React, { useState } from "react";
import { navLinks } from "../../constants/data";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";

const Navbar = () => {
  const [active, setActive] = useState(navLinks[0].href);

  const handleClick = (href) => {
    setActive(href);
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
      </div>
    </div>
  );
};

export default Navbar;
