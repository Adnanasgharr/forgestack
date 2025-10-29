"use client";
import React, { useState } from "react";

const SubmitForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    url: "",
    category: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/submit-resource", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccess(true);
        setTimeout(() => onClose(), 1000);
      } else {
        setError(data.message || "Something went wrong. Try again!");
      }
    } catch (err) {
      setError("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="pb-4 flex justify-between gap-1 flex-col">
        <h2 className="text-xl font-semibold  text-white">Submit a Resource</h2>
        <p className="text-[#7E7E7E] text-sm">
          Submit a resource for other designers. If we like it too, we’ll
          feature it.
        </p>
      </div>

      {/* Title input */}
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        className="p-2 rounded-md bg-zinc-900 text-white border border-zinc-700 focus:outline-none  "
        required
      />

      {/* URL input */}
      <input
        type="url"
        name="url"
        value={formData.url}
        onChange={handleChange}
        placeholder="Resource link"
        className="p-2 rounded-md bg-zinc-900 text-white border border-zinc-700 focus:outline-none  "
        required
      />

      {/* Category dropdown */}
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="p-2 rounded-md bg-zinc-900 text-white border border-zinc-700 focus:outline-none  transition-colors duration-200"
        required
      >
        <option value="">Select Category</option>
        <option value="Tools" className="bg-zinc-900 hover:bg-zinc-800">
          Tools
        </option>
        <option value="Fonts" className="bg-zinc-900 hover:bg-zinc-800">
          Fonts
        </option>
        <option value="Color" className="bg-zinc-900 hover:bg-zinc-800">
          Color
        </option>
        <option value="Icons" className="bg-zinc-900 hover:bg-zinc-800">
          Icons
        </option>
        <option value="Inspiration" className="bg-zinc-900 hover:bg-zinc-800">
          Inspiration
        </option>
        <option value="Technologies" className="bg-zinc-900 hover:bg-zinc-800">
          Technologies
        </option>
        <option value="Components" className="bg-zinc-900 hover:bg-zinc-800">
          Components
        </option>
        <option value="YT Channels" className="bg-zinc-900 hover:bg-zinc-800">
          YT Channels
        </option>
      </select>

      

      {/* Submit button */}
      <button
        type="submit"
        disabled={loading}
        className={`px-4 py-2 w-1/3 rounded-md font-medium text-white transition-all duration-300 ${
          loading
            ? "bg-gray-700 cursor-not-allowed"
            : "bg-amber-500 hover:bg-amber-600"
        }`}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>

      {/* Status messages */}
      {success && (
        <p className="text-green-400 text-sm mt-2">
          ✅ Resource submitted successfully!
        </p>
      )}
      {error && <p className="text-red-400 text-sm mt-2">❌ {error}</p>}
    </form>
  );
};

export default SubmitForm;
