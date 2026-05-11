import type { ReactElement } from "react";
import SectionHead from "../ui/SectionHead";
import Reveal from "../ui/Reveal";
import TiltCard from "../ui/TiltCard";

const icons: Record<string, ReactElement> = {
  founder: (
    <svg viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="11" r="5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5 28c0-5 5-9 11-9s11 4 11 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="16" cy="11" r="1.4" fill="currentColor" />
    </svg>
  ),
  stack: (
    <svg viewBox="0 0 32 32" fill="none">
      <path d="M16 4l11 5-11 5L5 9l11-5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M5 16l11 5 11-5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M5 23l11 5 11-5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  ),
  profit: (
    <svg viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M16 8v16M11 12h7a3 3 0 0 1 0 6h-4a3 3 0 0 0 0 6h7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  ),
  report: (
    <svg viewBox="0 0 32 32" fill="none">
      <rect x="3" y="6" width="26" height="18" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3 12h26" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 18l4-3 3 2 4-5 5 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6" cy="9" r="0.8" fill="currentColor" />
      <circle cx="9" cy="9" r="0.8" fill="currentColor" />
      <path d="M12 28h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  flex: (
    <svg viewBox="0 0 32 32" fill="none">
      <rect x="4" y="9" width="24" height="14" rx="3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M4 16h24M16 9v14" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 3" />
      <circle cx="10" cy="16" r="1.4" fill="currentColor" />
      <circle cx="22" cy="16" r="1.4" fill="currentColor" />
    </svg>
  ),
};

const cards = [
  {
    no: "01",
    icon: "founder",
    title: "Founder-led, end to end.",
    body:
      "Every campaign, page, and email is built and managed by one of the founders. The person on your kickoff call is the person inside your account at midnight. Layered account management dilutes accountability — we removed the layers.",
  },
  {
    no: "02",
    icon: "stack",
    title: "One team, the full stack.",
    body:
      "Paid media, SEO, social, email, CRO, web, brand — under one roof. No external partners, no white-labelled deliverables. One Slack channel. One playbook. One invoice.",
  },
  {
    no: "03",
    icon: "profit",
    title: "Profit before proxy metrics.",
    body:
      "ROAS without margin context is a vanity number. We optimise toward cost-per-acquisition and customer lifetime value — the metrics that decide whether the engagement compounds.",
  },
  {
    no: "04",
    icon: "report",
    title: "Operational reporting.",
    body:
      "Live dashboards. Weekly walkthroughs. Slack-speed comms. You will always know what is working, what was retired, and the reasoning behind each decision.",
  },
  {
    no: "05",
    icon: "flex",
    title: "Flexible engagement.",
    body:
      "Monthly or annual — choose the cadence that suits you. Annual partners earn preferred rates. Most agencies rely on long lock-ins. We rely on outcomes.",
  },
];

export default function WhyGrid() {
  return (
    <section className="section" id="why">
      <div className="container">
        <SectionHead
          eyebrow="02 — WHY KIINET"
          title={
            <>
              A full digital team.
              <br />
              Two <em>founders.</em>
            </>
          }
          sub="Direct access throughout."
        />
        <div className="why-grid">
          {cards.map((c, i) => (
            <Reveal key={c.no} delay={i * 0.06}>
              <TiltCard className="why-card" max={6}>
                <div className="why-card-head">
                  <div className="why-icon">{icons[c.icon]}</div>
                  <div className="why-no">{c.no}</div>
                </div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
