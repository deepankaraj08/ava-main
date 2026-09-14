import React from "react";
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
            <article className="event-card" key={item.title} data-reveal>

              <div className="event-card-media">
                <img src={item.images[0]} alt={item.title} />
              </div>

              <div className="event-card-body">
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>

            </article>
          ))}
        </section>

      </main>

      <footer>
        <span>AVALANCHE®</span>
        <span>STUDENT COMMUNITY</span>
        <span>© 2026</span>
      </footer>

    </div>
  );
}

export default Events;
