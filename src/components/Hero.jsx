import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "const dev = new FrontEndDeveloper();";
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Gradient animation
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [0, 100],
    [
      "linear-gradient(90deg, #0f172a, #1e293b)",
      "linear-gradient(90deg, #1e293b, #0f172a)",
    ]
  );

  // Background code lines
  const codeLines = [
    "npm install success",
    "404: Error Not Found",
    "git push --force",
    "const x = 42;",
    "docker-compose up",
    "array.map(item => item.id)",
    "try {...} catch (e) {...}",
    "response.status(200)",
    "useEffect(() => {}, [])",
    "border-radius: 0.5rem;",
    "console.log('debug')",
    "font-family: monospace;",
    "z-index: 9999;",
    "await fetch('/api')",
    "type Props = {...}",
    "margin: 0 auto;",
    "position: absolute;",
    "return <Component />;",
  ];

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
        setInterval(() => setCursorVisible((v) => !v), 500);
      }
    }, 100);

    return () => clearInterval(typingEffect);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[65vh]  flex items-center justify-center overflow-hidden px-4 sm:px-6 py-12 sm:py-0 sm:min-h-screen"
      onMouseMove={(e) => {
        x.set((e.clientX / window.innerWidth) * 100);
      }}
    >
      {/* Code rain background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Fade out mask at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32"></div>

        {[...Array(window.innerWidth < 640 ? 15 : 30)].map((_, i) => {
          // Reduced number of lines for mobile
          const randomLine =
            codeLines[Math.floor(Math.random() * codeLines.length)];
          const duration = 15 + Math.random() * 15;
          const delay = Math.random() * -10;
          const left = `${Math.random() * 100}%`;
          const fontSize = `${0.5 + Math.random() * 0.4}rem`; // Smaller font size
          const opacity = 0.2 + Math.random() * 0.3;

          return (
            <motion.div
              key={i}
              className="absolute font-mono text-green-400/30 whitespace-nowrap"
              style={{
                left,
                top: "-2rem",
                fontSize,
                opacity,
              }}
              animate={{
                y: [`-2rem`, `${window.innerHeight + 2}px`],
                opacity: [opacity, opacity, 0],
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "linear",
                times: [0, 0.9, 1],
              }}
            >
              {randomLine}
            </motion.div>
          );
        })}

        {/* Additional numbers */}
        {[...Array(10)].map((_, i) => {
          // Reduced number of numbers
          const duration = 10 + Math.random() * 10;
          const delay = Math.random() * 5;
          const left = `${Math.random() * 100}%`;
          const numbers =
            Math.random() > 0.5
              ? `${Math.floor(Math.random() * 1000)}`
              : `0x${Math.floor(Math.random() * 100).toString(16)}`;

          return (
            <motion.div
              key={`num-${i}`}
              className="absolute font-mono text-cyan-400/20 whitespace-nowrap"
              style={{
                left,
                top: "-1rem",
                fontSize: `${0.5 + Math.random() * 0.3}rem`, // Smaller font size
              }}
              animate={{
                y: [`-1rem`, `${window.innerHeight + 1}px`],
                opacity: [0.3, 0.3, 0],
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "linear",
                times: [0, 0.9, 1],
              }}
            >
              {numbers}
            </motion.div>
          );
        })}
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated circles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 rounded-full bg-primary/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 rounded-full bg-secondary/10 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Основной контент с пересмотренными отступами */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }} // Уменьшил начальный сдвиг для mobile
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl"
        >
          {/* Заголовок с компактными отступами */}
          <div className="mb-4 sm:mb-8">
            {" "}
            {/* Уменьшенный отступ снизу для mobile */}
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-2 sm:mb-4">
              {" "}
              {/* Меньший mb */}
              Hi, I'm{" "}
              <motion.span
                className="relative inline-block"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <span className="text-gradient bg-gradient-to-r from-primary to-secondary animate-gradient-text">
                  Alex
                </span>
                <motion.span
                  className="absolute -bottom-1 sm:-bottom-2 left-0 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-secondary"
                  initial={{ width: 0 }}
                  animate={{
                    width: isHovered ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.4 }}
                />
              </motion.span>
            </h1>
            <motion.p
              className="text-base sm:text-xl md:text-2xl text-gray-300 leading-tight sm:leading-normal" // Более плотный leading для mobile
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Building <span className="text-primary">interactive</span> and{" "}
              <span className="text-secondary">high-performance</span> web apps
            </motion.p>
          </div>

          {/* Animated code block */}
          <motion.div
            className="font-mono text-primary bg-dark/50 backdrop-blur-sm p-3 sm:p-6 rounded-xl border border-primary/20 mb-4 sm:mb-8" // Уменьшенные отступы
            style={{ fontSize: "0.9rem" }} // Чуть меньший шрифт для mobile
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-30"></div>
            <div className="relative z-10 flex items-center">
              <span className="text-sm sm:text-base">{displayText}</span>
              <span
                className={`h-5 sm:h-6 w-1 sm:w-1.5 bg-primary ml-1 sm:ml-2 transition-opacity duration-300 ${
                  cursorVisible ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-secondary opacity-50"></div>
          </motion.div>

          {/* Skills block */}
          <motion.div
            className="mb-4 sm:mb-8" // Уменьшенный отступ
            style={{ maxHeight: "120px", overflow: "hidden" }} // Ограничение высоты для mobile
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-primary text-base sm:text-lg font-mono mb-3 sm:mb-4 flex items-center">
              <span className="glow-sm">My tech stack:</span>
              <span className="ml-2 text-gray-400 text-xs sm:text-sm"></span>
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {[
                { name: "React", level: "90%" },
                { name: "TypeScript", level: "85%" },
                { name: "Tailwind CSS", level: "95%" },
                { name: "Node.js", level: "80%" },
                { name: "Figma", level: "75%" },
              ].map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  className="relative group"
                >
                  <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-darkGray/80  text-primary text-xs sm:text-sm rounded-lg border border-primary/20 group-hover:border-primary/50 transition-all flex items-center">
                    {skill.name}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800 rounded-b-lg overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      transition={{ duration: 1, delay: 0.1 * i }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3" // Более узкий gap
            style={{ marginTop: "1rem" }} // Добавлен отступ сверху
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.a
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 255, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              href="/projects"
              className="px-4 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary to-secondary text-dark font-bold rounded-lg hover:shadow-neon transition-all flex items-center group relative overflow-hidden w-full sm:w-auto text-center justify-center"
            >
              <span className="relative z-10 flex items-center">
                View Projects
                <svg
                  className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <span className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"></span>
            </motion.a>

            <motion.a
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 200, 255, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-3 py-3 sm:px-8 sm:py-4 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all flex items-center group relative overflow-hidden w-full sm:w-auto text-center justify-center"
            >
              <span className="relative z-10 flex items-center">
                Contact Me
                <svg
                  className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <span className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-all"></span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
