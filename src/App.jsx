import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import EventSolutions from "./pages/EventSolutions";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import TicketPreview from "./pages/TicketPreview";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="font-body-md text-on-background bg-background antialiased">
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<EventSolutions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ticket-preview" element={<TicketPreview />} />
          <Route path="/ticket" element={<TicketPreview />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
