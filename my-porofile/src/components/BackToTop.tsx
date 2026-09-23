import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      aria-label="Retour en haut"
      title="Retour en haut"
      className={`fixed bottom-10 right-10 z-[90] grid size-12 place-items-center rounded-[14px] border border-line bg-card text-lg text-muted shadow-card transition duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent hover:shadow-glow max-sm:bottom-24 max-sm:right-5 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      ↑
    </a>
  );
}