import { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import EmptyState from "../components/EmptyState";
import LoadingCard from "../components/LoadingCard";
import Toast from "../components/Toast";

export default function ViewProblems() {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [showToast, setShowToast] = useState(null);

  useEffect(() => {
    fetchProblems(page);
  }, [page]);

  const fetchProblems = async (pageNum) => {
    try {
      setLoading(true);
      setError("");
      const res = await API.get("/problems", { params: { page: pageNum, limit: 10 } });
      setProblems(res.data.data || res.data);
      setTotalPages(res.data.pages || 1);
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Failed to fetch problems";
      setError(errorMsg);
      setShowToast({ message: errorMsg, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2" id="page-title">Industry Problems</h1>
          <p className="text-gray-600 mb-8">
            Browse problems posted by industry and propose solutions
          </p>

          {error && (
            <div
              className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 mb-6"
              role="alert"
              aria-live="polite"
            >
              {error}
            </div>
          )}

          {loading ? (
            <div className="space-y-4" aria-busy="true" aria-label="Loading problems">
              {[...Array(3)].map((_, i) => (
                <LoadingCard key={i} />
              ))}
            </div>
          ) : problems.length === 0 ? (
            <div>
              <EmptyState type="no_problems" />
              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-blue-900 mb-2">How we review problems</h3>
                <p className="text-sm text-blue-800">
                  All problem statements are reviewed to ensure clarity and relevance before being visible to researchers. This helps maintain quality and respect everyone's time.
                </p>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-blue-900 mb-2">How we review problems</h3>
                <p className="text-sm text-blue-800">
                  All problem statements are reviewed to ensure clarity and relevance before being visible to researchers. This helps maintain quality and respect everyone's time.
                </p>
              </div>
              <div className="space-y-4">
                {problems.map((problem) => (
                  <button
                    key={problem._id}
                    className="rounded-lg bg-white p-6 shadow hover:shadow-md transition w-full text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => setSelectedProblem(problem)}
                    aria-label={`View details for ${problem.title}`}
                  >
                    <h3 className="text-xl font-semibold text-gray-900">
                      {problem.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      By {problem.createdBy?.name}
                    </p>
                    <p className="text-gray-700 mt-3 line-clamp-2">
                      {problem.description}
                    </p>
                    <div className="mt-3 flex gap-2 text-xs">
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
                  </button>
                ))}
              </div>
              {totalPages > 1 && (
                <div className="mt-8 flex justify-center gap-2" role="navigation" aria-label="Pagination">
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
            </div>
          )}

          {/* Problem Details Modal */}
          {selectedProblem && (
            <div
              className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              role="dialog"
              aria-labelledby="modal-title"
              aria-modal="true"
            >
              <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
                  <h2 id="modal-title" className="text-2xl font-bold text-gray-900">
                    {selectedProblem.title}
                  </h2>
                  <button
                    onClick={() => setSelectedProblem(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                    aria-label="Close dialog"
                  >
                    ✕
                  </button>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700">
                      Posted by
                    </h3>
                    <p className="text-gray-900">{selectedProblem.createdBy?.name}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-700">
                      Description
                    </h3>
                    <p className="text-gray-700 mt-1">
                      {selectedProblem.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {selectedProblem.sector && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700">
                          Sector
                        </h4>
                        <p className="text-gray-900">{selectedProblem.sector}</p>
                      </div>
                    )}
                    {selectedProblem.location && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700">
                          Location
                        </h4>
                        <p className="text-gray-900">{selectedProblem.location}</p>
                      </div>
                    )}
                  </div>

                  {selectedProblem.contactInfo && (
                    <div>
                      <h3 className="text-sm font-semibold text-gray-700">
                        Contact
                      </h3>
                      <p className="text-gray-900">{selectedProblem.contactInfo}</p>
                    </div>
                  )}

                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={() => setSelectedProblem(null)}
                      className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-gray-700 font-medium hover:bg-gray-50"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
      {showToast && (
        <Toast
          message={showToast.message}
          type={showToast.type}
          duration={3000}
        />
      )}
    </>
  );
}
