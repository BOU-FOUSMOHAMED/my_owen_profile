import { lazy, Suspense } from "react";
import Hero from "../components/Hero";
import TechMarquee from "../components/TechMarquee";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Formation from "../components/Formation";
import Contact from "../components/Contact";

const BackToTop = lazy(() => import("../components/BackToTop"));

export default function Portfolio() {
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