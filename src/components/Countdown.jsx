import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../countdown.css";

// 30 / 09 / 2026, local midnight
const TARGET = new Date(2026, 8, 30, 0, 0, 0);


const pad = (n) => String(n).padStart(2, "0");

function remaining() {
  const ms = TARGET - Date.now();
  if (ms <= 0) return null;
  const s = Math.floor(ms / 1000);
  return {
    days: Math.floor(s / 86400),
    hrs: Math.floor((s % 86400) / 3600),
    min: Math.floor((s % 3600) / 60),
    sec: s % 60
  };
}

const Countdown = () => {
  const [left, setLeft] = useState(remaining);

  useEffect(() => {
    const id = setInterval(() => setLeft(remaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const live = left ?? { days: 0, hrs: 0, min: 0, sec: 0 };

  const cells = [
    [String(live.days), "DAYS"],
    [pad(live.hrs), "HRS"],
    [pad(live.min), "MIN"],
    [pad(live.sec), "SEC"]
  ];

  return (
    <div className="countdown">

      <p className="countdown-kicker">FRESHER EVENT</p>

      <p className="countdown-title">
        {left ? "ADVENTO COMING SOON" : "ADVENTO IS LIVE"}
      </p>

      <div className="coming-soon-gif-container">
        <img src="/Coming soon.gif" alt="Coming Soon" className="coming-soon-gif" />
      </div>

      <div className="countdown-actions">
        <Link className="countdown-cta" to="/register">
          REGISTER NOW
        </Link>
        <a
          href="https://chat.whatsapp.com/JZHaa8RgKSv8zYf6nqhQUL"
          target="_blank"
          rel="noopener noreferrer"
          className="countdown-cta countdown-whatsapp"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.764.459 3.486 1.333 5.001L2 22l5.131-1.345a9.96 9.96 0 004.881 1.28h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.668-1.038-5.176-2.924-7.062A9.923 9.923 0 0012.012 2zm.004 1.666c4.587 0 8.321 3.731 8.322 8.318 0 2.222-.866 4.31-2.438 5.881A8.26 8.26 0 0112.012 20.3h-.003a8.293 8.293 0 01-4.068-1.07l-.292-.173-3.024.793.807-2.949-.19-.302a8.277 8.277 0 01-1.267-4.281c0-4.587 3.734-8.32 8.322-8.32zm4.562 10.934c-.25-.125-1.482-.731-1.712-.815-.23-.083-.397-.125-.564.125-.166.25-.646.815-.792.981-.146.166-.292.187-.542.062-.25-.125-1.055-.389-2.01-1.24-.743-.662-1.244-1.48-1.39-1.73-.146-.25-.015-.385.11-.509.112-.112.25-.292.375-.438.125-.146.166-.25.25-.417.083-.166.042-.312-.021-.437-.063-.125-.564-1.358-.773-1.858-.203-.488-.41-.422-.564-.43-.146-.008-.313-.008-.479-.008-.166 0-.437.063-.666.312-.23.25-.875.855-.875 2.086 0 1.231.896 2.42 1.021 2.587.125.167 1.764 2.694 4.274 3.777.597.257 1.064.411 1.428.526.6.19 1.146.163 1.578.099.481-.072 1.482-.605 1.69-1.189.208-.584.208-1.084.146-1.189-.063-.105-.23-.167-.48-.292z"/>
          </svg>
          <span>JOIN WHATSAPP GROUP</span>
        </a>
      </div>
    </div>
  );
};

export default Countdown;
