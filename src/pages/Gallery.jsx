import React from "react";
import Navbar from "../components/Navbar.jsx";
import { teamImages, initiatives } from "../data.js";
import { useReveal } from "../useReveal.js";
import "../about.css";
import "../subpage.css";

// every picture we have, newest sets first
const photos = [
  ...initiatives.flatMap((i) => i.images),
  ...teamImages
];

function Gallery() {
  useReveal();

  return (
    <div className="site">

      <Navbar />

      <main id="top">

        <section className="page-head section">
          <div className="eyebrow">
            <h4>MOMENTS</h4>
          </div>

          <h1>
            THE<br />
            <i>GALLERY.</i>
          </h1>

          <p className="page-sub">
            Stages, crowds and the people behind them — everything we have
            built together so far.
          </p>
        </section>

        <section className="photo-grid section">
          {photos.map((src, i) => (
            <figure className="photo-tile" key={src + i} data-reveal>
              <img
                src={src.replace("/images-opt/", "/images-thumb/")}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </figure>
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

export default Gallery;
