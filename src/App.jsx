import React from "react";
import { motion } from "framer-motion";
import About from "./components/About";
import TestimonyVideo from "./components/TestimonyVideo";

function App() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <div className="h-screen w-screen bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 flex flex-col items-center justify-center text-center">
        {/* Logo */}
        <motion.img
          src="/logo.png"
          alt="Logo"
          className="w-32 h-32 mb-6 rounded-full shadow-lg"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Headline */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Welcome to <span className="text-yellow-300">I Exhale</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg md:text-2xl max-w-xl mb-8 opacity-80"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          One2One Ministry of Prayer. Led by the Ruach.
        </motion.p>

        {/* Button */}
        <motion.a
          href="#about"
          className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Get Started
        </motion.a>
      </div>

      {/* About Section */}
      <About />

      {/* Testimony Video Section */}
      <TestimonyVideo />
    </div>
  );
}

export default App;










