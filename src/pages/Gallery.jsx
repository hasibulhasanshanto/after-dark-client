import { useState } from "react";

const galleryItems = [
  {
    id: 1,
    title: "Prism Stage Live",
    category: "ARTIST CLOSE-UPS",
    location: "IBIZA SUMMER '24",
    aspect: "aspect-[3/4]",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
    isVideo: false,
  },
  {
    id: 2,
    title: "Midnight Resonance",
    category: "CROWD ENERGY",
    location: "NEON GARDENS",
    aspect: "aspect-video",
    img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    isVideo: false,
  },
  {
    id: 3,
    title: "The Platinum Lounge",
    category: "VIP LOUNGE",
    location: "VIP REEL",
    aspect: "aspect-square",
    img: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=1200&q=80",
    isVideo: true,
  },
  {
    id: 4,
    title: "Holographic Void",
    category: "FESTIVALS",
    location: "TECHNO SERIES '24",
    aspect: "aspect-[9/16]",
    img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80",
    isVideo: false,
  },
  {
    id: 5,
    title: "Electric Grace",
    category: "BEHIND THE SCENES",
    location: "DANCE ARCHIVE",
    aspect: "aspect-square",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    isVideo: false,
  },
  {
    id: 6,
    title: "The Grid Arena",
    category: "FESTIVALS",
    location: "GLOBAL TOUR",
    aspect: "aspect-video",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    isVideo: false,
  },
];

const categories = [
  "ALL MOMENTS",
  "FESTIVALS",
  "VIP LOUNGE",
  "ARTIST CLOSE-UPS",
  "CROWD ENERGY",
  "BEHIND THE SCENES",
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("ALL MOMENTS");
  const [selectedMedia, setSelectedMedia] = useState(null);

  const filteredItems =
    activeCategory === "ALL MOMENTS"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="relative min-h-screen bg-background text-on-background pt-28 pb-24 overflow-x-hidden">
      {/* Ambient Background Blur */}
      <div className="fixed top-1/4 -right-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-1/4 -left-20 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-5 md:px-16 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_12px_#FF00D6]"></span>
              <span className="font-billion text-base text-primary tracking-normal">
                Lens Into Darkness
              </span>
            </div>
            <h1 className="font-display-lg text-4xl md:text-[72px] leading-tight tracking-tighter text-white">
              The <span className="text-primary italic neon-glow">Collective</span> Memories
            </h1>
            <p className="font-body-lg text-gray-300 text-base md:text-lg mt-4 leading-relaxed">
              A curated odyssey of visual electricity. From strobe-lit dance floors to high-fidelity stages, relive the AfterDark experience through our master photographers' perspectives.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="bg-white/[0.03] backdrop-blur-md border border-white/10 px-6 py-3 rounded-xl font-label-caps text-xs text-white flex items-center gap-2 hover:bg-white/10 hover:border-primary/40 transition-all">
              <span className="material-symbols-outlined text-sm">tune</span>
              FILTER ARCHIVE
            </button>
          </div>
        </div>

        {/* Category Chips */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-label-caps text-xs uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? "bg-primary text-on-primary font-bold shadow-[0_0_20px_rgba(255,0,214,0.4)]"
                  : "border border-white/15 text-gray-300 hover:border-primary/50 hover:text-white bg-white/[0.02]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedMedia(item)}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(255,0,214,0.15)]"
            >
              <div className={`${item.aspect} w-full overflow-hidden relative`}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {item.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all group-hover:scale-110 shadow-lg">
                      <span className="material-symbols-outlined text-3xl">play_arrow</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Hover Overlay Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded text-[10px] font-bold tracking-widest uppercase mb-2 inline-block font-label-caps self-start">
                  {item.category}
                </span>
                <h3 className="font-headline-md text-xl text-white mb-1">{item.title}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-400 font-label-caps text-[10px] tracking-widest">
                    {item.location}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined text-lg">
                      {item.isVideo ? "videocam" : "zoom_in"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-24 p-10 md:p-14 bg-white/[0.02] backdrop-blur-2xl rounded-3xl text-center border border-white/10 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-headline-xl text-3xl md:text-4xl text-white mb-6">
              Want to be featured?
            </h2>
            <p className="font-body-lg text-gray-300 text-base mb-8">
              Tag your stories with <span className="text-primary font-bold neon-glow">#AfterDarkExclusive</span> for a chance to be showcased in our official visual archive.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-caps text-xs uppercase tracking-widest font-bold hover:shadow-[0_0_25px_rgba(255,0,214,0.5)] transition-all"
              >
                Follow On Instagram
              </a>
              <button
                onClick={() => alert("Upload feature opening soon!")}
                className="border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 rounded-full font-label-caps text-xs uppercase tracking-widest text-white hover:bg-white/15 transition-all"
              >
                Submit Content
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-5 animate-fadeIn"
          onClick={() => setSelectedMedia(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-background rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            {selectedMedia.isVideo ? (
              <video
                autoPlay
                controls
                loop
                className="w-full max-h-[70vh] object-cover"
              >
                <source src="/hero-bg.mp4" type="video/mp4" />
              </video>
            ) : (
              <img
                src={selectedMedia.img}
                alt={selectedMedia.title}
                className="w-full max-h-[70vh] object-contain bg-black"
              />
            )}

            <div className="p-6 bg-surface-container flex justify-between items-center border-t border-white/10">
              <div>
                <span className="text-primary font-label-caps text-xs uppercase tracking-wider block">
                  {selectedMedia.category}
                </span>
                <h3 className="font-headline-md text-2xl text-white">{selectedMedia.title}</h3>
                <p className="text-gray-400 text-xs mt-1">{selectedMedia.location}</p>
              </div>
              <button
                onClick={() => setSelectedMedia(null)}
                className="px-6 py-2 bg-primary text-on-primary rounded-full font-label-caps text-xs font-bold"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
