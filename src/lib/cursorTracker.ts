/**
 * Shared cursor tracker.
 *
 * Centralises the latest pointer position and notifies subscribers on every
 * `pointermove` AND on every `scroll` event (capture phase). This lets cards
 * and the custom cursor recompute hover state without requiring mouse movement
 * — the cursor stays still on the screen while the page slides under it, but
 * the new element under the cursor still receives the hover treatment.
 *
 * Notifications are rAF-throttled so a frenzy of scroll/pointer events
 * collapses to one batch per paint.
 */

type Listener = () => void;

const state = { x: -1000, y: -1000, inside: false };
const listeners = new Set<Listener>();

let initialized = false;
let rafScheduled = false;

function notify() {
  if (rafScheduled) return;
  rafScheduled = true;
  requestAnimationFrame(() => {
    rafScheduled = false;
    listeners.forEach((fn) => fn());
  });
}

function init() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;

  window.addEventListener(
    "pointermove",
    (e) => {
      state.x = e.clientX;
      state.y = e.clientY;
      state.inside = true;
      notify();
    },
    { passive: true }
  );

  document.addEventListener("mouseleave", () => {
    state.inside = false;
    notify();
  });
  document.addEventListener("mouseenter", () => {
    state.inside = true;
    notify();
  });

  // Capture-phase so scroll on any nested scroll container also re-evaluates
  window.addEventListener("scroll", notify, { passive: true, capture: true });
}

export function getCursor() {
  init();
  return state;
}

export function onCursorChange(fn: Listener) {
  init();
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}
