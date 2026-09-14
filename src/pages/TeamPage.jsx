import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { teamMembers, teamYears } from "../teamMembers.js";
import { useReveal } from "../useReveal.js";
import "../about.css";
import "../subpage.css";

const initials = (name) =>
  name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

function TeamPage() {
  const [year, setYear] = useState("All");

  const shown =
    year === "All" ? teamMembers : teamMembers.filter((m) => m.year === year);

  // re-observe when the filter swaps the list out
  useReveal([year]);

  return (
    <div className="site">

      <Navbar />

      <main id="top">

        <section className="page-head section">
          <div className="eyebrow">
            <h4>THE PEOPLE</h4>
          </div>

          <h1>
            THE<br />
            <i>TEAM.</i>
          </h1>

          <div className="year-filter">
            <button
              className={`year-chip ${year === "All" ? "active" : ""}`}
              onClick={() => setYear("All")}
            >
              ALL
            </button>

            {teamYears.map((y) => (
              <button
                key={y}
                className={`year-chip ${year === y ? "active" : ""}`}
                onClick={() => setYear(y)}
              >
                YEAR {y}
              </button>
            ))}
          </div>
        </section>

        <section className="team-grid section">
          {shown.map((m) => (
            <article className="member-card" key={m.name} data-reveal>

              <div className="member-photo">
                {m.image ? (
                  <img src={m.image} alt={m.name} loading="lazy" />
                ) : (
                  <span className="member-initials">{initials(m.name)}</span>
                )}
              </div>

              <h3>{m.name}</h3>
              <span className="member-year">YEAR {m.year}</span>

              <div className="member-links">
                {m.instagram && (
                  <a href={m.instagram} target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                )}
                {m.linkedin && (
                  <a href={m.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                )}
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

export default TeamPage;
