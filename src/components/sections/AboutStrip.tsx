import { Link } from "react-router-dom";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";
import { principles } from "../../data/testimonials";

export default function AboutStrip() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <Reveal>
          <div>
            <Eyebrow>05 — ABOUT</Eyebrow>
            <h2 className="section-title">
              Two founders. One playbook.
              <br />
              <em>Considered</em> output.
            </h2>
            <p className="about-lead">
              KiiNet Media is an independent full-service digital agency led by two founders. We are MBAs in Sales
              & Marketing from SCMHRD Pune — among India's most respected B-schools for marketing — and we cap our
              roster deliberately. No juniors, no white-labelled execution, no scope creep.
            </p>
            <p className="about-lead muted">
              Founded 2026 · Remote-first · Roster capped at five active clients
            </p>
            <div className="about-ctas">
              <Link to="/about" className="btn btn-primary">
                <span>Read our story</span>
                <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <aside className="about-card">
            <div className="about-card-head">
              <span className="hud-dot" />
              <span>OPERATING PRINCIPLES</span>
            </div>
            <ul>
              {principles.map((p, i) => (
                <li key={i}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {p}
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
