import { lazy, Suspense, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import TechMarquee from "../components/TechMarquee";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Formation from "../components/Formation";
import Contact from "../components/Contact";
import { useLanguage } from "../context/LanguageContext";
import { useSeo } from "../lib/useSeo";
import { homeMeta, personSchema, webSiteSchema } from "../lib/seo";

const BackToTop = lazy(() => import("../components/BackToTop"));

export default function Portfolio() {
  const location = useLocation();
  const { lang, t } = useLanguage();

  const meta = useMemo(() => homeMeta(lang, t), [lang, t]);
  const jsonLd = useMemo(() => [personSchema(lang), webSiteSchema(lang)], [lang]);
  useSeo(meta, jsonLd);

  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!target) return;
    const el = document.getElementById(target);
    if (el) {
      window.setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    }
  }, [location.state]);

  return (
    <>
      <Hero />
      <TechMarquee />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Formation />
      <Contact />
      <Suspense fallback={null}>
        <BackToTop />
      </Suspense>
    </>
  );
}