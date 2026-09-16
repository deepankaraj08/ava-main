import React from "react";

import FloatingAvatext from "./FloatingAvatext";
import Mountainpng from "./Mountainpng";
import Countdown from "./Countdown";

const Mainscreen = () => {
  return (
    <section className="relative grid h-7/8 w-full overflow-hidden">

      {/* MOUNTAIN */}
      <Mountainpng />

      {/* AVALANCHE TEXT */}
      <FloatingAvatext />

      {/* ADVENTO COUNTDOWN */}
      <Countdown />

      {/* FOOTER */}
      <div
        className="
          absolute
          bottom-0
          left-0
          z-[50]
          h-[38px]
          w-full
          flex
          justify-center
          items-center
          font-medium
          font-body
          px-3
          bg-gray-400/30
        "
      >
        <div className="flex items-center gap-2">
          <a
            href="https://www.instagram.com/team_avalanche_official/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:opacity-90 text-white rounded-2xl px-2.5 py-0.5 flex items-center gap-1.5 transition-all text-[11px] font-semibold shadow-sm"
          >
            <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            INSTAGRAM
          </a>
          <a
            href="https://chat.whatsapp.com/JZHaa8RgKSv8zYf6nqhQUL"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366]/80 hover:bg-[#25D366] text-white rounded-2xl px-2.5 py-0.5 flex items-center gap-1.5 transition-colors text-[11px] font-semibold"
          >
            <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
              <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.764.459 3.486 1.333 5.001L2 22l5.131-1.345a9.96 9.96 0 004.881 1.28h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.668-1.038-5.176-2.924-7.062A9.923 9.923 0 0012.012 2zm.004 1.666c4.587 0 8.321 3.731 8.322 8.318 0 2.222-.866 4.31-2.438 5.881A8.26 8.26 0 0112.012 20.3h-.003a8.293 8.293 0 01-4.068-1.07l-.292-.173-3.024.793.807-2.949-.19-.302a8.277 8.277 0 01-1.267-4.281c0-4.587 3.734-8.32 8.322-8.32zm4.562 10.934c-.25-.125-1.482-.731-1.712-.815-.23-.083-.397-.125-.564.125-.166.25-.646.815-.792.981-.146.166-.292.187-.542.062-.25-.125-1.055-.389-2.01-1.24-.743-.662-1.244-1.48-1.39-1.73-.146-.25-.015-.385.11-.509.112-.112.25-.292.375-.438.125-.146.166-.25.25-.417.083-.166.042-.312-.021-.437-.063-.125-.564-1.358-.773-1.858-.203-.488-.41-.422-.564-.43-.146-.008-.313-.008-.479-.008-.166 0-.437.063-.666.312-.23.25-.875.855-.875 2.086 0 1.231.896 2.42 1.021 2.587.125.167 1.764 2.694 4.274 3.777.597.257 1.064.411 1.428.526.6.19 1.146.163 1.578.099.481-.072 1.482-.605 1.69-1.189.208-.584.208-1.084.146-1.189-.063-.105-.23-.167-.48-.292z"/>
            </svg>
            WHATSAPP
          </a>
          <a
            href="https://www.linkedin.com/company/team-avalanche-official/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0A66C2]/80 hover:bg-[#0A66C2] text-white rounded-2xl px-2.5 py-0.5 flex items-center gap-1.5 transition-colors text-[11px] font-semibold"
          >
            <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LINKEDIN
          </a>
        </div>
      </div>

    </section>
  );
};

export default Mainscreen;
