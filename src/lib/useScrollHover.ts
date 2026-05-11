import { useEffect } from "react";
import type { RefObject } from "react";
import { getCursor, onCursorChange } from "./cursorTracker";

/**
 * Toggles a class on the referenced element whenever the shared cursor
 * tracker reports a position update — including pure scroll events with
 * no mouse movement. Pairs with the global cursor tracker which already
 * rAF-throttles its notifications.
 *
 * Use this for elements that rely on `:hover` styles but also need to
 * respond when the page slides under a stationary cursor.
 */
export function useScrollHover<T extends HTMLElement>(
  ref: RefObject<T | null>,
  className: string = "is-hover"
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const cursor = getCursor();
    let isInside = false;

    const evaluate = () => {
      if (!cursor.inside) {
        if (isInside) {
          el.classList.remove(className);
          isInside = false;
        }
        return;
      }
      const r = el.getBoundingClientRect();
      const inside =
        cursor.x >= r.left && cursor.x <= r.right &&
        cursor.y >= r.top && cursor.y <= r.bottom;

      if (inside && !isInside) {
        el.classList.add(className);
        isInside = true;
      } else if (!inside && isInside) {
        el.classList.remove(className);
        isInside = false;
      }
    };

    evaluate();
    return onCursorChange(evaluate);
  }, [ref, className]);
}
