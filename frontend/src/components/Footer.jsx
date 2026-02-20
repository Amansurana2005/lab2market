export default function Footer() {
  return (
    <footer className="foot bg-primary text-gray-300 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-3">lab2market</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Structured facilitation of industry–research collaboration.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold mb-3 uppercase tracking-wide text-gray-300">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="/how-it-works" className="text-gray-400 hover:text-white transition">How It Works</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition">About</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold mb-3 uppercase tracking-wide text-gray-300">Contact</h4>
            <p className="text-sm text-gray-400 mb-2">
              <a href="mailto:amansurana5454@gmail.com" className="hover:text-white transition">amansurana5454@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-xs text-gray-500">
          <p className="mb-2">© {new Date().getFullYear()} lab2market. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-gray-300 transition">Terms & Conditions</a>
            <a href="#" className="hover:text-gray-300 transition">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
