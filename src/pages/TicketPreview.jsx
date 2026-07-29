import { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function TicketPreview() {
  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState("");
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  };

  const handleDownloadPDF = () => {
    showToast("Generating & Downloading Ticket PDF...");
    setTimeout(() => {
      const element = document.createElement("a");
      const file = new Blob([
        `TICKET PREVIEW - ELECTRIC NOIR\nOrder ID: ENR-20250524-78291\nHolder: Hasibul Hasan Shanto\nEvent: Electric Noir - A night of sound. Lights. Emotion.\nDate: Sat, 24 May 2025 (7:30 PM)\nVenue: Bangabandhu International Conference Center (BICC), Dhaka\nSection: VIP-A | Row: 12 | Seat: 24\nPrice: ৳2,500.00\nEntry Code: EN24-7X8P-9K2L`
      ], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = "ElectricNoir_Ticket_ENR-20250524-78291.txt";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 800);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Electric Noir Ticket",
          text: "Check out my ticket for Electric Noir Live Concert!",
          url: window.location.href,
        });
      } catch {
        // Fallback to clipboard
        navigator.clipboard.writeText(window.location.href);
        showToast("Ticket link copied to clipboard! 📋");
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast("Ticket link copied to clipboard! 📋");
    }
  };

  const handleAddToWallet = () => {
    showToast("Added to Digital Wallet! 🎟️");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background text-on-background pt-24 pb-16 px-4 sm:px-6 md:px-12 lg:px-16 selection:bg-primary selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-primary/90 text-white px-6 py-3.5 rounded-xl shadow-[0_0_30px_rgba(255,0,214,0.6)] backdrop-blur-md flex items-center gap-3 animate-bounce font-medium text-sm">
          <span className="material-symbols-outlined text-lg">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Container */}
      <div className="max-w-[860px] mx-auto">
        {/* Top Header Navigation Bar */}
        <div className="flex items-center justify-between mb-6 sm:mb-8 text-on-surface">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 text-xs sm:text-sm font-medium text-on-surface/80 hover:text-primary transition-colors cursor-pointer group"
          >
            <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">
              chevron_left
            </span>
            <span>Back to My Tickets</span>
          </button>

          <h1 className="text-xs sm:text-sm font-bold tracking-[0.25em] text-on-surface/90 uppercase font-headline-md">
            TICKET PREVIEW
          </h1>

          <div className="relative">
            <button
              onClick={() => setShowOptionsModal(!showOptionsModal)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/10 transition-all flex items-center justify-center cursor-pointer text-on-surface"
              aria-label="More options"
            >
              <span className="material-symbols-outlined text-xl">more_horiz</span>
            </button>

            {/* Dropdown Options Menu */}
            {showOptionsModal && (
              <div className="absolute right-0 top-12 w-48 bg-[#18171c] border border-white/10 rounded-xl shadow-2xl p-2 z-40 backdrop-blur-xl animate-in fade-in zoom-in-95">
                <button
                  onClick={() => {
                    setShowOptionsModal(false);
                    handleShare();
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium text-on-surface hover:bg-white/10 transition-colors text-left"
                >
                  <span className="material-symbols-outlined text-base text-primary">share</span>
                  Share Ticket
                </button>
                <button
                  onClick={() => {
                    setShowOptionsModal(false);
                    handleDownloadPDF();
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium text-on-surface hover:bg-white/10 transition-colors text-left"
                >
                  <span className="material-symbols-outlined text-base text-primary">download</span>
                  Save PDF
                </button>
                <button
                  onClick={() => {
                    setShowOptionsModal(false);
                    handlePrint();
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium text-on-surface hover:bg-white/10 transition-colors text-left"
                >
                  <span className="material-symbols-outlined text-base text-primary">print</span>
                  Print
                </button>
              </div>
            )}
          </div>
        </div>

        {/* TICKET CARD ENCLOSURE */}
        <div className="bg-[#121116] border border-white/10 rounded-[28px] overflow-hidden shadow-2xl relative transition-all duration-300 hover:border-white/20">
          
          {/* TOP STUB: HERO CONCERT BANNER */}
          <div className="relative p-6 sm:p-8 md:p-10 min-h-[300px] sm:min-h-[340px] flex flex-col justify-between overflow-hidden">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1400&q=80"
                alt="Concert stage lights with audience"
                className="w-full h-full object-cover object-center opacity-45 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121116] via-[#121116]/60 to-black/70"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-transparent to-purple-900/20 mix-blend-screen"></div>
            </div>

            {/* Concert Content */}
            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#2a1728]/90 border border-primary/40 px-3.5 py-1.5 rounded-full mb-4 shadow-[0_0_15px_rgba(255,0,214,0.3)]">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                <span className="w-2 h-2 rounded-full bg-primary -ml-4"></span>
                <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase">
                  LIVE CONCERT
                </span>
              </div>

              {/* Title & Tagline */}
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-display-lg text-white font-bold tracking-tight mb-2 drop-shadow-md">
                Electric Noir
              </h2>
              <p className="text-on-surface-variant/90 text-sm sm:text-base font-normal mb-6 max-w-xl">
                A night of sound. Lights. Emotion.
              </p>
            </div>

            {/* Event Metadata (Date, Time, Location) */}
            <div className="relative z-10 space-y-2.5 sm:space-y-3 pt-2 text-xs sm:text-sm text-gray-200">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg sm:text-xl">
                  calendar_today
                </span>
                <span className="font-medium">Sat, 24 May 2025</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg sm:text-xl">
                  schedule
                </span>
                <span className="font-medium">7:30 PM (Doors open 6:00 PM)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg sm:text-xl mt-0.5">
                  location_on
                </span>
                <span className="font-medium leading-tight">
                  Bangabandhu International Conference Center (BICC), Dhaka
                </span>
              </div>
            </div>
          </div>

          {/* PERFORATED DIVIDER WITH STUB NOTCHES */}
          <div className="relative w-full h-8 flex items-center justify-center bg-[#121116] overflow-hidden my-1">
            {/* Left Notch */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background border-r border-white/10 z-20"></div>
            
            {/* Dashed Line */}
            <div className="w-[calc(100%-4rem)] border-b-2 border-dashed border-white/15"></div>
            
            {/* Right Notch */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background border-l border-white/10 z-20"></div>
          </div>

          {/* BOTTOM STUB: TICKET DETAILS & QR CODE */}
          <div className="p-6 sm:p-8 md:p-10 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Side: Ticket Information (7 Cols on desktop) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Holder & Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-primary">
                    <span className="material-symbols-outlined text-xl">person</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-on-surface-variant/70 block mb-0.5">
                      TICKET HOLDER
                    </span>
                    <p className="text-base sm:text-lg font-semibold text-white tracking-tight">
                      Hasibul Hasan Shanto
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-primary">
                    <span className="material-symbols-outlined text-xl">confirmation_number</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-on-surface-variant/70 block mb-0.5">
                      TICKET TYPE
                    </span>
                    <p className="text-base sm:text-lg font-semibold text-white tracking-tight">
                      Standard Admission
                    </p>
                  </div>
                </div>
              </div>

              {/* Section, Row, Seat Sub-Grid */}
              <div className="flex items-center gap-3 sm:gap-6 bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
                <div className="flex-1 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">grid_view</span>
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-on-surface-variant/70 block">
                      SECTION
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white">VIP-A</span>
                  </div>
                </div>

                <div className="h-8 w-[1px] bg-white/10"></div>

                <div className="flex-1 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">chair</span>
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-on-surface-variant/70 block">
                      ROW
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white">12</span>
                  </div>
                </div>

                <div className="h-8 w-[1px] bg-white/10"></div>

                <div className="flex-1 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">event_seat</span>
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-on-surface-variant/70 block">
                      SEAT
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white">24</span>
                  </div>
                </div>
              </div>

              {/* Order ID & Purchased On & Price */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-primary">
                    <span className="material-symbols-outlined text-xl">receipt_long</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-on-surface-variant/70 block mb-0.5">
                      ORDER ID
                    </span>
                    <p className="text-sm font-semibold text-white tracking-wide font-mono">
                      ENR-20250524-78291
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-primary">
                    <span className="material-symbols-outlined text-xl">calendar_month</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-on-surface-variant/70 block mb-0.5">
                      PURCHASED ON
                    </span>
                    <p className="text-sm font-semibold text-white">
                      20 May 2025, 10:45 AM
                    </p>
                  </div>
                </div>
              </div>

              {/* Price & Payment Status */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/5">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-primary">
                    <span className="material-symbols-outlined text-xl">payments</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-on-surface-variant/70 block mb-0.5">
                      PRICE
                    </span>
                    <p className="text-xl sm:text-2xl font-bold text-white">
                      ৳2,500.00
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  PAYMENT CONFIRMED
                </div>
              </div>

            </div>

            {/* Vertical Separator Line (Desktop) */}
            <div className="hidden lg:block lg:col-span-1 h-full min-h-[300px] flex justify-center">
              <div className="w-[1px] h-full bg-white/10"></div>
            </div>

            {/* Right Side: QR Code Container (4 Cols on desktop) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center w-full">
              {/* QR Code Container with Neon Border */}
              <div className="relative p-[2px] rounded-3xl bg-gradient-to-tr from-cyan-400 via-primary to-purple-600 shadow-[0_0_35px_rgba(255,0,214,0.25)] w-full max-w-[280px]">
                <div className="bg-[#0b0a0e] rounded-[22px] p-6 flex flex-col items-center text-center">
                  
                  {/* High Quality Stylized SVG QR Code */}
                  <div className="bg-white p-3.5 rounded-xl shadow-inner mb-4 w-full aspect-square flex items-center justify-center">
                    <svg
                      viewBox="0 0 256 256"
                      className="w-full h-full text-black fill-current"
                    >
                      {/* Top Left Outer Square */}
                      <rect x="16" y="16" width="72" height="72" rx="8" fill="none" stroke="currentColor" strokeWidth="12" />
                      <rect x="36" y="36" width="32" height="32" rx="4" fill="currentColor" />

                      {/* Top Right Outer Square */}
                      <rect x="168" y="16" width="72" height="72" rx="8" fill="none" stroke="currentColor" strokeWidth="12" />
                      <rect x="188" y="36" width="32" height="32" rx="4" fill="currentColor" />

                      {/* Bottom Left Outer Square */}
                      <rect x="16" y="168" width="72" height="72" rx="8" fill="none" stroke="currentColor" strokeWidth="12" />
                      <rect x="36" y="188" width="32" height="32" rx="4" fill="currentColor" />

                      {/* Data Patterns & Modules */}
                      <rect x="104" y="20" width="16" height="16" rx="2" />
                      <rect x="136" y="20" width="16" height="16" rx="2" />
                      <rect x="104" y="52" width="16" height="16" rx="2" />
                      <rect x="136" y="52" width="16" height="16" rx="2" />

                      <rect x="20" y="104" width="16" height="16" rx="2" />
                      <rect x="52" y="104" width="16" height="16" rx="2" />
                      <rect x="84" y="104" width="16" height="16" rx="2" />
                      <rect x="116" y="104" width="24" height="24" rx="4" />
                      <rect x="156" y="104" width="16" height="16" rx="2" />
                      <rect x="188" y="104" width="16" height="16" rx="2" />
                      <rect x="220" y="104" width="16" height="16" rx="2" />

                      <rect x="104" y="136" width="16" height="16" rx="2" />
                      <rect x="136" y="136" width="24" height="24" rx="4" />
                      <rect x="188" y="136" width="16" height="16" rx="2" />
                      <rect x="220" y="136" width="16" height="16" rx="2" />

                      <rect x="104" y="176" width="20" height="20" rx="3" />
                      <rect x="136" y="176" width="16" height="16" rx="2" />
                      <rect x="168" y="176" width="16" height="16" rx="2" />

                      <rect x="104" y="208" width="16" height="16" rx="2" />
                      <rect x="136" y="208" width="24" height="24" rx="4" />
                      <rect x="176" y="208" width="20" height="20" rx="3" />
                      <rect x="216" y="208" width="20" height="20" rx="3" />
                    </svg>
                  </div>

                  {/* QR Code Barcode ID */}
                  <span className="font-mono text-sm sm:text-base font-bold text-white tracking-widest block mb-3">
                    EN24-7X8P-9K2L
                  </span>

                  {/* Dashed Separator */}
                  <div className="w-full border-b border-dashed border-white/10 mb-3"></div>

                  <span className="text-[10px] font-bold tracking-[0.2em] text-on-surface-variant/80 uppercase block mb-1">
                    SCAN AT ENTRY
                  </span>
                  <p className="text-xs text-on-surface-variant/70 leading-relaxed">
                    Show this QR code at the venue entrance for quick check-in.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* BOTTOM GRADIENT BANNER */}
          <div className="w-full bg-gradient-to-r from-[#ff00a0] via-[#8a00ff] to-[#00c8ff] p-4 sm:p-5 text-white flex items-center justify-center gap-3 text-center sm:text-left shadow-lg">
            <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30">
              <span className="material-symbols-outlined text-lg">verified_user</span>
            </div>
            <p className="text-xs sm:text-sm font-medium leading-tight drop-shadow-sm">
              Please arrive early and bring a valid ID. No re-entry. Non-refundable. Terms &amp; Conditions apply.
            </p>
          </div>

        </div>

        {/* INTERACTIVE ACTION BUTTONS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-8">
          
          <button
            onClick={handleDownloadPDF}
            className="glass rounded-xl border border-white/10 hover:border-primary/50 text-white font-medium p-4 flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-98 hover:shadow-[0_0_25px_rgba(255,0,214,0.3)] cursor-pointer group"
          >
            <span className="material-symbols-outlined text-xl text-primary group-hover:scale-110 transition-transform">
              download
            </span>
            <span className="text-sm font-semibold">Download PDF</span>
          </button>

          <button
            onClick={handleShare}
            className="glass rounded-xl border border-white/10 hover:border-primary/50 text-white font-medium p-4 flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-98 hover:shadow-[0_0_25px_rgba(255,0,214,0.3)] cursor-pointer group"
          >
            <span className="material-symbols-outlined text-xl text-primary group-hover:scale-110 transition-transform">
              share
            </span>
            <span className="text-sm font-semibold">Share Ticket</span>
          </button>

          <button
            onClick={handleAddToWallet}
            className="glass rounded-xl border border-white/10 hover:border-primary/50 text-white font-medium p-4 flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-98 hover:shadow-[0_0_25px_rgba(255,0,214,0.3)] cursor-pointer group"
          >
            <span className="material-symbols-outlined text-xl text-primary group-hover:scale-110 transition-transform">
              account_balance_wallet
            </span>
            <span className="text-sm font-semibold">Add to Wallet</span>
          </button>

          <button
            onClick={handlePrint}
            className="glass rounded-xl border border-white/10 hover:border-primary/50 text-white font-medium p-4 flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-98 hover:shadow-[0_0_25px_rgba(255,0,214,0.3)] cursor-pointer group"
          >
            <span className="material-symbols-outlined text-xl text-primary group-hover:scale-110 transition-transform">
              print
            </span>
            <span className="text-sm font-semibold">Print Ticket</span>
          </button>

          <button
            onClick={() => setShowDetailsModal(true)}
            className="glass rounded-xl border border-white/10 hover:border-primary/50 text-white font-medium p-4 flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-98 hover:shadow-[0_0_25px_rgba(255,0,214,0.3)] cursor-pointer group"
          >
            <span className="material-symbols-outlined text-xl text-primary group-hover:scale-110 transition-transform">
              info
            </span>
            <span className="text-sm font-semibold">View Details</span>
          </button>

          <button
            onClick={() => setShowCancelModal(true)}
            className="glass rounded-xl border border-white/10 hover:border-error/50 text-white font-medium p-4 flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-98 hover:shadow-[0_0_25px_rgba(255,180,171,0.3)] cursor-pointer group"
          >
            <span className="material-symbols-outlined text-xl text-error group-hover:scale-110 transition-transform">
              delete_outline
            </span>
            <span className="text-sm font-semibold text-error/90">Cancel Ticket</span>
          </button>

        </div>

        {/* NEED HELP / SUPPORT BANNER */}
        <div className="glass rounded-2xl border border-white/10 p-5 sm:p-6 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 text-primary shadow-[0_0_15px_rgba(255,0,214,0.2)]">
              <span className="material-symbols-outlined text-2xl">headset</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Need help?</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant/80">
                Contact support 24/7 at support@electricnoir.com or +880 1712 345678
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs font-bold tracking-wider uppercase flex items-center gap-2 transition-all shrink-0 hover:border-primary/50"
          >
            <span>Contact Support</span>
            <span className="material-symbols-outlined text-base">north_east</span>
          </Link>
        </div>

        {/* FOOTER NOTE */}
        <div className="text-center mt-10">
          <p className="text-xs sm:text-sm text-on-surface-variant/60 font-medium">
            Thank you for being part of the experience. 💕
          </p>
        </div>

      </div>

      {/* VIEW DETAILS MODAL */}
      {showDetailsModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#18171c] border border-white/10 rounded-2xl max-w-lg w-full p-6 space-y-4 relative shadow-2xl animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">info</span>
                Event &amp; Ticket Details
              </h3>
              <button
                onClick={() => setShowDetailsModal(false)}
                className="text-on-surface-variant hover:text-white"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-on-surface-variant">
              <p><strong className="text-white">Event:</strong> Electric Noir Live Concert 2025</p>
              <p><strong className="text-white">Venue:</strong> Bangabandhu International Conference Center (BICC), Dhaka</p>
              <p><strong className="text-white">Gate Opens:</strong> 6:00 PM | Show Starts: 7:30 PM</p>
              <p><strong className="text-white">Ticket Class:</strong> VIP-A | Row 12 | Seat 24</p>
              <p><strong className="text-white">Inclusions:</strong> Fast-track priority line, VIP lounge access, 1 complimentary beverage.</p>
              <p><strong className="text-white">Age Limit:</strong> 18+ (Valid Photo ID required at entry)</p>
            </div>
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowDetailsModal(false)}
                className="px-5 py-2 rounded-xl bg-primary text-white text-xs font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(255,0,214,0.5)] transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CANCEL TICKET MODAL */}
      {showCancelModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#18171c] border border-white/10 rounded-2xl max-w-md w-full p-6 space-y-4 relative shadow-2xl animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-error">warning</span>
                Cancel Ticket Request
              </h3>
              <button
                onClick={() => setShowCancelModal(false)}
                className="text-on-surface-variant hover:text-white"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              As per our event policy, standard tickets are non-refundable. However, you can submit a transfer or resale request to our support team.
            </p>
            <div className="pt-2 flex justify-end gap-3">
              <button
                onClick={() => setShowCancelModal(false)}
                className="px-4 py-2 rounded-xl bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-all"
              >
                Go Back
              </button>
              <Link
                to="/contact"
                onClick={() => setShowCancelModal(false)}
                className="px-4 py-2 rounded-xl bg-error text-black text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
