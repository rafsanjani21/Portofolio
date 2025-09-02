import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkSize();
    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const navLinks = [
    { to: "hero", label: "Home" },
    { to: "about", label: "About Me" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact Me" },
  ];

  return (
    <nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
      bg-white/10  
      backdrop-blur-md border border-white/5 
      rounded-full shadow-lg px-6 py-2 flex items-center justify-between w-[90%] lg:w-auto"
    >
      {/* Logo */}
      <div className="text-white font-bold lg:hidden">Rafsan</div>

      <button
        className="lg:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Desktop menu */}
      <div className="hidden lg:flex items-center space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            smooth={true}
            duration={500}
            offset={
              isMobile && link.to === "about"
                ? -10 // khusus About Me di mobile
                : link.to === "contact"
                ? -160 // contact tetap khusus
                : -80
            }
            className="px-4 py-2 rounded-full text-white hover:bg-blue-500 transition cursor-pointer"
            activeClass="bg-blue-700"
            spy={true}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div
          className="absolute top-16 right-4 bg-black 
    backdrop-blur-3xl border border-white/5  bg-opacity-50 rounded-lg shadow-lg 
          flex flex-col items-start p-4 space-y-4 lg:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={
                isMobile && link.to === "about"
                  ? -10 // khusus About Me di mobile
                  : link.to === "contact"
                  ? -160 // contact tetap khusus
                  : -80
              }
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-lg text-white hover:bg-blue-500 cursor-pointer"
              activeClass="bg-blue-700"
              spy={true}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
