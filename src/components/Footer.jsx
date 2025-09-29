import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="section-outline">
      <section className="follow">
        <h2>Follow Pumpfurr</h2>
        <a href="#" className="btn">
          🐢 Follow @pumpfurr on X
        </a>
      </section>

      <section className="token">
        <h2>$PUMPFURR</h2>
        <p>
          The official token representing our beloved Pumpfurr on the Solana
          blockchain.
        </p>
        <div className="contract">
          <code>6zHo4KpQj1x9u8vJ1yTya8ce9X123gFa5Xov</code>
          <button>📋 Copy</button>
        </div>
        <div className="buttons">
          <button className="btn">📈 PumpFun</button>
          <button className="btn">📜 DexScreener</button>
        </div>
      </section>

      <p className="copyright">© 2025 Pumpfurr. Made with ♥ and imagination!</p>
    </footer>
  );
}
