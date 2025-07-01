import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useState, useRef } from "react";
import CryptoImage from "../assets/Website1.jpg";
import BuroImage from "../assets/Website2.png";
import NFTImage from "../assets/Website3.jpg";
import DashbordImage from "../assets/Website4.jpeg";

const ProjectsShowcase = ({ isStandalonePage = false }) => {
  const [activeProject, setActiveProject] = useState(null);
  const projects = [
    {
      id: 1,
      title: "Crypto Analytics",
      description:
        "AI-powered market analysis platform with real-time WebSocket data",
      tags: ["React", "Node.js", "WebSocket", "D3.js"],
      image: CryptoImage,
      col: "left",
      offset: "top",
      accentColor: "#00FFAA",
    },
    {
      id: 2,
      title: "Architecture Studio",
      description: "Immersive 3D portfolio with virtual tours",
      tags: ["Three.js", "GSAP", "WebGL", "Blender"],
      image: BuroImage,
      col: "right",
      offset: "top",
      accentColor: "#FF00AA",
    },
    {
      id: 3,
      title: "NFT Marketplace",
      description: "Decentralized platform with MetaMask integration",
      tags: ["Web3", "Solidity", "Ethereum", "IPFS"],
      image: NFTImage,
      col: "left",
      offset: "bottom",
      accentColor: "#AA00FF",
    },
    {
      id: 4,
      title: "Financial Dashboard",
      description: "Interactive Big Data analytics with machine learning",
      tags: ["TypeScript", "D3.js", "TensorFlow", "NestJS"],
      image: DashbordImage,
      col: "right",
      offset: "bottom",
      accentColor: "#00AAFF",
    },
    {
      id: 5,
      title: "All Projects",
      description:
        "Complete collection of my work with detailed case studies and technical solutions",
      tags: ["30+ projects", "Case Studies", "Technologies", "Results"],
      image: null,
      col: "left",
      offset: "bottom",
      accentColor: "#FFFFFF",
      isViewAll: true,
      features: [
        "Detailed project descriptions",
        "Technical specifications",
        "Solved challenges",
        "Technologies used",
      ],
    },
  ];

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  // Enhanced connecting lines
  const lines = [
    {
      id: 1,
      path: "M15% 15% L85% 15%",
      gradient: ["#00FFAA", "#00FFFF"],
      width: 0.8,
    },
    {
      id: 2,
      path: "M85% 30% L15% 30%",
      gradient: ["#FF00AA", "#FF00FF"],
      width: 0.8,
    },
    {
      id: 3,
      path: "M15% 45% L85% 45%",
      gradient: ["#AA00FF", "#AA00AA"],
      width: 0.8,
    },
    {
      id: 4,
      path: "M85% 60% L15% 60%",
      gradient: ["#00AAFF", "#00AAAA"],
      width: 0.8,
    },
    {
      id: 5,
      path: "M15% 75% L85% 75%",
      gradient: ["#FFFFFF", "#DDDDDD"],
      width: 1,
    },
  ];

  // Mobile version component
  const MobileProjectCard = ({ project, isActive, onClick }) => {
    return (
      <motion.div
        layout // Added for smooth animations
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, type: "spring" }} // Improved animation
      >
        <motion.div
          layout // Added for smooth animations
          className={`rounded-xl border overflow-hidden ${
            isActive ? "border-primary/50" : "border-gray-800"
          }`}
          onClick={onClick}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2, type: "spring" }}
        >
          {/* Card header */}
          <motion.div
            layout // Added for smooth animations
            className="p-4 bg-gray-900/50 flex justify-between items-center"
          >
            <motion.h3
              className="font-bold"
              animate={{
                color: isActive ? project.accentColor : "#FFFFFF",
              }}
              transition={{ duration: 0.2 }}
            >
              <a href="/projects" className="block">
                {project.title}
              </a>
            </motion.h3>

            <motion.div
              animate={{
                rotate: isActive ? 180 : 0,
                color: isActive ? project.accentColor : "#6B7280",
              }}
              transition={{ duration: 0.2 }}
            >
              ▼
            </motion.div>
          </motion.div>

          {/* Content with improved expand animation */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                layout // Added for smooth animations
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: "auto",
                  opacity: 1,
                  transition: {
                    height: { duration: 0.3, ease: "easeOut" },
                    opacity: { duration: 0.2, delay: 0.1 },
                  },
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                  transition: {
                    height: { duration: 0.2 },
                    opacity: { duration: 0.1 },
                  },
                }}
                className="bg-gray-900/30 overflow-hidden"
              >
                <div className="p-4">
                  <motion.p
                    className="text-gray-300 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full border font-mono"
                        style={{ borderColor: project.accentColor + "50" }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Button inside "All Projects" card */}
                  {project.isViewAll && (
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 w-full py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-dark font-bold"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      onClick={() => (window.location.href = "/projects")}
                    >
                      View Details
                    </motion.button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
      </div>

      {/* Bright connecting lines */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {lines.map((line) => (
          <g key={line.id}>
            <motion.path
              d={line.path}
              stroke={`url(#lineGradient${line.id})`}
              strokeWidth={line.width}
              fill="none"
              strokeDasharray="8 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: 0.8,
              }}
              transition={{
                duration: 3,
                delay: line.id * 0.3,
                ease: "easeInOut",
              }}
            />
            <defs>
              <linearGradient
                id={`lineGradient${line.id}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor={line.gradient[0]} />
                <stop offset="100%" stopColor={line.gradient[1]} />
              </linearGradient>
            </defs>
          </g>
        ))}
      </svg>

      {/* Running code lines */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-10 pointer-events-none">
        {[...Array(15)].map((_, i) => {
          const codeLines = [
            "const portfolio = new PortfolioViewer();",
            "portfolio.loadProjects();",
            "renderCaseStudies();",
            "displayTechnologies();",
            "showMetrics();",
          ];
          const randomCode =
            codeLines[Math.floor(Math.random() * codeLines.length)];
          return (
            <motion.div
              key={i}
              className="absolute left-0 whitespace-nowrap font-mono text-sm text-primary"
              style={{
                top: `${5 + i * 6}%`,
                fontSize: `${0.9 + Math.random() * 0.3}rem`,
              }}
              initial={{ x: "100vw" }}
              animate={{ x: "-100%" }}
              transition={{
                duration: 25 + Math.random() * 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {`> ${randomCode}`}
            </motion.div>
          );
        })}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title with animated gradient */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient bg-gradient-to-r from-primary to-secondary animate-gradient-text">
              $ Completed Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
            <span className="lg:hidden">// Click for details</span>
            <span className="hidden lg:inline">// Hover for details</span>
          </p>
        </motion.div>

        <div className="hidden lg:block">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left column */}
            <div className="space-y-16">
              {projects
                .filter((project) => project.col === "left")
                .map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    direction="left"
                    isActive={activeProject === project.id}
                    onHover={setActiveProject}
                  />
                ))}
            </div>

            {/* Right column */}
            <div className="space-y-16 lg:mt-32">
              {projects
                .filter((project) => project.col === "right")
                .map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    direction="right"
                    isActive={activeProject === project.id}
                    onHover={setActiveProject}
                  />
                ))}
            </div>
          </div>
        </div>

        {/* Mobile version */}
        <div className="lg:hidden space-y-4 mb-12">
          {projects.map((project) => (
            <MobileProjectCard
              key={project.id}
              project={project}
              isActive={activeProject === project.id}
              onClick={() =>
                setActiveProject(
                  activeProject === project.id ? null : project.id
                )
              }
            />
          ))}
        </div>

        {/* "All Projects" button for mobile */}
        <motion.div
          className="lg:hidden mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-dark font-bold"
            onClick={() => (window.location.href = "/projects")}
          >
            View All Projects
          </motion.button>
        </motion.div>

        {!isStandalonePage && (
          <div className="hidden lg:block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              {/* ... */}
            </div>
          </div>
        )}

        {/* Для standalone страницы показываем все проекты в одной колонке */}
        {isStandalonePage && (
          <div className="grid grid-cols-1 gap-16">
            {projects
              .filter((project) => !project.isViewAll)
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  direction={project.col}
                  isActive={activeProject === project.id}
                  onHover={setActiveProject}
                  isStandalone={true}
                />
              ))}
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  direction,
  isActive,
  onHover,
  isStandalone = false,
}) => {
  const cardRef = useRef(null);

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: direction === "left" ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: direction === "right" ? 0.2 : 0 }}
      style={{ y }}
      className={`${
        project.offset === "bottom" && !isStandalone ? "lg:mt-24" : ""
      } ${isStandalone ? "max-w-4xl mx-auto" : ""}`}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
    >
      {project.isViewAll ? (
        <motion.div
          className="relative group h-full"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          {/* Animated glow */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 0.3,
                  boxShadow: "0 0 60px rgba(0, 255, 255, 0.4)",
                }}
                exit={{ opacity: 0 }}
              />
            )}
          </AnimatePresence>

          {/* Gradient border on hover */}
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{
              opacity: isActive ? 1 : 0,
              border: "1px solid rgba(0, 255, 255, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          />

          <div className="bg-gradient-to-br from-gray-900 via-[#001010] to-[#000a0a]  rounded-xl border border-gray-700/50 hover:border-primary/50 transition-all duration-500 h-[600px] flex flex-col relative overflow-hidden shadow-2xl shadow-primary/10">
            {/* Header with improved design */}
            <div className="p-4 border-b border-gray-700/50 flex items-center bg-gray-900/50 relative">
              {/* Animated dots */}
              <div className="flex space-x-2 mr-3">
                <motion.div
                  className="w-3 h-3 rounded-full bg-red-400/80"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="w-3 h-3 rounded-full bg-yellow-400/80"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
                />
                <motion.div
                  className="w-3 h-3 rounded-full bg-green-400/80"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
                />
              </div>
              <p className="text-xs font-mono text-gray-400 tracking-wider">
                portfolio_viewer.jsx
              </p>

              {/* Active indicator */}
              <motion.div
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                animate={{
                  opacity: isActive ? 1 : 0,
                  x: isActive ? 0 : 10,
                }}
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></div>
                  <span className="text-xs text-primary font-mono">active</span>
                </div>
              </motion.div>
            </div>

            {/* Content with improved typography */}
            <div className="p-8 flex-1 flex flex-col items-center justify-center text-center">
              <motion.h3
                className="text-3xl font-bold mb-6 text-white relative"
                animate={{ color: isActive ? "#ffffff" : "#f5f5f7" }}
              >
                {project.title}
                {/* Underline on hover */}
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.h3>

              <motion.p
                className="text-gray-400 mb-8 text-lg max-w-md leading-relaxed font-light"
                animate={{ opacity: isActive ? 1 : 0.8 }}
              >
                {project.description}
              </motion.p>

              {/* Features list with icons */}
              <ul className="mb-8 space-y-4 text-left w-full max-w-sm">
                {project.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start text-gray-300 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-primary mr-3 group-hover:text-secondary transition-colors">
                      ›
                    </span>
                    <span className="group-hover:text-white transition-colors">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Button with enhanced effects */}
              <motion.a
                whileHover={{
                  y: -3,
                  boxShadow: "0 10px 25px -5px rgba(0, 255, 255, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                href="/projects"
                className="px-8 py-3.5 bg-gradient-to-r from-primary to-secondary text-dark font-bold rounded-lg transition-all flex items-center group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  View Projects
                  <svg
                    className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform"
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
                {/* Animated button background */}
                <motion.span
                  className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>

              {/* Gradient divider line */}
              <div className="w-full my-8 relative h-px">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
              </div>

              {/* Tags with hover effects */}
              <div className="flex flex-wrap justify-center gap-3">
                {project.tags.map((tag, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1.5 bg-gray-800/50 text-xs rounded-full text-gray-300 border border-gray-700/50 hover:border-primary/50 hover:text-primary transition-all font-mono"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(0, 255, 255, 0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </motion.div>
      ) : (
        /* Original design for regular cards */
        <motion.div
          className="relative group h-full"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          {/* Glow on hover */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                style={{
                  boxShadow: `0 0 40px ${project.accentColor}`,
                }}
              />
            )}
          </AnimatePresence>

          <div
            className={`bg-darkGray rounded-3xl shadow-2xl overflow-hidden border transition-all duration-500 h-[650px] flex flex-col relative ${
              isActive ? "border-primary/50" : "border-gray-800"
            }`}
            style={{
              boxShadow: isActive
                ? `0 25px 50px -12px ${project.accentColor}30`
                : "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* Card header */}
            <div className="p-4 border-b border-gray-800 flex items-center">
              <div className="flex space-x-2 mr-3">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
              </div>
              <p className="text-xs font-mono text-gray-400">
                project_{project.title.toLowerCase().replace(/ /g, "_")}.jsx
              </p>
            </div>

            {/* Image */}
            <div className="h-[65%] relative overflow-hidden ">
              <a href="/projects" onClick={(e) => e.stopPropagation()}>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  initial={{ scale: 1 }}
                  animate={{ scale: isActive ? 1.05 : 1 }}
                  transition={{ duration: 0.5 }}
                />
              </a>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-10">
                <span className="bg-black/80 text-primary font-mono px-4 py-2 rounded-lg text-sm border border-primary/30 backdrop-blur-sm">
                  {project.tags[0]}
                </span>
                <motion.span
                  className="bg-black/80 text-gray-300 font-mono px-4 py-2 rounded-lg text-sm backdrop-blur-sm"
                  animate={{
                    color: isActive ? project.accentColor : "#D1D5DB",
                  }}
                >
                  Project 0{project.id}
                </motion.span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex-1 flex flex-col">
              <motion.h3
                className="text-2xl md:text-3xl font-bold mb-4"
                animate={{
                  color: isActive ? project.accentColor : "#FFFFFF",
                }}
                transition={{ duration: 0.3 }}
              >
                <a href="/projects" className="block">
                  {project.title}
                </a>
              </motion.h3>

              <motion.p
                className="text-gray-400 mb-6 text-lg leading-relaxed"
                animate={{
                  opacity: isActive ? 1 : 0.8,
                }}
              >
                {project.description}
              </motion.p>

              <div className="flex flex-wrap gap-3 mt-auto">
                {project.tags.slice(1).map((tag, index) => (
                  <motion.span
                    key={tag}
                    className="px-4 py-1.5 text-xs font-mono rounded-full border transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 0.1 * index,
                    }}
                    animate={{
                      backgroundColor: isActive
                        ? `${project.accentColor}20`
                        : "rgba(0, 255, 255, 0.1)",
                      borderColor: isActive
                        ? `${project.accentColor}50`
                        : "rgba(0, 255, 255, 0.2)",
                      color: isActive
                        ? project.accentColor
                        : "rgb(0, 255, 255)",
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Active state indicator */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  className="absolute top-4 right-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectsShowcase;
