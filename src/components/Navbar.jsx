import React from "react";

export default function Navbar() {
  return (
    <header className="container nav" role="banner">
      <div className="logo">
        <div className="dot">T</div>
        <div>
          <div style={{ color: "white", fontWeight: 700 }}>Tootsy (Olala)</div>
          <div style={{ fontSize: 12, color: "var(--muted)" }}>Prototype</div>
        </div>
      </div>
      <nav className="nav-links" aria-label="Main navigation">
        <a href="#features">Features</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
        <a className="btn" href="#">
          Get Started
        </a>
      </nav>
    </header>
  );
}
