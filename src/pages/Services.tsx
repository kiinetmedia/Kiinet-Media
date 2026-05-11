import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Eyebrow from "../components/ui/Eyebrow";
import SectionHead from "../components/ui/SectionHead";
import Reveal from "../components/ui/Reveal";
import TiltCard from "../components/ui/TiltCard";
import CtaBand from "../components/sections/CtaBand";
import { services } from "../data/services";

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Digital Marketing Services — Paid, SEO, Social, Web | KiiNet";
  }, []);

  // Scroll to the hash anchor when navigating from a /services#slug link
  // (or just to the top if no hash). Re-runs whenever pathname or hash changes.
  useEffect(() => {
    const hash = location.hash.slice(1);
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      return;
    }
    // Wait one frame for the section blocks to be in the DOM
    const raf = window.requestAnimationFrame(() => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => window.cancelAnimationFrame(raf);
  }, [location.pathname, location.hash]);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <Eyebrow>SERVICES</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1>
              The full digital stack.
              <br />
              <em>Measured to profit.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="lead">
              Eight disciplines. One objective: convert digital spend into a revenue engine. Every channel is run
              in-house — no outsourced specialists, no white-labelled execution.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {services.map((s, i) => (
            <div className="svc-deep" key={s.slug} id={s.slug}>
              <Reveal>
                <div>
                  <div className="svc-meta">{s.number} · {s.title.toUpperCase()}</div>
                  <h2>{s.title}</h2>
                  <p className="svc-copy svc-lead">{s.lead ?? s.short}</p>
                  {s.body && <p className="svc-copy">{s.body}</p>}
                  {s.capabilities && (
                    <>
                      <h4 className="svc-cap-label">Capabilities</h4>
                      <ul className="svc-tools">
                        {s.capabilities.map((c) => (
                          <li key={c}>{c}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </Reveal>
              <Reveal delay={0.1 + i * 0.04}>
                <TiltCard className="svc-deliverables" max={5} lift={4}>
                  <h4>What you get</h4>
                  <ul>
                    {(s.deliverables ?? []).map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </TiltCard>
              </Reveal>
            </div>
          ))}

          <Reveal>
            <div className="svc-compare">
              <SectionHead
                eyebrow="HOW WE COMPARE"
                title={
                  <>
                    One founder team. The full stack. <em>Direct access throughout.</em>
                  </>
                }
              />
              <table>
                <thead>
                  <tr>
                    <th>Capability</th>
                    <th>KiiNet Media</th>
                    <th>Typical Agency</th>
                    <th>In-house</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Founder-led on your account</td>
                    <td className="yes">✓ Always</td>
                    <td className="no">Rarely</td>
                    <td className="no">Depends</td>
                  </tr>
                  <tr>
                    <td>Full stack under one roof</td>
                    <td className="yes">✓ All eight</td>
                    <td className="no">Some white-labelled</td>
                    <td className="no">Hire required</td>
                  </tr>
                  <tr>
                    <td>Optimised to profit, not ROAS</td>
                    <td className="yes">✓ Always</td>
                    <td className="no">Rarely</td>
                    <td className="yes">Sometimes</td>
                  </tr>
                  <tr>
                    <td>Server-side tracking included</td>
                    <td className="yes">✓ Day one</td>
                    <td className="no">Add-on</td>
                    <td className="no">Roadmap</td>
                  </tr>
                  <tr>
                    <td>Flexible engagement</td>
                    <td className="yes">✓ Monthly or annual</td>
                    <td className="no">12-month lock-in</td>
                    <td>—</td>
                  </tr>
                  <tr>
                    <td>Weekly walkthroughs + dashboards</td>
                    <td className="yes">✓ Weekly</td>
                    <td className="no">PDF deck monthly</td>
                    <td className="no">Slack</td>
                  </tr>
                  <tr>
                    <td>Founder-level access</td>
                    <td className="yes">✓ Direct</td>
                    <td className="no">Account manager</td>
                    <td className="yes">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="HOW WE DECIDE"
            title={
              <>
                Channels earn the budget. <em>Every week.</em>
              </>
            }
            sub="Every engagement begins with a hypothesis on which channel mix — paid, SEO, social, email — will compound your cost-per-acquisition fastest. We re-test the hypothesis weekly. When a channel stops earning its keep, the budget moves. Same week. No committee."
          />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
