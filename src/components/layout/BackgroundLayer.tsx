import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundLayer() {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 1500], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1500], [0, -380]);
  const y3 = useTransform(scrollY, [0, 1500], [0, -120]);
  const y4 = useTransform(scrollY, [0, 1500], [0, -260]);
  const ribbonY = useTransform(scrollY, [0, 1500], [0, -160]);
  const ribbonRot = useTransform(scrollY, [0, 1500], [-8, -14]);

  return (
    <div className="bg-layer" aria-hidden="true">
      <div className="bg-gradient" />

      <svg className="bg-arc bg-arc-1" viewBox="0 0 800 800">
        <circle cx="400" cy="400" r="380" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 8" />
      </svg>
      <svg className="bg-arc bg-arc-2" viewBox="0 0 600 600">
        <circle cx="300" cy="300" r="280" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Ribbon sweeps — diagonal SVG bands behind everything */}
      <motion.div
        className="bg-ribbon bg-ribbon-1"
        style={{ y: ribbonY, rotate: ribbonRot }}
      >
        <span>PERFORMANCE · GROWTH · SCALE · REVENUE · ROI · </span>
        <span>PERFORMANCE · GROWTH · SCALE · REVENUE · ROI · </span>
      </motion.div>
      <motion.div
        className="bg-ribbon bg-ribbon-2"
        style={{ y: useTransform(scrollY, [0, 1500], [0, -80]) }}
      >
        <span>KIINET MEDIA · KIINET MEDIA · KIINET MEDIA · KIINET MEDIA · </span>
        <span>KIINET MEDIA · KIINET MEDIA · KIINET MEDIA · KIINET MEDIA · </span>
      </motion.div>

      <div className="bg-words">
        <motion.div className="bg-word bg-word-1" style={{ y: y1 }}>GROWTH</motion.div>
        <motion.div className="bg-word bg-word-2" style={{ y: y2 }}>SCALE</motion.div>
        <motion.div className="bg-word bg-word-3" style={{ y: y3 }}>REVENUE</motion.div>
        <motion.div className="bg-word bg-word-4" style={{ y: y4 }}>PERFORMANCE</motion.div>
      </div>

      <div className="bg-noise" />
      <div className="bg-vignette" />
    </div>
  );
}
