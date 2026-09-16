import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import { teamMembers, teamYears } from "../teamMembers.js";
import { useReveal } from "../useReveal.js";
import "../about.css";
import "../subpage.css";

const initials = (name) =>
  name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

const BATCH_MAP = {
  4: "V13",
  3: "V14",
  2: "V15",
  "V13": 4,
  "V14": 3,
  "V15": 2,
};

function TeamPage() {
  const [year, setYear] = useState("All");

  const filterBatchValue = BATCH_MAP[year] || year;
  const shown =
    year === "All"
      ? teamMembers
      : teamMembers.filter((m) => m.year === filterBatchValue);

  useReveal([shown, year]);

  return (
    <div className="site">

      <Navbar />

      <main id="top">

        <section className="page-head section">
          <div className="eyebrow">
            <h4>MEET THE CREATORS</h4>
          </div>

          <h1>
            THE<br />
            <i>TEAM.</i>
          </h1>

          <p className="page-sub">
            The students behind Avalanche — past and present. Organisers,
            designers, leads and members who bring the vision to life.
          </p>

          <div className="year-filter">
            {teamYears.map((y) => (
              <button
                key={y}
                type="button"
                className={`year-chip ${year === y ? "active" : ""}`}
                onClick={() => setYear(y)}
              >
                {y}
              </button>
            ))}
          </div>
        </section>

        <section className="team-grid section">
          {shown.map((m) => {
            const batchName = BATCH_MAP[m.year] || `Year ${m.year}`;
            return (
              <article className="member-card" key={m.id || m.name} data-reveal>

                <div className="member-photo">
                  {m.image || m.photo ? (
                    <img src={m.image || m.photo} alt={m.name} />
                  ) : (
                    <span className="member-initials">{initials(m.name)}</span>
                  )}
                </div>

                <h3>{m.name}</h3>

                <div className="member-year">
                  {m.role ? `${batchName} • ${m.role}` : batchName}
                </div>

              <div className="member-links">
                {m.instagram && (
                  <a
                    href={m.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                )}
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                )}
              </div>

            </article>
            );
          })}
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

export default TeamPage;
