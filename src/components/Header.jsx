import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionsRef = useRef([]);
  const { scrollY } = useScroll();
  const menuRef = useRef(null);

  const links = [
    { name: "Home", to: "home" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Contact", to: "contact" },
  ];

  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10,10,20,0)", "rgba(5,5,15,0.9)"]
  );
  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ["0 2px 10px rgba(0,255,255,0)", "0 4px 20px rgba(0,255,255,0.2)"]
  );

  useEffect(() => {
    sectionsRef.current = links.map((link) => document.getElementById(link.to));

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let active = "home";
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            active = links[index].to;
          }
        }
      });
      setActiveLink(active);
    };

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleScrollClick = (e, id) => {
    e.preventDefault();
    setActiveLink(id);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 800);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      className="fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-500"
      style={{
        background: headerBackground,
        boxShadow: headerShadow,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 10,
            duration: 0.15,
          }}
        >
          <Link
            to="/"
            onClick={(e) => handleScrollClick(e, "home")}
            className="text-xl md:text-2xl font-bold text-primary glow hover:text-white transition-colors flex items-center"
          >
            <span className="mr-2 text-lg md:text-xl">{`</>`}</span>
            <span>DevPortfolio</span>
            <motion.span
              className="ml-1 text-secondary"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              _
            </motion.span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <motion.ul className="flex space-x-4 lg:space-x-6" layout>
            {links.map((link) => (
              <li key={link.to}>
                <a
                  href={`#${link.to}`}
                  onClick={(e) => handleScrollClick(e, link.to)}
                  className={`px-2 py-1 lg:px-3 lg:py-2 relative font-mono text-sm lg:text-base transition-colors ${
                    activeLink === link.to
                      ? "text-primary"
                      : "text-gray-300 hover:text-primary"
                  }`}
                >
                  {link.name}
                  {activeLink === link.to && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 w-full h-0.5 bg-primary rounded"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                    />
                  )}
                </a>
              </li>
            ))}
          </motion.ul>
        </nav>

        {/* Desktop CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 10,
            duration: 0.15,
          }}
          className="hidden md:block"
        >
          <button
            onClick={(e) => handleScrollClick(e, "contact")}
            className="px-4 py-2 bg-transparent border border-primary text-primary rounded-md hover:bg-primary/10 transition-all relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center">
              Contact Me
              <svg
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-150"
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
            <motion.span
              className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-all duration-150"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
          </button>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-primary focus:outline-none p-1"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            className="md:hidden px-4 sm:px-6 pb-4 bg-dark/95 border-t border-gray-700/50 backdrop-blur-lg"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col space-y-3 py-2">
              {links.map((link) => (
                <motion.a
                  key={link.to}
                  href={`#${link.to}`}
                  onClick={(e) => handleScrollClick(e, link.to)}
                  className={`px-4 py-2 rounded-md font-mono text-sm transition-colors ${
                    activeLink === link.to
                      ? "text-primary bg-primary/10"
                      : "text-gray-300 hover:text-primary hover:bg-primary/5"
                  }`}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                onClick={(e) => handleScrollClick(e, "contact")}
                className="mt-2 w-full py-2.5 bg-gradient-to-r from-primary to-secondary text-dark font-bold rounded-md text-sm"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.2 }}
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
