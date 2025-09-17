import React from "react";
import { motion } from "framer-motion";

const TestimonyVideo = () => {
  return (
    <section id="testimony" className="bg-purple-50 py-20">
      <motion.div
        className="max-w-3xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-purple-700 mb-6">
          Testimony
        </h2>

        {/* Section Description */}
        <p className="text-gray-700 text-lg mb-8">
          Watch the inspiring testimony of Louise Walker and hear how her ministry has impacted lives.
        </p>

        {/* Responsive, centered video */}
        <div className="relative w-full max-w-3xl mx-auto pb-[56.25%] overflow-hidden rounded-xl shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/EMqntir2fGk"
            title="I Exhale Ministry Testimony"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonyVideo;




