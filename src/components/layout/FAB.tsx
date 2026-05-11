import { useEffect, useState } from "react";
import { openCalendly } from "../../lib/calendly";

export default function FAB() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`fab ${visible ? "visible" : ""}`}
      aria-label="Schedule a call with KiiNet Media"
      onClick={openCalendly}
    >
      <span className="fab-dot" />
      <span>Schedule a Call</span>
      <span className="btn-arrow">↗</span>
    </button>
  );
}
