import React, { useState } from "react";

const PrayerList = () => {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    // For now, just simulate submission
    setInput("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Reset confirmation message after 3s
  };

  return (
    <section id="prayers" className="bg-orange-100 py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-purple-700 mb-6">
          Submit a Prayer
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mb-4">
          <textarea
            className="w-full p-4 rounded-lg border border-gray-300 mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your prayer..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={4}
          />
          <button
            type="submit"
            className="px-6 py-3 bg-purple-700 text-white rounded-full font-semibold hover:bg-purple-800 transition"
          >
            Submit Prayer
          </button>
        </form>

        {/* Confirmation Message */}
        {submitted && (
          <p className="text-green-700 font-semibold">
            Your prayer has been submitted. Thank you!
          </p>
        )}
      </div>
    </section>
  );
};

export default PrayerList;
