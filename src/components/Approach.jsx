import { motion } from "framer-motion";
import { useState } from "react";

const Approach = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const approachSteps = [
    {
      title: "Analysis",
      code: "> analyzing_client_needs()",
      description:
        "Deep dive into business logic to identify key growth points",
      features: [
        "Interviews",
        "Audience Analysis",
        "Tech Audit",
        "Benchmarking",
      ],
      accent: "from-cyan-400 to-blue-500",
    },
    {
      title: "Design",
      code: "> designing_architecture()",
      description: "Create modular systems with thoughtful scalability",
      features: ["API Schemas", "State Management", "Optimization", "Security"],
      accent: "from-purple-400 to-pink-500",
    },
    {
      title: "Development",
      code: "> coding_with_quality()",
      description: "Write clean, documented code with tests",
      features: ["TypeScript", "CI/CD", "Testing", "Code Review"],
      accent: "from-yellow-400 to-orange-500",
    },
    {
      title: "Deployment",
      code: "> deploying_solution()",
      description: "Ensure seamless deployment and monitoring",
      features: ["Dockerization", "Logging", "Metrics", "Alerts"],
      accent: "from-green-400 to-teal-500",
    },
  ];

  return (
    <section id="approach" className="relative py-12 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-20"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-6">
            <span className="text-gradient bg-gradient-to-r from-primary to-secondary animate-gradient-text">
              $ Why My Projects Stand Out
            </span>
          </h2>
          <p className="text-sm sm:text-xl text-gray-400 max-w-3xl mx-auto font-mono">
            // Systematic problem solving from idea to production
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          <div className="absolute left-1/2 h-full w-0.5 bg-gray-800 -translate-x-1/2 hidden lg:block">
            <motion.div
              className="h-full bg-gradient-to-b from-primary to-secondary origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 gap-y-8 sm:gap-y-16 lg:grid-cols-2 lg:gap-24">
            {approachSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative group px-2 sm:px-4 text-left ${
                  index % 2 === 0 ? "lg:text-right" : "lg:text-left lg:mt-32"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Dot – desktop only */}
                <div
                  className={`absolute top-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-gray-700 bg-dark hidden lg:block ${
                    index % 2 === 0 ? "-right-2" : "-left-2"
                  }`}
                >
                  <motion.div
                    className={`w-full h-full rounded-full bg-gradient-to-br ${step.accent}`}
                    animate={{
                      scale: activeIndex === index ? 1.2 : 0.8,
                      opacity: activeIndex === index ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Card */}
                <div
                  className={`p-4 sm:p-6 rounded-md sm:rounded-xl border border-gray-800 hover:border-primary/50 transition-all duration-500 bg-gradient-to-br from-gray-900/50 to-gray-900/20  ${
                    activeIndex === index ? "ring-1 ring-primary/30" : ""
                  }`}
                >
                  <div className="mb-3 sm:mb-4">
                    <motion.h3
                      className={`text-lg sm:text-2xl font-bold mb-1 sm:mb-2 ${
                        activeIndex === index ? "text-primary" : "text-white"
                      }`}
                      animate={{
                        color: activeIndex === index ? "#00f0ff" : "#ffffff",
                      }}
                    >
                      {step.title}
                    </motion.h3>
                    <p className="text-xs sm:text-sm text-gray-400 font-mono mb-2 sm:mb-3">
                      {step.code}
                    </p>
                  </div>

                  <motion.p
                    className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-6"
                    animate={{
                      opacity: activeIndex === index ? 1 : 0.8,
                    }}
                  >
                    {step.description}
                  </motion.p>

                  <ul className="flex flex-wrap gap-2 sm:gap-3">
                    {step.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, y: 5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * i }}
                        className="px-2 py-1 text-xs font-mono rounded-full border border-gray-700 hover:bg-gray-800/50 transition-colors"
                        animate={{
                          backgroundColor:
                            activeIndex === index
                              ? "rgba(0, 240, 255, 0.1)"
                              : "rgba(31, 41, 55, 0.5)",
                          borderColor:
                            activeIndex === index
                              ? "rgba(0, 240, 255, 0.3)"
                              : "rgba(55, 65, 81, 1)",
                        }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Glow – only for sm+ */}
                  <div
                    className={`absolute -z-10 hidden sm:block w-24 h-24 sm:w-32 sm:h-32 rounded-full blur-xl opacity-20 ${
                      index % 2 === 0 ? "-right-5 -top-5" : "-left-5 -top-5"
                    } bg-gradient-to-br ${step.accent}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core principles */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 sm:mt-24 max-w-4xl mx-auto bg-gray-900/50 p-4 sm:p-8 rounded-xl border border-primary/20 relative overflow-hidden "
        >
          <div className="relative z-10">
            <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-6 text-primary font-mono">
              {">"} core_principles:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
              {[
                {
                  title: "Customization",
                  desc: "Every challenge I tackle is approached without templates — only custom-fit solutions.",
                  icon: "🛠️",
                },
                {
                  title: "Precision",
                  desc: "Perfection in every pixel, interaction, and line of code.",
                  icon: "🔍",
                },
                {
                  title: "Systematic",
                  desc: "I design thoughtful architectures that scale seamlessly.",
                  icon: "🧩",
                },
                {
                  title: "Transparency",
                  desc: "Clear communication, realistic timelines, and regular updates.",
                  icon: "💎",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    y: window.innerWidth > 640 ? -5 : 0,
                  }}
                  className="flex items-start p-3 sm:p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors border border-gray-700/50"
                >
                  <span className="text-xl sm:text-2xl mr-3 sm:mr-4">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="font-bold text-white mb-1 text-sm sm:text-base">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Glow effects – only sm+ */}
          <div className="absolute -right-10 -top-10 w-32 h-32 sm:w-64 sm:h-64 rounded-full bg-primary/10 blur-xl sm:blur-2xl hidden sm:block"></div>
          <div className="absolute -left-10 -bottom-10 w-36 h-36 sm:w-72 sm:h-72 rounded-full bg-secondary/10 blur-xl sm:blur-2xl hidden sm:block"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;
