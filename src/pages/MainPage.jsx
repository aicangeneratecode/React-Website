import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Approach from "../components/Approach";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const MainPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <div ref={containerRef} className="relative z-0 min-h-screen">
      {/* Background elements */}
      <motion.div className="fixed inset-0 z-0" style={{ y: yBg }}>
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-[#001010] to-[#000a0a]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.05)_0%,_transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_rgba(0,10,15,0.8)_0%,_transparent_100%)]"></div>

        <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
          <pattern
            id="grid-pattern"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(0,255,255,0.1)"
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Approach />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
