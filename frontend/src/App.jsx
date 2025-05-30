import { useEffect } from "react";
import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Contacts from "./pages/Contacts";

export default function App() {
  useEffect(() => {
    // Remove LocomotiveScroll for now to restore native scrolling
    // const scroll = new LocomotiveScroll({
    //   el: document.querySelector("#main"),
    //   smooth: true,
    // });
    // return () => scroll && scroll.destroy();
  }, []);

  return (
    <Router>
      <div id="main" className="bg-gradient-to-tr from-black via-black to-black text-white font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}
