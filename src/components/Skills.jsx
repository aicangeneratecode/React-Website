import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useCallback } from "react";

const skillsData = [
  {
    id: "js",
    name: "JavaScript",
    icon: "JS",
    level: 92,
    color: "yellow",
    since: 2021,
    details: [
      "ES6+ Syntax",
      "Async/Await",
      "Functional Programming",
      "DOM Manipulation",
      "Event Loop",
    ],
    command: "npm install javascript-core@latest",
  },
  {
    id: "react",
    name: "React",
    icon: "⚛️",
    level: 88,
    color: "cyan",
    since: 2023,
    details: [
      "Hooks System",
      "Context API",
      "React Router",
      "Performance Optimization",
      "Server Components",
    ],
    command: "npm install react@18",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: "TW",
    level: 95,
    color: "sky",
    since: 2023,
    details: [
      "Utility-First",
      "Responsive Design",
      "Dark Mode",
      "Custom Configs",
      "JIT Compiler",
    ],
    command: "npm install tailwindcss@latest",
  },
  {
    id: "node",
    name: "Node.js",
    icon: "🟢",
    level: 85,
    color: "green",
    since: 2023,
    details: [
      "Express.js",
      "REST APIs",
      "WebSockets",
      "File System",
      "Streams",
    ],
    command: "npm install node@lts",
  },
  {
    id: "ts",
    name: "TypeScript",
    icon: "TS",
    level: 86,
    color: "blue",
    since: 2022,
    details: [
      "Type Annotations",
      "Interfaces",
      "Generics",
      "Utility Types",
      "Decorators",
    ],
    command: "npm install typescript@latest",
  },
  {
    id: "git",
    name: "Git",
    icon: "⎇",
    level: 90,
    color: "orange",
    since: 2020,
    details: ["Branching", "Rebasing", "Git Flow", "Hooks", "Submodules"],
    command: "brew install git",
  },
];

const colorMap = {
  yellow: {
    border: "border-yellow-400",
    gradient: "from-yellow-400 to-yellow-600",
    text: "text-yellow-400",
  },
  cyan: {
    border: "border-cyan-400",
    gradient: "from-cyan-400 to-cyan-600",
    text: "text-cyan-400",
  },
  sky: {
    border: "border-sky-400",
    gradient: "from-sky-400 to-sky-600",
    text: "text-sky-400",
  },
  green: {
    border: "border-green-400",
    gradient: "from-green-400 to-green-600",
    text: "text-green-400",
  },
  blue: {
    border: "border-blue-400",
    gradient: "from-blue-400 to-blue-600",
    text: "text-blue-400",
  },
  orange: {
    border: "border-orange-400",
    gradient: "from-orange-400 to-orange-600",
    text: "text-orange-400",
  },
};

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [expandedSkill, setExpandedSkill] = useState(null);
  const terminalRef = useRef(null);

  const handleSkillHover = useCallback((skill) => {
    setActiveSkill(skill);
    setTimeout(() => {
      terminalRef.current?.scrollTo({
        top: terminalRef.current.scrollHeight,
        behavior: "smooth",
      });
    }, 150);
  }, []);

  const handleSkillLeave = useCallback(() => {
    setActiveSkill(null);
  }, []);

  const handleSkillClick = (skill) => {
    if (expandedSkill?.id === skill.id) {
      setExpandedSkill(null);
    } else {
      setExpandedSkill(skill);
    }
  };

  return (
    <section id="skills" className="relative py-12 md:py-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent" />
      </div>

      {/* Grid lines - desktop only */}
      <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20">
        {[...Array(6)].map((_, i) => (
          <line
            key={i}
            x1="0"
            y1={i * 20}
            x2="100%"
            y2={i * 20}
            stroke="url(#lineGradient)"
            strokeWidth="0.5"
            strokeDasharray="10 5"
          />
        ))}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        {/* Animated header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="text-gradient bg-gradient-to-r from-primary to-secondary">
              $ Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 font-mono text-sm md:text-lg">
            <span className="md:hidden">// Click on a skill for details</span>
            <span className="hidden md:inline">
              // Hover over a skill for details
            </span>
          </p>
        </motion.div>

        {/* Mobile version */}
        <div className="md:hidden space-y-3">
          {skillsData.map((skill, index) => {
            const colors = colorMap[skill.color] || colorMap.yellow;
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                onClick={() => handleSkillClick(skill)}
                className={`p-3 rounded-lg border ${
                  expandedSkill?.id === skill.id
                    ? `${colors.border} bg-gray-800/50`
                    : "border-gray-700"
                } transition-all bg-gray-900/40`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`text-xl mr-3 ${colors.text}`}>
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm">
                        {skill.name}
                      </h3>
                      <p className="text-xs text-gray-400">
                        Experience: {new Date().getFullYear() - skill.since}{" "}
                        years
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2 py-1 rounded bg-black/30 text-gray-300">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="mt-2 h-1 bg-gray-800 w-full rounded">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${colors.gradient} rounded`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: index * 0.1 }}
                  />
                </div>

                {/* Skill details (expands on click) */}
                <AnimatePresence>
                  {expandedSkill?.id === skill.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 pt-3 border-t border-gray-700">
                        <p className="text-xs text-gray-300 mb-2">
                          {skill.command}
                        </p>
                        <ul className="space-y-1">
                          {skill.details.map((detail, i) => (
                            <li key={i} className="text-xs text-gray-400 flex">
                              <span className="text-gray-600 mr-2">-</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop version */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Skills grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 md:gap-4 lg:col-span-2">
            {skillsData.map((skill, index) => {
              const colors = colorMap[skill.color] || colorMap.yellow;
              return (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 8px 20px -5px rgba(0, 255, 255, 0.15)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => handleSkillHover(skill)}
                  onHoverEnd={handleSkillLeave}
                  className={`p-4 md:p-5 rounded-xl border ${
                    activeSkill?.id === skill.id
                      ? `${colors.border} bg-gray-800/50 shadow-lg`
                      : "border-gray-700 hover:border-gray-600"
                  } transition-all cursor-default relative overflow-hidden bg-gray-900/40 backdrop-blur-sm`}
                >
                  {/* Progress bar */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gray-800 w-full rounded-b">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${colors.gradient} rounded-b`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 1.2,
                        delay: index * 0.1,
                        type: "spring",
                      }}
                    />
                  </div>

                  <div className="flex items-center">
                    <div
                      className={`text-2xl md:text-3xl mr-3 md:mr-4 ${colors.text}`}
                    >
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm md:text-base">
                        {skill.name}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-400">
                        Experience: {new Date().getFullYear() - skill.since}{" "}
                        years
                      </p>
                    </div>
                  </div>

                  {/* Skill level */}
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-mono px-2 py-1 rounded bg-black/30 text-gray-300">
                      {skill.level}%
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Terminal panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-gray-900/70 rounded-xl border border-gray-700 p-0 h-[420px] md:h-[500px] lg:h-auto flex flex-col overflow-hidden"
          >
            {/* Terminal header */}
            <div className="p-3 border-b border-gray-700 flex items-center bg-gray-900/50">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-xs text-gray-400 font-mono truncate">
                terminal ~/skills/{activeSkill?.name.toLowerCase() || "select"}
              </div>
            </div>

            {/* Terminal content */}
            <div
              ref={terminalRef}
              className="flex-grow bg-black/40 p-4 overflow-y-auto font-mono text-xs md:text-sm"
            >
              <AnimatePresence mode="wait">
                {activeSkill ? (
                  <motion.div
                    key={`skill-${activeSkill.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-green-400 mb-2">
                      $ skill-info --detail {activeSkill.name}
                    </p>
                    <div className="mb-3">
                      <p className="text-gray-300 mb-1">
                        <span className="text-blue-400">Level:</span>{" "}
                        {activeSkill.level}%
                      </p>
                      <p className="text-gray-300 mb-1">
                        <span className="text-blue-400">Using since:</span>{" "}
                        {activeSkill.since} (
                        {new Date().getFullYear() - activeSkill.since} years)
                      </p>
                    </div>

                    <p className="text-blue-400 mb-1">Details:</p>
                    <ul className="mb-3 pl-2 space-y-1">
                      {activeSkill.details.map((detail, i) => (
                        <li key={i} className="text-gray-400 flex items-start">
                          <span className="text-gray-600 mr-2">-</span> {detail}
                        </li>
                      ))}
                    </ul>

                    <p className="text-gray-500 mt-4">
                      $ {activeSkill.command}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="default-terminal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-green-400 mb-2">$ select-skill</p>
                    <p className="text-gray-400 mb-1">
                      {">"} Hover over a skill to view information
                    </p>
                    <p className="text-gray-400 mb-1">
                      {">"} Available skills: {skillsData.length}
                    </p>
                    <div className="mt-4">
                      <p className="text-gray-600 text-xs mb-1">
                        Available commands:
                      </p>
                      <p className="text-gray-500 text-xs">
                        skill-info [skill-name]
                      </p>
                      <p className="text-gray-500 text-xs">skill-list --all</p>
                    </div>
                    <p className="text-gray-400 animate-pulse mt-2">_</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Mobile terminal */}
        <motion.div
          className="md:hidden mt-6 bg-gray-900/70 rounded-lg border border-gray-700 p-0 overflow-hidden"
          ref={terminalRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="p-3 border-b border-gray-700 flex items-center bg-gray-900/50">
            <div className="flex space-x-2 mr-4">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <div className="w-2 h-2 rounded-full bg-yellow-500" />
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
            <div className="text-xs text-gray-400 font-mono truncate">
              terminal ~/skills
            </div>
          </div>
          <div className="p-4 bg-black/40 font-mono text-xs">
            <AnimatePresence mode="wait">
              {expandedSkill ? (
                <motion.div
                  key={`mobile-skill-${expandedSkill.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="text-green-400 mb-2">
                    $ skill-info --detail {expandedSkill.name}
                  </p>
                  <div className="mb-3">
                    <p className="text-gray-300 mb-1">
                      <span className="text-blue-400">Level:</span>{" "}
                      {expandedSkill.level}%
                    </p>
                    <p className="text-gray-300 mb-1">
                      <span className="text-blue-400">Using since:</span>{" "}
                      {expandedSkill.since} (
                      {new Date().getFullYear() - expandedSkill.since} years)
                    </p>
                  </div>
                  <p className="text-gray-500">$ {expandedSkill.command}</p>
                </motion.div>
              ) : (
                <motion.div
                  key="mobile-default-terminal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="text-green-400 mb-2">$ select-skill</p>
                  <p className="text-gray-400">
                    {">"} Select a skill to view details
                  </p>
                  <p className="text-gray-600 text-xs mt-2">
                    Available: {skillsData.length} skills
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 md:mt-12 text-center"
        >
          <p className="text-gray-400 font-mono text-xs md:text-sm">
            All skills verified by real projects and client feedback
          </p>
          <div className="mt-3 flex justify-center space-x-4">
            <a
              href="#projects"
              className="text-primary text-xs md:text-sm font-mono hover:underline"
            >
              $ view-projects
            </a>
            <a
              href="#contact"
              className="text-primary text-xs md:text-sm font-mono hover:underline"
            >
              $ contact-me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
