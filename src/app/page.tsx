"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import SkillsMarquee from "@/components/SkillsMarquee";
import PageLoader from "@/components/PageLoader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 600); // small delay for smoothness
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <PageLoader />}</AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-background">
          <Header />
          <Hero />
          <SkillsMarquee />
          <Skills />
          <SkillsMarquee />
          <Services />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}
