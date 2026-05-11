import { useEffect, useRef, useState } from "react";
import { getCursor, onCursorChange } from "../../lib/cursorTracker";

const HOVER_SELECTOR =
  'a, button, [role="button"], [role="option"], input, textarea, select, label, summary, .tilt, .svc-card, .case, .why-card, .tst, .faq-q, .founder-photo, .kb-select-trigger, .kb-select-opt';

// Hotspot = the topmost vertex of the triangle (visual click point).
// SVG path: M 0 0 L 4 18 L 17 10 Z  -> top vertex is (0, 0).
const HOTSPOT_X = 0;
const HOTSPOT_Y = 0;

type Ripple = { id: number; x: number; y: number };

export default function CustomCursor() {
  const arrowRef = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [enabled, setEnabled] = useState(false);
  const rippleId = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const cursor = getCursor();

    // Direct pointermove → ultra-snappy visual position (no rAF gating)
    const onMove = (e: PointerEvent) => {
      const el = arrowRef.current;
      if (!el) return;
      el.style.transform = `translate3d(${e.clientX - HOTSPOT_X}px, ${e.clientY - HOTSPOT_Y}px, 0)`;
    };

    // Hover-state re-evaluation: fires on pointermove AND scroll via the tracker.
    // Uses elementFromPoint(cursor.x, cursor.y) so it works even when nothing
    // has moved the mouse — scrolling slides a new element under the cursor.
    const reevaluateHover = () => {
      const el = arrowRef.current;
      if (!el) return;
      if (!cursor.inside) {
        el.classList.remove("is-hover");
        return;
      }
      const target = document.elementFromPoint(cursor.x, cursor.y);
      if (target && target.closest && target.closest(HOVER_SELECTOR)) {
        el.classList.add("is-hover");
      } else {
        el.classList.remove("is-hover");
      }
    };

    const onDown = (e: PointerEvent) => {
      arrowRef.current?.classList.add("is-down");
      const id = ++rippleId.current;
      setRipples((r) => [...r, { id, x: e.clientX, y: e.clientY }]);
      window.setTimeout(() => {
        setRipples((r) => r.filter((rip) => rip.id !== id));
      }, 460);
    };
    const onUp = () => arrowRef.current?.classList.remove("is-down");
    const onLeave = () => arrowRef.current?.classList.add("is-hidden");
    const onEnter = () => arrowRef.current?.classList.remove("is-hidden");

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("pointerup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    const unsub = onCursorChange(reevaluateHover);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointerup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      unsub();
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div ref={arrowRef} className="cursor-arrow" aria-hidden="true">
        <svg className="cursor-arrow-svg" viewBox="0 0 20 20" width="20" height="20">
          <path
            d="M 0 0 L 4 18 L 17 10 Z"
            fill="rgba(11, 11, 11, 0.55)"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="cursor-ripple"
          aria-hidden="true"
          style={{ left: r.x, top: r.y }}
        />
      ))}
    </>
  );
}
