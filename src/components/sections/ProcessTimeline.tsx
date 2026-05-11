import { useRef } from "react";
import SectionHead from "../ui/SectionHead";
import Reveal from "../ui/Reveal";
import { useScrollHover } from "../../lib/useScrollHover";

export const processSteps = [
  {
    num: "01 / AUDIT",
    title: "Forensic Marketing Audit",
    body:
      "A 48-hour teardown of your full digital stack — paid accounts, SEO health, tracking integrity, lifecycle flows, unit economics. We document precisely where spend is leaking, what is broken, and where the immediate wins sit. The deck is yours, regardless of how the engagement proceeds.",
    meta: ["48 hrs", "Deliverable: Audit PDF + Loom walkthrough"],
    long:
      "A 48-hour teardown of your full digital stack — paid accounts, SEO health, tracking integrity, lifecycle flows, unit economics. We document precisely where spend is leaking, what is broken, and where the immediate wins sit. The deck is yours, regardless of how the engagement proceeds.",
  },
  {
    num: "02 / STRATEGY",
    title: "Revenue-Mapped Strategy",
    body:
      "We model the full-funnel mix — paid, organic, lifecycle — into a 90-day revenue plan, lock cost-per-acquisition targets, and design the channel architecture against your contribution margin. Not against industry benchmarks. Against yours.",
    meta: ["Week 1", "Deliverable: 90-day growth model + channel blueprint"],
    long:
      "We model the full-funnel mix — paid, organic, lifecycle — into a 90-day revenue plan, lock cost-per-acquisition targets, and design the channel architecture against your contribution margin. Not against industry benchmarks. Against yours.",
  },
  {
    num: "03 / EXECUTION",
    title: "Build & Launch",
    body:
      "Account rebuilds, SEO remediation, lifecycle flow build, landing page production, server-side tracking. Creative briefs delivered to your team or executed by ours. Live in market by the close of week three.",
    meta: ["Week 2–3", "Deliverable: Live tracking + first live campaigns"],
    long:
      "Account rebuilds, SEO remediation, lifecycle flow build, landing page production, server-side tracking. Creative briefs delivered to your team or executed by ours. Live in market by the close of week three.",
  },
  {
    num: "04 / OPTIMISATION",
    title: "Daily Optimisation Loop",
    body:
      "Bid testing, creative iteration, content shipping, lifecycle tuning, on-page A/B sprints. Weekly Loom walkthroughs. Slack-speed comms with the founders — not an account manager you have never met.",
    meta: ["Ongoing", "Weekly wins + learnings, monthly strategic review"],
    long:
      "Bid testing, creative iteration, content shipping, lifecycle tuning, on-page A/B sprints. Weekly Loom walkthroughs. Slack-speed comms with the founders — not an account manager you have never met.",
  },
  {
    num: "05 / SCALE",
    title: "Scale Without Cracking",
    body:
      "Once unit economics are calibrated, we open the taps — new geographies, new channels, new creative — without compromising the math underneath. Most accounts plateau because they scale before the foundation is ready. Ours do not.",
    meta: ["Month 3+", "Quarterly scale plan + new-channel playbook"],
    long:
      "Once unit economics are calibrated, we open the taps — new geographies, new channels, new creative — without compromising the math underneath. Most accounts plateau because they scale before the foundation is ready. Ours do not.",
  },
];

type Step = (typeof processSteps)[number];

function StepItem({ s, delay }: { s: Step; delay: number }) {
  const ref = useRef<HTMLLIElement>(null);
  useScrollHover(ref);
  return (
    <Reveal delay={delay}>
      <li ref={ref} className="step">
        <div className="step-rail">
          <span className="step-dot" />
        </div>
        <div className="step-body">
          <div className="step-num">{s.num}</div>
          <h3>{s.title}</h3>
          <p>{s.body}</p>
          <div className="step-meta">
            {s.meta.map((m, idx) => (
              <span key={idx}>
                {idx > 0 && <span style={{ marginRight: 12 }}>·</span>}
                {m}
              </span>
            ))}
          </div>
        </div>
      </li>
    </Reveal>
  );
}

export default function ProcessTimeline() {
  return (
    <section className="section" id="process">
      <div className="container">
        <SectionHead
          eyebrow="03 — PROCESS"
          title={
            <>
              Five phases.
              <br />
              Zero <em>guesswork.</em>
            </>
          }
          sub="The same operating system we deploy across every engagement — paid, SEO, social, email, CRO, and web."
        />

        <ol className="process-timeline">
          {processSteps.map((s, i) => (
            <StepItem key={s.num} s={s} delay={i * 0.06} />
          ))}
        </ol>
      </div>
    </section>
  );
}
