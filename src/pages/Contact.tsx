import { useEffect, useState } from "react";
import Eyebrow from "../components/ui/Eyebrow";
import SectionHead from "../components/ui/SectionHead";
import Reveal from "../components/ui/Reveal";
import Select from "../components/ui/Select";
import TiltCard from "../components/ui/TiltCard";
import { spendOptions } from "../data/spendOptions";
import { openCalendly } from "../lib/calendly";

const faqs = [
  { q: "How quickly will I hear back?", a: "Within one business day, usually same day. One of the founders replies personally." },
  { q: "What's the minimum engagement size?", a: "We typically work with teams spending ₹25,000+/mo on media. Below that, we'll happily point you to a great freelancer." },
  { q: "Do you sign NDAs before the audit?", a: "Yes, standard one-pager — send it over and we'll counter-sign." },
  { q: "What if we already have an agency?", a: "We can audit in parallel. You keep the deck, decide what to do with it. No pressure, no poaching." },
];

const CONTACT_FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzdjlko";

type ContactStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Contact — KiiNet Media";
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    try {
      const data = new FormData(form);
      // Replace the spend value with its human-readable label so the email
      // shows "₹25,000 – ₹50,000 (Starter growth)" rather than the slug.
      const budgetSlug = String(data.get("budget") ?? "");
      const budgetLabel = spendOptions.find((o) => o.value === budgetSlug)?.label ?? budgetSlug;
      data.set("budget", budgetLabel);
      const res = await fetch(CONTACT_FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        window.setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <Eyebrow>CONTACT</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h1>
              Let's talk in the
              <br />
              next <em>five minutes.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="lead">
              A founder picks up — not a bot, not a BDR, not an assistant. Tell us where the bleeding is and
              we'll tell you honestly whether we can help.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <Reveal>
              <form
                className="contact-form"
                method="POST"
                action={CONTACT_FORMSPREE_ENDPOINT}
                onSubmit={onSubmit}
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="New contact form submission — KiiNet Media"
                />

                <label htmlFor="name">Your name</label>
                <input id="name" name="name" placeholder="Jane Doe" required autoComplete="name" />

                <label htmlFor="email">Work email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@company.com"
                  required
                  autoComplete="email"
                />

                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  placeholder="Company name"
                  required
                  autoComplete="organization"
                />

                <label htmlFor="budget">Monthly ad spend</label>
                <Select
                  id="budget"
                  name="budget"
                  options={spendOptions}
                  placeholder="Select a range"
                />

                <label htmlFor="message">What's on your mind?</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Where's the bleeding? What have you tried?"
                />

                <button
                  type="submit"
                  className="btn btn-primary contact-submit"
                  disabled={status === "submitting"}
                >
                  <span>
                    {status === "submitting" ? "Sending…" : "Send message"}
                  </span>
                  <span className="btn-arrow">→</span>
                </button>

                {status === "success" && (
                  <p className="contact-status contact-status-ok" role="status" aria-live="polite">
                    ✓ Message sent successfully
                  </p>
                )}
                {status === "error" && (
                  <p className="contact-status contact-status-err" role="alert" aria-live="assertive">
                    Couldn't send — please try again or email kiinetmedia@gmail.com directly
                  </p>
                )}
              </form>
            </Reveal>

            <Reveal delay={0.1}>
              <TiltCard className="call-card" max={5} lift={4}>
                <div className="call-card-head">
                  <span className="hud-dot" />
                  <span>TAP TO DIAL · MON–SAT · 09:00–21:00 IST</span>
                </div>
                <div className="call-label">Schedule a Call</div>
                <a href="tel:+919930345007" className="call-number">
                  +91 <b>99303 45007</b>
                </a>
                <a href="tel:+919820334955" className="call-number call-number-alt">
                  +91 <b>98203 34955</b>
                </a>
                <div className="call-foot">
                  <a href="tel:+919930345007" className="btn btn-primary">
                    <span>Call Now</span>
                    <span className="btn-arrow">↗</span>
                  </a>
                  <button type="button" className="btn btn-ghost" onClick={openCalendly}>
                    <span>Schedule on Calendly</span>
                    <span className="btn-arrow">↗</span>
                  </button>
                  <span className="call-alt">
                    or <a href="mailto:kiinetmedia@gmail.com">kiinetmedia@gmail.com</a>
                  </span>
                </div>
              </TiltCard>
            </Reveal>
          </div>

          <div className="contact-meta">
            <Reveal>
              <div className="meta">
                <h4>Based In</h4>
                <p>Mumbai, India · Remote-first · Clients worldwide</p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="meta">
                <h4>Response Window</h4>
                <p>Same business day on all inbound emails and calls — usually within two hours.</p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="meta">
                <h4>Audit SLA</h4>
                <p>48 hours from read access to tracking + ad account. You keep the deck either way.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="FAQ"
            title={
              <>
                Before you <em>hit send.</em>
              </>
            }
          />
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div key={i} className={`faq-item ${openIdx === i ? "open" : ""}`}>
                <button className="faq-q" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
                  {f.q}
                </button>
                <div className="faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
