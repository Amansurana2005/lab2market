import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-6">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold mb-2 tracking-tight">lab2market</h3>
            <p className="text-xs text-gray-200 max-w-xs leading-relaxed">
              Institutional facilitation for industry–research collaboration. No open marketplace. No unsolicited outreach. Credible, structured, and transparent process.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold mb-3 uppercase tracking-wide text-gray-300">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="text-gray-200 hover:text-accent transition font-medium">Home</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-200 hover:text-accent transition font-medium">Contact</Link>
              </li>
            </ul>
          </div>
          {/* Contact & Legal */}
          <div>
            <h4 className="text-xs font-semibold mb-3 uppercase tracking-wide text-gray-300">Contact</h4>
            <div className="space-y-2 text-xs">
              <p>
                <span className="font-medium">Email:</span> <a href="mailto:amansurana5454@gmail.com" className="text-accent hover:underline">amansurana5454@gmail.com</a>
              </p>
              <div className="flex gap-4 mt-2">
                <a href="#" className="text-gray-300 hover:text-accent transition">Terms</a>
                <a href="#" className="text-gray-300 hover:text-accent transition">Privacy</a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 mt-6">
          <p className="text-xs footer-note text-center mb-2">We are gradually onboarding institutions and researchers. Some features are rolling out in phases.</p>
          <p className="text-xs text-gray-400 text-center">© {new Date().getFullYear()} lab2market. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
