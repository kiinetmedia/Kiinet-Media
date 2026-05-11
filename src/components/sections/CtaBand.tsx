import { useState } from "react";
import Eyebrow from "../ui/Eyebrow";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjgjqlbe";

type Status = "idle" | "submitting" | "success" | "error";

export default function CtaBand() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    try {
      const data = new FormData(form);
      const res = await fetch(FORMSPREE_ENDPOINT, {
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
    <section className="cta-band" id="cta">
      <div className="cta-bg" />
      <div className="container">
        <div className="cta-inner">
          <Eyebrow light>START HERE</Eyebrow>
          <h2 className="cta-title">
            Ready for marketing that
            <br />
            <span className="gradient-text">justifies the line item?</span>
          </h2>
          <p className="cta-sub">
            A complimentary 48-hour audit across paid, SEO, tracking, and conversion. The deck is yours —
            regardless of how the conversation ends.
          </p>

          <form
            className="cta-form"
            method="POST"
            action={FORMSPREE_ENDPOINT}
            onSubmit={onSubmit}
          >
            <input
              type="hidden"
              name="_subject"
              value="New audit request from KiiNet website"
            />
            <input
              type="email"
              name="email"
              placeholder="Work email"
              required
              autoComplete="email"
            />
            <input
              type="url"
              name="website"
              placeholder="Company website"
              required
              pattern="https?://.+|www\..+|.+\..+"
              title="Enter a valid website (e.g. yourcompany.com)"
              autoComplete="url"
            />
            <button
              className="btn btn-primary"
              type="submit"
              disabled={status === "submitting"}
            >
              <span>
                {status === "submitting" ? "Sending…" : "Request the Audit"}
              </span>
              <span className="btn-arrow">→</span>
            </button>
          </form>

          {status === "success" && (
            <p className="cta-status cta-status-ok" role="status" aria-live="polite">
              ✓ Audit request received
            </p>
          )}
          {status === "error" && (
            <p className="cta-status cta-status-err" role="alert" aria-live="assertive">
              Couldn't send — please try again or email kiinetmedia@gmail.com directly
            </p>
          )}

          <div className="cta-foot">
            <span>✓ Flexible engagement</span>
            <span>✓ 48-hour turnaround</span>
            <span>✓ Founder-led</span>
            <span>✓ Replies within 12 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}
