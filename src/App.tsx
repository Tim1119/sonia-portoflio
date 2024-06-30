import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./custom-components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { Contact } from "lucide-react";
import Footer from "./custom-components/Footer";

function App() {
  return (
    <div className="w-full">
      <Router>
        <Navbar />
        <div className="w-full" style={{ minHeight: "80vh", marginTop: "80px", marginLeft:'0px',padding:'0px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
