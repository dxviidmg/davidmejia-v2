import { useEffect, useRef } from "react";

// One window listener for the whole page, throttled to one run per animation frame.
// Components subscribe with useScroll(callback); the callback also runs once on mount and on resize.
const subscribers = new Set();
let frame = null;

const run = () => {
  frame = null;
  subscribers.forEach((fn) => fn());
};

const schedule = () => {
  if (frame === null) frame = requestAnimationFrame(run);
};

export const useScroll = (callback) => {
  const saved = useRef(callback);
  saved.current = callback;

  useEffect(() => {
    const fn = () => saved.current();
    if (subscribers.size === 0) {
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
    }
    subscribers.add(fn);
    fn();
    return () => {
      subscribers.delete(fn);
      if (subscribers.size === 0) {
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
        if (frame !== null) cancelAnimationFrame(frame);
        frame = null;
      }
    };
  }, []);
};
