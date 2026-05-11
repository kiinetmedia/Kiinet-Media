import SectionHead from "../ui/SectionHead";
import Reveal from "../ui/Reveal";
import TiltCard from "../ui/TiltCard";
import ServiceIcon from "./ServiceIcon";
import { services } from "../../data/services";

export default function ServicesGrid() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="services-wrap">
          <SectionHead
            eyebrow="01 — SERVICES"
            title={
              <>
                The full digital stack.
                <br />
                Delivered by <em>two founders.</em>
              </>
            }
            sub="Eight disciplines, one engagement. Every channel, every dashboard, every deliverable — owned by the founders who run your account."
          />

          <div className="services-grid">
          {services.map((s, i) => {
            const classes = ["svc-card"];
            if (s.featured) classes.push("featured");
            if (s.wide) classes.push("wide");
            return (
              <Reveal key={s.slug} delay={i * 0.06}>
                <TiltCard className={classes.join(" ")}>
                  <article>
                    <div className="svc-head">
                      <div className="svc-icon">
                        <ServiceIcon icon={s.icon} />
                      </div>
                      <span className="svc-num">{s.number}</span>
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.short}</p>
                    <ul className="svc-tags">
                      {s.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </article>
                </TiltCard>
              </Reveal>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
