// Footer.jsx
import React from "react";
import logo from "../assets/MiniLogo.png";
export default function Footer() {
  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.inner}>
        {/* Left: logo + info */}
        <div style={footerStyles.colWide}>
          <div style={{ marginBottom: 12 }}>
            <span style={footerStyles.logoText}>RehabAI</span>
          </div>
          <p style={footerStyles.muted}>
            AI-assisted rehabilitation monitoring for lower-limb recovery.
            Prototype project from Phenikaa University.
          </p>

          <p style={footerStyles.item}>📍 Phenikaa University, Ha Dong, Ha Noi</p>
          <p style={footerStyles.item}>📞 0889 123 456</p>
          <p style={footerStyles.item}>✉️ rehabai@phenikaa-uni.edu.vn</p>
          <p style={footerStyles.item}>🌐 https://ath-is-a-dev.online</p>
        </div>

        {/* Middle: links */}
        <div style={footerStyles.col}>
          <h4 style={footerStyles.heading}>Product</h4>
          <a href="#features" style={footerStyles.link}>
            Features
          </a>
          <a href="#download" style={footerStyles.link}>
            Download App
          </a>
          <a href="#use-web" style={footerStyles.link}>
            Use Web
          </a>
        </div>

        <div style={footerStyles.col}>
          <h4 style={footerStyles.heading}>About</h4>
          <a href="#why" style={footerStyles.link}>
            Why RehabAI
          </a>
          <a href="#how-it-works" style={footerStyles.link}>
            How it works
          </a>
          <a href="#who" style={footerStyles.link}>
            Who it is for
          </a>
        </div>

        {/* Right: CTA */}
        <div style={footerStyles.colCTA}>
          <a href="#download" style={footerStyles.ctaButton}>
            Get demo → 
          </a>
        </div>
      </div>

      <div style={footerStyles.bottom}>
        © 2023–2025 RehabAI. All rights reserved.
      </div>
    </footer>
  );
}

const footerStyles = {
  footer: {
    backgroundColor: "#050608",      // đen xám rất đậm
    color: "#e5e7eb",
    padding: "48px 24px 32px",
    marginTop: "40px",
    borderTop: "1px solid #111827",  // line mỏng cho cảm giác “lab”
  },
  inner: {
    maxWidth: "1080px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    gap: "32px",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  colWide: {
    flex: "1 1 260px",
    maxWidth: "360px",
  },
  col: {
    flex: "1 1 140px",
    minWidth: "140px",
  },
  colCTA: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: "0 0 220px",
  },
  logoText: {
    fontSize: "22px",
    fontWeight: 700,
    letterSpacing: "0.04em",
    color: "#f9fafb",
  },
  muted: {
    fontSize: "14px",
    color: "#9ca3af",
    marginBottom: "10px",
  },
  item: {
    fontSize: "13px",
    color: "#9ca3af",
    margin: "2px 0",
  },
  heading: {
    fontSize: "15px",
    fontWeight: 600,
    marginBottom: "8px",
    color: "#e5e7eb",
  },
  link: {
    display: "block",
    fontSize: "13px",
    color: "#9ca3af",
    textDecoration: "none",
    marginBottom: "4px",
  },
  ctaButton: {
    display: "inline-block",
    padding: "12px 24px",
    borderRadius: "999px",
    backgroundColor: "#f9fafb",      // nút trắng
    color: "#111827",                // chữ xám đậm
    fontWeight: 600,
    fontSize: "15px",
    textDecoration: "none",
    boxShadow: "0 8px 24px rgba(15, 23, 42, 0.35)",
    border: "1px solid #e5e7eb",
  },
  bottom: {
    maxWidth: "1080px",
    margin: "20px auto 0",
    fontSize: "12px",
    color: "#6b7280",
    textAlign: "left",
  },
};
