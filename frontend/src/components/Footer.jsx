import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6 mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-semibold mb-2">lab2market</h3>
            <p className="text-sm text-gray-400">
              Connecting industry challenges with academic expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/problems" className="hover:text-white transition">
                  Browse Problems
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-white transition">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Get in Touch</h4>
            <p className="text-sm text-gray-400 mb-2">
              Have questions? We'd like to hear from you.
            </p>
            <a
              href="mailto:amansurana5454@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition font-medium text-sm"
            >
              amansurana5454@gmail.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6">
          {/* Phased Rollout Note */}
          <p className="text-xs text-gray-500 text-center mb-3">
            We are gradually onboarding institutions and researchers. Some features are rolling out in phases.
          </p>

          {/* Copyright */}
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} lab2market. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
