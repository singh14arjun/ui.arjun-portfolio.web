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
      } z-[1000] border-y-[3px] border-solid  scroll-smooth
         text-white px-[100px] py-10 items-center transition-all duration-300 ease-in-out font-serif`}
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

        <div>
          <ul
            className={`${
              menuOpen ? "flex" : "hidden"
            } flex-col md:flex md:flex-row gap-5 mt-4 md:mt-0 md:gap-8 md:items-center text-sm font-semibold transition-all duration-500 ease-in-out`}
          >
            {[
              { label: "Home", href: "#" },
              { label: "About", href: "#about" },
              {
                label: "Education",
                href: "#education",
              },
              { label: "Skills", href: "#skills" },
              { label: "Projects", href: "#projects" },
              { label: "Experience", href: "#experience" },
            ].map(({ label, href, icon }) => (
              <li key={label}>
                <a
                  href={href}
                  className="flex items-center gap-2  text-[#EEEEEE] px-3 py-1 text-xl"
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
