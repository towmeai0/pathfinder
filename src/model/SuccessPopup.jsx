import { useEffect } from "react";


import {  COLORS } from "../constants/theme";


const { LIME, INK } = COLORS;

export function SuccessPopup({ onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="success-popup-overlay"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(21,26,31,0.55)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
        padding: 20,
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="success-popup"
        style={{
          background: "#ffffff",
          borderRadius: 20,
          width: "100%",
          maxWidth: 420,
          padding: "40px 32px 36px",
          textAlign: "center",
          position: "relative",
          animation: "fadeInUp 0.4s ease",
          boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: LIME,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px",
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path
              d="M20 6L9 17L4 12"
              stroke={INK}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h2
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 28,
            color: INK,
            marginTop: 0,
            marginBottom: 12,
          }}
        >
          Form Submitted!
        </h2>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 16,
            color: "rgba(21,26,31,0.7)",
            lineHeight: 1.6,
            marginBottom: 0,
          }}
        >
          We'll get back to you shortly.
        </p>

        <button
          onClick={onClose}
          style={{
            marginTop: 24,
            padding: "10px 32px",
            borderRadius: 10,
            border: "none",
            background: LIME,
            color: INK,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          Got it
        </button>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}