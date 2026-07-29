import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard"); // 'dashboard' | 'my-events' | 'bookings' | 'settings'
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showCreditsModal, setShowCreditsModal] = useState(false);
  const [credits, setCredits] = useState(4200);
  const [searchQuery, setSearchQuery] = useState("");
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotificationsDropdownOpen, setIsNotificationsDropdownOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Priority Pass Confirmed",
      description: "Your pass for Neon Zenith Tokyo has been authenticated.",
      time: "2 hours ago",
      isUnread: true,
      type: "ticket",
    },
    {
      id: 2,
      title: "Tier Level Up",
      description: "Welcome to PHANTOM Tier! Your premium perks are now active.",
      time: "1 day ago",
      isUnread: true,
      type: "system",
    },
    {
      id: 3,
      title: "New Album Drop",
      description: "Exclusive listening session available for Apex members.",
      time: "3 days ago",
      isUnread: false,
      type: "event",
    },
  ]);

  // Counter animations state
  const [stats, setStats] = useState({ total: 0, upcoming: 0, memories: 0 });

  useEffect(() => {
    // Animate numbers on load
    const duration = 1200;
    const steps = 30;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setStats({
        total: Math.floor(progress * 142),
        upcoming: Math.floor(progress * 8),
        memories: Math.floor(progress * 1240),
      });

      if (step >= steps) {
        clearInterval(timer);
        setStats({ total: 142, upcoming: 8, memories: 1240 });
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 3000);
  };

  const handleExportCSV = () => {
    showToast("Exporting Transaction Ledger CSV...");
    setTimeout(() => {
      const csvContent =
        "Service/Event,Date,Type,Credits\nCyberdeck Upgrade Tier 2,JUL 12 2024,ASSET,-1200\nNeon Zenith Early Entry,JUL 08 2024,TICKET,-4500\nPhantom Tier Re-Up,JUN 30 2024,SUB,-8000";
      const blob = new Blob([csvContent], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "AfterDark_Ledger_Export.csv";
      a.click();
    }, 600);
  };

  const handleAddCredits = (amount) => {
    setCredits((prev) => prev + amount);
    setShowCreditsModal(false);
    showToast(`Successfully added ${amount.toLocaleString()} Credits! 🪙`);
  };

  return (
    <div className="min-h-screen bg-[#0e0e0f] text-on-background font-body-md selection:bg-primary selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-primary text-on-primary px-6 py-3.5 rounded-xl shadow-[0_0_30px_rgba(255,0,214,0.6)] backdrop-blur-md flex items-center gap-3 animate-bounce font-medium text-sm">
          <span className="material-symbols-outlined text-lg">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* MOBILE SIDEBAR OVERLAY */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 lg:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        ></div>
      )}

      {/* SIDEBAR NAVIGATION */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-[#131314] z-50 flex flex-col border-r border-white/10 transition-transform duration-300 ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo Section */}
        <div className="p-6 flex items-center justify-between border-b border-white/5">
          <Link
            to="/"
            className="font-headline-md tracking-tighter text-primary neon-glow text-3xl font-bold flex items-center gap-2"
          >
            <span className="w-3 h-3 bg-primary rounded-full animate-ping"></span>
            AfterDark
          </Link>
          <button
            onClick={() => setIsMobileSidebarOpen(false)}
            className="lg:hidden text-on-surface-variant hover:text-white"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          <button
            onClick={() => {
              setActiveTab("dashboard");
              setIsMobileSidebarOpen(false);
            }}
            className={`w-full flex items-center px-4 py-3.5 rounded-xl font-medium text-sm transition-all cursor-pointer ${
              activeTab === "dashboard"
                ? "bg-primary/15 text-primary border-l-4 border-primary shadow-[0_0_20px_rgba(255,0,214,0.25)] font-bold"
                : "text-on-surface-variant hover:text-white hover:bg-white/5"
            }`}
          >
            <span className="material-symbols-outlined mr-3 text-xl">grid_view</span>
            Dashboard
          </button>

          <button
            onClick={() => {
              setActiveTab("my-events");
              setIsMobileSidebarOpen(false);
            }}
            className={`w-full flex items-center px-4 py-3.5 rounded-xl font-medium text-sm transition-all cursor-pointer ${
              activeTab === "my-events"
                ? "bg-primary/15 text-primary border-l-4 border-primary shadow-[0_0_20px_rgba(255,0,214,0.25)] font-bold"
                : "text-on-surface-variant hover:text-white hover:bg-white/5"
            }`}
          >
            <span className="material-symbols-outlined mr-3 text-xl">nightlife</span>
            My Events
          </button>

          <button
            onClick={() => {
              setActiveTab("bookings");
              setIsMobileSidebarOpen(false);
            }}
            className={`w-full flex items-center px-4 py-3.5 rounded-xl font-medium text-sm transition-all cursor-pointer ${
              activeTab === "bookings"
                ? "bg-primary/15 text-primary border-l-4 border-primary shadow-[0_0_20px_rgba(255,0,214,0.25)] font-bold"
                : "text-on-surface-variant hover:text-white hover:bg-white/5"
            }`}
          >
            <span className="material-symbols-outlined mr-3 text-xl">confirmation_number</span>
            Bookings
          </button>

          <button
            onClick={() => {
              setActiveTab("settings");
              setIsMobileSidebarOpen(false);
            }}
            className={`w-full flex items-center px-4 py-3.5 rounded-xl font-medium text-sm transition-all cursor-pointer ${
              activeTab === "settings"
                ? "bg-primary/15 text-primary border-l-4 border-primary shadow-[0_0_20px_rgba(255,0,214,0.25)] font-bold"
                : "text-on-surface-variant hover:text-white hover:bg-white/5"
            }`}
          >
            <span className="material-symbols-outlined mr-3 text-xl">settings</span>
            Settings
          </button>
        </nav>

        {/* User Profile Footer */}
        <div className="mt-auto p-5 border-t border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shadow-[0_0_12px_rgba(255,0,214,0.4)] text-primary">
              <span className="material-symbols-outlined text-xl">person</span>
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-semibold text-white truncate">Alex Vance</span>
              <span className="text-[10px] uppercase tracking-widest text-primary font-bold">
                Premium Member
              </span>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="lg:pl-72 flex flex-col min-h-screen">
        {/* TOP HEADER BAR */}
        <header className="sticky top-0 z-40 h-20 bg-[#0e0e0f]/80 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="lg:hidden text-primary p-2 focus:outline-none"
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
          </div>

          {/* Right Header Actions - Notifications and User Profile Dropdown */}
          <div className="flex items-center gap-4 sm:gap-6 relative">
            
            {/* Notification Bell with Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsNotificationsDropdownOpen(!isNotificationsDropdownOpen);
                  setIsProfileDropdownOpen(false);
                }}
                className="relative p-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer focus:outline-none"
                aria-label="Notifications"
              >
                <span className="material-symbols-outlined text-xl sm:text-2xl">notifications</span>
                {notifications.filter((n) => n.isUnread).length > 0 && (
                  <span className="absolute top-1 right-1 bg-primary text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                    {notifications.filter((n) => n.isUnread).length}
                  </span>
                )}
              </button>

              {isNotificationsDropdownOpen && (
                <>
                  {/* Backdrop to close the menu when clicking outside */}
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsNotificationsDropdownOpen(false)}
                  ></div>
                  <div className="absolute right-0 mt-3 w-80 sm:w-96 rounded-xl bg-[#131314] border border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.5)] py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    
                    {/* Dropdown Header */}
                    <div className="px-4 py-2.5 border-b border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm text-primary">notifications</span>
                        <span className="text-sm font-bold text-white uppercase tracking-wider">
                          Notifications
                        </span>
                      </div>
                      {notifications.some((n) => n.isUnread) && (
                        <button
                          onClick={() => {
                            setNotifications(
                              notifications.map((n) => ({ ...n, isUnread: false }))
                            );
                            showToast("All notifications marked as read");
                          }}
                          className="text-[10px] text-primary hover:underline font-bold uppercase cursor-pointer"
                        >
                          Mark all as read
                        </button>
                      )}
                    </div>

                    {/* Notifications List */}
                    <div className="max-h-72 overflow-y-auto divide-y divide-white/5">
                      {notifications.length === 0 ? (
                        <div className="p-6 text-center text-on-surface-variant/60 text-xs">
                          No notifications found.
                        </div>
                      ) : (
                        notifications.map((n) => (
                          <div
                            key={n.id}
                            className={`p-3.5 transition-colors flex gap-3 items-start group ${
                              n.isUnread ? "bg-white/[0.02]" : "opacity-75 hover:bg-white/[0.01]"
                            }`}
                          >
                            {/* Type Icon */}
                            <div className="mt-0.5">
                              {n.type === "ticket" && (
                                <span className="material-symbols-outlined text-primary text-lg">
                                  confirmation_number
                                </span>
                              )}
                              {n.type === "system" && (
                                <span className="material-symbols-outlined text-cyan-400 text-lg">
                                  diamond
                                </span>
                              )}
                              {n.type === "event" && (
                                <span className="material-symbols-outlined text-purple-400 text-lg">
                                  campaign
                                </span>
                              )}
                            </div>

                            {/* Details */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2">
                                <p className={`text-xs font-bold text-white ${n.isUnread ? "font-bold" : "font-semibold"}`}>
                                  {n.title}
                                </p>
                                <span className="text-[9px] text-on-surface-variant/60 font-medium whitespace-nowrap">
                                  {n.time}
                                </span>
                              </div>
                              <p className="text-xs text-on-surface-variant mt-0.5 leading-normal">
                                {n.description}
                              </p>
                              
                              {/* Inline Actions */}
                              {n.isUnread && (
                                <button
                                  onClick={() => {
                                    setNotifications(
                                      notifications.map((item) =>
                                        item.id === n.id ? { ...item, isUnread: false } : item
                                      )
                                    );
                                    showToast("Notification marked as read");
                                  }}
                                  className="mt-2 text-[10px] text-primary font-bold uppercase hover:underline cursor-pointer flex items-center gap-1"
                                >
                                  <span className="material-symbols-outlined text-xs">done</span>
                                  Mark as read
                                </button>
                              )}
                            </div>

                            {/* Dismiss button */}
                            <button
                              onClick={() => {
                                setNotifications(notifications.filter((item) => item.id !== n.id));
                                showToast("Notification dismissed");
                              }}
                              className="text-on-surface-variant hover:text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer p-0.5"
                              title="Dismiss"
                            >
                              <span className="material-symbols-outlined text-xs">close</span>
                            </button>
                          </div>
                        ))
                      )}
                    </div>

                    {/* Footer */}
                    {notifications.length > 0 && (
                      <div className="px-4 py-2 border-t border-white/5 flex justify-end">
                        <button
                          onClick={() => {
                            setNotifications([]);
                            showToast("All notifications cleared");
                          }}
                          className="text-[10px] text-rose-400 hover:text-rose-300 font-bold uppercase cursor-pointer"
                        >
                          Clear all
                        </button>
                      </div>
                    )}

                  </div>
                </>
              )}
            </div>

            {/* User Profile Area */}
            <div className="relative">
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity focus:outline-none cursor-pointer"
              >
                <div className="w-8 h-8 sm:w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary shadow-[0_0_10px_rgba(255,0,214,0.3)]">
                  <span className="material-symbols-outlined text-lg sm:text-xl">person</span>
                </div>
                <span className="text-sm font-semibold text-white hidden sm:inline select-none">
                  Alex Vance
                </span>
                <span className="material-symbols-outlined text-on-surface-variant text-sm transition-transform select-none">
                  {isProfileDropdownOpen ? "expand_less" : "expand_more"}
                </span>
              </button>

              {/* Profile Dropdown Menu */}
              {isProfileDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsProfileDropdownOpen(false)}
                  ></div>
                  <div className="absolute right-0 mt-3 w-56 rounded-xl bg-[#131314] border border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.5)] py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-4 py-2 border-b border-white/5">
                      <p className="text-[10px] text-on-surface-variant uppercase tracking-wider font-bold">
                        Authenticated as
                      </p>
                      <p className="text-sm font-bold text-white truncate">Alex Vance</p>
                    </div>
                    <button
                      onClick={() => {
                        setActiveTab("settings");
                        setIsProfileDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-on-surface-variant hover:text-white hover:bg-white/5 transition-all text-left cursor-pointer font-medium"
                    >
                      <span className="material-symbols-outlined text-lg text-primary">person</span>
                      Profile Info
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab("settings");
                        setIsProfileDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-on-surface-variant hover:text-white hover:bg-white/5 transition-all text-left cursor-pointer font-medium"
                    >
                      <span className="material-symbols-outlined text-lg text-primary">settings</span>
                      Account Settings
                    </button>
                    <div className="h-[1px] bg-white/5 my-1"></div>
                    <button
                      onClick={() => {
                        setIsProfileDropdownOpen(false);
                        showToast("Logging out...");
                        setTimeout(() => {
                          navigate("/");
                        }, 1000);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-rose-400 hover:text-rose-300 hover:bg-rose-950/20 transition-all text-left cursor-pointer font-medium"
                    >
                      <span className="material-symbols-outlined text-lg">logout</span>
                      Logout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* MAIN BODY CONTENT BASED ON ACTIVE TAB */}
        <main className="p-4 sm:p-8 lg:p-12 flex-1 space-y-8">
          
          {/* TAB 1: DASHBOARD OVERVIEW */}
          {activeTab === "dashboard" && (
            <div className="space-y-8 animate-in fade-in duration-300">
              
              {/* Network Status & Loyalty Tier Bar */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/5 pb-6">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary block mb-1">
                    NETWORK STATUS
                  </span>
                  <div className="flex items-center gap-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-display-lg text-white font-bold tracking-tighter">
                      APEX PREDATOR
                    </h1>
                    <div className="h-[2px] w-12 bg-primary shadow-[0_0_15px_rgba(255,0,214,1)] hidden sm:block"></div>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end">
                  <span className="text-[10px] font-bold text-on-surface-variant tracking-widest uppercase mb-1">
                    LOYALTY TIER
                  </span>
                  <div className="flex items-center gap-2.5 bg-white/5 px-4 py-2 rounded-xl border-l-4 border-primary border border-white/10 shadow-[0_0_15px_rgba(255,0,214,0.2)]">
                    <span className="material-symbols-outlined text-primary text-xl">diamond</span>
                    <span className="font-headline-md text-xl sm:text-2xl font-bold text-white tracking-wider">
                      PHANTOM
                    </span>
                  </div>
                </div>
              </div>

              {/* Priority One Event Hero Banner */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 group bg-[#131314] shadow-2xl">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#131314] via-[#131314]/50 to-black/60"></div>
                <img
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=80"
                  alt="Neon Zenith Tokyo concert stage"
                  className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 opacity-60"
                />
                
                <div className="relative z-20 p-6 sm:p-10 md:p-12 flex flex-col justify-end min-h-[380px] sm:min-h-[440px]">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="bg-primary text-on-primary font-bold text-[10px] uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(255,0,214,0.5)]">
                      Upcoming / Priority One
                    </span>
                    <span className="bg-black/60 backdrop-blur-md text-white font-bold text-[10px] uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-white/20">
                      Tokyo, JPN
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                      <h2 className="text-3xl sm:text-5xl md:text-6xl font-display-lg text-white font-bold tracking-tighter leading-tight mb-3">
                        NEON ZENITH: <span className="text-primary neon-glow">TOKYO</span>
                      </h2>
                      
                      <div className="flex flex-wrap items-center gap-6 text-on-surface-variant text-xs sm:text-sm">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">
                            Access Level
                          </span>
                          <span className="font-bold text-primary text-base sm:text-lg">
                            ULTRA-VIP / TIER 1
                          </span>
                        </div>
                        <div className="w-[1px] h-8 bg-white/20 hidden sm:block"></div>
                        <div className="flex flex-col">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">
                            Date
                          </span>
                          <span className="font-bold text-white text-base sm:text-lg">
                            24.08.2024
                          </span>
                        </div>
                      </div>
                    </div>

                    <Link
                      to="/ticket-preview"
                      className="px-8 py-4 bg-primary text-on-primary font-bold text-xs uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(255,0,214,0.5)] hover:shadow-[0_0_40px_rgba(255,0,214,0.8)] hover:scale-105 active:scale-95 transition-all cursor-pointer self-start md:self-auto"
                    >
                      <span>VIEW DIGITAL PASS</span>
                      <span className="material-symbols-outlined text-xl">qr_code_2</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Stats Cards Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Total Experiences */}
                <div className="bg-[#131314] p-6 rounded-2xl border border-white/10 hover:border-primary/40 transition-colors group space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-primary tracking-widest uppercase">
                      Total Experiences
                    </span>
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-xl">
                      analytics
                    </span>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl sm:text-5xl font-bold font-display-lg text-white">
                      {stats.total}
                    </span>
                    <span className="text-primary text-sm font-bold">+12%</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full shadow-[0_0_10px_rgba(255,0,214,1)] w-3/4"></div>
                  </div>
                </div>

                {/* Upcoming Slots */}
                <div className="bg-[#131314] p-6 rounded-2xl border border-white/10 hover:border-primary/40 transition-colors group space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-primary tracking-widest uppercase">
                      Upcoming Slots
                    </span>
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-xl">
                      calendar_today
                    </span>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl sm:text-5xl font-bold font-display-lg text-white">
                      0{stats.upcoming}
                    </span>
                    <span className="text-on-surface-variant text-xs font-semibold">Confirmed</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full shadow-[0_0_10px_rgba(255,0,214,1)] w-1/3"></div>
                  </div>
                </div>

                {/* Memories Log */}
                <div className="bg-[#131314] p-6 rounded-2xl border border-white/10 hover:border-primary/40 transition-colors group space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-primary tracking-widest uppercase">
                      Memories Log
                    </span>
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-xl">
                      history_edu
                    </span>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl sm:text-5xl font-bold font-display-lg text-white">
                      {stats.memories.toLocaleString()}
                    </span>
                    <span className="text-primary text-xs font-semibold">GB Collected</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full shadow-[0_0_10px_rgba(255,0,214,1)] w-full"></div>
                  </div>
                </div>

              </div>

              {/* Bottom Ledger & Memories Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Transaction Ledger */}
                <div className="lg:col-span-7 bg-[#131314] p-6 sm:p-8 rounded-2xl border border-white/10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-white tracking-wide font-headline-md">
                      TRANSACTION LEDGER
                    </h3>
                    <button
                      onClick={handleExportCSV}
                      className="text-primary text-xs font-bold uppercase tracking-widest hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <span>EXPORT CSV</span>
                      <span className="material-symbols-outlined text-sm">download</span>
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-white/10 text-on-surface-variant/70 uppercase tracking-wider font-semibold text-[10px]">
                          <th className="pb-3">Service / Event</th>
                          <th className="pb-3">Date</th>
                          <th className="pb-3">Type</th>
                          <th className="pb-3 text-right">Credits</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        <tr className="group">
                          <td className="py-4 font-semibold text-white group-hover:text-primary transition-colors">
                            Cyberdeck Upgrade Tier 2
                          </td>
                          <td className="py-4 text-on-surface-variant font-mono text-xs">
                            JUL 12, 2024
                          </td>
                          <td className="py-4">
                            <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-bold text-on-surface-variant">
                              ASSET
                            </span>
                          </td>
                          <td className="py-4 text-right font-bold text-primary font-mono">
                            - 1,200
                          </td>
                        </tr>
                        <tr className="group">
                          <td className="py-4 font-semibold text-white group-hover:text-primary transition-colors">
                            Neon Zenith Early Entry
                          </td>
                          <td className="py-4 text-on-surface-variant font-mono text-xs">
                            JUL 08, 2024
                          </td>
                          <td className="py-4">
                            <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-bold text-on-surface-variant">
                              TICKET
                            </span>
                          </td>
                          <td className="py-4 text-right font-bold text-primary font-mono">
                            - 4,500
                          </td>
                        </tr>
                        <tr className="group">
                          <td className="py-4 font-semibold text-white group-hover:text-primary transition-colors">
                            Phantom Tier Re-Up
                          </td>
                          <td className="py-4 text-on-surface-variant font-mono text-xs">
                            JUN 30, 2024
                          </td>
                          <td className="py-4">
                            <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-bold text-on-surface-variant">
                              SUB
                            </span>
                          </td>
                          <td className="py-4 text-right font-bold text-primary font-mono">
                            - 8,000
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Memories Archive */}
                <div className="lg:col-span-5 bg-[#131314] p-6 sm:p-8 rounded-2xl border border-white/10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-white tracking-wide font-headline-md">
                      MEMORIES ARCHIVE
                    </h3>
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary cursor-pointer">grid_view</span>
                      <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">reorder</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Memory 1 */}
                    <div className="relative group aspect-square rounded-xl overflow-hidden border border-white/10 bg-white/5">
                      <img
                        src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80"
                        alt="Glitch Protocol rave"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                        <span className="text-[10px] font-bold text-primary block">05.24</span>
                        <span className="text-xs font-bold text-white uppercase tracking-wider">
                          Glitch Protocol
                        </span>
                      </div>
                    </div>

                    {/* Memory 2 */}
                    <div className="relative group aspect-square rounded-xl overflow-hidden border border-white/10 bg-white/5">
                      <img
                        src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80"
                        alt="Neon Abyss club"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                        <span className="text-[10px] font-bold text-primary block">04.12</span>
                        <span className="text-xs font-bold text-white uppercase tracking-wider">
                          Neon Abyss
                        </span>
                      </div>
                    </div>

                    {/* Memory 3 */}
                    <div className="relative group aspect-square rounded-xl overflow-hidden border border-white/10 bg-white/5">
                      <img
                        src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80"
                        alt="The Void light beam"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                        <span className="text-[10px] font-bold text-primary block">02.28</span>
                        <span className="text-xs font-bold text-white uppercase tracking-wider">
                          The Void
                        </span>
                      </div>
                    </div>

                    {/* Upload Memory Action Card */}
                    <button
                      onClick={() => setShowUploadModal(true)}
                      className="relative group aspect-square rounded-xl border-2 border-dashed border-white/20 flex flex-col items-center justify-center hover:border-primary transition-all cursor-pointer bg-white/[0.01] hover:bg-white/[0.03]"
                    >
                      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary group-hover:scale-125 transition-all text-3xl">
                        add_circle
                      </span>
                      <span className="text-[10px] font-bold text-on-surface-variant mt-2 uppercase tracking-widest group-hover:text-white">
                        Upload Data
                      </span>
                    </button>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: MY EVENTS */}
          {activeTab === "my-events" && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="border-b border-white/10 pb-4">
                <h1 className="text-3xl font-bold font-display-lg text-white">My Events &amp; Passes</h1>
                <p className="text-sm text-on-surface-variant">View your active ticket passes and past attended residencies.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Active Event 1 */}
                <div className="bg-[#131314] border border-white/10 hover:border-primary/50 rounded-2xl overflow-hidden transition-all group flex flex-col justify-between">
                  <div>
                    <div className="h-48 relative overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80"
                        alt="Tokyo"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-[0_0_10px_rgba(255,0,214,0.6)]">
                        CONFIRMED PASS
                      </span>
                    </div>
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        Electric Noir: Tokyo
                      </h3>
                      <p className="text-xs text-on-surface-variant flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-base">calendar_today</span>
                        Sat, 24 May 2025 (7:30 PM)
                      </p>
                      <p className="text-xs text-on-surface-variant flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-base">location_on</span>
                        BICC Hall, Dhaka / Tokyo Residency
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <Link
                      to="/ticket-preview"
                      className="w-full py-3 bg-primary text-on-primary font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,0,214,0.4)] hover:scale-[1.02] active:scale-98 transition-all"
                    >
                      <span>View Pass</span>
                      <span className="material-symbols-outlined text-lg">qr_code_2</span>
                    </Link>
                  </div>
                </div>

                {/* Active Event 2 */}
                <div className="bg-[#131314] border border-white/10 hover:border-primary/50 rounded-2xl overflow-hidden transition-all group flex flex-col justify-between">
                  <div>
                    <div className="h-48 relative overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80"
                        alt="Singapore"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-secondary-container text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                        VIP RESERVED
                      </span>
                    </div>
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        Harbour Pulse: Singapore
                      </h3>
                      <p className="text-xs text-on-surface-variant flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-base">calendar_today</span>
                        Sat, 05 Oct 2024 (9:00 PM)
                      </p>
                      <p className="text-xs text-on-surface-variant flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-base">location_on</span>
                        Marina Bay Sands SkyDeck
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => showToast("Opening pass details...")}
                      className="w-full py-3 border border-white/20 hover:border-primary text-white font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <span>Pass Details</span>
                      <span className="material-symbols-outlined text-lg">confirmation_number</span>
                    </button>
                  </div>
                </div>

                {/* Active Event 3 */}
                <div className="bg-[#131314] border border-white/10 hover:border-primary/50 rounded-2xl overflow-hidden transition-all group flex flex-col justify-between">
                  <div>
                    <div className="h-48 relative overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80"
                        alt="Bangkok"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20">
                        GENERAL RELEASE
                      </span>
                    </div>
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        Tropical Noir: Bangkok
                      </h3>
                      <p className="text-xs text-on-surface-variant flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-base">calendar_today</span>
                        Mon, 18 Nov 2024 (8:00 PM)
                      </p>
                      <p className="text-xs text-on-surface-variant flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-base">location_on</span>
                        Sukhumvit Villa Warehouse
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => showToast("Opening pass details...")}
                      className="w-full py-3 border border-white/20 hover:border-primary text-white font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <span>Pass Details</span>
                      <span className="material-symbols-outlined text-lg">confirmation_number</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: BOOKINGS */}
          {activeTab === "bookings" && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="border-b border-white/10 pb-4">
                <h1 className="text-3xl font-bold font-display-lg text-white">Booking Management</h1>
                <p className="text-sm text-on-surface-variant">Review all tickets, subscriptions, and asset purchases.</p>
              </div>

              <div className="bg-[#131314] rounded-2xl border border-white/10 p-6 space-y-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-white/10 text-on-surface-variant/70 uppercase tracking-wider font-semibold text-[10px]">
                        <th className="pb-4">Booking ID</th>
                        <th className="pb-4">Item / Event</th>
                        <th className="pb-4">Category</th>
                        <th className="pb-4">Date</th>
                        <th className="pb-4">Status</th>
                        <th className="pb-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-4 font-mono font-semibold text-primary">ENR-20250524-78291</td>
                        <td className="py-4 font-bold text-white">Electric Noir Live Concert</td>
                        <td className="py-4 text-xs text-on-surface-variant">Ticket (VIP-A)</td>
                        <td className="py-4 text-xs font-mono text-on-surface-variant">20 May 2025</td>
                        <td className="py-4">
                          <span className="px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                            CONFIRMED
                          </span>
                        </td>
                        <td className="py-4 text-right">
                          <Link
                            to="/ticket-preview"
                            className="text-primary hover:underline font-semibold text-xs"
                          >
                            View Ticket
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 font-mono font-semibold text-primary">ENR-20240712-44102</td>
                        <td className="py-4 font-bold text-white">Cyberdeck Upgrade Tier 2</td>
                        <td className="py-4 text-xs text-on-surface-variant">Asset</td>
                        <td className="py-4 text-xs font-mono text-on-surface-variant">12 Jul 2024</td>
                        <td className="py-4">
                          <span className="px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                            COMPLETED
                          </span>
                        </td>
                        <td className="py-4 text-right">
                          <button
                            onClick={() => showToast("Downloading asset invoice...")}
                            className="text-primary hover:underline font-semibold text-xs cursor-pointer"
                          >
                            Invoice
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 font-mono font-semibold text-primary">ENR-20240630-11029</td>
                        <td className="py-4 font-bold text-white">Phantom Tier Re-Up</td>
                        <td className="py-4 text-xs text-on-surface-variant">Subscription</td>
                        <td className="py-4 text-xs font-mono text-on-surface-variant">30 Jun 2024</td>
                        <td className="py-4">
                          <span className="px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                            ACTIVE TIER
                          </span>
                        </td>
                        <td className="py-4 text-right">
                          <button
                            onClick={() => showToast("Tier re-up invoice generated")}
                            className="text-primary hover:underline font-semibold text-xs cursor-pointer"
                          >
                            Receipt
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SETTINGS */}
          {activeTab === "settings" && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="border-b border-white/10 pb-4">
                <h1 className="text-3xl font-bold font-display-lg text-white">Account &amp; Access Settings</h1>
                <p className="text-sm text-on-surface-variant">Manage your profile, security keys, and notifications.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Profile Information */}
                <div className="bg-[#131314] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
                  <h3 className="text-lg font-bold text-white border-b border-white/10 pb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">person</span>
                    Profile Details
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Alex Vance"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm outline-none focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        defaultValue="alex.vance@electricnoir.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm outline-none focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block mb-1.5">
                        Membership Badge
                      </label>
                      <input
                        type="text"
                        disabled
                        defaultValue="PHANTOM TIER (APEX PREDATOR)"
                        className="w-full bg-white/5 border border-primary/30 rounded-xl px-4 py-2.5 text-primary font-bold text-sm outline-none cursor-not-allowed opacity-80"
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => showToast("Profile settings saved successfully!")}
                    className="px-6 py-3 bg-primary text-on-primary font-bold text-xs uppercase tracking-widest rounded-xl hover:shadow-[0_0_20px_rgba(255,0,214,0.5)] transition-all cursor-pointer"
                  >
                    Save Changes
                  </button>
                </div>

                {/* Security & Access Keys */}
                <div className="bg-[#131314] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
                  <h3 className="text-lg font-bold text-white border-b border-white/10 pb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">key</span>
                    Security &amp; API Key
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block mb-1.5">
                        VIP Access Token Key
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="password"
                          readOnly
                          defaultValue="ad_live_key_99218410294819284"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm font-mono outline-none"
                        />
                        <button
                          onClick={() => showToast("API Key copied to clipboard!")}
                          className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold uppercase transition-all"
                        >
                          Copy
                        </button>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-white/5">
                      <div>
                        <span className="text-sm font-semibold text-white block">Two-Factor Authentication</span>
                        <span className="text-xs text-on-surface-variant">Enhanced account protection</span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                        ENABLED
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* UPLOAD MEMORY MODAL */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#18171c] border border-white/10 rounded-2xl max-w-md w-full p-6 space-y-4 relative shadow-2xl animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">cloud_upload</span>
                Upload Memory Media
              </h3>
              <button
                onClick={() => setShowUploadModal(false)}
                className="text-on-surface-variant hover:text-white"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="border-2 border-dashed border-white/20 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary transition-colors">
              <span className="material-symbols-outlined text-4xl text-primary mb-2">add_a_photo</span>
              <p className="text-xs font-bold text-white uppercase tracking-wider">
                Click or Drop Files to Upload
              </p>
              <p className="text-[10px] text-on-surface-variant/70 mt-1">
                Supports JPG, PNG, MP4 up to 50MB
              </p>
            </div>
            <div className="pt-2 flex justify-end gap-3">
              <button
                onClick={() => setShowUploadModal(false)}
                className="px-4 py-2 rounded-xl bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowUploadModal(false);
                  showToast("Memory media uploaded successfully! 📸");
                }}
                className="px-4 py-2 rounded-xl bg-primary text-on-primary text-xs font-bold uppercase tracking-wider hover:shadow-[0_0_15px_rgba(255,0,214,0.5)] transition-all"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ADD CREDITS MODAL */}
      {showCreditsModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#18171c] border border-white/10 rounded-2xl max-w-md w-full p-6 space-y-4 relative shadow-2xl animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">token</span>
                Top-Up Credits Portal
              </h3>
              <button
                onClick={() => setShowCreditsModal(false)}
                className="text-on-surface-variant hover:text-white"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <p className="text-xs text-on-surface-variant">Select a credit pack to top up your portal balance instantly:</p>
            
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => handleAddCredits(1000)}
                className="p-3 bg-white/5 border border-white/10 hover:border-primary rounded-xl text-center cursor-pointer transition-all hover:scale-105"
              >
                <span className="text-lg font-bold text-white block">+1,000</span>
                <span className="text-[10px] text-primary font-bold">৳1,000</span>
              </button>

              <button
                onClick={() => handleAddCredits(2500)}
                className="p-3 bg-white/5 border border-primary/40 hover:border-primary rounded-xl text-center cursor-pointer transition-all hover:scale-105 shadow-[0_0_15px_rgba(255,0,214,0.2)]"
              >
                <span className="text-lg font-bold text-white block">+2,500</span>
                <span className="text-[10px] text-primary font-bold">৳2,400</span>
              </button>

              <button
                onClick={() => handleAddCredits(5000)}
                className="p-3 bg-white/5 border border-white/10 hover:border-primary rounded-xl text-center cursor-pointer transition-all hover:scale-105"
              >
                <span className="text-lg font-bold text-white block">+5,000</span>
                <span className="text-[10px] text-primary font-bold">৳4,500</span>
              </button>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowCreditsModal(false)}
                className="px-4 py-2 rounded-xl bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
