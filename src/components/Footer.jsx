import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/aicangeneratecode",
      icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
      color: "text-gray-400 hover:text-purple-400",
    },
    {
      name: "Telegram",
      url: "https://t.me/everycornerismine",
      icon: "M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-4.72 14.67c-.19.66-.28 1.32-1.97.92-1.7-.4-4.15-2.21-5.65-3.6z",
      color: "text-gray-400 hover:text-blue-400",
    },
  ];

  return (
    <footer className="relative border-t border-gray-800/50 py-8">
      {/* Декоративная подсветка */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Основная строка */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Копирайт */}
          <motion.div
            className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            whileHover={{ x: 2 }}
          >
            © {new Date().getFullYear()}{" "}
            <span className="text-primary">AlexSapoff</span>
          </motion.div>

          {/* Разделитель - только на десктопе */}
          <div className="hidden md:block h-4 w-px bg-gray-800/50" />

          {/* Социальные иконки */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} transition-colors`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.name}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d={social.icon} />
                </svg>
              </motion.a>
            ))}
          </div>

          {/* Разделитель - только на десктопе */}
          <div className="hidden md:block h-4 w-px bg-gray-800/50" />

          {/* Кнопка наверх */}
          <motion.a
            href="#home"
            className="text-xs text-gray-500 hover:text-primary transition-colors flex items-center"
            whileHover={{ y: -2 }}
          >
            <span className="hidden md:inline">Back to top</span>
            <svg
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </motion.a>
        </div>

        {/* Строка с технологиями (только на десктопе) */}
        <motion.div
          className="hidden md:flex justify-center mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span>Built with:</span>
            <span className="text-primary">React</span>
            <span>•</span>
            <span className="text-primary">Tailwind</span>
            <span>•</span>
            <span className="text-primary">Framer Motion</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
