import React, { useState, useRef } from "react";
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
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const videoWrapperRef = useRef(null);

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  const videoList = event.videos || (event.videoUrl ? [event.videoUrl] : []);

  const toggleFullscreen = () => {
    if (!videoWrapperRef.current) return;
    const elem = videoWrapperRef.current;

    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  };

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
            {videoList.length > 0 && (
              <span className="event-meta-pill video-meta-highlight">
                ▶ {videoList.length} VIDEO TEASER{videoList.length > 1 ? "S" : ""} INCLUDED
              </span>
            )}
          </div>
        </section>

        {/* VIDEO TEASER SECTION (IF AVAILABLE) */}
        {videoList.length > 0 && (
          <section className="event-video-section section">
            <div className="event-video-box">
              <div className="event-video-header">
                <div className="event-video-header-top">
                  <span className="video-pill-badge">
                    ▶ OFFICIAL TEASER {videoList.length > 1 ? `(${activeVideoIndex + 1}/${videoList.length})` : ""}
                  </span>

                  <div className="video-header-controls">
                    {videoList.length > 1 && (
                      <div className="video-tabs">
                        {videoList.map((_, idx) => (
                          <button
                            key={idx}
                            type="button"
                            className={`video-tab-btn ${idx === activeVideoIndex ? "active" : ""}`}
                            onClick={() => setActiveVideoIndex(idx)}
                          >
                            ▶ VIDEO {idx + 1}
                          </button>
                        ))}
                      </div>
                    )}

                    <button
                      type="button"
                      className="fullscreen-toggle-btn"
                      onClick={toggleFullscreen}
                      title="Fullscreen"
                      aria-label="Toggle Fullscreen"
                    >
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" />
                      </svg>
                    </button>
                  </div>
                </div>

                <h2>WATCH {event.title} IN ACTION</h2>
              </div>

              <div className="event-video-wrapper" ref={videoWrapperRef}>
                <iframe
                  src={videoList[activeVideoIndex]}
                  title={`${event.title} Video Teaser ${activeVideoIndex + 1}`}
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  className="event-video-iframe"
                ></iframe>
              </div>
            </div>
          </section>
        )}

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
