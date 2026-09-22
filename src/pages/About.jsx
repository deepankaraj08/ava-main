import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import "../about.css";

function About() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        }),
      { threshold: 0.12 }
    );

    revealRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const reveal = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const pillars = [
    {
      num: "01",
      title: "CULTURE & ENERGY",
      text: "Building high-energy campus flagship events like ADVENTO that define college memories and set benchmarks every year."
    },
    {
      num: "02",
      title: "CREATIVE STAGE",
      text: "Giving every student a platform to showcase music, dance, art, design, media, and organizational leadership."
    },
    {
      num: "03",
      title: "LEADERSHIP & GROWTH",
      text: "Empowering project management, branding, sound & stage management, and student event production skills."
    },
    {
      num: "04",
      title: "COMMUNITY & BONDING",
      text: "A close-knit lifelong network connecting senior batch leaders with incoming freshers across all years."
    }
  ];

  const milestones = [
    {
      year: "2012",
      title: "FOUNDED",
      desc: "Established as a student community dedicated to bringing fresh energy and creativity to college life."
    },
    {
      year: "2016",
      title: "FLAGSHIP EXPANSION",
      desc: "Scaled up annual cultural events with grand stages, professional production, and wider campus participation."
    },
    {
      year: "2021",
      title: "MULTI-TEAM NETWORK",
      desc: "Evolved into structured teams covering design, web, operations, stage management, and media content."
    },
    {
      year: "2026+",
      title: "NEXT-GEN AVALANCHE",
      desc: "Uniting campus freshers with next-generation digital platforms, ADVENTO, and community initiatives."
    }
  ];


  return (
    <div className="site">
      <Navbar />

      <main id="top">
        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <h4>WHO WE ARE • STUDENT COMMUNITY</h4>
            </div>

            <h1>
              ABOUT<br />
              <span>AVALANCHE</span>
            </h1>

            <p className="hero-sub">
              More than an event team.<br />
              A student-led movement built around creative ideas, passionate people, and unforgettable campus experiences.
            </p>
          </div>

          <div className="hero-visual">
            <div className="mountain-shape"></div>

            <div className="hero-badge-container">
              <span className="hero-badge">⚡ 10+ YEARS LEGACY</span>
              <span className="hero-badge">👥 50+ ACTIVE MEMBERS</span>
            </div>

            <div className="hero-image">
              <img
                src="/images-opt/about-main.webp"
                fetchPriority="high"
                decoding="async"
                alt="Avalanche Team"
              />

              <div className="image-note">
                OUR TEAM<br />
                TOGETHER
              </div>
            </div>
          </div>

          <div className="scroll-hint">SCROLL TO EXPLORE ↓</div>
        </section>

        {/* WHO WE ARE INTRO SECTION */}
        <section className="intro section" id="about" ref={reveal}>
          <div className="side-number">01</div>

          <div className="intro-grid">
            <div>
              <div className="eyebrow">
                <h3>THE TEAM BEHIND THE ENERGY</h3>
              </div>

              <h2>
                WHO<br />
                <i>WE ARE.</i>
              </h2>
            </div>

            <div className="intro-text">
              <p className="lead">
                Avalanche is a student community that believes college life
                should be experienced, not simply attended.
              </p>

              <p>
                We bring together people with different interests, talents and
                ideas to build events and initiatives that make campus life
                more exciting, creative and connected.
              </p>

              <p>
                From cultural celebrations and large-scale events to
                community-driven initiatives, every project begins with a simple
                idea and a team willing to bring it to life.
              </p>
            </div>
          </div>
        </section>

        {/* 4 CORE PILLARS SECTION */}
        <section className="pillars-section section" ref={reveal}>
          <div className="pillars-head">
            <div className="eyebrow">
              <h4>OUR FOUNDATION</h4>
            </div>
            <h2>
              FOUR PILLARS OF <i>AVALANCHE.</i>
            </h2>
          </div>

          <div className="pillars-grid">
            {pillars.map((item) => (
              <div className="pillar-card" key={item.num}>
                <span className="pillar-num">{item.num}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TIMELINE / JOURNEY SECTION */}
        <section className="timeline-section section" ref={reveal}>
          <div className="timeline-head">
            <div className="eyebrow">
              <h4>OUR MILESTONES</h4>
            </div>
            <h2>
              THE AVALANCHE <i>JOURNEY.</i>
            </h2>
          </div>

          <div className="timeline-grid">
            {milestones.map((m) => (
              <div className="timeline-item" key={m.year}>
                <div className="timeline-year">{m.year}</div>
                <div className="timeline-title">{m.title}</div>
                <p className="timeline-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CALL TO ACTION */}
        <section className="final" ref={reveal}>
          <div className="eyebrow">THIS IS AVALANCHE.</div>

          <h2>
            READY TO
            <br />
            <i>CREATE?</i>
          </h2>

          <div className="about-actions">
            <Link to="/register" className="final-btn">
              REGISTER NOW ↗
            </Link>
            <Link to="/team" className="secondary-btn">
              MEET THE TEAM ↗
            </Link>
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

export default About;