const OBSERVED: WeakSet<Element> = new WeakSet();
const CLAZZ = "reveal";
const REVEALED = "is-revealed";

const observer: IntersectionObserver | null =
  typeof IntersectionObserver !== "undefined"
    ? new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add(REVEALED);
              observer?.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
      )
    : null;

function watch(root: ParentNode): void {
  if (!observer) return;
  root.querySelectorAll<HTMLElement>(`.${CLAZZ}`).forEach((el) => {
    if (OBSERVED.has(el) || el.classList.contains(REVEALED)) return;
    OBSERVED.add(el);
    observer.observe(el);
  });
}

function init(): void {
  document.documentElement.classList.add("js");
  watch(document);
  const mo = new MutationObserver(() => watch(document));
  mo.observe(document.documentElement, { childList: true, subtree: true });
}

if (typeof window !== "undefined") init();