import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-[#E2E8F0]">
      <div className="text-lg font-semibold text-[#0F172A] tracking-tight" style={{letterSpacing: '-0.3px'}}>
        lab2market
      </div>
      <div className="flex items-center gap-8">
        <Link to="/" className="text-sm font-medium text-[#0F172A] hover:text-[#1D4ED8] transition">
          Home
        </Link>
        <Link to="/how-it-works" className="text-sm font-medium text-[#0F172A] hover:text-[#1D4ED8] transition">
          How It Works
        </Link>
        <Link to="/for-industry" className="text-sm font-medium text-[#0F172A] hover:text-[#1D4ED8] transition">
          For Industry
        </Link>
        <Link to="/for-researchers" className="text-sm font-medium text-[#0F172A] hover:text-[#1D4ED8] transition">
          For Researchers
        </Link>
        <Link to="/about" className="text-sm font-medium text-[#0F172A] hover:text-[#1D4ED8] transition">
          About
        </Link>
        <Link to="/contact" className="text-sm font-medium text-[#0F172A] hover:text-[#1D4ED8] transition">
          Contact
        </Link>
      </div>
    </nav>
  );
}