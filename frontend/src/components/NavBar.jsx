import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center px-6 py-4 bg-white shadow">
        <div className="text-xl font-bold text-[#2a73d9]">lab2market</div>

        <div className="flex-1 flex justify-center md:justify-end gap-6 pr-6 text-gray-800">
          <Link to="/" className="font-medium hover:underline">
            Home
          </Link>
          <Link to="/contact" className="font-medium hover:underline">
            Contact
          </Link>
          {/*
            Temporarily removed links to dashboards, browsing and role-based
            navigation. These were intentionally commented out for the curated
            consultancy model and can be restored later.
          */}
        </div>

        <div className="flex gap-3">
          {/* Primary actions for consultancy mode. Handlers intentionally empty. */}
          <button
            onClick={() => {}}
            className="rounded-lg bg-[#1f66ca] px-4 py-2 text-white hover:shadow-md transform hover:scale-[1.02] transition"
          >
            Submit Technical Requirement
          </button>

          <button
            onClick={() => {}}
            className="rounded-lg bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            Join as Research Partner
          </button>
        </div>
      </nav>
    </>
  );
}
