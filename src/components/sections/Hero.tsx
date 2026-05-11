import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import Counter from "../ui/Counter";
import HudCard from "./HudCard";

const Hero3D = lazy(() => import("../hero/Hero3D"));

const ribbonItems = [
  "DIGITAL MARKETING",
  "PAID MEDIA",
  "SEO",
  "SOCIAL",
  "EMAIL",
  "WEB",
  "CRO",
  "BRAND",
  "ESTABLISHED 2026",
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-ribbon" aria-hidden="true">
        <div className="hero-ribbon-track">
          {[...ribbonItems, ...ribbonItems, ...ribbonItems].map((it, i) => (
            <span key={i} className="hero-ribbon-item">
              <span className="hero-ribbon-text">{it}</span>
              <span className="hero-ribbon-dot">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="dot" />
          <span>Independent Full-Service Digital Agency</span>
          <span className="kbd">EST. 2026</span>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08 }}
        >
          <span className="line">Digital Marketing,</span>
          <span className="line">
            <em>Engineered for</em> <span className="gradient-text">Returns.</span>
          </span>
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.16 }}
        >
          A founder-led digital agency building full-funnel growth engines for ambitious brands. Paid media, SEO,
          social, email, CRO, and web — delivered by the two founders who answer your kickoff call. We average a
          7% CTR on paid, roughly twice the industry benchmark, and we measure success in revenue earned.
        </motion.p>

        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.24 }}
        >
          <Button to="/contact" variant="primary" arrow="→">
            Request a Free Audit
          </Button>
          <Button to="/process" variant="ghost" arrow="↘">
            See How We Work
          </Button>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32 }}
        >
          <div className="stat">
            <div className="stat-val">
              <Counter to={7} suffix="%" />
            </div>
            <div className="stat-lbl">Average CTR on paid (≈2x industry benchmark)</div>
          </div>
          <div className="stat">
            <div className="stat-val">48 hrs</div>
            <div className="stat-lbl">Audit delivered. The deck is yours, regardless.</div>
          </div>
          <div className="stat">
            <div className="stat-val">Flexible</div>
            <div className="stat-lbl">Monthly or annual engagement — annual partners earn preferred rates.</div>
          </div>
        </motion.div>
      </div>

      <div className="hero-right" aria-hidden="true">
        <Suspense fallback={null}>
          <div className="hero-3d">
            <Hero3D />
          </div>
        </Suspense>
        <HudCard />
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        <span>SCROLL</span>
      </div>
    </section>
  );
}
