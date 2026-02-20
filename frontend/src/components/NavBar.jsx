import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-3 bg-white border-b border-[#E2E8F0]">
      <div className="text-xl font-bold text-[#0F172A] tracking-tight" style={{letterSpacing: '-0.5px'}}>
        lab2market
      </div>
      <div className="flex items-center gap-8">
        <Link to="/" className="font-medium text-[#0F172A] hover:text-[#1D4ED8] transition">
          Home
        </Link>
        <Link to="/contact" className="font-medium text-[#0F172A] hover:text-[#1D4ED8] transition">
          Contact
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => window.open('https://forms.gle/3oXdVdDcPJASJzgL6', '_blank')}
          className="btn-primary"
        >
          Submit Technical Requirement
        </button>
        <button
          onClick={() => window.open('https://forms.gle/QtyzTMCSaDqtt7Nb7', '_blank')}
          className="btn-secondary"
        >
          Join as Research Partner
        </button>
      </div>
    </nav>
  );
}
