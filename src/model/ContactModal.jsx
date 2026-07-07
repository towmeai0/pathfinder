import { useState } from "react";
import ArrowRight from "../components/common/ArrowRight";
import { SuccessPopup } from "./SuccessPopup";

import {  COLORS } from "../constants/theme";


const { LIME, INK, TEAL } = COLORS;

export function ContactModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    company: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    setShowSuccess(true);
  };

  const fieldStyle = {
    width: "100%",
    boxSizing: "border-box",
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid #000000",
    fontFamily: "'Inter', sans-serif",
    fontSize: 15,
    color: "#000000",
    backgroundColor: "#FFFFFF",
    marginBottom: 16,
    outline: "none",
  };

  const labelStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: 13,
    fontWeight: 600,
    color: INK,
    marginBottom: 6,
    display: "block",
  };

  return (
    <>
      <div
        role="dialog"
        aria-modal="true"
        onClick={onClose}
        className="contact-modal-overlay"
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(21,26,31,0.55)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 50,
          padding: 20,
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="contact-modal"
          style={{
            background: "#ffffff",
            borderRadius: 20,
            width: "100%",
            maxWidth: 420,
            padding: "28px 32px 32px",
            maxHeight: "90vh",
            overflowY: "auto",
            position: "relative",
          }}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="contact-modal-close"
            style={{
              position: "absolute",
              top: 18,
              right: 18,
              width: 28,
              height: 28,
              borderRadius: "50%",
              border: "none",
              background: "rgba(21,26,31,0.06)",
              cursor: "pointer",
              fontSize: 16,
              lineHeight: "28px",
              color: INK,
            }}
          >
            ×
          </button>

          <h2
            className="contact-modal-title"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 26,
              color: INK,
              marginTop: 0,
              marginBottom: 24,
            }}
          >
            Contact <span style={{ color: TEAL }}>Us</span>
          </h2>

          <form onSubmit={handleSubmit}>
            <label style={labelStyle} htmlFor="name">Full Name*</label>
            <input id="name" style={fieldStyle} required value={form.name} onChange={update("name")} />

            <label style={labelStyle} htmlFor="email">Email*</label>
            <input id="email" type="email" style={fieldStyle} required value={form.email} onChange={update("email")} />

            <label style={labelStyle} htmlFor="phone">Contact No*</label>
            <input id="phone" style={fieldStyle} required value={form.phone} onChange={update("phone")} />

            <label style={labelStyle} htmlFor="linkedin">LinkedIn Url*</label>
            <input id="linkedin" style={fieldStyle} required value={form.linkedin} onChange={update("linkedin")} />

            <label style={labelStyle} htmlFor="company">Company Name*</label>
            <input id="company" style={fieldStyle} required value={form.company} onChange={update("company")} />

            <label style={labelStyle} htmlFor="message">Message (optional)</label>
            <textarea
              id="message"
              rows={3}
              style={{ ...fieldStyle, resize: "vertical", fontFamily: "'Inter', sans-serif" }}
              value={form.message}
              onChange={update("message")}
            />

            <button
              type="submit"
              className="contact-submit"
              style={{
                width: "100%",
                marginTop: 8,
                padding: "14px 0",
                borderRadius: 12,
                border: "none",
                background: LIME,
                color: INK,
                fontFamily: "'Anton', sans-serif",
                fontSize: 16,
                letterSpacing: 0.5,
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 8,
              }}
            >
              SUBMIT
              <ArrowRight />
            </button>
          </form>
        </div>
      </div>

      {showSuccess && <SuccessPopup onClose={() => setShowSuccess(false)} />}
    </>
  );
}