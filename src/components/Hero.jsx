import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <img src="/logo.png" alt="Tootsy Logo" className="hero-logo" />
      <div className="hero-text">
        <h2>Meet Tootsy!</h2>
        <p>
          Tootsy is a beloved turtle character born live on PumpFun during an
          exciting livestream! Created by a talented artist who takes real-time
          ideas and feedback from the vibrant community, Tootsy represents the
          magic of collaborative art and the power of community-driven
          creativity.
        </p>
      </div>
    </section>
  );
}
