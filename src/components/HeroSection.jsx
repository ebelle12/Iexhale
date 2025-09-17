import React from "react";
import Typed from "react-typed";
import Logo from "../assets/logo2.png"; // Make sure this path is correct

const HeroSection = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center h-screen text-center text-white"
      style={{
        background: "linear-gradient(to right, #87CEEB, #FFA500, #FFD700)", // sky blue → orange → yellow
      }}
    >
      {/* Logo in top-left */}
      <div className="absolute top-4 left-4">
        <img
          src={Logo}
          alt="IExhale Ministry Logo"
          className="w-16 h-16 rounded-full shadow-lg"
        />
      </div>

      {/* Animated Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
        <Typed
          strings={["Welcome to IExhale Ministry", "Pray. Connect. Grow."]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </h1>

      {/* Subheading */}
      <p className="text-xl md:text-2xl drop-shadow-md max-w-2xl">
        A place of prayer, testimony, and spiritual connection.
      </p>

      {/* Call-to-action button */}
      <a
        href="#contact"
        className="mt-8 px-6 py-3 bg-purple-700 text-white rounded-full font-semibold hover:bg-purple-800 transition"
      >
        Contact Us
      </a>
    </section>
  );
};

export default HeroSection;







