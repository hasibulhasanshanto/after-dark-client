import { useEffect } from "react";

export default function EventSolutions() {
  useEffect(() => {
    // Add reveal animation on scroll
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    }, observerOptions);

    document.querySelectorAll("section").forEach((section) => {
      section.classList.add(
        "transition-all",
        "duration-1000",
        "opacity-0",
        "translate-y-10"
      );
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(255,0,214,0.06)_0%,transparent_40%),radial-gradient(circle_at_80%_70%,rgba(112,0,255,0.05)_0%,transparent_40%)]"></div>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden mb-32">
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
          </video>
          {/* Subtle dark overlays for contrast & seamless transition */}
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/60"></div>
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 md:px-16 pt-28 pb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_12px_#FF00D6]"></span>
              <span className="font-billion text-base tracking-normal text-secondary">
                Elite Experiences
              </span>
            </div>
            <h1 className="font-display-lg text-5xl md:text-[72px] mb-8 leading-tight tracking-tighter text-white drop-shadow-lg">
              Architecting the <span className="text-primary italic neon-glow">Future</span> of Nightlife.
            </h1>
            <p className="text-lg md:text-body-lg text-gray-200 max-w-xl mb-12 drop-shadow-md">
              We redefine the standards of luxury entertainment. From concept to
              closing, AfterDark provides bespoke solutions for the world's most
              exclusive events.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 rounded-full transition-all hover:shadow-[0_0_20px_rgba(255,0,214,0.5)] hover:scale-105 active:scale-95 shadow-lg">
                Start Planning
              </button>
              <button className="border border-white/30 bg-black/40 backdrop-blur-md font-label-caps text-label-caps px-8 py-4 rounded-full hover:bg-white/20 transition-all text-white">
                View Portfolios
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="px-5 md:px-16 max-w-[1440px] mx-auto mb-32">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-headline-xl font-headline-xl mb-4 text-on-surface">
              Service Verticals
            </h2>
            <p className="font-body-md text-base text-on-surface-variant">
              Precision engineering for unforgettable moments. Our comprehensive
              suite of services covers every facet of high-end event execution.
            </p>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-outline-variant/0 via-outline-variant to-outline-variant/0 hidden lg:block mb-6"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Concerts & Festivals */}
          <div className="lg:col-span-8 group cursor-pointer">
            <div className="glass neon-border-hover rounded-xl p-8 h-full transition-all duration-500 overflow-hidden relative min-h-[400px]">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                <span
                  className="material-symbols-outlined text-[140px] text-primary"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  festival
                </span>
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <span className="material-symbols-outlined text-primary text-5xl mb-6 drop-shadow-[0_0_15px_rgba(255,0,214,0.6)]">
                    festival
                  </span>
                  <h3 className="text-2xl md:text-headline-md font-headline-md mb-4 group-hover:text-primary transition-colors text-on-surface tracking-tight">
                    Concerts &amp; Festivals
                  </h3>
                  <p className="text-on-surface-variant max-w-md text-base">
                    Large-scale stadium productions and multi-day boutique
                    festivals requiring complex logistics and high-fidelity
                    sensory output.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-8">
                  <span className="px-4 py-1.5 glass text-[11px] font-bold uppercase tracking-wider text-primary border border-primary/20 rounded-full">
                    Grand Production
                  </span>
                  <span className="px-4 py-1.5 glass text-[11px] font-bold uppercase tracking-wider text-primary border border-primary/20 rounded-full">
                    Mass Logistics
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Corporate Events */}
          <div className="lg:col-span-4 group cursor-pointer">
            <div className="glass neon-border-hover rounded-xl p-8 h-full transition-all duration-500 min-h-[400px]">
              <div className="flex flex-col h-full">
                <span className="material-symbols-outlined text-primary text-5xl mb-6 drop-shadow-[0_0_15px_rgba(255,0,214,0.6)]">
                  corporate_fare
                </span>
                <h3 className="text-2xl md:text-headline-md font-headline-md mb-4 group-hover:text-primary transition-colors text-on-surface tracking-tight">
                  Corporate Events
                </h3>
                <p className="text-on-surface-variant text-base">
                  Exclusive galas, annual meetings, and high-stakes networking
                  events tailored for the modern enterprise elite.
                </p>
                <div className="mt-auto pt-8 flex items-center gap-2 text-primary">
                  <span className="text-[11px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore Vertical
                  </span>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Artist Booking */}
          <div className="lg:col-span-4 group cursor-pointer">
            <div className="glass neon-border-hover rounded-xl p-8 h-full transition-all duration-500 min-h-[400px]">
              <div className="flex flex-col h-full">
                <span className="material-symbols-outlined text-primary text-5xl mb-6 drop-shadow-[0_0_15px_rgba(255,0,214,0.6)]">
                  star
                </span>
                <h3 className="text-2xl md:text-headline-md font-headline-md mb-4 group-hover:text-primary transition-colors text-on-surface tracking-tight">
                  Artist Booking
                </h3>
                <p className="text-on-surface-variant text-base">
                  Global talent acquisition including A-list DJs, live
                  performers, and exclusive guest speakers for private affairs.
                </p>
                <div className="mt-auto pt-8 flex items-center gap-2 text-primary">
                  <span className="text-[11px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Discover Talent
                  </span>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Activations */}
          <div className="lg:col-span-8 group cursor-pointer">
            <div className="glass neon-border-hover rounded-xl p-8 h-full transition-all duration-500 overflow-hidden relative min-h-[400px]">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                <span className="material-symbols-outlined text-[140px] text-primary">
                  campaign
                </span>
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <span className="material-symbols-outlined text-primary text-5xl mb-6 drop-shadow-[0_0_15px_rgba(255,0,214,0.6)]">
                    campaign
                  </span>
                  <h3 className="text-2xl md:text-headline-md font-headline-md mb-4 group-hover:text-primary transition-colors text-on-surface tracking-tight">
                    Brand Activations
                  </h3>
                  <p className="text-on-surface-variant max-w-md text-base">
                    Immersive experiential marketing that bridges the gap
                    between brand identity and consumer emotion through
                    cinematic execution.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-8">
                  <span className="px-4 py-1.5 glass text-[11px] font-bold uppercase tracking-wider text-primary border border-primary/20 rounded-full">
                    Experiential
                  </span>
                  <span className="px-4 py-1.5 glass text-[11px] font-bold uppercase tracking-wider text-primary border border-primary/20 rounded-full">
                    Virality Focused
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Services (Stage, Sound, Light) */}
      <section className="px-5 md:px-16 max-w-[1440px] mx-auto mb-32 relative">
        <div className="absolute -left-20 top-0 w-64 h-64 bg-primary/10 blur-[120px] rounded-full hidden md:block"></div>
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-headline-xl font-headline-xl mb-4 text-on-surface tracking-tight">
            Technical Production
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-primary/50 to-secondary-container rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Lighting */}
          <div className="flex flex-col gap-6 p-1 glass rounded-xl overflow-hidden group hover:bg-white/5 transition-all duration-500">
            <div className="h-64 w-full relative overflow-hidden rounded-lg">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBGv4t96za3dSVE0qDcur8cbWiFZTF41yKyAa5Q8YCKL_pr0zqlRXeJytO4Lm7Cuhzg0eJZxDbYmJ5VhHBi_tTqNE-PQ4M3g4XAzgcbxf727MT5xRrksYCzhtGmkd-4rgfo2fi1sDZ5MlUy7eLi7pCaIRgPVtAUQeMSCFciz-IqfTLrgQyJ_3s5sM67he4n8YG2ttXYkUmOIC2NWGnq-fJrqUbY1Y5O6SaTmMVDlR29g2JluROQBndp')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary drop-shadow-[0_0_10px_rgba(255,0,214,0.8)]">
                  lightbulb
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-primary-fixed">
                  Advanced Lighting
                </span>
              </div>
            </div>
            <div className="px-5 pb-8">
              <h4 className="text-xl md:text-headline-md font-headline-md mb-3 text-on-surface group-hover:text-primary transition-colors tracking-tight">
                Cinematic Atmosphere
              </h4>
              <p className="text-on-surface-variant text-base leading-relaxed">
                Custom lighting plots including kinetic rigs, laser arrays, and
                synchronized DMX control systems.
              </p>
            </div>
          </div>
          {/* Sound */}
          <div className="flex flex-col gap-6 p-1 glass rounded-xl overflow-hidden group hover:bg-white/5 transition-all duration-500">
            <div className="h-64 w-full relative overflow-hidden rounded-lg">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCSdVIeazonLRV2ftVdUC922GDNI90QCZ2oQaKEDElYgL3EDWBPW97nDSd-m3Ohi47UVxYEyUe3vCjR-p5d8dwIDUzqlDV9Sa6RW-a7MAfT-jnXK9gj9Sstzc-X1-_MypFvIKDlF8vBOt7ecJ1o2y3VNTM0GXXwYcHBhzwJmJbtNB0Z0gtfctvgGBto1pupTvbCe16jd4rM0hlMDehScQoobbaqvwmHSBcLJzi2Taw5bI85S1jg2HcY')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary drop-shadow-[0_0_10px_rgba(255,0,214,0.8)]">
                  surround_sound
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-primary-fixed">
                  Sonic Engineering
                </span>
              </div>
            </div>
            <div className="px-5 pb-8">
              <h4 className="text-xl md:text-headline-md font-headline-md mb-3 text-on-surface group-hover:text-primary transition-colors tracking-tight">
                Immersive Audio
              </h4>
              <p className="text-on-surface-variant text-base leading-relaxed">
                L-Acoustics and d&amp;b audiotechnik systems tuned by master
                acoustic engineers for crystalline clarity.
              </p>
            </div>
          </div>
          {/* Stage */}
          <div className="flex flex-col gap-6 p-1 glass rounded-xl overflow-hidden group hover:bg-white/5 transition-all duration-500">
            <div className="h-64 w-full relative overflow-hidden rounded-lg">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDOBt4LRQKelB1ByxNv_cu3Or6hecSZ3tDN16CMMpHE_CjuqJKvMzX2Hp21k6lHM7cChfZEIe7RYnzRwBMi8IkL852Ph-IPfzXITuyYgPg2eEKhO5ADH5la3h_jJGebITRn-NyrN4_kS-dKsAU7bw6Cev96XDuHQ5ykuu-vyXmlsjBEOFUkyYz9ejq3f8Myn_Z_dGp-A02XsSeZYlunNn3NFhpdtmCn3zePBrlWmz1JlCmfBZWQoP4W')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary drop-shadow-[0_0_10px_rgba(255,0,214,0.8)]">
                  architecture
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest text-primary-fixed">
                  Structural Design
                </span>
              </div>
            </div>
            <div className="px-5 pb-8">
              <h4 className="text-xl md:text-headline-md font-headline-md mb-3 text-on-surface group-hover:text-primary transition-colors tracking-tight">
                Stage Craft
              </h4>
              <p className="text-on-surface-variant text-base leading-relaxed">
                Modular stage architecture, curved LED walls, and automated
                scenic elements for dynamic visuals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-5 md:px-16 max-w-[1440px] mx-auto mb-32">
        <div className="glass rounded-xl p-8 md:p-24 text-center relative overflow-hidden border border-primary/10">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-secondary-container opacity-10 blur-[150px] rounded-full"></div>
          <div className="absolute -left-20 -top-20 w-96 h-96 bg-primary/10 blur-[150px] rounded-full"></div>
          <h2 className="text-4xl md:text-display-lg font-display-lg mb-8 text-on-surface tracking-tighter">
            Ready to Elevate Your Vision?
          </h2>
          <p className="text-lg md:text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
            Connect with our executive production team to begin crafting your
            next premium experience. Limited availability for 2026 season.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-primary text-on-primary text-[11px] font-bold tracking-widest uppercase px-12 py-5 rounded-full transition-all hover:shadow-[0_0_20px_rgba(255,0,214,0.3)] hover:scale-105 active:scale-95">
              Schedule Consultation
            </button>
            <button className="border border-outline-variant text-[11px] font-bold tracking-widest uppercase px-12 py-5 rounded-full hover:bg-white/10 transition-all text-on-surface">
              Download Services PDF
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
