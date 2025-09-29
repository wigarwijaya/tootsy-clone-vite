import React from "react";
import "./Gallery.css";

const images = Array.from(
  { length: 36 },
  (_, i) => `https://picsum.photos/200?random=${i + 1}`
);

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="gallery-text">
        <h2>Meet Pumpfurr!</h2>
        <div className="inner-outline">
        <p>
          Pumpfurr is a beloved turtle character born live on PumpFun during an
          exciting livestream! Created by a talented artist who takes real-time
          ideas and feedback from the vibrant community, Pumpfurr represents the
          magic of collaborative art and the power of community-driven
          creativity.
        </p>
        </div>
      </div>

      <h2>Pumpfurr's Artwork Gallery</h2>
      <div className="gallery">
        <div className="gallery-grid">
         {images.map((src, idx) => (
            <img key={idx} src={src} alt={`Artwork ${idx + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
