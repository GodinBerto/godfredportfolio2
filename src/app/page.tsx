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
import ChatPopup from "@/components/chatpopup";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "a" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setChatOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <PageLoader />}</AnimatePresence>

      {chatOpen && <ChatPopup setIsSearchOpen={setChatOpen} />}

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
