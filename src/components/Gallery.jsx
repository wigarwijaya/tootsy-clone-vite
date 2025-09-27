import React from "react";
import "./Gallery.css";

const images = Array.from(
  { length: 36 },
  (_, i) => `https://picsum.photos/200?random=${i + 1}`
);

export default function Gallery() {
  return (
    <section className="gallery">
      <h2>Tootsy\'s Artwork Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Artwork ${idx + 1}`} />
        ))}
      </div>
    </section>
  );
}
