import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import "../about.css";
import "../subpage.css";
import "../register.css";
import { REGISTER_ENDPOINT } from "../registerConfig.js";

const EVENT = "ADVENTO";

// Verified: 30/09/2026 falls on a Wednesday.
const EVENT_DATE  = "Wednesday, 30 September 2026";
const EVENT_TIME  = "5:00 PM";
const EVENT_VENUE = "Birla Auditorium";

// e.g. 4SI26CS047 -> digit, 2 letters, 2 digits, 2 letters, 3 digits
const USN_RE = /^\d[A-Z]{2}\d{2}[A-Z]{2}\d{3}$/;
const GMAIL_RE = /^[a-z0-9][a-z0-9._%+-]*@gmail\.com$/i;

const EMPTY = { name: "", usn: "", phone: "", email: "", branch: "", year: "1" };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Please enter your name";
  if (!USN_RE.test(v.usn)) e.usn = "Format: 4SI26CS047";
  if (v.phone.length !== 10) e.phone = "Must be exactly 10 digits";
  if (!GMAIL_RE.test(v.email)) e.email = "Use a @gmail.com address";
  if (!v.branch.trim()) e.branch = "Please enter your branch";
  return e;
}

function Register() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [state, setState] = useState("idle"); // idle | sending | done | failed

  // keep each field clean as it is typed, so bad input cannot be entered
  const clean = {
    phone: (s) => s.replace(/\D/g, "").slice(0, 10),
    usn: (s) => s.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().slice(0, 10),
    email: (s) => s.replace(/\s/g, "")
  };

  const set = (k) => (ev) => {
    const raw = ev.target.value;
    const next = clean[k] ? clean[k](raw) : raw;
    setValues((v) => ({ ...v, [k]: next }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  async function onSubmit(ev) {
    ev.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    setState("sending");
    try {
      // No custom Content-Type: keeps it a "simple" request so the browser
      // skips the preflight that Apps Script cannot answer.
      const res = await fetch(REGISTER_ENDPOINT, {
        method: "POST",
        body: JSON.stringify({ ...values, event: EVENT })
      });
      const out = await res.json();
      if (!out.ok) throw new Error(out.error || "rejected");
      setState("done");
      setValues(EMPTY);
    } catch {
      setState("failed");
    }
  }

  const configured = REGISTER_ENDPOINT && !REGISTER_ENDPOINT.includes("PASTE_YOUR");

  const field = (name, label, extra = {}) => (
    <label className={`register-field ${extra.wide ? "is-wide" : ""}`}>
      <span>{label}</span>
      <input
        type={extra.type || "text"}
        value={values[name]}
        onChange={set(name)}
        placeholder={extra.placeholder}
        inputMode={extra.inputMode}
        autoComplete={extra.autoComplete}
        maxLength={extra.maxLength}
        aria-invalid={!!errors[name]}
      />
      {errors[name] && <em>{errors[name]}</em>}
    </label>
  );

  return (
    <div className="site">
      <Navbar />

      <main id="top">
        <section className="page-head section register-head">
          <div className="eyebrow">
            <h4>{EVENT} · FRESHER EVENT</h4>
          </div>

          <h1>
            REGISTER<br />
            <i>NOW.</i>
          </h1>
        </section>

        <section className="register-wrap">
          {state === "done" ? (
            <div className="register-card register-done">
              <h3>Thank you for registering.</h3>

              <p className="register-see">See you at {EVENT}.</p>

              <dl className="register-details">
                <div><dt>DATE</dt><dd>{EVENT_DATE}</dd></div>
                <div><dt>TIME</dt><dd>{EVENT_TIME}</dd></div>
                <div><dt>VENUE</dt><dd>{EVENT_VENUE}</dd></div>
              </dl>

              <Link to="/" className="register-btn">BACK TO HOME ↗</Link>
            </div>
          ) : (
            <form className="register-card register-form" onSubmit={onSubmit} noValidate>

              {!configured && (
                <p className="register-note">
                  The registration endpoint is not set yet, so submissions will
                  not be saved. See <code>apps-script/README.md</code>.
                </p>
              )}

              <div className="register-grid">

                {field("name", "Full name", {
                  placeholder: "Your name", autoComplete: "name", wide: true
                })}

                {field("usn", "USN", {
                  placeholder: "4SI26CS047", autoComplete: "off"
                })}

                {field("phone", "Phone", {
                  type: "tel", placeholder: "10-digit number",
                  inputMode: "numeric", autoComplete: "tel"
                })}

                {field("email", "Gmail address", {
                  type: "email", placeholder: "you@gmail.com",
                  inputMode: "email", autoComplete: "email", wide: true
                })}

                {field("branch", "Branch / Course", { placeholder: "e.g. CSE" })}

                <label className="register-field">
                  <span>Year of study</span>
                  <select value={values.year} onChange={set("year")}>
                    <option value="1">1st year</option>
                    <option value="2">2nd year</option>
                    <option value="3">3rd year</option>
                    <option value="4">4th year</option>
                  </select>
                </label>

              </div>

              <div className="register-actions">
                <button className="register-btn" type="submit" disabled={state === "sending"}>
                  {state === "sending" ? "SENDING…" : "SUBMIT"}
                </button>

                {state === "failed" && (
                  <p className="register-error">
                    Could not send that. Check your connection and try again.
                  </p>
                )}
              </div>

            </form>
          )}
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

export default Register;
