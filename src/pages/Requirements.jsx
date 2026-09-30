import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import "../about.css";
import "../subpage.css";
import "../requirements.css";

const REQUIREMENTS = [
  {
    num: "01",
    icon: "🎓",
    title: "Eligibility",
    desc: "Open to all 1st-year students of SKIT. No prior experience needed — just bring your enthusiasm!",
  },
  {
    num: "02",
    icon: "📝",
    title: "Registration",
    desc: "Fill in the Google Form using the button below. One submission per student only.",
  },
  {
    num: "03",
    icon: "📱",
    title: "WhatsApp Group",
    desc: "Join the official WhatsApp group after registration for real-time updates and schedules.",
  },
  {
    num: "04",
    icon: "🎽",
    title: "Dress Code",
    desc: "Smart casual attire. Your college ID card must be worn at all times during the event.",
  },
  {
    num: "05",
    icon: "📍",
    title: "Venue",
    desc: "Birla Auditorium, SKIT Campus. Arrive at least 15 minutes before the event starts.",
  },
  {
    num: "06",
    icon: "⏰",
    title: "Punctuality",
    desc: "Event begins at 5:00 PM sharp. Late entry may not be permitted, so plan ahead.",
  },
];

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdcgIGznF6nOOM0wpSkSsrmSbe44J0K0jIne4vc71og1LsmLA/viewform?usp=send_form";

function Requirements() {
  return (
    <div className="site">
      <Navbar />

      <main id="top">

        {/* ── Hero ────────────────────────────────────────── */}
        <section className="section req-hero">
          <div className="req-hero-inner">
            <div className="req-hero-text">
              <div className="eyebrow">
                <h4>ADVENTO · FRESHER EVENT 2026</h4>
              </div>
              <h1 className="req-hero-h1">
                REQUIRE<br /><i>MENTS.</i>
              </h1>
              <p className="req-hero-sub">
                Everything you need to know before joining ADVENTO 2026.
                Read through the checklist, then hit <strong>Get Recruiter</strong> to register.
              </p>
              <div className="req-hero-actions">
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="req-btn-primary"
                  id="get-recruiter-btn"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
                    <rect x="9" y="3" width="6" height="4" rx="1"/>
                    <path d="M9 12l2 2 4-4"/>
                  </svg>
                  GET RECRUITER
                </a>
                <Link to="/" className="req-btn-ghost">
                  ← BACK HOME
                </Link>
              </div>
            </div>

            {/* Stats strip */}
            <div className="req-hero-stats">
              <div className="req-stat">
                <strong>30 SEP</strong>
                <span>DATE</span>
              </div>
              <div className="req-stat-divider" />
              <div className="req-stat">
                <strong>5:00 PM</strong>
                <span>TIME</span>
              </div>
              <div className="req-stat-divider" />
              <div className="req-stat">
                <strong>BIRLA</strong>
                <span>VENUE</span>
              </div>
              <div className="req-stat-divider" />
              <div className="req-stat">
                <strong>FREE</strong>
                <span>ENTRY</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Requirements list ────────────────────────────── */}
        <section className="section req-list-section">
          <div className="req-list-header">
            <p className="req-list-label">CHECKLIST</p>
            <h2 className="req-list-title">Before You Register</h2>
          </div>

          <div className="req-list">
            {REQUIREMENTS.map((r) => (
              <div className="req-item" key={r.num} data-reveal>
                <div className="req-item-num">{r.num}</div>
                <div className="req-item-icon">{r.icon}</div>
                <div className="req-item-body">
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA Banner ───────────────────────────────────── */}
        <section className="section req-banner-section">
          <div className="req-banner" data-reveal>
            <div className="req-banner-text">
              <p className="req-banner-kicker">READY TO JOIN?</p>
              <h2 className="req-banner-title">Register for ADVENTO 2026</h2>
              <p className="req-banner-sub">
                Fill in the form and secure your spot at the biggest fresher event of the year.
              </p>
            </div>
            <div className="req-banner-actions">
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="req-btn-primary req-btn-lg"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
                  <rect x="9" y="3" width="6" height="4" rx="1"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
                OPEN REGISTRATION FORM
              </a>
              <a
                href="https://chat.whatsapp.com/JZHaa8RgKSv8zYf6nqhQUL"
                target="_blank"
                rel="noopener noreferrer"
                className="req-btn-whatsapp"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.764.459 3.486 1.333 5.001L2 22l5.131-1.345a9.96 9.96 0 004.881 1.28h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.668-1.038-5.176-2.924-7.062A9.923 9.923 0 0012.012 2zm.004 1.666c4.587 0 8.321 3.731 8.322 8.318 0 2.222-.866 4.31-2.438 5.881A8.26 8.26 0 0112.012 20.3h-.003a8.293 8.293 0 01-4.068-1.07l-.292-.173-3.024.793.807-2.949-.19-.302a8.277 8.277 0 01-1.267-4.281c0-4.587 3.734-8.32 8.322-8.32zm4.562 10.934c-.25-.125-1.482-.731-1.712-.815-.23-.083-.397-.125-.564.125-.166.25-.646.815-.792.981-.146.166-.292.187-.542.062-.25-.125-1.055-.389-2.01-1.24-.743-.662-1.244-1.48-1.39-1.73-.146-.25-.015-.385.11-.509.112-.112.25-.292.375-.438.125-.146.166-.25.25-.417.083-.166.042-.312-.021-.437-.063-.125-.564-1.358-.773-1.858-.203-.488-.41-.422-.564-.43-.146-.008-.313-.008-.479-.008-.166 0-.437.063-.666.312-.23.25-.875.855-.875 2.086 0 1.231.896 2.42 1.021 2.587.125.167 1.764 2.694 4.274 3.777.597.257 1.064.411 1.428.526.6.19 1.146.163 1.578.099.481-.072 1.482-.605 1.69-1.189.208-.584.208-1.084.146-1.189-.063-.105-.23-.167-.48-.292z"/>
                </svg>
                JOIN WHATSAPP GROUP
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer>
        <Link to="/">AVALANCHE®</Link>
        <span>STUDENT COMMUNITY</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}

export default Requirements;
