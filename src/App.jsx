import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Simple Scroll Reveal Logic
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', reveal);
    reveal(); // Initial check

    // Parallax-ish Effect for Hero
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const heroText = document.querySelector('header .relative.z-10');
      const heroVideo = document.querySelector('header video');
      if(heroText) {
          heroText.style.transform = `translateY(${scrolled * 0.25}px)`;
          heroText.style.opacity = 1 - (scrolled / 800);
      }
      if(heroVideo) {
          heroVideo.style.transform = `translateY(${scrolled * 0.12}px) scale(1.05)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', reveal);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full navbar z-50">
        <div className="flex justify-between items-center container">
          <a className="font-display-lg font-headline-md tracking-tighter text-primary neon-glow" href="#">AfterDark</a>
          <div className="nav-links">
            <a className="font-label-caps nav-link active" href="#">Home</a>
            <a className="font-label-caps nav-link" href="#about">About Us</a>
            <a className="font-label-caps nav-link" href="#solutions">Event Solutions</a>
            <a className="font-label-caps nav-link" href="#gallery">Gallery</a>
          </div>
          <button className="btn btn-card btn-card-primary font-label-caps">
            Tickets
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative hero-header overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover hero-video">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-dancing-at-a-night-club-with-neon-lights-4011-large.mp4" type="video/mp4"/>
          </video>
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        <div className="relative z-10 text-center hero-content">
          <h1 className="font-display-lg text-primary tracking-tighter mb-4 neon-glow-strong animate-pulse">
            AfterDark
          </h1>
          <p className="font-headline-md text-on-surface mx-auto mb-10 opacity-90 tracking-tight">
            Premium Music Experiences Across Asia
          </p>
          <div className="hero-buttons">
            <button className="btn btn-hero-primary font-label-caps">
              BUY TICKETS
            </button>
            <button className="btn glass btn-hero-outline font-label-caps">
              EXPLORE EVENTS
            </button>
          </div>
        </div>
        <div className="absolute scroll-indicator flex flex-col items-center gap-4 animate-bounce">
          <span className="font-label-caps text-[10px] tracking-[0.4em] text-primary block mb-2">SCROLL</span>
          <span className="material-symbols-outlined text-primary">expand_more</span>
        </div>
      </header>

      {/* About Section */}
      <section className="section-py container reveal" id="about">
        <div className="grid about-grid gap-20 items-center">
          <div>
            <span className="text-primary font-label-caps tracking-[0.3em] mb-4 block">THE PHILOSOPHY</span>
            <h2 className="font-headline-xl text-on-surface mb-8 tracking-tighter">Luxury, Exclusivity, Immersive Production.</h2>
            <p className="font-body-lg text-on-surface-variant mb-6 leading-relaxed">
              AfterDark isn't just an event; it's a curated odyssey into the heart of nightlife. We redefine the boundaries of sonic and visual storytelling, creating ethereal landscapes where music and technology converge.
            </p>
            <p className="font-body-md text-on-surface-variant opacity-80">
              From underground boutique sessions in Tokyo to massive festivals in Singapore, every detail is meticulously engineered for the most discerning audience.
            </p>
          </div>
          <div className="relative image-glow-wrapper">
            <div className="glass rounded-2xl overflow-hidden aspect-4-5 border-white-10">
              <img className="w-full h-full object-cover grayscale-hover" alt="Luxury event space in Asia" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB_z1Qwv0bQFIY7sROLNgy6Q6vzTC_aCTitHq7ci0OzhYBiJw0RDsB1ecegZEvIzYmhqp-LpP3mhNTtSDduCF4tLvO4_I4DM11TJjDgyDbljJoAX7NjCVI4hJ5VasVzPAQBDLme15aqlr0KBzGaxZwgrNV-r_J4FJxRR4zKAQHBu09BCxJ6JASkIzCFHLVjUMhzLyCyBlq7kvfLo32T0zxJsGxyXM4S-VIW8Qa_42RvUtKHc0_OSe0"/>
            </div>
          </div>
        </div>
      </section>

      {/* Global Residencies */}
      <section className="section-py-sm container reveal">
        <h2 className="font-headline-xl text-on-surface mb-16 tracking-tighter">Global Residencies</h2>
        <div className="flex flex-col gap-12">
          
          {/* Event 1 */}
          <div className="glass rounded-2xl overflow-hidden event-card card-glow border-white-5">
            <div className="event-img-wrap">
              <img className="event-img" alt="Tokyo night club" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcqgBl7CA40xwBpctb-nukSiW2nGrbxKe9dnwNZKtlQFctoYb9_55eHbysuJgz5he50lX9YM7qIBkvEJvJG9lrK26jwODQJK6oWdBfPFMJg7BpG6f-D6o_ZGsCGQRabXQ_AfbzlHaN-hr4XTBid65xNzpXl79rVKNRip8CRtjUBKrBmcqf6xLQ20B-7VdQymgSjeGHjC-RQyBSPlQk4TmeE1t50R5b9wv2ggNn8rJOOLMXzQtfG_Bd"/>
              <div className="event-badge badge-limited">
                <span className="text-white font-label-caps tracking-widest">Limited</span>
              </div>
            </div>
            <div className="event-content">
              <div className="live-badge mb-6">
                <span className="ping-dot">
                  <span className="ping-anim"></span>
                  <span className="ping-static"></span>
                </span>
                <span className="text-primary font-label-caps tracking-[0.2em]">LIVE NOW</span>
              </div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-primary font-label-caps block mb-2 tracking-[0.3em]">September 12 • 2024</span>
                  <h3 className="font-headline-xl text-on-surface tracking-tighter">Neon Zenith: Tokyo</h3>
                </div>
                <div className="text-right">
                  <p className="text-on-surface-variant font-label-caps tracking-widest">OMOTESANDO HILLS</p>
                  <p className="text-primary font-label-caps tracking-tight">VIP ONLY</p>
                </div>
              </div>
              <p className="text-on-surface-variant font-body-md mb-8">Join us for an exclusive 8-hour takeover featuring a curated lineup of techno pioneers in the heart of Tokyo's most iconic district.</p>
              <button className="btn btn-card btn-card-primary font-label-caps tracking-widest self-start">
                Secure Tickets
              </button>
            </div>
          </div>

          {/* Event 2 */}
          <div className="glass rounded-2xl overflow-hidden event-card reverse secondary-hover card-glow border-white-5">
            <div className="event-img-wrap">
              <img className="event-img" alt="Singapore Marina Bay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQSyFrtEk5eZaRrC-7bUt-6qvHi1xCr-Q4YKEzVwyvVlYevABjdSo6LnFORoNNK2LuDsTw6mQnqjNInYpeyxrH1QK4IYh5VaK-PlmkPRk3Akgqf1WmQX5Af6eAPq3tOhIWKcF8i5QBRrye7E55FqmA8fCT9zmHZER2GiTAOLbgmO2jMOhMBXuAgaaTEuZ7h8Y0p63EoHIkWkcGOYF6Eb1JMsnSwo_zstmLu7FjViC-oO6siB8WgOWC"/>
              <div className="event-badge badge-sold-out">
                <span className="text-error font-label-caps tracking-widest">Sold Out</span>
              </div>
            </div>
            <div className="event-content">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-secondary font-label-caps block mb-2 tracking-[0.3em]">October 05 • 2024</span>
                  <h3 className="font-headline-xl text-on-surface tracking-tighter">Harbour Pulse: Singapore</h3>
                </div>
                <div className="text-right">
                  <p className="text-on-surface-variant font-label-caps tracking-widest">MARINA BAY SANDS</p>
                  <p className="text-secondary font-label-caps tracking-tight">WAITLIST OPEN</p>
                </div>
              </div>
              <p className="text-on-surface-variant font-body-md mb-8">A panoramic auditory experience overlooking the Singapore skyline. 360-degree immersive projection mapping and spatial audio.</p>
              <button className="btn btn-card glass btn-card-outline font-label-caps tracking-widest self-start">
                Join Waitlist
              </button>
            </div>
          </div>

          {/* Event 3 */}
          <div className="glass rounded-2xl overflow-hidden event-card card-glow border-white-5">
            <div className="event-img-wrap">
              <img className="event-img" alt="Tropical luxury villa" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPMHF_O7HdZz14zqR68NGB3U28Qxm-nekr6sM-4dyRN0khWMhKC2uMpT7-ow1aX0Zp5IfkJGrm0bqP8xRN7NQ4LmwkyzUDVKIlByUrYLjrKWwEdWaLd4HsJFEODCzngrV0GVRtTBpqbe9EtimiW7bBJoj2AYyi-IdLbEq68aQmcK91zrJiIcaArB41-gnEclDZ6YIIAEB41mFShMXk6JnXtTOmE_ZDuB0RYnzQMNz7XBrHWMnjadS0"/>
              <div className="event-badge badge-filling">
                <span className="text-white font-label-caps tracking-widest">Filling Fast</span>
              </div>
            </div>
            <div className="event-content">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-primary font-label-caps block mb-2 tracking-[0.3em]">November 18 • 2024</span>
                  <h3 className="font-headline-xl text-on-surface tracking-tighter">Tropical Noir: Bangkok</h3>
                </div>
                <div className="text-right">
                  <p className="text-on-surface-variant font-label-caps tracking-widest">SUKHUMVIT VILLA</p>
                  <p className="text-primary font-label-caps tracking-tight">GENERAL RELEASE</p>
                </div>
              </div>
              <p className="text-on-surface-variant font-body-md mb-8">An intimate jungle-themed warehouse transformation. Expect rare house grooves and bespoke botanical cocktail experiences.</p>
              <button className="btn btn-card btn-card-primary font-label-caps tracking-widest self-start">
                Secure Tickets
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="bg-surface-container-low border-white-5 section-pt section-py-sm reveal" style={{borderTopWidth: '1px', borderBottomWidth: '1px'}}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <h4 className="font-display-lg font-headline-xl text-primary neon-glow mb-2 tracking-tighter">500+</h4>
              <p className="font-label-caps tracking-[0.4em] text-on-surface-variant">Events</p>
            </div>
            <div>
              <h4 className="font-display-lg font-headline-xl text-secondary neon-glow mb-2 tracking-tighter">2k+</h4>
              <p className="font-label-caps tracking-[0.4em] text-on-surface-variant">Artists</p>
            </div>
            <div>
              <h4 className="font-display-lg font-headline-xl text-primary-fixed neon-glow mb-2 tracking-tighter">1M+</h4>
              <p className="font-label-caps tracking-[0.4em] text-on-surface-variant">Attendees</p>
            </div>
            <div>
              <h4 className="font-display-lg font-headline-xl text-secondary-container neon-glow mb-2 tracking-tighter">15</h4>
              <p className="font-label-caps tracking-[0.4em] text-on-surface-variant">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Solutions */}
      <section className="section-py" id="solutions" style={{background: 'rgba(14,14,15,0.5)'}}>
        <div className="container reveal">
          <div className="mb-20 text-center">
            <h2 className="font-headline-xl text-primary mb-4 tracking-tighter neon-glow">Event Solutions</h2>
            <div className="divider"></div>
          </div>
          <div className="grid solutions-grid gap-8">
            <div className="glass rounded-2xl neon-border-hover border-white-5 solution-card group">
              <span className="material-symbols-outlined lg text-primary mb-6 block neon-glow" style={{fontVariationSettings: "'FILL' 1"}}>music_note</span>
              <h3 className="font-headline-md text-on-surface mb-4 tracking-tight">Concerts</h3>
              <p className="text-on-surface-variant font-body-md">High-fidelity acoustic engineering for intimate performances by global icons.</p>
            </div>
            <div className="glass rounded-2xl neon-border-hover border-white-5 solution-card group">
              <span className="material-symbols-outlined lg text-primary mb-6 block neon-glow" style={{fontVariationSettings: "'FILL' 1"}}>festival</span>
              <h3 className="font-headline-md text-on-surface mb-4 tracking-tight">Festivals</h3>
              <p className="text-on-surface-variant font-body-md">Multi-stage logistics and immersive environment design for large-scale gatherings.</p>
            </div>
            <div className="glass rounded-2xl neon-border-hover border-white-5 solution-card group">
              <span className="material-symbols-outlined lg text-primary mb-6 block neon-glow" style={{fontVariationSettings: "'FILL' 1"}}>business_center</span>
              <h3 className="font-headline-md text-on-surface mb-4 tracking-tight">Corporate</h3>
              <p className="text-on-surface-variant font-body-md">Bespoke luxury events for Fortune 500 brands looking to disrupt the norm.</p>
            </div>
            <div className="glass rounded-2xl neon-border-hover border-white-5 solution-card group">
              <span className="material-symbols-outlined lg text-primary mb-6 block neon-glow" style={{fontVariationSettings: "'FILL' 1"}}>stars</span>
              <h3 className="font-headline-md text-on-surface mb-4 tracking-tight">Brand Activations</h3>
              <p className="text-on-surface-variant font-body-md">Experiential marketing that lives long after the lights go down.</p>
            </div>
            <div className="glass rounded-2xl neon-border-hover border-white-5 solution-card group">
              <span className="material-symbols-outlined lg text-primary mb-6 block neon-glow" style={{fontVariationSettings: "'FILL' 1"}}>person_search</span>
              <h3 className="font-headline-md text-on-surface mb-4 tracking-tight">Artist Booking</h3>
              <p className="text-on-surface-variant font-body-md">Exclusive connections to A-list global talent and rising underground stars.</p>
            </div>
            <div className="glass rounded-2xl neon-border-hover border-white-5 solution-card group">
              <span className="material-symbols-outlined lg text-primary mb-6 block neon-glow" style={{fontVariationSettings: "'FILL' 1"}}>lightbulb</span>
              <h3 className="font-headline-md text-on-surface mb-4 tracking-tight">Lighting Solutions</h3>
              <p className="text-on-surface-variant font-body-md">Revolutionary visual architecture utilizing next-gen laser and LED technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-py container reveal" id="gallery">
        <h2 className="font-headline-xl text-on-surface mb-16 tracking-tighter">The Archive</h2>
        <div className="grid gallery-grid gap-4">
          <div className="gallery-col">
            <div className="glass rounded-xl gallery-img-wrap h-64">
              <img className="gallery-img" alt="DJ hands on mixer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo5vKiFFQR8UQPq0KZ32F0YZd5I13lmEsbxIA_kP_3m1xpDIUyD4k0Pog-NS8rI_dboS32IPTGkAllgr24ZNPVw3lNbdVEokbLMj6NfR1ahlG4a2prbbIuKdZp7FeUcXM11SwObHYfAQkw2dds6Ut4_3XbX77pWelNjwrQfgx7qaYD7sWxA2x1fZ-K9FJ16IwDbTNDTmWdX6Bwi2Kom30yIMyU7vbGP-IhveRN6RLRJ1iHohTnNZqS"/>
            </div>
            <div className="glass rounded-xl gallery-img-wrap h-96">
              <img className="gallery-img" alt="Outdoor festival" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANSU-ZoTVZLY_VQ_yoojcI_yIE5Sty_Yqm7t1QjTvapHsHaFAu7TNnBHtiOnXfHGM5jgraath2htGVXi9l6XRpDkaP_UVrrx-6BAg97nTyqhnYviN62WiFR-uCf390eUbEA5IPkbZnSQPUBwryksTVQlt4mU5_44sud39UwPnxAlwmmEl_vx3AXheObvHMU0xE82pdSOkD8fYEhnGei5cOTvMSYGGDcmU6x9jGkB3EJsywNaxe3E26"/>
            </div>
          </div>
          <div className="gallery-col">
            <div className="glass rounded-xl gallery-img-wrap h-96">
              <img className="gallery-img" alt="Light trails" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoX021WOOG6dG5niAYTcQbIqIj1gOxBIWVqQJXz_zYnqjRYuVHV-WCqsRfFwCAt4PYbcr23uotWboEbFWBlfnnGJtF2_Ul3vMINVMhAwEs6o8WnjFyytHzZrzOeFSdNbat8ftMGmF-eUmTWDEFDvmAmTj5X_bGsDc5Fd6fbi_RWouM_PmM2GsIO3vPnfGJ3Wije0_A0nhEoac4iiYcVBdYMFmnzfVfkPp0mO0Dh70uCK7i8ETAcyBz"/>
            </div>
            <div className="glass rounded-xl gallery-img-wrap h-64">
              <img className="gallery-img" alt="VIP lounge" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm3OuMphddENUp5M1KNRQKeGLd3qBV1INvGFf8xZSSoqLrq8lFNQw6k03gjhsWcqlVgjDovr8XJPAgHeNR9-LsSJ7M9eieLJ742lFVpjp56PibMzi1cqhoxsLl6mi8AT7bH6iZX_iia4jdRRVD-zgU-0MMXFJXsTmWrnRCsvk7hTjn6JKsjcUnc9XkYTl-XYBnnZ8aXunzctU4UWaVsM-8YodzRIEoahCgazxZ37TFHGt864nJIEJI"/>
            </div>
          </div>
          <div className="gallery-col hidden-md">
            <div className="glass rounded-xl gallery-img-wrap h-64">
              <img className="gallery-img" alt="Futuristic performer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVz2pqYDDJ2YUWF9fSfU04bJBf3PQCCiYKALWIE5R74I5n4Cx_vbXctZ2C_rBoRroJtB5KEsQ-fwmLELc1EGsxpLlpwo0YGJMifAZrTk9prcVcOcIa7Am72QCYopMJ_Uj581fsSm2SlMocC1L-AjEOlH-iEUrMLtvEYwDiCf2HYyvNQIpc-_lWwXvBq85KNkhbPXQ6YL0ZxaNnbfF3IQwjXKFxNaKXyyaEW1VA5pDBxqkaV1fs85s8"/>
            </div>
            <div className="glass rounded-xl gallery-img-wrap h-96">
              <img className="gallery-img" alt="Pool party" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpGuone7m4svWOaCt3PBfzGJ4r5qCW1E4vkj7RlwXAR_pIyS3DJJLjTiXFmeG2kbQyb6AEYDzwnBjMbOoB1ZqDzI5XIxgIwmN5p_jhLjdkWdLucvpLn6ecVeAhccJAJNVUtbc5sX6YobviDTMqtFhntcieQW8a7edMBo8OVe7oTOJOYXtlmeBs_gEltXP1Mar7wU8N25-5wwFuzYtqHc9buGVlpDytr_lEaWq4LW0XrHMRcHxL3WXN"/>
            </div>
          </div>
          <div className="gallery-col hidden-md">
            <div className="glass rounded-xl gallery-img-wrap h-96">
              <img className="gallery-img" alt="High fashion attendee" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmF6_EHvKybHzXki72vjS9ktVtYi_AFi0_VAOvxH-CoEdZjyepla1G5q1JmlIj220iS-Hm3qc6XPQpAhnZFEZYigDK8GW5Ldo-4BjGd8CkyMg1SE_nD5csZQ9DbeCo7G3LnGTFhXeeQVmza-c0LHqYazgaPsPEuMoOHjoUrKYyJixUrXqE3PavyiUvkcMi8ovVMTdfdg55vUgvj6hq3S5gPgu9AxwxHAxEmHfbIxK4NP3-ofhg8RV-"/>
            </div>
            <div className="glass rounded-xl gallery-img-wrap h-64">
              <img className="gallery-img" alt="Corporate event" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgwMa_nopDS2xbPFweYf_4e1s0k3XDXRtxS91XywMxGht7TUfNULjs9VrJCep5h3YBPbHExr1VZBvK2YSvTNo0jNoDjk3m2Gx7Or8aBbEUywQG5kgRqwTV9s0eECxXZ35QOp0721Xiohc_biF1L1W94Mm6KEr2QyTV9annvZg76Q4uxgbFjsO5vs8yZP9ZmczBmodhxQMeeTKE0hTxx4H9WU1pnfSastYfiuSbM8UuBglgMCvwKlKW"/>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-surface-container-lowest">
        <div className="container grid footer-grid gap-12" style={{paddingTop: '5rem', paddingBottom: '5rem'}}>
          <div>
            <span className="font-headline-xl text-primary block mb-4 tracking-tighter neon-glow">AfterDark</span>
            <p className="text-on-surface-variant font-body-md leading-relaxed" style={{maxWidth: '320px'}}>Elevating Asian nightlife through unrivaled production and exclusive experiences since 2018.</p>
            <div className="mt-8 flex gap-4">
              <a className="social-icon glass" href="#">
                <span className="material-symbols-outlined">camera</span>
              </a>
              <a className="social-icon glass" href="#">
                <span className="material-symbols-outlined">play_circle</span>
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-label-caps tracking-[0.2em] text-primary mb-8">Explore</h5>
            <ul className="footer-list">
              <li><a className="footer-link" href="#">Upcoming Events</a></li>
              <li><a className="footer-link" href="#">Event Solutions</a></li>
              <li><a className="footer-link" href="#">Artist Roster</a></li>
              <li><a className="footer-link" href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-label-caps tracking-[0.2em] text-primary mb-8">Resources</h5>
            <ul className="footer-list">
              <li><a className="footer-link" href="#">Privacy Policy</a></li>
              <li><a className="footer-link" href="#">Terms of Service</a></li>
              <li><a className="footer-link" href="#">FAQ</a></li>
              <li><a className="footer-link" href="#">Contact Support</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-label-caps tracking-[0.2em] text-primary mb-8">Newsletter</h5>
            <p className="text-on-surface-variant font-body-md mb-6 leading-relaxed">Get priority access to ticket drops and member-only announcements.</p>
            <div className="input-group">
              <input className="email-input rounded-l-xl" placeholder="Your email address" type="email"/>
              <button className="submit-btn rounded-r-xl flex items-center justify-center" style={{paddingLeft: '1.25rem', paddingRight: '1.25rem'}}>
                <span className="material-symbols-outlined text-sm font-bold">send</span>
              </button>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <p className="font-label-caps text-[9px] text-on-surface-variant opacity-40 tracking-[0.5em]">© 2024 AfterDark Exclusive. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
