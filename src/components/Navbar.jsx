import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import MainLogo from "../assets/after-dark.svg"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
        ? "bg-background/90 backdrop-blur-xl border-b border-white/10 shadow-2xl"
        : "bg-black/80 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none border-b border-white/5 lg:border-b-0"
        }`}
    >
      <div
        className={`flex justify-between items-center px-5 md:px-16 transition-all duration-500 max-w-container-max mx-auto ${isScrolled ? "py-2.5" : "py-5 md:py-6"
          }`}
      >
        {/* <Link
          className={`font-headline-md tracking-tighter text-primary neon-glow transition-all duration-500 ${isScrolled ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"
            }`}
          to="/"
        >
          AfterDark
        </Link> */}
        <img src={MainLogo} alt="after-dark-logo" className="w-60" />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLink
            className={({ isActive }) =>
              `text-label-caps transition-all duration-300 uppercase ${isActive ? "text-primary font-semibold" : "text-on-surface/70 hover:text-primary"
              }`
            }
            to="/"
            end
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `text-label-caps transition-all duration-300 uppercase ${isActive ? "text-primary font-semibold" : "text-on-surface/70 hover:text-primary"
              }`
            }
            to="/solutions"
          >
            Event Solutions
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `text-label-caps transition-all duration-300 uppercase ${isActive ? "text-primary font-semibold" : "text-on-surface/70 hover:text-primary"
              }`
            }
            to="/gallery"
          >
            Gallery
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `text-label-caps transition-all duration-300 uppercase ${isActive ? "text-primary font-semibold" : "text-on-surface/70 hover:text-primary"
              }`
            }
            to="/about"
          >
            About Us
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `text-label-caps transition-all duration-300 uppercase ${isActive ? "text-primary font-semibold" : "text-on-surface/70 hover:text-primary"
              }`
            }
            to="/contact"
          >
            Contact
          </NavLink>
          {/* 
          <NavLink
            className={({ isActive }) =>
              `text-label-caps transition-all duration-300 ${
                isActive ? "text-primary border-b-2 border-primary pb-1 font-bold" : "text-on-surface/70 hover:text-primary"
              }`
            }
            to="/dashboard"
          >
            Dashboard
          </NavLink>
          */}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          {/*
          <Link
            to="/dashboard"
            className={`inline-flex items-center gap-1.5 border border-white/20 hover:border-primary/50 text-white text-label-caps rounded-full hover:scale-105 active:scale-95 transition-all ${
              isScrolled ? "px-4 py-1.5 text-xs" : "px-5 py-2 text-xs"
            }`}
          >
            <span className="material-symbols-outlined text-sm text-primary">person</span>
            Dashboard
          </Link>
          */}
          <Link
            to="/signin"
            className={`inline-flex items-center gap-1.5 border border-white/20 hover:border-primary/50 text-white text-label-caps rounded-full hover:scale-105 active:scale-95 transition-all ${isScrolled ? "px-4 py-1.5 text-xs" : "px-5 py-2 text-xs"
              }`}
          >
            <span className="material-symbols-outlined text-sm text-primary">login</span>
            Sign In
          </Link>
          <Link
            to="/ticket-preview"
            className={`inline-block bg-primary text-on-primary text-label-caps rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,0,214,0.5)] ${isScrolled ? "px-6 py-2 text-xs" : "px-7 py-2.5 text-sm"
              }`}
          >
            Tickets
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          className="lg:hidden text-primary p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/5 flex flex-col items-center py-8 gap-6 shadow-2xl">
          <Link
            className="text-label-caps text-on-surface hover:text-primary"
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className="text-label-caps text-on-surface hover:text-primary"
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            className="text-label-caps text-on-surface hover:text-primary"
            to="/solutions"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Event Solutions
          </Link>
          <Link
            className="text-label-caps text-on-surface hover:text-primary"
            to="/gallery"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            className="text-label-caps text-on-surface hover:text-primary"
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          {/*
          <Link
            className="text-label-caps text-primary font-bold flex items-center gap-1.5"
            to="/dashboard"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="material-symbols-outlined text-lg">grid_view</span>
            Dashboard
          </Link>
          */}
          <Link
            className="text-label-caps text-primary font-bold flex items-center gap-1.5"
            to="/signin"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="material-symbols-outlined text-lg">login</span>
            Sign In
          </Link>
          <Link
            to="/ticket-preview"
            className="mt-2 bg-primary text-on-primary px-10 py-3 text-label-caps rounded-full shadow-[0_0_20px_rgba(255,0,214,0.5)]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tickets
          </Link>
        </div>
      )}
    </nav>
  );
}
