import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import { initiatives } from "../data.js";
import "../about.css";
import "../subpage.css";

function EventDetail() {
  const { slug } = useParams();
  const event = initiatives.find(
    (item) => item.slug === slug || item.id === slug || item.title.toLowerCase() === slug?.toLowerCase()
  );

  const [activeImgIndex, setActiveImgIndex] = useState(0);

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  return (
    <div className="site">
      <Navbar />

      <main id="top">
        {/* BACK BUTTON */}
        <div className="section event-detail-top">
          <Link to="/events" className="back-link">
            ← BACK TO ALL EVENTS
          </Link>
        </div>

        {/* HERO SECTION */}
        <section className="event-detail-hero section">
          <div className="eyebrow">
            <h4>{event.tag}</h4>
          </div>

          <h1 className="event-detail-title">{event.title}</h1>

          <div className="event-meta-bar">
            {event.date && <span className="event-meta-pill">📅 {event.date}</span>}
            {event.venue && <span className="event-meta-pill">📍 {event.venue}</span>}
          </div>
        </section>

        {/* GALLERY SLIDER & DETAILS SECTION */}
        <section className="event-detail-content section">
          <div className="event-detail-grid">
            {/* LEFT: IMAGE GALLERY */}
            <div className="event-gallery-box">
              <div className="event-main-photo">
                <img
                  src={event.images[activeImgIndex] || event.images[0]}
                  alt={event.title}
                />
              </div>

              {event.images.length > 1 && (
                <div className="event-thumb-row">
                  {event.images.map((imgSrc, idx) => (
                    <button
                      key={imgSrc}
                      type="button"
                      className={`event-thumb-btn ${idx === activeImgIndex ? "active" : ""}`}
                      onClick={() => setActiveImgIndex(idx)}
                    >
                      <img src={imgSrc} alt="" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT: OVERVIEW & HIGHLIGHTS */}
            <div className="event-info-box">
              <h2>ABOUT THE INITIATIVE</h2>
              <p className="event-description">{event.fullDescription || event.text}</p>

              {event.highlights && (
                <div className="event-highlights">
                  <h3>KEY HIGHLIGHTS</h3>
                  <ul>
                    {event.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="event-cta-box">
                <Link to={event.ctaLink || "/register"} className="final-btn">
                  {event.ctaText || "REGISTER NOW"} ↗
                </Link>
              </div>
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

export default EventDetail;
