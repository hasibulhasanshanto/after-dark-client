import { useState } from "react";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/60 backdrop-blur-xl border-b border-white/5 z-50 transition-all duration-300">
      <div className="flex justify-between items-center px-5 md:px-16 py-4 max-w-[1440px] mx-auto">
        <Link
          className="text-display-lg font-headline-md tracking-tighter text-primary neon-glow"
          to="/"
        >
          AfterDark
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLink
            className={({ isActive }) =>
              `text-label-caps ${
                isActive ? "text-primary border-b-2 border-primary pb-1" : "text-on-surface/70 hover:text-primary transition-colors duration-300"
              }`
            }
            to="/"
            end
          >
            Home
          </NavLink>
          <a
            className="text-label-caps text-on-surface/70 hover:text-primary transition-colors duration-300"
            href="/#about"
          >
            About Us
          </a>
          <NavLink
            className={({ isActive }) =>
              `text-label-caps ${
                isActive ? "text-primary border-b-2 border-primary pb-1" : "text-on-surface/70 hover:text-primary transition-colors duration-300"
              }`
            }
            to="/solutions"
          >
            Event Solutions
          </NavLink>
          <a
            className="text-label-caps text-on-surface/70 hover:text-primary transition-colors duration-300"
            href="/#gallery"
          >
            Gallery
          </a>
        </div>

        <div className="hidden lg:block">
          <button className="bg-primary text-on-primary px-7 py-2.5 text-label-caps rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,0,214,0.5)]">
            Tickets
          </button>
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
            className="text-label-caps text-primary"
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <a
            className="text-label-caps text-on-surface"
            href="/#about"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </a>
          <Link
            className="text-label-caps text-on-surface"
            to="/solutions"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Event Solutions
          </Link>
          <a
            className="text-label-caps text-on-surface"
            href="/#gallery"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Gallery
          </a>
          <button
            className="mt-4 bg-primary text-on-primary px-10 py-3 text-label-caps rounded-full shadow-[0_0_20px_rgba(255,0,214,0.5)]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tickets
          </button>
        </div>
      )}
    </nav>
  );
}
