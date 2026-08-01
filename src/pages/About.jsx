import { Link } from "react-router";

export default function About() {
  return (
    <div className="relative min-h-screen bg-background text-on-background pt-24 overflow-x-hidden">
      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(255,0,214,0.06)_0%,transparent_70%),radial-gradient(circle_at_80%_80%,rgba(112,0,255,0.05)_0%,transparent_60%)]"></div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-5 md:px-16 max-w-[1440px] mx-auto text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,214,0.1),transparent_70%)] pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-base font-billion tracking-normal mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            The Architecture of Nightlife
          </div>
          <h1 className="font-display-lg text-5xl md:text-[80px] leading-tight tracking-tighter mb-8 bg-gradient-to-r from-white via-on-surface to-primary bg-clip-text text-transparent drop-shadow-lg">
            Redefining the <span className="text-primary italic neon-glow">Night.</span>
          </h1>
          <p className="max-w-2xl mx-auto font-body-lg text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
            Where high-end luxury meets immersive technology. We don't just host events; we construct temporary universes.
          </p>
          <div className="flex justify-center">
            <a href="#story" className="text-primary text-3xl animate-bounce hover:scale-125 transition-transform">
              <span className="material-symbols-outlined">expand_more</span>
            </a>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-24 px-5 md:px-16 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
            <span className="font-label-caps text-xs text-primary tracking-widest uppercase mb-4 block">Our Genesis</span>
            <h2 className="font-headline-xl text-4xl md:text-5xl text-white mb-8 leading-tight">
              Our Story & Legacy
            </h2>
            <div className="space-y-6 text-gray-300 font-body-lg text-base md:text-lg leading-relaxed">
              <p>
                Founded in 2018, AfterDark emerged from a single vision: to bridge the gap between traditional luxury and the visceral energy of underground electronic music culture.
              </p>
              <p>
                We saw a world of "exclusive" events that lacked soul, and "underground" parties that lacked production value. AfterDark was built to be the antidote—a sanctuary for those who demand uncompromising quality and immersive storytelling.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="bg-white/[0.03] backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(255,0,214,0.05)] hover:border-primary/40 transition-all">
                  <div className="text-primary text-4xl md:text-5xl font-display-lg mb-2 neon-glow">50+</div>
                  <div className="font-label-caps text-xs uppercase tracking-wider text-gray-400">Exclusive Productions</div>
                </div>
                <div className="bg-white/[0.03] backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(255,0,214,0.05)] hover:border-primary/40 transition-all">
                  <div className="text-primary text-4xl md:text-5xl font-display-lg mb-2 neon-glow">12k+</div>
                  <div className="font-label-caps text-xs uppercase tracking-wider text-gray-400">VIP Global Members</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[550px] group">
            <div className="absolute inset-0 border border-primary/30 rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
            <div className="absolute inset-0 border border-secondary/20 rounded-3xl rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
            <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="AfterDark Production Stage"
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-primary font-label-caps text-xs tracking-widest uppercase">Visual Resonance</span>
                <p className="text-white font-headline-md text-lg mt-1">Immersive Stage Architecture & Spatial Lighting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy - Bento Grid */}
      <section className="py-24 bg-surface-container-lowest/50 border-y border-white/5">
        <div className="px-5 md:px-16 max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-label-caps text-xs tracking-[0.3em] uppercase block mb-3">Our Core Philosophy</span>
            <h2 className="font-headline-xl text-4xl md:text-5xl text-white">The Pillars of Excellence</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="md:col-span-2 bg-white/[0.02] backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 hover:border-primary/30 transition-all flex flex-col justify-end min-h-[380px] relative overflow-hidden group">
              <div className="absolute top-8 right-8">
                <span className="material-symbols-outlined text-primary/20 text-7xl group-hover:text-primary/60 transition-all duration-700">
                  diamond
                </span>
              </div>
              <div className="relative z-10">
                <h3 className="font-headline-md text-2xl md:text-3xl text-primary mb-4">Uncompromising Luxury</h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
                  We redefine the standard of VIP. From bespoke concierge services to private lounge enclaves designed by world-renowned architects, every touchpoint is a testament to refined taste.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/[0.02] backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 hover:border-primary/30 transition-all relative overflow-hidden group flex flex-col justify-between">
              <span className="material-symbols-outlined text-primary text-5xl opacity-80 group-hover:scale-110 transition-transform">
                visibility
              </span>
              <div className="mt-8">
                <h3 className="font-headline-md text-2xl text-white mb-4">Immersive Storytelling</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Our events are journeys. We utilize kinetic sculptures and spatial audio to create sensory experiences that linger long after sunrise.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/[0.02] backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 hover:border-primary/30 transition-all relative overflow-hidden group flex flex-col justify-between">
              <span className="material-symbols-outlined text-primary text-5xl opacity-80 group-hover:scale-110 transition-transform">
                lock
              </span>
              <div className="mt-8">
                <h3 className="font-headline-md text-2xl text-white mb-4">Radical Exclusivity</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  Curation is our filter. We cultivate a community of visionaries, artists, and leaders who value discretion and high-art aesthetics.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="md:col-span-2 bg-white/[0.02] backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 hover:border-primary/30 transition-all flex flex-col md:flex-row gap-8 items-center min-h-[300px] group">
              <div className="w-full md:w-1/3 h-52 rounded-2xl overflow-hidden border border-white/10 relative">
                <img
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                  alt="Proprietary Technology"
                  src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="font-headline-md text-2xl md:text-3xl text-primary mb-4">Proprietary Technology</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  From biometric access to real-time NFT ticketing, we integrate cutting-edge tech seamlessly into the nocturnal experience to ensure security and effortless flow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Architects (Team) */}
      <section className="py-24 px-5 md:px-16 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-primary font-label-caps text-xs tracking-widest uppercase block mb-3">Leadership</span>
            <h2 className="font-headline-xl text-4xl md:text-5xl text-white">The Architects</h2>
          </div>
          <p className="text-gray-400 text-base md:text-lg max-w-md">
            A collective of creative directors, technical engineers, and hospitality experts dedicated to the art of nocturnal production.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Julian Vane",
              role: "Chief Visionary Officer",
              img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
            },
            {
              name: "Elena Rossi",
              role: "Head of Production",
              img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
            },
            {
              name: "Marcus Thorne",
              role: "Lead Lighting Architect",
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
            },
            {
              name: "Sophia Chen",
              role: "Director of Guest Experience",
              img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
            },
          ].map((member, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white/[0.02] border border-white/10 group-hover:border-primary/40 transition-all duration-500 mb-6 relative">
                <img
                  className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  alt={member.name}
                  src={member.img}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-4 text-primary">
                    <span className="material-symbols-outlined hover:scale-125 transition-transform">share</span>
                    <span className="material-symbols-outlined hover:scale-125 transition-transform">link</span>
                  </div>
                </div>
              </div>
              <h4 className="font-headline-md text-xl text-white group-hover:text-primary transition-colors">{member.name}</h4>
              <p className="font-label-caps text-xs text-primary/80 uppercase tracking-widest mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative text-center overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,214,0.12),transparent_60%)] pointer-events-none"></div>
        <div className="relative z-10 px-5 max-w-3xl mx-auto">
          <h2 className="font-display-lg text-4xl md:text-6xl tracking-tighter text-white mb-8">
            Ready to <span className="text-primary italic">transcend?</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link
              to="/contact"
              className="bg-primary text-on-primary px-10 py-4 rounded-full font-label-caps text-xs uppercase tracking-widest font-bold flex items-center gap-3 hover:shadow-[0_0_30px_rgba(255,0,214,0.5)] hover:scale-105 active:scale-95 transition-all"
            >
              Apply for Membership
              <span class="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link
              to="/gallery"
              className="border border-white/20 bg-white/5 backdrop-blur-md px-10 py-4 rounded-full font-label-caps text-xs uppercase tracking-widest text-white hover:bg-white/15 transition-all"
            >
              View Visual Archive
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
