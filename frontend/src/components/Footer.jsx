import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-12 px-6 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
              lab2market
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Structured facilitation between industry and academic researchers. Real problems. Real expertise. Real collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-400 hover:text-blue-400 transition duration-200 font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-400 hover:text-cyan-400 transition duration-200 font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Contact & Legal</h4>
            <div className="space-y-3 text-sm">
              <p className="text-gray-400">
                <strong>Email:</strong>{" "}
                <a 
                  href="mailto:amansurana5454@gmail.com" 
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  amansurana5454@gmail.com
                </a>
              </p>
              <div className="space-y-2 text-gray-400">
                <p>
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition text-xs">
                    Terms & Conditions
                  </a>
                </p>
                <p>
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition text-xs">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          {/* Phased Rollout Note */}
          <p className="text-xs text-gray-500 text-center mb-4 leading-relaxed">
            We are gradually onboarding institutions and researchers. Some features are rolling out in phases.
          </p>

          {/* Copyright */}
          <p className="text-xs text-gray-600 text-center font-light">
            © {new Date().getFullYear()} lab2market. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
