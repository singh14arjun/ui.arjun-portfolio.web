import React, { useState, useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Optional: Sticky only after scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${
        scrolled ? "sticky top-0" : ""
      } z-[1000] border-y-[3px] border-solid [border-image:linear-gradient(to_right,_rgb(3,153,3),_black,_rgb(3,153,3))_1] scroll-smooth
         text-white px-[100px] py-3 items-center transition-all duration-300 ease-in-out font-serif`}
    >
      <div className="flex justify-between">
        <div className="flex items-center justify-between w-full flex-wrap md:flex-nowrap">
          {/* Left Info */}
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold font-serif">Arjun Singh</h1>
          </div>

          <button
            className="block md:hidden text-2xl ml-auto"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Nav Links */}
        <div>
          <ul
            className={`${
              menuOpen ? "flex" : "hidden"
            } flex-col md:flex md:flex-row gap-5 mt-4 md:mt-0 md:gap-8 md:items-center text-sm font-semibold transition-all duration-500 ease-in-out`}
          >
            {[
              { label: "Home", href: "#", icon: "fa-home" },
              { label: "About", href: "#about", icon: "fa-user" },
              {
                label: "Education",
                href: "#education",
                icon: "fa-graduation-cap",
              },
              { label: "Skills", href: "#skills", icon: "fa-cogs" },
              { label: "Projects", href: "#projects", icon: "fa-briefcase" },
              { label: "Experience", href: "#experience", icon: "fa-history" },
            ].map(({ label, href, icon }) => (
              <li key={label}>
                <a
                  href={href}
                  className="flex items-center gap-2 bg-green-700 text-white px-3 py-1 rounded hover:bg-[greenyellow] hover:text-black hover:shadow-[0_0_10px_greenyellow] transition"
                >
                  <i className={`fas ${icon}`}></i> {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
