import React from "react";

export default function Gallery() {
  const cards = Array.from({ length: 8 });
  return (
    <section id="gallery">
      <h2 style={{ color: "black", textAlign: "center" }}>
        Tootsy's Artwork Gallery
      </h2>
      {/* <p style={{ color: "var(--muted)" }}>
        A selection of example items (dummy images).
      </p> */}
      <div className="cards">
        {cards.map((_, i) => (
          <article className="card" key={i}>
            <img
              src={`https://picsum.photos/seed/gallery${i}/600/400`}
              alt={`gallery-${i}`}
            />
            <h3>Artwork {i + 1}</h3>
            <p>Made up placeholder description for item {i + 1}.</p>
          </article>
        ))}
      </div>
    </section>
  );
}
