import React from "react";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-left">
        <h1 id="hero-title" className="h-title">
          Create. Share. Shine.
        </h1>
        <p className="h-sub">
          A small prototype landing page inspired by Tootsy. This version uses
          placeholder images and text so you can demo quickly.
        </p>
        <div style={{ display: "flex", gap: 12 }}>
          <a className="btn" href="#gallery">
            Explore
          </a>
          <a
            style={{
              padding: "10px 16px",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.06",
              color: "var(--muted)",
            }}
            href="#features"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* <div className="hero-right">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} style={{ width: 160 }} className="card">
            <img
              src={`https://picsum.photos/seed/hero${i}/300/180`}
              alt={`preview-${i}`}
            />
            <h3>Project {i + 1}</h3>
            <p>Short description for this example project. Placeholder text.</p>
          </div>
        ))}
      </div> */}
    </section>
  );
}
