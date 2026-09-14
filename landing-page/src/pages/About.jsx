import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar.jsx";
import "../about.css";


function About() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      }),
      { threshold: 0.12 }
    );

    revealRefs.current.forEach(el => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const reveal = el => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="site">

      <Navbar />


      <main id="top">

        <section className="hero">

          <div className="hero-copy">

            <div className="eyebrow">
              <h4>WHO WE ARE</h4>
            </div>

            <h1>
              ABOUT<br />
              <span>AVALANCHE</span>
            </h1>

            <p className="hero-sub">
              More than an event team.<br />
              A community built around ideas,<br />
              people and experiences.
            </p>

          </div>

          <div className="hero-visual">

            <div className="mountain-shape"></div>

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

          <div className="scroll-hint">
            SCROLL TO EXPLORE ↓
          </div>

        </section>


        <section
          className="intro section"
          id="about"
          ref={reveal}
        >

          <div className="side-number"></div>

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
                <h3>
                  Avalanche is a student community that believes college life
                  should be experienced, not simply attended.
                </h3>
              </p>

              <p>
                <h4>
                  We bring together people with different interests, talents and
                  ideas to build events and initiatives that make campus life
                  more exciting, creative and connected.
                </h4>
              </p>

              <p>
                <h4>
                  From cultural celebrations and large-scale events to
                  community-driven initiatives, every project begins with a simple
                  idea and a team willing to bring it to life. We believe the best
                  experiences are created when people collaborate, experiment and
                  take ownership.
                </h4>
              </p>

              <p>
                <h4>
                  Avalanche is not just about organizing events — it is about
                  building memories, discovering talent, meeting new people and
                  creating something students can truly call their own.
                </h4>
              </p>

              <div className="about-buttons">

                <div className="about-button">

                  <div>
                    <span>ESTABLISHED SINCE</span>
                    <strong>2012</strong>
                  </div>

                </div>


                <div className="about-button">

                  <div>
                    <span>ACTIVE MEMBERS</span>
                    <strong>50+</strong>
                  </div>

                  <div className="members-icon"></div>

                </div>

              </div>

            </div>

          </div>

        </section>


        <section
          className="final"
          ref={reveal}
        >

          <div className="eyebrow">
            THIS IS AVALANCHE.
          </div>

          <h2>
            READY TO
            <br />
            <i>CREATE?</i>
          </h2>

          <a
            href="#top"
            className="final-btn"
          >
            BACK TO TOP ↗
          </a>

        </section>

      </main>


      <footer>

        <span>
          AVALANCHE®
        </span>

        <span>
          STUDENT COMMUNITY
        </span>

        <span>
          © 2026
        </span>

      </footer>

    </div>
  );
}

export default About;