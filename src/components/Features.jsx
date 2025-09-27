import React from "react";

const items = [
  {
    title: "Fast Setup",
    desc: "Clone this template and show a polished demo within minutes.",
  },
  { title: "Responsive", desc: "Looks good on phones, tablets and desktop." },
  {
    title: "Placeholders",
    desc: "Uses picsum/placeholder images for fast demos.",
  },
];

export default function Features() {
  return (
    <section id="features">
      <h2 style={{ color: "white" }}>Why this prototype?</h2>
      <p style={{ color: "var(--muted)" }}>
        Quick points to explain the project to your friend.
      </p>
      <div className="features" aria-hidden>
        {items.map((it, idx) => (
          <div className="feature" key={idx}>
            <h3 style={{ marginTop: 0, color: "white" }}>{it.title}</h3>
            <p style={{ color: "var(--muted)" }}>{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
