import { useEffect } from "react";

/**
 * Adds `.is-in` to every [data-reveal] element once it scrolls into view.
 *
 * Pass whatever the list depends on (e.g. a filter value) so newly rendered
 * items get observed too.
 */
export function useReveal(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]:not(.is-in)");
    if (!els.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-in");
          io.unobserve(e.target);       // one-shot: no work after it has shown
        });
      },
      // threshold 0 + a positive bottom margin: a card reveals just before it
      // reaches the viewport, so a filter change never leaves a blank row
      { threshold: 0, rootMargin: "0px 0px 12% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
