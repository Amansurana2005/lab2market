import { useState, useContext } from "react";
import API from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import SECTORS from "../constants/sectors";

export default function PostProblem() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    sector: "",
    location: "",
    contactInfo: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Please log in to post a problem.</p>
      </div>
    );
  }

  if (user.role !== "investor" && user.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Only organisations (industry) can post problems. Please contact support.</p>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await API.post("/problems", form);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to post problem");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Post a Problem</h2>
        {error && <div className="text-red-600 mb-3">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              required
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full border rounded px-3 py-2"
              rows={6}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium">Sector</label>
              <select
                required
                value={form.sector}
                onChange={(e) => setForm({ ...form, sector: e.target.value })}
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Select a sector</option>
                {SECTORS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Location</label>
              <input
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Contact info</label>
            <input
              value={form.contactInfo}
              onChange={(e) => setForm({ ...form, contactInfo: e.target.value })}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="flex gap-3">
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "Posting..." : "Post problem"}
            </button>
            <button type="button" className="btn-secondary" onClick={() => navigate(-1)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
