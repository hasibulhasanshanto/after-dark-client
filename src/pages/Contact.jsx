import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-background text-on-background pt-24 overflow-x-hidden">
      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(255,0,214,0.06)_0%,transparent_70%),radial-gradient(circle_at_20%_80%,rgba(112,0,255,0.05)_0%,transparent_60%)]"></div>

      {/* Hero Section with Map Grid Overlay */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden px-5 md:px-16 max-w-[1440px] mx-auto text-center">
        <div className="absolute inset-0 z-0 opacity-25 grayscale invert pointer-events-none">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&q=80')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        </div>

        <div className="relative z-10 max-w-3xl pt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-base sm:text-lg font-great-vibes tracking-wide mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#FF00D6]"></span>
            Concierge Portal
          </div>
          <h1 className="font-display-lg text-5xl md:text-[72px] leading-tight tracking-tighter mb-6 text-white drop-shadow-lg">
            Connect <span className="text-primary italic neon-glow">With Us</span>
          </h1>
          <p className="font-body-lg text-base md:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            Experience the pinnacle of nightlife. Whether it's an inquiry for a bespoke event or a VIP table reservation, our concierge is at your service.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Grid Section */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-16 py-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Premium Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/[0.02] backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-[0_0_40px_rgba(255,0,214,0.08)]">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2.5 h-2.5 bg-primary rounded-full animate-ping"></div>
                <span className="font-label-caps text-xs text-primary uppercase tracking-widest">
                  Secure Inquiry Channel
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative border-b border-white/15 focus-within:border-primary transition-colors">
                    <label className="font-label-caps text-xs text-gray-400 uppercase block mb-1">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Johnathan Doe"
                      className="bg-transparent border-none w-full py-3 px-0 text-white placeholder:text-white/20 focus:ring-0 outline-none text-base"
                    />
                  </div>
                  <div className="relative border-b border-white/15 focus-within:border-primary transition-colors">
                    <label className="font-label-caps text-xs text-gray-400 uppercase block mb-1">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="j.doe@exclusive.com"
                      className="bg-transparent border-none w-full py-3 px-0 text-white placeholder:text-white/20 focus:ring-0 outline-none text-base"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative border-b border-white/15 focus-within:border-primary transition-colors">
                    <label className="font-label-caps text-xs text-gray-400 uppercase block mb-1">
                      Service Type
                    </label>
                    <select className="bg-transparent border-none w-full py-3 px-0 text-white focus:ring-0 outline-none text-base cursor-pointer">
                      <option className="bg-background text-white">VIP Table Booking</option>
                      <option className="bg-background text-white">Corporate Production</option>
                      <option className="bg-background text-white">Private Gala</option>
                      <option className="bg-background text-white">Artist Booking</option>
                    </select>
                  </div>
                  <div className="relative border-b border-white/15 focus-within:border-primary transition-colors">
                    <label className="font-label-caps text-xs text-gray-400 uppercase block mb-1">
                      Guest Count
                    </label>
                    <input
                      type="number"
                      placeholder="8"
                      className="bg-transparent border-none w-full py-3 px-0 text-white placeholder:text-white/20 focus:ring-0 outline-none text-base"
                    />
                  </div>
                </div>

                <div className="relative border-b border-white/15 focus-within:border-primary transition-colors">
                  <label className="font-label-caps text-xs text-gray-400 uppercase block mb-1">
                    Message
                  </label>
                  <textarea
                    required
                    rows="4"
                    placeholder="How can we curate your nocturnal experience?"
                    className="bg-transparent border-none w-full py-3 px-0 text-white placeholder:text-white/20 focus:ring-0 outline-none text-base resize-none"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-5 rounded-2xl font-label-caps text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-lg ${submitted
                      ? "bg-emerald-500 text-white"
                      : "bg-primary text-on-primary hover:shadow-[0_0_30px_rgba(255,0,214,0.5)] hover:scale-[1.01] active:scale-[0.99]"
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="material-symbols-outlined animate-spin">sync</span>
                        Transmitting...
                      </>
                    ) : submitted ? (
                      <>
                        <span className="material-symbols-outlined">check_circle</span>
                        Inquiry Transmitted
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <span className="material-symbols-outlined">send</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right: Concierge Info & Social Bento */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-white/[0.02] backdrop-blur-2xl rounded-3xl p-8 md:p-10 border border-white/10 flex-1">
              <h3 className="font-headline-md text-2xl text-primary mb-8">Concierge Desk</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-primary">
                    <span className="material-symbols-outlined text-2xl">location_on</span>
                  </div>
                  <div>
                    <p className="font-label-caps text-xs text-gray-400 mb-1 uppercase tracking-wider">
                      Global Headquarters
                    </p>
                    <p className="font-body-md text-white text-base">Minato-ku, Tokyo, 106-0032 Japan</p>
                    <p className="font-body-md text-gray-400 text-sm mt-1">Marina Bay Sands, Singapore</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-primary">
                    <span className="material-symbols-outlined text-2xl">mail</span>
                  </div>
                  <div>
                    <p className="font-label-caps text-xs text-gray-400 mb-1 uppercase tracking-wider">
                      Direct Email
                    </p>
                    <p className="font-body-md text-white text-base">concierge@afterdark.exclusive</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-5 bg-primary/10 border border-primary/20 rounded-2xl hover:bg-primary/20 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,0,214,0.4)]">
                        <span className="material-symbols-outlined text-xl">chat</span>
                      </div>
                      <div>
                        <p className="font-label-caps text-xs text-primary uppercase tracking-wider">
                          WhatsApp VIP Hotline
                        </p>
                        <p className="text-gray-300 text-xs">Response time &lt; 5 mins</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Bento */}
            <div className="grid grid-cols-2 gap-6">
              <a
                href="#instagram"
                className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-6 flex flex-col items-center justify-center gap-3 border border-white/10 hover:border-primary/40 hover:bg-primary/5 transition-all group"
              >
                <span className="material-symbols-outlined text-3xl text-gray-400 group-hover:text-primary group-hover:scale-110 transition-all">
                  camera
                </span>
                <span className="font-label-caps text-xs text-gray-300 uppercase tracking-widest">
                  Instagram
                </span>
              </a>
              <a
                href="#tiktok"
                className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-6 flex flex-col items-center justify-center gap-3 border border-white/10 hover:border-primary/40 hover:bg-primary/5 transition-all group"
              >
                <span className="material-symbols-outlined text-3xl text-gray-400 group-hover:text-primary group-hover:scale-110 transition-all">
                  movie
                </span>
                <span className="font-label-caps text-xs text-gray-300 uppercase tracking-widest">
                  TikTok
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
