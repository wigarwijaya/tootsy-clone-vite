import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container" id="contact">
        {/* <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div>
            <div style={{ color: "white", fontWeight: 700 }}>
              Tootsy (Clone)
            </div>
            <div style={{ color: "var(--muted)" }}>
              Prototype landing page • Dummy content
            </div>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Contact</a>
          </div>
        </div> */}
        <div
          style={{ marginTop: 18, color: "var(--muted)", textAlign: "center" }}
        >
          © {new Date().getFullYear()} Made with ♥ and lots of imagination!.
        </div>
      </div>
    </footer>
  );
}
