import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Gallery from "./components/Gallery.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <main className="container">
        <Hero />
        {/* <Features /> */}
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
