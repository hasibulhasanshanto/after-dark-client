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
import Dashboard from "./pages/Dashboard";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainLayout() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <div className="font-body-md text-on-background bg-background antialiased">
      <ScrollToTop />
      {!isDashboard && <Navbar />}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<EventSolutions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ticket-preview" element={<TicketPreview />} />
          <Route path="/ticket" element={<TicketPreview />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>

      {!isDashboard && <Footer />}
    </div>
  );
}

function App() {
  return <MainLayout />;
}

export default App;
