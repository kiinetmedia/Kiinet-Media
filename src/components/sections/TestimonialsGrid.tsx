import SectionHead from "../ui/SectionHead";
import Reveal from "../ui/Reveal";
import TiltCard from "../ui/TiltCard";
import { testimonials } from "../../data/testimonials";

export default function TestimonialsGrid() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <SectionHead
          eyebrow="04 — TESTIMONIALS"
          title={
            <>
              A note from the <em>founders.</em>
            </>
          }
        />
        <div className="tst-single">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <TiltCard className="tst tst-feature" max={5}>
                <div className="stars">★★★★★</div>
                <blockquote>"{t.quote}"</blockquote>
                <div className="tst-cap">
                  <div className="av">{t.initials}</div>
                  <div>
                    <b>— {t.name}</b>
                    <span>{t.title}</span>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
