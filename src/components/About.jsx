import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Fade-in animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const paragraphs = [
    "Having been ordained a prayer minister, the love that I have for prayer is very evident. The Most High has blessed me with the gift to 'pray without ceasing' ~ 1 Thessalonians 5:17. I am so grateful to have been entrusted with this ministry and share that gift with others.",
    "My mandate through I Exhale Prayer Surgery is to 'pray at all times in the Spirit, with all prayer and supplication. To the end, keep alert with all perseverance, making supplication for all saints' ~ Ephesians 6:18.",
    "We are living in trying times, surrounded by pain and suffering. But the Most High wants to capture the hearts, speak peace, and shine light into His people... one prayer at a time.",
    "If you are in urgent need of prayer, seeking a word from The Most High, or edification through fellowship, please don’t be shy! All walks of life are welcome!"
  ];

  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-purple-700 mb-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          About I Exhale Ministry
        </motion.h2>

        {/* Animated paragraphs */}
        {paragraphs.map((text, index) => (
          <motion.p
            key={index}
            className="text-lg text-gray-700 mb-6 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            {text}
          </motion.p>
        ))}

        {/* Founder signature */}
        <motion.p
          className="text-lg text-gray-700 mb-6 leading-relaxed mt-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: paragraphs.length * 0.3 }}
        >
          <span className="font-semibold text-purple-700">Louise</span><br />
          Founder of <span className="font-semibold text-purple-700">I Exhale Prayer Surgery</span>
        </motion.p>
      </div>
    </section>
  );
};

export default About;






