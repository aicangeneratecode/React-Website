import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [typingEffect, setTypingEffect] = useState("");
  const [activeField, setActiveField] = useState(null);
  const [terminalOutput, setTerminalOutput] = useState([
    "> Initializing contact protocol...",
    "> Establishing secure connection...",
    "> Ready for user input",
  ]);

  // Эффект печатающегося текста
  useEffect(() => {
    if (isSubmitted) {
      let i = 0;
      const text = "Message transmission complete...";
      const interval = setInterval(() => {
        if (i < text.length) {
          setTypingEffect(text.substring(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setIsSubmitted(false);
            setTypingEffect("");
            setTerminalOutput((prev) => [
              ...prev,
              "> Message queued for delivery",
              "> Awaiting response...",
            ]);
          }, 1000);
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isSubmitted]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setTerminalOutput((prev) => [
          ...prev,
          `> Sending message from ${formData.name}...`,
        ]);
        setFormData({ name: "", email: "", message: "" });
      } else {
        // Handle validation errors
        setTerminalOutput((prev) => [
          ...prev,
          `> Error: ${data.errors?.[0]?.msg || data.message}`,
        ]);
      }
    } catch (error) {
      setTerminalOutput((prev) => [
        ...prev,
        `> Error: Failed to connect to server`,
      ]);
    }
  };

  // Генератор случайного IP для декора
  const generateRandomIP = () => {
    return `${Math.floor(Math.random() * 255)}.${Math.floor(
      Math.random() * 255
    )}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
  };

  return (
    <section
      id="contact"
      className="relative py-12 md:py-20 px-4 overflow-hidden"
    >
      {/* Фоновые элементы - сетка и шум */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Заголовок с анимированным градиентом */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="text-gradient bg-gradient-to-r from-primary to-secondary">
              $ contact_me()
            </span>
          </h2>
          <p className="text-sm md:text-xl text-gray-400 font-mono max-w-2xl mx-auto">
            // initiate secure connection protocol
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Терминал с формой */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900/80  rounded-xl border border-gray-700 overflow-hidden shadow-lg md:shadow-2xl shadow-primary/10"
          >
            {/* Заголовок терминала */}
            <div className="p-2 md:p-3 bg-gray-800/50 border-b border-gray-700 flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex space-x-1 md:space-x-2 ml-1 md:ml-2">
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-400/80"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-400/80"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-400/80"></div>
                </div>
                <div className="text-xs text-gray-400 font-mono ml-2 md:ml-4">
                  terminal@contact:~$
                </div>
              </div>
              <div className="text-xs text-gray-500 font-mono hidden sm:block">
                {generateRandomIP()}
              </div>
            </div>

            {/* Вывод терминала */}
            <div className="h-22 md:h-26 p-3 md:p-4 overflow-y-auto font-mono text-xs md:text-sm text-gray-300 bg-gray-900/50 border-b border-gray-700/50">
              {terminalOutput.map((line, i) => (
                <div key={i} className="mb-1 flex">
                  <span className="text-green-400/80 mr-1 md:mr-2">$</span>
                  <span
                    className={
                      i >= terminalOutput.length - 2 ? "text-primary" : ""
                    }
                  >
                    {line}
                  </span>
                </div>
              ))}
              {isSubmitted && (
                <div className="flex items-center">
                  <span className="text-green-400/80 mr-1 md:mr-2">$</span>
                  <span className="text-primary">
                    {typingEffect}
                    <span className="inline-block w-1.5 h-3 md:w-2 md:h-4 bg-primary animate-blink ml-1"></span>
                  </span>
                </div>
              )}
            </div>

            {/* Форма ввода */}
            <form onSubmit={handleSubmit} className="p-4 md:p-6">
              <div className="space-y-3 md:space-y-5">
                <div>
                  <label className="block text-gray-400 text-xs font-mono mb-1 md:mb-2 tracking-wider">
                    [INPUT_NAME]
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setActiveField("name")}
                      onBlur={() => setActiveField(null)}
                      className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 text-gray-200 font-mono text-sm md:text-base transition-all"
                      required
                      placeholder="> enter your name"
                    />
                    {activeField === "name" && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary animate-pulse"></div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs font-mono mb-1 md:mb-2 tracking-wider">
                    [INPUT_EMAIL]
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setActiveField("email")}
                      onBlur={() => setActiveField(null)}
                      className="w-full px-3 py-2 md:px-4 md:py-3 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 text-gray-200 font-mono text-sm md:text-base transition-all"
                      required
                      placeholder="> user@domain.com"
                    />
                    {activeField === "email" && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary animate-pulse"></div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs font-mono mb-1 md:mb-2 tracking-wider">
                    [INPUT_MESSAGE]
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setActiveField("message")}
                      onBlur={() => setActiveField(null)}
                      className="w-full px-3 py-2 md:px-4 md:py-4 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 text-gray-200 font-mono text-sm md:text-base transition-all"
                      required
                      placeholder="> type your message here..."
                    ></textarea>
                    {activeField === "message" && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary animate-pulse"></div>
                    )}
                  </div>
                </div>

                <div className="pt-1 md:pt-3">
                  <button
                    type="submit"
                    className={`w-full px-4 py-2 md:px-6 md:py-3 rounded-lg font-bold transition-all flex items-center justify-center font-mono text-xs md:text-sm tracking-wider ${
                      isSubmitted
                        ? "bg-green-500/10 text-green-400 border border-green-400/30"
                        : "bg-gradient-to-r from-primary/90 to-secondary/90 hover:from-primary hover:to-secondary text-gray-900 hover:shadow-neon-sm"
                    }`}
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      <span className="flex items-center">
                        <span className="inline-block w-1.5 h-3 md:w-2 md:h-4 bg-green-400 animate-blink mr-1 md:mr-2"></span>
                        {typingEffect}
                      </span>
                    ) : (
                      "> SEND_MESSAGE"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </motion.div>

          {/* Контактная информация в стиле JSON */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900/80  rounded-xl border border-gray-700 overflow-hidden shadow-lg md:shadow-2xl shadow-secondary/10 p-4 md:p-6"
          >
            <div className="flex items-center mb-4 md:mb-6">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-400 mr-1 md:mr-2 animate-pulse"></div>
              <h3 className="text-lg md:text-xl font-bold text-primary font-mono">
                contact_info.json
              </h3>
            </div>

            <div className="font-mono text-xs md:text-sm text-gray-300 overflow-auto">
              <pre className="whitespace-pre-wrap">
                {`{
  "status": "`}
                <span className="text-green-400">online</span>
                {`",
  "response_time": "`}
                <span className="text-cyan-400">&lt; 24h</span>
                {`",
  "connections": {
    "email": "`}
                <a
                  href="mailto:alexsapoffwork@gmail.com"
                  className="text-primary hover:underline"
                >
                  alexsapoffwork@gmail.com
                </a>
                {`",
    "telegram": "`}
                <a
                  href="https://t.me/everycornerismine"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-400 hover:underline"
                >
                  @everycornerismine
                </a>
                {`",
    "github": "`}
                <a
                  href="https://github.com/aicangeneratecode"
                  target="_blank"
                  rel="noopener"
                  className="text-purple-400 hover:underline"
                >
                  github.com/aicangeneratecode
                </a>
                {`",
  },
  "security": {
    "protocol": "`}
                <span className="text-green-300">encrypted</span>
                {`",
    "authentication": "`}
                <span className="text-green-300">verified</span>
                {`"
  },
  "location": {
    "timezone": "`}
                <span className="text-amber-300">UTC+3</span>
                {`",
    "coordinates": "`}
                <span className="text-gray-400">N 55.751244, E 37.618423</span>
                {`"
  }
}`}
              </pre>
            </div>

            {/* Статус соединения */}
            <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-700/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-400 mr-1 md:mr-2 animate-pulse"></div>
                  <p className="text-xs md:text-sm text-gray-400 font-mono">
                    Connection status:{" "}
                    <span className="text-green-400">active</span>
                  </p>
                </div>
                <p className="text-xs text-gray-500 font-mono hidden sm:block">
                  Last ping: {Math.floor(Math.random() * 50)}ms
                </p>
              </div>

              {/* Индикатор соединения */}
              <div className="mt-2 md:mt-4 bg-gray-800/50 rounded-full h-1.5 md:h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  style={{ width: `${90 + Math.random() * 10}%` }}
                ></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
