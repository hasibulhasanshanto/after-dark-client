import { Link } from "react-router";
import Logo from "../assets/after-dark-logo.jpeg"

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 px-5 md:px-16 py-16 md:py-20 max-w-[1440px] mx-auto">
        <div>
          {/* <Link to="/" className="text-3xl md:text-[40px] font-display-lg text-primary block mb-4 tracking-tighter neon-glow">
            AfterDark
          </Link> */}
          <img src={Logo} alt="after-dark-logo" className="w-45 mb-4 rounded-full" />
          <p className="text-on-surface-variant text-sm max-w-xs leading-relaxed">
            Elevating Asian nightlife through unrivaled production and
            exclusive experiences since 2018.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-primary border border-primary/20 hover:bg-primary hover:text-on-primary transition-all shadow-sm"
              to="/gallery"
            >
              <span className="material-symbols-outlined text-lg">
                camera
              </span>
            </Link>
            <Link
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-primary border border-primary/20 hover:bg-primary hover:text-on-primary transition-all shadow-sm"
              to="/gallery"
            >
              <span className="material-symbols-outlined text-lg">
                play_circle
              </span>
            </Link>
          </div>
        </div>
        <div>
          <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-8">
            Explore
          </h5>
          <ul className="space-y-4">
            <li>
              <Link
                className="text-on-surface-variant hover:text-primary transition-all text-[13px] font-medium"
                to="/about"
              >
                About Our Vision
              </Link>
            </li>
            <li>
              <Link
                className="text-on-surface-variant hover:text-primary transition-all text-[13px] font-medium"
                to="/solutions"
              >
                Event Solutions
              </Link>
            </li>
            <li>
              <Link
                className="text-on-surface-variant hover:text-primary transition-all text-[13px] font-medium"
                to="/gallery"
              >
                Visual Gallery
              </Link>
            </li>
            <li>
              <Link
                className="text-on-surface-variant hover:text-primary transition-all text-[13px] font-medium"
                to="/contact"
              >
                Contact Concierge
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-8">
            Resources
          </h5>
          <ul className="space-y-4">
            <li>
              <Link
                className="text-on-surface-variant hover:text-primary transition-all text-[13px] font-medium"
                to="/contact"
              >
                VIP Reservations
              </Link>
            </li>
            <li>
              <Link
                className="text-on-surface-variant hover:text-primary transition-all text-[13px] font-medium"
                to="/about"
              >
                The Architects
              </Link>
            </li>
            <li>
              <Link
                className="text-on-surface-variant hover:text-primary transition-all text-[13px] font-medium"
                to="/solutions"
              >
                Corporate Booking
              </Link>
            </li>
            <li>
              <Link
                className="text-on-surface-variant hover:text-primary transition-all text-[13px] font-medium"
                to="/contact"
              >
                Contact Support
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-8">
            Newsletter
          </h5>
          <p className="text-on-surface-variant text-[13px] mb-6 leading-relaxed">
            Get priority access to ticket drops and member-only announcements.
          </p>
          <div className="flex">
            <input
              className="w-full bg-white/5 border border-white/10 rounded-l-xl px-4 py-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary text-on-surface placeholder:text-on-surface-variant/40 outline-none"
              placeholder="Your email address"
              type="email"
            />
            <button className="bg-primary text-on-primary px-5 py-3 rounded-r-xl hover:bg-primary-fixed-dim transition-all shadow-[0_0_15px_rgba(255,0,214,0.4)]">
              <span className="material-symbols-outlined text-sm font-bold flex items-center">
                send
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="px-5 md:px-16 py-10 border-t border-white/5 text-center">
        <p className="text-[9px] text-on-surface-variant/40 tracking-[0.5em] uppercase font-bold">
          © 2026 AfterDark Exclusive. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
