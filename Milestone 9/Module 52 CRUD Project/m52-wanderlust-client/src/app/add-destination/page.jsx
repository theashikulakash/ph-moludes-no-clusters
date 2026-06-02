"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddDestinationPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("http://localhost:5050/destination", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(destination),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to add destination.");
      }

      setSuccess("Destination added successfully.");
      e.currentTarget.reset();
      router.push("/destinations");
    } catch (err) {
      setError(err.message || "Unable to submit the form.");
    }
  };

  return (
    <div className="p-5 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Add Destination</h1>

      <div className="bg-white shadow-sm rounded-3xl p-8">
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="block">
              <span className="text-sm font-medium">Destination Name</span>
              <input
                name="destinationName"
                type="text"
                required
                className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-300"
                placeholder="Bali Paradise"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium">Country</span>
              <input
                name="country"
                type="text"
                required
                className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-300"
                placeholder="Indonesia"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium">Category</span>
              <select
                name="category"
                required
                className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-300"
                defaultValue=""
              >
                <option value="" disabled>
                  Select category
                </option>
                <option value="Beach">Beach</option>
                <option value="Mountain">Mountain</option>
                <option value="City">City</option>
                <option value="Adventure">Adventure</option>
                <option value="Cultural">Cultural</option>
                <option value="Luxury">Luxury</option>
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-medium">Price (USD)</span>
              <input
                name="price"
                type="number"
                required
                className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-300"
                placeholder="1299"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium">Duration</span>
              <input
                name="duration"
                type="text"
                required
                className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-300"
                placeholder="7 Days / 6 Nights"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium">Departure Date</span>
              <input
                name="departureDate"
                type="date"
                required
                className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-300"
              />
            </label>

            <label className="block md:col-span-2">
              <span className="text-sm font-medium">Image URL</span>
              <input
                name="imageUrl"
                type="url"
                required
                className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-300"
                placeholder="https://example.com/bali-paradise.jpg"
              />
            </label>

            <label className="block md:col-span-2">
              <span className="text-sm font-medium">Description</span>
              <textarea
                name="description"
                required
                className="mt-2 w-full min-h-[160px] rounded-3xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-300"
                placeholder="Describe the travel experience..."
              />
            </label>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}
          {success && <p className="text-sm text-green-600">{success}</p>}

          <button
            type="submit"
            className="w-full rounded-2xl bg-cyan-500 px-6 py-3 text-white transition hover:bg-cyan-600"
          >
            Add Destination
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDestinationPage;
