import { useEffect, useRef } from "react";
import Eyebrow from "../components/ui/Eyebrow";
import Reveal from "../components/ui/Reveal";
import CtaBand from "../components/sections/CtaBand";
import { processSteps } from "../components/sections/ProcessTimeline";
import { useScrollHover } from "../lib/useScrollHover";

type Step = (typeof processSteps)[number];

function ExtendedStep({ s, i, delay }: { s: Step; i: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useScrollHover(ref);
  return (
    <Reveal delay={delay}>
      <div ref={ref} className="process-step">
        <div>
          <div className="num">{s.num}</div>
          <h3>{s.title}</h3>
          <div className="step-meta">
            {s.meta.map((m, idx) => (
              <span key={idx}>
                {idx > 0 && <span style={{ marginRight: 12 }}>·</span>}
                {m}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p>{s.long}</p>
          <div className="screenshot">
            <img
              src={`https://picsum.photos/seed/kiinet-process-${i}/1200/700?grayscale`}
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Process() {
  useEffect(() => {
    document.title = "Our 5-Phase Digital Marketing Process — Audit, Build, Optimise | KiiNet";
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <Eyebrow>PROCESS</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1>
              Five phases.
              <br />
              <em>Zero guesswork.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="lead">
              Every engagement runs the same five-phase playbook — across paid, SEO, social, email, CRO, and web.
              Audit on day one. Live tracking in week one. Optimisation loop, thereafter.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="process-extended">
            {processSteps.map((s, i) => (
              <ExtendedStep key={s.num} s={s} i={i} delay={i * 0.04} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
