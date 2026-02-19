import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center px-6 py-4 bg-white shadow-sm border-b border-gray-100">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
          lab2market
        </div>

        <div className="flex-1 flex justify-center gap-8 text-gray-700">
          <Link to="/" className="font-medium hover:text-blue-600 transition duration-200">
            Home
          </Link>
          <Link to="/contact" className="font-medium hover:text-blue-600 transition duration-200">
            Contact
          </Link>
          {/*
            Temporarily removed links to dashboards, browsing and role-based
            navigation. These were intentionally commented out for the curated
            consultancy model and can be restored later.
          */}
        </div>

        <div className="flex gap-3">
          {/* Primary actions for consultancy mode */}
          <button
            onClick={() => window.open('https://forms.gle/QtyzTMCSaDqtt7Nb7', '_blank')}
            className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2 text-white font-medium hover:shadow-lg transform hover:scale-105 transition duration-200"
          >
            Submit Requirement
          </button>

          <button
            onClick={() => window.open('https://forms.gle/QtyzTMCSaDqtt7Nb7', '_blank')}
            className="rounded-lg border-2 border-blue-600 px-5 py-2 text-blue-600 font-medium hover:bg-blue-50 transition duration-200"
          >
            Join as Partner
          </button>
        </div>
      </nav>
    </>
  );
}
