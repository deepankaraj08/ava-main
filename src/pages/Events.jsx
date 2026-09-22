import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import { initiatives } from "../data.js";
import { useReveal } from "../useReveal.js";
import "../about.css";
import "../subpage.css";

function Events() {
  useReveal();

  return (
    <div className="site">

      <Navbar />

      <main id="top">

        <section className="page-head section">
          <div className="eyebrow">
            <h4>OUR SIGNATURES</h4>
          </div>

          <h1>
            THE<br />
            <i>EVENTS.</i>
          </h1>

          <p className="page-sub">
            Three initiatives that carry the year. Different audiences,
            different energy, one Avalanche identity.
          </p>
        </section>

        <section className="card-grid section">
          {initiatives.map((item) => (
            <Link
              to={`/events/${item.slug}`}
              className="event-card-link"
              key={item.title}
            >
              <article className="event-card" data-reveal>

                <div className="event-card-media">
                  <img src={item.images[0]} alt={item.title} />
                  <span className="event-explore-badge">EXPLORE EVENT ↗</span>
                </div>

                <div className="event-card-body">
                  <span>{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="event-action-text">EXPLORE DETAILS ↗</span>
                </div>

              </article>
            </Link>
          ))}
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

export default Events;
