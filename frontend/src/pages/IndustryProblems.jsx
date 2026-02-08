import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import API from "../api/axios";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import EmptyState from "../components/EmptyState";
import { useNavigate } from "react-router-dom";
import SECTORS from "../constants/sectors";

export default function IndustryProblems() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState(null);

  useEffect(() => {
    if (!user || (user.role !== "investor" && user.role !== "admin")) {
      return;
    }
    fetchMyProblems();
  }, [user]);

  const fetchMyProblems = async () => {
    try {
      setLoading(true);
      const res = await API.get("/problems/mine");
      setProblems(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch problems");
    } finally {
      setLoading(false);
    }
  };

  const startEdit = (problem) => {
    setEditingId(problem._id);
    setEditForm(problem);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm(null);
  };

  const saveEdit = async () => {
    try {
      await API.put(`/problems/${editForm._id}`, {
        title: editForm.title,
        description: editForm.description,
        sector: editForm.sector,
        location: editForm.location,
        contactInfo: editForm.contactInfo,
      });
      setProblems(
        problems.map((p) => (p._id === editForm._id ? editForm : p))
      );
      setEditingId(null);
      setEditForm(null);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to save");
    }
  };

  const deleteProblem = async (id) => {
    if (!window.confirm("Delete this problem?")) return;
    try {
      await API.delete(`/problems/${id}`);
      setProblems(problems.filter((p) => p._id !== id));
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete");
    }
  };

  if (!user || (user.role !== "investor" && user.role !== "admin")) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p>Only organisations can access this page.</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">My Problems</h1>
          <p className="text-gray-600 mb-8">
            Manage problems posted to researchers
          </p>

          {error && (
            <div className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 mb-6">
              {error}
            </div>
          )}

          <button
            onClick={() => navigate("/post-problem")}
            className="mb-6 rounded-md bg-[#2a73d9] px-4 py-2 text-white font-medium hover:bg-[#1f66ca]"
          >
            + Post New Problem
          </button>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="text-gray-500">Loading...</div>
            </div>
          ) : problems.length === 0 ? (
            <EmptyState type="no_problems" actionButton={<button
                onClick={() => navigate("/post-problem")}
                className="mt-4 rounded-md bg-[#2a73d9] px-6 py-2 text-white hover:bg-[#1f66ca]"
              >
                Post Your First Problem
              </button>}
            />
          ) : (
            <div className="space-y-4">
              {problems.map((problem) =>
                editingId === problem._id ? (
                  // Edit mode
                  <div
                    key={problem._id}
                    className="rounded-lg bg-white p-6 shadow space-y-3"
                  >
                    <div>
                      <label className="block text-sm font-medium">Title</label>
                      <input
                        value={editForm.title}
                        onChange={(e) =>
                          setEditForm({ ...editForm, title: e.target.value })
                        }
                        className="w-full border rounded px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium">
                        Description
                      </label>
                      <textarea
                        value={editForm.description}
                        onChange={(e) =>
                          setEditForm({
                            ...editForm,
                            description: e.target.value,
                          })
                        }
                        className="w-full border rounded px-3 py-2"
                        rows={4}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium">
                          Sector
                        </label>
                        <select
                          value={editForm.sector}
                          onChange={(e) =>
                            setEditForm({ ...editForm, sector: e.target.value })
                          }
                          className="w-full border rounded px-3 py-2"
                        >
                          <option value="">Select</option>
                          {SECTORS.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium">
                          Location
                        </label>
                        <input
                          value={editForm.location}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              location: e.target.value,
                            })
                          }
                          className="w-full border rounded px-3 py-2"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium">
                        Contact Info
                      </label>
                      <input
                        value={editForm.contactInfo}
                        onChange={(e) =>
                          setEditForm({
                            ...editForm,
                            contactInfo: e.target.value,
                          })
                        }
                        className="w-full border rounded px-3 py-2"
                      />
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={saveEdit}
                        className="rounded-md bg-[#2a73d9] px-4 py-2 text-white text-sm font-medium hover:bg-[#1f66ca]"
                      >
                        Save
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  // View mode
                  <div
                    key={problem._id}
                    className="rounded-lg bg-white p-6 shadow"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {problem.title}
                      </h3>
                      <div className="flex gap-2">
                        <button
                          onClick={() => startEdit(problem)}
                          className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteProblem(problem._id)}
                          className="text-sm px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">{problem.description}</p>
                    <div className="flex gap-2 text-xs">
                      {problem.sector && (
                        <span className="px-2 py-1 bg-gray-100 rounded">
                          {problem.sector}
                        </span>
                      )}
                      {problem.location && (
                        <span className="px-2 py-1 bg-gray-100 rounded">
                          {problem.location}
                        </span>
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
