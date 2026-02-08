import { useEffect, useState, useContext } from "react";
import API from "../../api/axios";
import { AuthContext } from "../../context/AuthContext";
import LoadingCard from "../LoadingCard";
import Toast from "../Toast";

export default function ProjectList({ filters = {} }) {
  const { user } = useContext(AuthContext);
  const [projects, setProjects] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(null);

  useEffect(() => {
    // Only fetch all projects for investors or admins
    if (!user || (user.role !== "investor" && user.role !== "admin")) return;
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await API.get("/projects", { params: { page, limit: 10 } });
        setProjects(res.data.data || res.data);
        setTotalPages(res.data.pages || 1);
      } catch (err) {
        const errorMsg = err.response?.data?.message || "Failed to fetch projects";
        setShowToast({ message: errorMsg, type: "error" });
        console.error(err.response?.data);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, [user, page]);

  useEffect(() => {
    // basic filtering: if search inputs exist in DOM (rendered by Dashboard), read them
    const searchInput = document.getElementById("invest-search");
    const sectorCheckboxes = document.querySelectorAll(".sector-checkbox");
    const trlInput = document.getElementById("invest-trl");
    const locationInput = document.getElementById("invest-location");
    const institutionInput = document.getElementById("invest-institution");

    const applyFilters = () => {
      const s = searchInput?.value?.toLowerCase() || "";
      const selectedSectors = Array.from(sectorCheckboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);
      const trl = trlInput?.value || "All Levels";
      const loc = locationInput?.value?.toLowerCase() || "";
      const inst = institutionInput?.value?.toLowerCase() || "";

      const out = projects.filter((p) => {
        if (s) {
          const hay = `${p.title} ${p.abstract} ${
            p.sector || ""
          }`.toLowerCase();
          if (!hay.includes(s)) return false;
        }
        if (
          selectedSectors.length > 0 &&
          !selectedSectors.includes(p.sector || "")
        )
          return false;
        if (
          trl &&
          trl !== "All Levels" &&
          `TRL ${p.trl}` !== trl &&
          String(p.trl) !== trl
        )
          return false;
        if (loc && p.location && !p.location.toLowerCase().includes(loc))
          return false;
        if (
          inst &&
          p.createdBy?.institution &&
          !p.createdBy.institution.toLowerCase().includes(inst)
        )
          return false;
        return true;
      });
      setFiltered(out);
    };

    // attach simple listener to search button
    const btn = document.getElementById("invest-search-btn");
    btn?.addEventListener("click", applyFilters);

    // Also filter on checkbox change for real-time updates
    sectorCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", applyFilters);
    });

    // Listen for filter reset event
    const handleFilterApplied = () => applyFilters();
    window.addEventListener("filterApplied", handleFilterApplied);

    // initial filter
    applyFilters();

    return () => {
      btn?.removeEventListener("click", applyFilters);
      sectorCheckboxes.forEach((checkbox) => {
        checkbox.removeEventListener("change", applyFilters);
      });
      window.removeEventListener("filterApplied", handleFilterApplied);
    };
  }, [projects]);

  const expressInterest = async (id) => {
    try {
      // First, add the project to interested projects
      await API.post(`/projects/${id}/interest`);

      // Then, send a message and auto-select the chat
      const res = await API.post("/messages/express-interest", {
        projectId: id,
      });
      // Open chat and auto-select the researcher's chat
      const researcherId = res.data.researcherId;
      window.dispatchEvent(
        new CustomEvent("openChatModal", {
          detail: { researcherId },
        })
      );
      setShowToast({ message: "Interest expressed successfully!", type: "success" });
    } catch (err) {
      console.error("Error expressing interest:", err);
      const errorMsg = err.response?.data?.message || "Failed to express interest";
      setShowToast({ message: errorMsg, type: "error" });
    }
  };

  const list = filtered;

  return (
    <div className="project-grid" role="region" aria-label="Projects list" aria-busy={loading}>
      {loading && (
        <div className="space-y-4 col-span-1 md:col-span-2 lg:col-span-3" aria-label="Loading projects">
          {[...Array(3)].map((_, i) => (
            <LoadingCard key={i} />
          ))}
        </div>
      )}
      {!loading && list.map((p) => (
        <div key={p._id} className="project-card">
          <div className="project-card-media">
            {p.imageUrl ? (
              <img src={p.imageUrl} alt="Project thumbnail: {p.title}" />
            ) : (
              <div className="placeholder-img" aria-hidden="true" />
            )}
          </div>

          <div className="project-card-body">
            <h4 className="project-title">{p.title}</h4>
            <div className="project-meta">
              {p.createdBy?.name}, {p.createdBy?.affiliation}
            </div>
            <div className="project-tags">
              {p.sector && <span className="tag">{p.sector}</span>}
              {p.trl && <span className="tag">TRL {p.trl}</span>}
              {p.location && <span className="tag">{p.location}</span>}
              {p.createdBy?.institution && (
                <span className="tag">{p.createdBy.institution}</span>
              )}
            </div>
            <p className="project-desc line-clamp-3">{p.abstract}</p>

            <div className="project-actions">
              <button
                className="express-btn"
                onClick={() => expressInterest(p._id)}
              >
                Express Interest
              </button>
              <button
                className="view-btn"
                onClick={() => setSelectedProject(p)}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}

      {totalPages > 1 && (
        <div className="my-8 flex justify-center gap-2" role="navigation" aria-label="Pagination">
          <button
            onClick={() => setPage(Math.max(1, page - 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded border border-gray-300 text-gray-700 disabled:opacity-50 hover:bg-gray-50"
            aria-label="Previous page"
          >
            Previous
          </button>
          <span className="px-4 py-2 text-gray-700" aria-current="page">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 rounded border border-gray-300 text-gray-700 disabled:opacity-50 hover:bg-gray-50"
            aria-label="Next page"
          >
            Next
          </button>
        </div>
      )}

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-labelledby="project-modal-title"
          aria-modal="true"
        >
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 id="project-modal-title" className="text-2xl font-bold text-gray-900">
                {selectedProject.title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close dialog"
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Researcher Info */}
              <div className="border-b pb-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  Researcher
                </h3>
                <p className="text-gray-900 font-medium">
                  {selectedProject.createdBy?.name}
                </p>
                {selectedProject.createdBy?.institution && (
                  <p className="text-gray-600 text-sm">
                    {selectedProject.createdBy.institution}
                  </p>
                )}
              </div>

              {/* Abstract */}
              <div className="border-b pb-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  Description
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedProject.abstract}
                </p>
              </div>

              {/* Project Details Grid */}
              <div className="grid grid-cols-2 gap-4 border-b pb-4">
                {selectedProject.sector && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">
                      Sector
                    </h4>
                    <p className="text-gray-900">{selectedProject.sector}</p>
                  </div>
                )}
                {selectedProject.trl && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">
                      Technology Readiness Level
                    </h4>
                    <p className="text-gray-900">TRL {selectedProject.trl}</p>
                  </div>
                )}
                {selectedProject.location && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">
                      Location
                    </h4>
                    <p className="text-gray-900">{selectedProject.location}</p>
                  </div>
                )}
                {selectedProject.ipStatus && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">
                      IP Status
                    </h4>
                    <p className="text-gray-900">{selectedProject.ipStatus}</p>
                  </div>
                )}
              </div>

              {/* Funding */}
              {selectedProject.fundingRequired && (
                <div className="border-b pb-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">
                    Funding Required
                  </h3>
                  <p className="text-xl font-bold text-green-600">
                    ${selectedProject.fundingRequired.toLocaleString()}
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    expressInterest(selectedProject._id);
                    setSelectedProject(null);
                  }}
                  className="flex-1 rounded-md bg-[#2a73d9] px-4 py-2 text-white font-medium hover:bg-[#1f66ca]"
                >
                  Express Interest
                </button>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-gray-700 font-medium hover:bg-gray-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}      {showToast && (
        <Toast
          message={showToast.message}
          type={showToast.type}
          duration={3000}
        />
      )}    </div>
  );
}
