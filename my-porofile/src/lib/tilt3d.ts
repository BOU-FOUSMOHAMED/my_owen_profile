import { useEffect, useRef, useState } from "react";

/* -------------------------------------------------------------------------- */
/*  3D + scroll helpers                                                        */
/*  All effects are transform/opacity only, batched in a single rAF, and bail   */
/*  out entirely when the visitor asks for reduced motion.                      */
/* -------------------------------------------------------------------------- */

function reducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/* -------------------------- parallax (scroll) -------------------------- */

const PARALLAX = new Set<HTMLElement>();
const STRENGTH = new WeakMap<HTMLElement, number>();
const MAX_SHIFT = 44; // px at the far edge of the viewport

let frame = 0;
let listening = false;

function paint(): void {
  frame = 0;
  const vh = window.innerHeight || 1;
  const middle = vh / 2;

  for (const el of PARALLAX) {
    const box = el.getBoundingClientRect();
    // Skip anything fully off-screen: no layout read, no style write.
    if (box.bottom < -260 || box.top > vh + 260) continue;
    const strength = STRENGTH.get(el) ?? 1;
    // +1 when the card sits above the fold centre, -1 well below it.
    const offset = (box.top + box.height / 2 - middle) / (vh / 2);
    const shift = Math.max(-1.4, Math.min(1.4, offset)) * strength * MAX_SHIFT;
    el.style.setProperty("--par-y", `${shift.toFixed(2)}px`);
  }
}

function schedule(): void {
  if (!frame) frame = requestAnimationFrame(paint);
}

function listen(): void {
  if (listening) return;
  listening = true;
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });
}

/**
 * Vertical drift proportional to the distance between the element and the
 * viewport centre. Alternating signs produce the layered depth-on-scroll look.
 */
export function useParallax<T extends HTMLElement>(strength = 1) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;
    STRENGTH.set(el, strength);
    PARALLAX.add(el);
    listen();
    schedule();
    return () => {
      PARALLAX.delete(el);
    };
  }, [strength]);

  return ref;
}

/* ------------------------------ 3D tilt ------------------------------- */

/**
 * Cursor-tracked rotation. Only enabled for real pointers (hover + fine), never
 * on touch, and writes at most one style update per frame.
 */
export function useTilt<T extends HTMLElement>(max = 9) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion()) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let pending = 0;
    let rx = 0;
    let ry = 0;

    const flush = () => {
      pending = 0;
      el.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
      el.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
    };
    const queue = () => {
      if (!pending) pending = requestAnimationFrame(flush);
    };

    const onMove = (event: PointerEvent) => {
      const box = el.getBoundingClientRect();
      const px = (event.clientX - box.left) / box.width - 0.5;
      const py = (event.clientY - box.top) / box.height - 0.5;
      ry = px * 2 * max;
      rx = -py * 2 * max;
      el.style.setProperty("--gx", `${((px + 0.5) * 100).toFixed(1)}%`);
      el.style.setProperty("--gy", `${((py + 0.5) * 100).toFixed(1)}%`);
      queue();
    };

    const onLeave = () => {
      rx = 0;
      ry = 0;
      el.style.setProperty("--gx", "50%");
      el.style.setProperty("--gy", "0%");
      queue();
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      if (pending) cancelAnimationFrame(pending);
    };
  }, [max]);

  return ref;
}

/* ------------------------- reveal once on scroll ------------------------ */

/**
 * One-shot visibility flag driving the 3D entrance animation. Returns
 * `true` immediately when IntersectionObserver is unavailable, and when the
 * visitor prefers reduced motion, so content is never left mid-animation.
 */
export function useEnterOnScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || entered) return;

    if (reducedMotion() || typeof IntersectionObserver === "undefined") {
      setEntered(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [entered]);

  return [ref, entered] as const;
}