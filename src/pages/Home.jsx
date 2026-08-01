import { useEffect } from "react";
import { Link } from "react-router";

export default function Home() {
  useEffect(() => {
    // Simple Scroll Reveal Logic
    const reveal = () => {
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    reveal(); // Initial check

    // Parallax-ish Effect for Hero
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const heroText = document.querySelector("header .relative.z-10");
      const heroVideo = document.querySelector("header video");
      if (heroText) {
        heroText.style.transform = `translateY(${scrolled * 0.25}px)`;
        heroText.style.opacity = 1 - scrolled / 800;
      }
      if (heroVideo) {
        heroVideo.style.transform = `translateY(${scrolled * 0.12}px) scale(1.05)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <header className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Fullscreen Video Background */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            ref={(el) => {
              if (el) {
                el.muted = true;
                el.play().catch(() => {});
              }
            }}
            className="w-full h-full object-cover opacity-85 scale-100"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
            <source
              src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4"
              type="video/mp4"
            />
            <source
              src="https://vjs.zencdn.net/v/oceans.mp4"
              type="video/mp4"
            />
          </video>
          {/* Light overlay for text contrast without hiding background video */}
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/60"></div>
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 md:px-16 pt-24 pb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary text-on-primary px-5 py-1.5 rounded-full text-base font-billion tracking-normal mb-6 shadow-[0_0_20px_rgba(255,0,214,0.6)]">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              Asia's Premier Nightlife &amp; Event Partner
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display-lg text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-lg">
              Luxury Event Management for <span className="text-primary italic neon-glow">Exclusive</span> Experiences
            </h1>

            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-10 leading-relaxed drop-shadow-md">
              We bring vision to life through seamless planning, immersive stage concepts, high-fidelity sound, and world-class production execution.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/solutions"
                className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded-full transition-all hover:shadow-[0_0_25px_rgba(255,0,214,0.6)] hover:scale-105 active:scale-95 shadow-lg"
              >
                Explore Event Solutions
              </a>
              <a
                href="#about"
                className="border border-white/30 bg-black/40 backdrop-blur-md text-white font-label-caps text-label-caps px-8 py-4 rounded-full hover:bg-white/20 transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-80 animate-bounce cursor-pointer hover:opacity-100 transition-opacity"
          onClick={() =>
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="text-[10px] tracking-[0.4em] text-primary uppercase font-bold">
            SCROLL
          </span>
          <span className="material-symbols-outlined text-primary">
            expand_more
          </span>
        </div>
      </header>

      {/* About Section */}
      <section
        className="py-24 md:py-32 px-5 md:px-16 max-w-[1440px] mx-auto reveal"
        id="about"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-primary text-[11px] font-bold uppercase tracking-[0.3em] mb-4 block">
              THE PHILOSOPHY
            </span>
            <h2 className="text-4xl md:text-[40px] font-display-lg text-on-surface mb-8 tracking-tighter leading-[1.1]">
              Luxury, Exclusivity, Immersive Production.
            </h2>
            <p className="text-lg text-on-surface-variant mb-6 leading-relaxed">
              AfterDark isn't just an event; it's a curated odyssey into the
              heart of nightlife. We redefine the boundaries of sonic and visual
              storytelling, creating ethereal landscapes where music and
              technology converge.
            </p>
            <p className="text-base text-on-surface-variant/80">
              From underground boutique sessions in Tokyo to massive festivals
              in Singapore, every detail is meticulously engineered for the most
              discerning audience.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 opacity-20 blur-3xl group-hover:opacity-40 transition-opacity"></div>
            <div className="glass rounded-2xl overflow-hidden aspect-[4/5] border border-white/10">
              <img
                className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700"
                alt="Luxury event space"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB_z1Qwv0bQFIY7sROLNgy6Q6vzTC_aCTitHq7ci0OzhYBiJw0RDsB1ecegZEvIzYmhqp-LpP3mhNTtSDduCF4tLvO4_I4DM11TJjDgyDbljJoAX7NjCVI4hJ5VasVzPAQBDLme15aqlr0KBzGaxZwgrNV-r_J4FJxRR4zKAQHBu09BCxJ6JASkIzCFHLVjUMhzLyCyBlq7kvfLo32T0zxJsGxyXM4S-VIW8Qa_42RvUtKHc0_OSe0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Residencies */}
      <section className="pb-24 pt-12 md:pb-32 px-5 md:px-16 max-w-[1440px] mx-auto reveal">
        <h2 className="text-4xl md:text-[40px] font-display-lg text-on-surface mb-12 md:mb-16 tracking-tighter">
          Global Residencies
        </h2>
        <div className="space-y-12">
          {/* Event 1 */}
          <div className="glass rounded-2xl overflow-hidden flex flex-col lg:flex-row group hover:border-primary/50 transition-all card-glow border border-white/5">
            <div className="lg:w-2/5 h-64 lg:h-auto relative overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                alt="Tokyo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcqgBl7CA40xwBpctb-nukSiW2nGrbxKe9dnwNZKtlQFctoYb9_55eHbysuJgz5he50lX9YM7qIBkvEJvJG9lrK26jwODQJK6oWdBfPFMJg7BpG6f-D6o_ZGsCGQRabXQ_AfbzlHaN-hr4XTBid65xNzpXl79rVKNRip8CRtjUBKrBmcqf6xLQ20B-7VdQymgSjeGHjC-RQyBSPlQk4TmeE1t50R5b9wv2ggNn8rJOOLMXzQtfG_Bd"
              />
              <div className="absolute top-4 left-4 bg-primary/20 backdrop-blur-md px-4 py-1 rounded-full border border-primary/40">
                <span className="text-white text-[10px] font-bold tracking-[0.1em] uppercase">
                  Limited
                </span>
              </div>
            </div>
            <div className="lg:w-3/5 p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-md border border-primary/30 px-3 py-1 rounded-full mb-6 self-start">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
                  LIVE NOW
                </span>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                <div>
                  <span className="text-primary text-[11px] font-bold uppercase block mb-2 tracking-[0.3em]">
                    September 12 • 2024
                  </span>
                  <h3 className="text-3xl md:text-[40px] font-display-lg text-on-surface tracking-tighter">
                    Neon Zenith: Tokyo
                  </h3>
                </div>
                <div className="md:text-right">
                  <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-[0.1em]">
                    OMOTESANDO HILLS
                  </p>
                  <p className="text-primary font-bold text-sm tracking-tight">
                    VIP ONLY
                  </p>
                </div>
              </div>
              <p className="text-on-surface-variant text-base mb-8 max-w-xl">
                Join us for an exclusive 8-hour takeover featuring a curated
                lineup of techno pioneers in the heart of Tokyo's most iconic
                district.
              </p>
              <Link
                to="/ticket-preview"
                className="self-start inline-block px-8 py-3.5 bg-primary text-on-primary text-[11px] font-bold rounded-lg hover:shadow-[0_0_25px_rgba(255,0,214,0.6)] transition-all uppercase tracking-[0.1em]"
              >
                Secure Tickets
              </Link>
            </div>
          </div>

          {/* Event 2 */}
          <div className="glass rounded-2xl overflow-hidden flex flex-col lg:flex-row-reverse group hover:border-secondary/50 transition-all card-glow border border-white/5">
            <div className="lg:w-2/5 h-64 lg:h-auto relative overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                alt="Singapore"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQSyFrtEk5eZaRrC-7bUt-6qvHi1xCr-Q4YKEzVwyvVlYevABjdSo6LnFORoNNK2LuDsTw6mQnqjNInYpeyxrH1QK4IYh5VaK-PlmkPRk3Akgqf1WmQX5Af6eAPq3tOhIWKcF8i5QBRrye7E55FqmA8fCT9zmHZER2GiTAOLbgmO2jMOhMBXuAgaaTEuZ7h8Y0p63EoHIkWkcGOYF6Eb1JMsnSwo_zstmLu7FjViC-oO6siB8WgOWC"
              />
              <div className="absolute top-4 right-4 bg-error-container/20 backdrop-blur-md px-4 py-1 rounded-full border border-error-container/30">
                <span className="text-error text-[10px] font-bold tracking-[0.1em] uppercase">
                  Sold Out
                </span>
              </div>
            </div>
            <div className="lg:w-3/5 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                <div>
                  <span className="text-secondary text-[11px] font-bold uppercase block mb-2 tracking-[0.3em]">
                    October 05 • 2024
                  </span>
                  <h3 className="text-3xl md:text-[40px] font-display-lg text-on-surface tracking-tighter">
                    Harbour Pulse: Singapore
                  </h3>
                </div>
                <div className="md:text-right">
                  <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-[0.1em]">
                    MARINA BAY SANDS
                  </p>
                  <p className="text-secondary font-bold text-sm tracking-tight">
                    WAITLIST OPEN
                  </p>
                </div>
              </div>
              <p className="text-on-surface-variant text-base mb-8 max-w-xl">
                A panoramic auditory experience overlooking the Singapore
                skyline. 360-degree immersive projection mapping and spatial
                audio.
              </p>
              <button className="self-start px-8 py-3.5 border border-secondary text-secondary text-[11px] font-bold rounded-lg hover:bg-secondary/10 transition-all uppercase tracking-[0.1em]">
                Join Waitlist
              </button>
            </div>
          </div>

          {/* Event 3*/}
          <div className="glass rounded-2xl overflow-hidden flex flex-col lg:flex-row group hover:border-primary/50 transition-all card-glow border border-white/5">
            <div className="lg:w-2/5 h-64 lg:h-auto relative overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                alt="Bangkok"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPMHF_O7HdZz14zqR68NGB3U28Qxm-nekr6sM-4dyRN0khWMhKC2uMpT7-ow1aX0Zp5IfkJGrm0bqP8xRN7NQ4LmwkyzUDVKIlByUrYLjrKWwEdWaLd4HsJFEODCzngrV0GVRtTBpqbe9EtimiW7bBJoj2AYyi-IdLbEq68aQmcK91zrJiIcaArB41-gnEclDZ6YIIAEB41mFShMXk6JnXtTOmE_ZDuB0RYnzQMNz7XBrHWMnjadS0"
              />
              <div className="absolute top-4 left-4 bg-primary/20 backdrop-blur-md px-4 py-1 rounded-full border border-primary/40">
                <span className="text-white text-[10px] font-bold tracking-[0.1em] uppercase">
                  Filling Fast
                </span>
              </div>
            </div>
            <div className="lg:w-3/5 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                <div>
                  <span className="text-primary text-[11px] font-bold uppercase block mb-2 tracking-[0.3em]">
                    November 18 • 2024
                  </span>
                  <h3 className="text-3xl md:text-[40px] font-display-lg text-on-surface tracking-tighter">
                    Tropical Noir: Bangkok
                  </h3>
                </div>
                <div className="md:text-right">
                  <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-[0.1em]">
                    SUKHUMVIT VILLA
                  </p>
                  <p className="text-primary font-bold text-sm tracking-tight">
                    GENERAL RELEASE
                  </p>
                </div>
              </div>
              <p className="text-on-surface-variant text-base mb-8 max-w-xl">
                An intimate jungle-themed warehouse transformation. Expect rare
                house grooves and bespoke botanical cocktail experiences.
              </p>
              <Link
                to="/ticket-preview"
                className="self-start inline-block px-8 py-3.5 bg-primary text-on-primary text-[11px] font-bold rounded-lg hover:shadow-[0_0_25px_rgba(255,0,214,0.6)] transition-all uppercase tracking-[0.1em]"
              >
                Secure Tickets
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 bg-surface-container-low border-y border-white/5 reveal">
        <div className="px-5 md:px-16 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            <div>
              <h4 className="text-4xl md:text-5xl font-display-lg text-primary neon-glow mb-2 tracking-tighter">
                500+
              </h4>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-on-surface-variant">
                Events
              </p>
            </div>
            <div>
              <h4 className="text-4xl md:text-5xl font-display-lg text-secondary neon-glow mb-2 tracking-tighter">
                2k+
              </h4>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-on-surface-variant">
                Artists
              </p>
            </div>
            <div>
              <h4 className="text-4xl md:text-5xl font-display-lg text-primary-fixed neon-glow mb-2 tracking-tighter">
                1M+
              </h4>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-on-surface-variant">
                Attendees
              </p>
            </div>
            <div>
              <h4 className="text-4xl md:text-5xl font-display-lg text-secondary-container neon-glow mb-2 tracking-tighter">
                15
              </h4>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-on-surface-variant">
                Countries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Solutions - Bento Grid */}
      <section
        className="py-24 md:py-32 bg-surface-container-lowest/50"
        id="solutions"
      >
        <div className="px-5 md:px-16 max-w-[1440px] mx-auto reveal">
          <div className="mb-12 md:mb-20 text-center">
            <h2 className="text-4xl md:text-[40px] font-display-lg text-primary mb-4 tracking-tighter neon-glow">
              Event Solutions
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full shadow-[0_0_20px_rgba(255,0,214,0.6)]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="glass p-8 md:p-10 rounded-2xl neon-border-hover border border-white/5 group">
              <span
                className="material-symbols-outlined text-4xl text-primary mb-6 block group-hover:scale-110 transition-transform neon-glow"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                music_note
              </span>
              <h3 className="text-2xl font-display-lg text-on-surface mb-4 tracking-tight">
                Concerts
              </h3>
              <p className="text-on-surface-variant text-base">
                High-fidelity acoustic engineering for intimate performances by
                global icons.
              </p>
            </div>
            <div className="glass p-8 md:p-10 rounded-2xl neon-border-hover border border-white/5 group">
              <span
                className="material-symbols-outlined text-4xl text-primary mb-6 block group-hover:scale-110 transition-transform neon-glow"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                festival
              </span>
              <h3 className="text-2xl font-display-lg text-on-surface mb-4 tracking-tight">
                Festivals
              </h3>
              <p className="text-on-surface-variant text-base">
                Multi-stage logistics and immersive environment design for
                large-scale gatherings.
              </p>
            </div>
            <div className="glass p-8 md:p-10 rounded-2xl neon-border-hover border border-white/5 group">
              <span
                className="material-symbols-outlined text-4xl text-primary mb-6 block group-hover:scale-110 transition-transform neon-glow"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                business_center
              </span>
              <h3 className="text-2xl font-display-lg text-on-surface mb-4 tracking-tight">
                Corporate
              </h3>
              <p className="text-on-surface-variant text-base">
                Bespoke luxury events for Fortune 500 brands looking to disrupt
                the norm.
              </p>
            </div>
            <div className="glass p-8 md:p-10 rounded-2xl neon-border-hover border border-white/5 group">
              <span
                className="material-symbols-outlined text-4xl text-primary mb-6 block group-hover:scale-110 transition-transform neon-glow"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                stars
              </span>
              <h3 className="text-2xl font-display-lg text-on-surface mb-4 tracking-tight">
                Brand Activations
              </h3>
              <p className="text-on-surface-variant text-base">
                Experiential marketing that lives long after the lights go down.
              </p>
            </div>
            <div className="glass p-8 md:p-10 rounded-2xl neon-border-hover border border-white/5 group">
              <span
                className="material-symbols-outlined text-4xl text-primary mb-6 block group-hover:scale-110 transition-transform neon-glow"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                person_search
              </span>
              <h3 className="text-2xl font-display-lg text-on-surface mb-4 tracking-tight">
                Artist Booking
              </h3>
              <p className="text-on-surface-variant text-base">
                Exclusive connections to A-list global talent and rising
                underground stars.
              </p>
            </div>
            <div className="glass p-8 md:p-10 rounded-2xl neon-border-hover border border-white/5 group">
              <span
                className="material-symbols-outlined text-4xl text-primary mb-6 block group-hover:scale-110 transition-transform neon-glow"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                lightbulb
              </span>
              <h3 className="text-2xl font-display-lg text-on-surface mb-4 tracking-tight">
                Lighting Solutions
              </h3>
              <p className="text-on-surface-variant text-base">
                Revolutionary visual architecture utilizing next-gen laser and
                LED technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery - Masonry */}
      <section
        className="py-24 md:py-32 px-5 md:px-16 max-w-[1440px] mx-auto reveal"
        id="gallery"
      >
        <h2 className="text-4xl md:text-[40px] font-display-lg text-on-surface mb-12 md:mb-16 tracking-tighter">
          The Archive
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-4 flex flex-col">
            <div className="glass rounded-xl overflow-hidden h-64 border border-white/5 hover:border-primary/30 transition-all">
              <img
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 opacity-80 hover:opacity-100"
                alt="DJ hands on mixer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo5vKiFFQR8UQPq0KZ32F0YZd5I13lmEsbxIA_kP_3m1xpDIUyD4k0Pog-NS8rI_dboS32IPTGkAllgr24ZNPVw3lNbdVEokbLMj6NfR1ahlG4a2prbbIuKdZp7FeUcXM11SwObHYfAQkw2dds6Ut4_3XbX77pWelNjwrQfgx7qaYD7sWxA2x1fZ-K9FJ16IwDbTNDTmWdX6Bwi2Kom30yIMyU7vbGP-IhveRN6RLRJ1iHohTnNZqS"
              />
            </div>
            <div className="glass rounded-xl overflow-hidden h-96 border border-white/5 hover:border-primary/30 transition-all">
              <img
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 opacity-80 hover:opacity-100"
                alt="Outdoor festival"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuANSU-ZoTVZLY_VQ_yoojcI_yIE5Sty_Yqm7t1QjTvapHsHaFAu7TNnBHtiOnXfHGM5jgraath2htGVXi9l6XRpDkaP_UVrrx-6BAg97nTyqhnYviN62WiFR-uCf390eUbEA5IPkbZnSQPUBwryksTVQlt4mU5_44sud39UwPnxAlwmmEl_vx3AXheObvHMU0xE82pdSOkD8fYEhnGei5cOTvMSYGGDcmU6x9jGkB3EJsywNaxe3E26"
              />
            </div>
          </div>
          <div className="space-y-4 flex flex-col">
            <div className="glass rounded-xl overflow-hidden h-96 border border-white/5 hover:border-primary/30 transition-all">
              <img
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 opacity-80 hover:opacity-100"
                alt="Neon lights"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoX021WOOG6dG5niAYTcQbIqIj1gOxBIWVqQJXz_zYnqjRYuVHV-WCqsRfFwCAt4PYbcr23uotWboEbFWBlfnnGJtF2_Ul3vMINVMhAwEs6o8WnjFyytHzZrzOeFSdNbat8ftMGmF-eUmTWDEFDvmAmTj5X_bGsDc5Fd6fbi_RWouM_PmM2GsIO3vPnfGJ3Wije0_A0nhEoac4iiYcVBdYMFmnzfVfkPp0mO0Dh70uCK7i8ETAcyBz"
              />
            </div>
            <div className="glass rounded-xl overflow-hidden h-64 border border-white/5 hover:border-primary/30 transition-all">
              <img
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 opacity-80 hover:opacity-100"
                alt="VIP Lounge"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm3OuMphddENUp5M1KNRQKeGLd3qBV1INvGFf8xZSSoqLrq8lFNQw6k03gjhsWcqlVgjDovr8XJPAgHeNR9-LsSJ7M9eieLJ742lFVpjp56PibMzi1cqhoxsLl6mi8AT7bH6iZX_iia4jdRRVD-zgU-0MMXFJXsTmWrnRCsvk7hTjn6JKsjcUnc9XkYTl-XYBnnZ8aXunzctU4UWaVsM-8YodzRIEoahCgazxZ37TFHGt864nJIEJI"
              />
            </div>
          </div>
          <div className="space-y-4 hidden md:flex flex-col">
            <div className="glass rounded-xl overflow-hidden h-64 border border-white/5 hover:border-primary/30 transition-all">
              <img
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 opacity-80 hover:opacity-100"
                alt="Futuristic performer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVz2pqYDDJ2YUWF9fSfU04bJBf3PQCCiYKALWIE5R74I5n4Cx_vbXctZ2C_rBoRroJtB5KEsQ-fwmLELc1EGsxpLlpwo0YGJMifAZrTk9prcVcOcIa7Am72QCYopMJ_Uj581fsSm2SlMocC1L-AjEOlH-iEUrMLtvEYwDiCf2HYyvNQIpc-_lWwXvBq85KNkhbPXQ6YL0ZxaNnbfF3IQwjXKFxNaKXyyaEW1VA5pDBxqkaV1fs85s8"
              />
            </div>
            <div className="glass rounded-xl overflow-hidden h-96 border border-white/5 hover:border-primary/30 transition-all">
              <img
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 opacity-80 hover:opacity-100"
                alt="Pool party"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpGuone7m4svWOaCt3PBfzGJ4r5qCW1E4vkj7RlwXAR_pIyS3DJJLjTiXFmeG2kbQyb6AEYDzwnBjMbOoB1ZqDzI5XIxgIwmN5p_jhLjdkWdLucvpLn6ecVeAhccJAJNVUtbc5sX6YobviDTMqtFhntcieQW8a7edMBo8OVe7oTOJOYXtlmeBs_gEltXP1Mar7wU8N25-5wwFuzYtqHc9buGVlpDytr_lEaWq4LW0XrHMRcHxL3WXN"
              />
            </div>
          </div>
          <div className="space-y-4 hidden md:flex flex-col">
            <div className="glass rounded-xl overflow-hidden h-96 border border-white/5 hover:border-primary/30 transition-all">
              <img
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 opacity-80 hover:opacity-100"
                alt="Portrait"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmF6_EHvKybHzXki72vjS9ktVtYi_AFi0_VAOvxH-CoEdZjyepla1G5q1JmlIj220iS-Hm3qc6XPQpAhnZFEZYigDK8GW5Ldo-4BjGd8CkyMg1SE_nD5csZQ9DbeCo7G3LnGTFhXeeQVmza-c0LHqYazgaPsPEuMoOHjoUrKYyJixUrXqE3PavyiUvkcMi8ovVMTdfdg55vUgvj6hq3S5gPgu9AxwxHAxEmHfbIxK4NP3-ofhg8RV-"
              />
            </div>
            <div className="glass rounded-xl overflow-hidden h-64 border border-white/5 hover:border-primary/30 transition-all">
              <img
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 opacity-80 hover:opacity-100"
                alt="Corporate event stage"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgwMa_nopDS2xbPFweYf_4e1s0k3XDXRtxS91XywMxGht7TUfNULjs9VrJCep5h3YBPbHExr1VZBvK2YSvTNo0jNoDjk3m2Gx7Or8aBbEUywQG5kgRqwTV9s0eECxXZ35QOp0721Xiohc_biF1L1W94Mm6KEr2QyTV9annvZg76Q4uxgbFjsO5vs8yZP9ZmczBmodhxQMeeTKE0hTxx4H9WU1pnfSastYfiuSbM8UuBglgMCvwKlKW"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
