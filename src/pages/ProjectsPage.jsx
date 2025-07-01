import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Footer from "../components/Footer";

import CryptoImage from "../assets/Website1.jpg";
import BuroImage from "../assets/Website2.png";
import NFTImage from "../assets/Website3.jpg";
import DashbordImage from "../assets/Website4.jpeg";

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Crypto Analytics",
      description:
        "AI-powered market analysis platform with real-time WebSocket data",
      tags: ["React", "Node.js", "WebSocket", "D3.js"],
      images: [CryptoImage, CryptoImage, CryptoImage],
      accentColor: "#00FFAA",
      liveUrl: "#",
      features: [
        "Real-time cryptocurrency data visualization",
        "Machine learning price prediction",
        "Customizable dashboard",
        "Portfolio tracking",
      ],
      challenge: "Building low-latency data pipelines for real-time updates",
      solution:
        "Implemented WebSocket connections with Node.js backend and Redis caching",
    },
    {
      id: 2,
      title: "Architecture Studio",
      description: "Immersive 3D portfolio with virtual tours",
      tags: ["Three.js", "GSAP", "WebGL", "Blender"],
      images: [BuroImage, BuroImage, BuroImage],
      accentColor: "#FF00AA",
      liveUrl: "#",
      features: [
        "Interactive 3D models",
        "Virtual property tours",
        "Client presentation mode",
        "Mobile optimized",
      ],
      challenge: "Optimizing 3D models for web performance",
      solution: "Used glTF format and implemented progressive loading",
    },
    {
      id: 3,
      title: "NFT Marketplace",
      description: "Decentralized platform with MetaMask integration",
      tags: ["Web3", "Solidity", "Ethereum", "IPFS"],
      images: [NFTImage, NFTImage, NFTImage],
      accentColor: "#AA00FF",
      liveUrl: "#",
      features: [
        "Wallet connectivity",
        "Smart contract interactions",
        "Gas fee optimization",
        "IPFS storage",
      ],
      challenge: "Reducing gas fees for users",
      solution: "Implemented batch transactions and gas estimation",
    },
    {
      id: 4,
      title: "Financial Dashboard",
      description: "Interactive Big Data analytics with machine learning",
      tags: ["TypeScript", "D3.js", "TensorFlow", "NestJS"],
      images: [DashbordImage, DashbordImage, DashbordImage],
      accentColor: "#00AAFF",
      liveUrl: "#",
      features: [
        "Custom chart visualizations",
        "Predictive analytics",
        "Data export functionality",
        "Role-based access",
      ],
      challenge: "Handling large financial datasets",
      solution: "Implemented server-side pagination and Web Workers",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-dark">
      {/* Background elements */}
      <div className="fixed inset-0 z-0">
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
      </div>

      {/* Back button */}
      <motion.div
        className="sticky top-4 left-4 z-50 mt-4 ml-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <a
          href="/"
          className="flex items-center gap-2 px-4 py-2 bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-primary transition-colors text-gray-300 hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Home
        </a>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 flex-grow">
        <section className="relative py-20 overflow-hidden">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 px-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient bg-gradient-to-r from-primary to-secondary animate-gradient-text">
                $ Project Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
              // Detailed showcase of my development projects
            </p>
          </motion.div>

          {/* Projects grid */}
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  className="group"
                >
                  <div className="h-full bg-gray-900/50 rounded-xl border border-gray-700 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    {/* Project image */}
                    <div className="h-64 overflow-hidden relative">
                      <motion.img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                        <span className="bg-black/80 text-primary font-mono px-3 py-1 rounded-lg text-sm border border-primary/30 backdrop-blur-sm">
                          {project.tags[0]}
                        </span>
                        <span className="bg-black/80 text-gray-300 font-mono px-3 py-1 rounded-lg text-sm backdrop-blur-sm">
                          Project 0{project.id}
                        </span>
                      </div>
                    </div>

                    {/* Project content */}
                    <div className="p-6">
                      <div className="mb-4">
                        <h3
                          className="text-2xl font-bold mb-2"
                          style={{ color: project.accentColor }}
                        >
                          {project.title}
                        </h3>
                        <p className="text-gray-400">{project.description}</p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs rounded-full border font-mono"
                            style={{
                              borderColor: `${project.accentColor}50`,
                              color: project.accentColor,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action buttons */}
                      <div className="flex gap-3">
                        <motion.a
                          whileHover={{ y: -3 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 text-sm rounded-lg bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors"
                        >
                          Live Demo
                        </motion.a>
                        <motion.button
                          whileHover={{ y: -3 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedProject(project)}
                          className="px-4 py-2 text-sm rounded-lg bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700 transition-colors"
                        >
                          View Details
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="relative bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Project content */}
              <div className="p-6">
                {/* Gallery */}
                <div className="mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-4">
                    {selectedProject.images.map((image, index) => (
                      <div
                        key={index}
                        className="rounded-lg overflow-hidden border border-gray-700"
                      >
                        <img
                          src={image}
                          alt={`${selectedProject.title} screenshot ${
                            index + 1
                          }`}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project info */}
                <div className="mb-8">
                  <h3
                    className="text-3xl font-bold mb-4"
                    style={{ color: selectedProject.accentColor }}
                  >
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full border font-mono"
                        style={{
                          borderColor: `${selectedProject.accentColor}50`,
                          color: selectedProject.accentColor,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-200 mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start text-gray-400"
                          >
                            <span className="text-primary mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-gray-200 mb-3">
                        Challenge
                      </h4>
                      <p className="text-gray-400">
                        {selectedProject.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-gray-200 mb-3">
                        Solution
                      </h4>
                      <p className="text-gray-400">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-dark font-bold rounded-lg hover:shadow-neon transition-all text-center"
                  >
                    Visit Live Site
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 bg-gray-800 text-gray-300 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProjectsPage;
