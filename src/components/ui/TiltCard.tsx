import { useEffect, useRef } from "react";
import type { ReactNode, CSSProperties } from "react";
import { getCursor, onCursorChange } from "../../lib/cursorTracker";

type Props = {
  children: ReactNode;
  className?: string;
  /** Max tilt degrees on either axis. Keep small for a premium feel (5–8). */
  max?: number;
  /** Easing factor (0..1). Higher = snappier follow. */
  ease?: number;
  /** Slight lift in pixels while hovered. */
  lift?: number;
  style?: CSSProperties;
};

/**
 * Cursor-driven 3D tilt with a spotlight glow.
 *
 * Reads the shared cursor position rather than listening to its own
 * mouse events, so hover state recalculates on scroll too — even when
 * the user isn't moving the mouse, a card that scrolls under the
 * cursor will pick up the tilt.
 */
export default function TiltCard({
  children,
  className = "",
  max = 6,
  ease = 0.16,
  lift = 6,
  style,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ rx: 0, ry: 0, gx: 50, gy: 50, glow: 0, lift: 0 });
  const current = useRef({ rx: 0, ry: 0, gx: 50, gy: 50, glow: 0, lift: 0 });
  const raf = useRef<number | null>(null);
  const insideRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const cursor = getCursor();

    const tick = () => {
      const t = target.current;
      const c = current.current;
      c.rx += (t.rx - c.rx) * ease;
      c.ry += (t.ry - c.ry) * ease;
      c.gx += (t.gx - c.gx) * ease;
      c.gy += (t.gy - c.gy) * ease;
      c.glow += (t.glow - c.glow) * ease;
      c.lift += (t.lift - c.lift) * ease;

      const tx = `perspective(1100px) translate3d(0, ${(-c.lift * lift).toFixed(2)}px, 0) rotateX(${c.rx.toFixed(2)}deg) rotateY(${c.ry.toFixed(2)}deg)`;
      el.style.transform = tx;
      el.style.setProperty("--glow-x", `${c.gx.toFixed(2)}%`);
      el.style.setProperty("--glow-y", `${c.gy.toFixed(2)}%`);
      el.style.setProperty("--glow-opacity", c.glow.toFixed(3));

      // Stop the loop when the card is fully at rest. Restart on next change.
      if (
        !insideRef.current &&
        Math.abs(c.rx) < 0.01 &&
        Math.abs(c.ry) < 0.01 &&
        c.glow < 0.001
      ) {
        c.rx = 0; c.ry = 0; c.glow = 0; c.lift = 0;
        el.style.transform = "perspective(1100px)";
        el.style.setProperty("--glow-opacity", "0");
        raf.current = null;
        return;
      }
      raf.current = window.requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (raf.current === null) raf.current = window.requestAnimationFrame(tick);
    };

    const evaluate = () => {
      // Cursor left the document → reset
      if (!cursor.inside) {
        if (insideRef.current) {
          insideRef.current = false;
          target.current.rx = 0;
          target.current.ry = 0;
          target.current.glow = 0;
          target.current.lift = 0;
          startLoop();
        }
        return;
      }

      const r = el.getBoundingClientRect();
      const inside =
        cursor.x >= r.left && cursor.x <= r.right &&
        cursor.y >= r.top && cursor.y <= r.bottom;

      if (inside) {
        const fx = (cursor.x - r.left) / r.width;
        const fy = (cursor.y - r.top) / r.height;
        const nx = Math.max(-1, Math.min(1, (fx - 0.5) * 2));
        const ny = Math.max(-1, Math.min(1, (fy - 0.5) * 2));
        target.current.ry = nx * max;
        target.current.rx = -ny * max;
        // Spotlight follows the cursor directly
        target.current.gx = fx * 100;
        target.current.gy = fy * 100;
        target.current.glow = 1;
        target.current.lift = 1;
        insideRef.current = true;
        startLoop();
      } else if (insideRef.current) {
        insideRef.current = false;
        target.current.rx = 0;
        target.current.ry = 0;
        target.current.glow = 0;
        target.current.lift = 0;
        startLoop();
      }
    };

    // Run once at mount in case cursor is already inside the card on initial render
    evaluate();
    const unsub = onCursorChange(evaluate);

    return () => {
      unsub();
      if (raf.current !== null) window.cancelAnimationFrame(raf.current);
    };
  }, [max, ease, lift]);

  return (
    <div ref={ref} className={`tilt ${className}`} style={style}>
      {children}
    </div>
  );
}
