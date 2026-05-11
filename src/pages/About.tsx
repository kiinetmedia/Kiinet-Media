import { useEffect } from "react";
import Eyebrow from "../components/ui/Eyebrow";
import SectionHead from "../components/ui/SectionHead";
import Reveal from "../components/ui/Reveal";
import TiltCard from "../components/ui/TiltCard";
import CtaBand from "../components/sections/CtaBand";
import { team, milestones } from "../data/team";
import { principles } from "../data/testimonials";

export default function About() {
  useEffect(() => {
    document.title = "About KiiNet Media — Independent Full-Service Digital Agency";
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <Eyebrow>ABOUT</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1>
              Short history.
              <br />
              <em>Long memory.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="lead">
              KiiNet Media is a two-founder digital agency building full-funnel growth engines for ambitious
              brands. Young, deliberate, and pricing the work in receipts — not promises.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="page-hero-meta">
              <span>FOUNDED 2026</span>
              <span>· REMOTE-FIRST</span>
              <span>· ROSTER CAPPED AT FIVE</span>
              <span>· FULL-SERVICE DIGITAL</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="01 — THE STORY"
            title={
              <>
                Built on a single <em>observation.</em>
              </>
            }
          />
          <Reveal>
            <div className="prose">
              <p>
                KiiNet was founded in 2026 on a single observation: most brands paying agencies for digital are
                receiving layered account management instead of founder-level thinking. The dashboards are polished.
                The decks are monthly. The metrics measure everything except revenue earned.
              </p>
              <p>
                We built the inverse. Two founders, both MBAs in Sales & Marketing from SCMHRD Pune (among India's
                most respected B-schools for marketing), each running every account end-to-end across paid media,
                SEO, social, email, CRO, web, and brand. No juniors, no white-labelling, no escalation queues.
                Founder-led execution, on every channel, every day.
              </p>
              <p>
                Across our active engagements we average a <strong>7% CTR on paid</strong>, roughly twice the
                cross-industry benchmark. The number is not the headline. The system is: paid + tracking +
                landing pages + creative, engineered together, so the next campaign goes live in days rather than
                weeks. The same system applies to any brand serious about converting digital spend into a revenue
                engine.
              </p>
              <p>
                The roster is capped at <strong>five active clients, by choice</strong>. We will not become a
                fifty-account agency. That is not the work we are building.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="02 — FOUNDERS"
            title={
              <>
                The team. <em>All of it.</em>
              </>
            }
            sub="No account managers. No juniors. You work with the people whose names are on the door."
          />
          <div className="founders">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <TiltCard className="founder" max={5} lift={4}>
                  <div className="founder-photo">
                    <img src={m.photo} alt={m.name} />
                  </div>
                  <div>
                    <h3>{m.name}</h3>
                    <div className="founder-role">{m.role}</div>
                    <p className="founder-bio">{m.bio}</p>
                    {m.socials && (
                      <div className="founder-socials">
                        {m.socials.map((s) => (
                          <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {s.label} ↗
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="03 — OPERATING PRINCIPLES"
            title={
              <>
                Six rules. <em>No exceptions.</em>
              </>
            }
          />
          <div className="about-card" style={{ maxWidth: 820 }}>
            <div className="about-card-head">
              <span className="hud-dot" />
              <span>HOW WE OPERATE</span>
            </div>
            <ul>
              {principles.map((p, i) => (
                <li key={i}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {p}
                </li>
              ))}
              <li>
                <span>06</span>
                Founder-led, throughout. The voice on your kickoff is the voice on your account at midnight.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="04 — TIMELINE"
            title={
              <>
                Short history. <em>Long memory.</em>
              </>
            }
          />
          <div className="milestones">
            {milestones.map((m, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="milestone">
                  <div className="milestone-year">{m.year}</div>
                  <div className="milestone-label">{m.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
