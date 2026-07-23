import { Routes, Route } from "react-router";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import EventSolutions from "./pages/EventSolutions";

function App() {
  return (
    <div className="font-body-md text-on-background bg-background antialiased">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<EventSolutions />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
