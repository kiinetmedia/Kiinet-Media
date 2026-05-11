import { motion } from "framer-motion";

export default function HudCard() {
  return (
    <motion.div
      className="hud-card"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="hud-head">
        <span className="hud-dot" />
        <span>LIVE — ACTIVE CAMPAIGN</span>
      </div>
      <div className="hud-row">
        <span>ROAS</span>
        <b>5.2x</b>
        <i className="up">▲</i>
      </div>
      <div className="hud-row">
        <span>CTR</span>
        <b>7.1%</b>
        <i className="up">▲</i>
      </div>
      <div className="hud-row">
        <span>CPA</span>
        <b>Trending down</b>
        <i className="dn">▼</i>
      </div>
      <div className="hud-spark">
        <svg viewBox="0 0 120 30" preserveAspectRatio="none">
          <polyline
            points="0,22 12,20 24,21 36,15 48,17 60,11 72,12 84,7 96,9 108,4 120,2"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </motion.div>
  );
}
