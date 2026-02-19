import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior for in-page navigation
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-hero-gradient px-6 text-center relative overflow-hidden">
        <div className="max-w-4xl text-white relative z-10 fade-in">
          <div className="badge blue mb-4 inline-block">Industry-Academia Partnership</div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Connecting Industry Problems with Academic Expertise
          </h1>

          <p className="mt-6 text-lg md:text-xl text-blue-50 leading-relaxed max-w-3xl mx-auto">
            Structured and curated collaboration between MSMEs, startups, and researchers. Solve real-world challenges with cutting-edge academic research.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://forms.gle/QtyzTMCSaDqtt7Nb7', '_blank')}
              className="px-8 py-3 text-lg rounded-lg bg-white text-[#1f66ca] font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300"
            >
              Submit Technical Requirement
            </button>

            <button
              onClick={() => window.open('https://forms.gle/QtyzTMCSaDqtt7Nb7', '_blank')}
              className="px-8 py-3 text-lg rounded-lg bg-white/20 backdrop-blur-sm border-2 border-white text-white font-semibold hover:bg-white/30 transition duration-300"
            >
              Join as Research Partner
            </button>
          </div>

          <p className="mt-6 text-sm text-blue-50 opacity-80">Trusted by leading institutions and innovative companies</p>
        </div>
      </section>

      {/* Process / 3 Steps */}
      <section className="py-16 px-6 bg-white fade-in delay-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="badge green inline-block mb-3">How It Works</div>
            <h2>Our Three-Step Process</h2>
            <p className="text-lg text-gray-600 mt-3">A structured approach to meaningful collaboration</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="card p-8 fade-in delay-150">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Submit Your Requirement</h3>
              <p className="text-gray-600">Provide a clear, detailed problem statement with technical requirements and desired outcomes.</p>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm text-blue-700 font-medium">
                ✓ 5-10 min setup
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden sm:flex items-center justify-center fade-in delay-150">
              <div className="text-3xl text-gray-300">→</div>
            </div>

            {/* Step 2 */}
            <div className="card p-8 fade-in delay-200">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Expert Review & Matching</h3>
              <p className="text-gray-600">Our team evaluates the problem and identifies the most suitable researchers and institutions.</p>
              <div className="mt-4 p-3 bg-green-50 rounded-lg text-sm text-green-700 font-medium">
                ✓ 3-7 days review
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden sm:flex items-center justify-center fade-in delay-200">
              <div className="text-3xl text-gray-300">→</div>
            </div>

            {/* Step 3 */}
            <div className="card p-8 fade-in delay-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Structured Collaboration</h3>
              <p className="text-gray-600">Facilitated introductions and collaboration framework for productive partnerships.</p>
              <div className="mt-4 p-3 bg-purple-50 rounded-lg text-sm text-purple-700 font-medium">
                ✓ Ongoing support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-50 fade-in delay-200">
        <div className="max-w-4xl mx-auto">
          <div className="card p-10 border-l-4 border-l-blue-500">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">✓ Quality & Transparency</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              All problem statements are reviewed to ensure clarity and relevance before being shared with researchers. This helps maintain quality and respect everyone's time. We believe in transparent communication and structured processes.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Curated Matching</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Verified Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span>Clear Scope</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Benefits Section */}
      <section className="py-16 px-6 bg-white fade-in delay-300">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2>Why Partner With Us</h2>
            <p className="text-lg text-gray-600 mt-3">Industry and academia together, stronger.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For Industry */}
            <div className="card p-8 fade-in delay-300">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold mb-4">For Industry & Startups</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-1">→</span>
                  <span>Access world-class academic expertise without building in-house R&D</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-1">→</span>
                  <span>Flexible collaboration models (consultancy, projects, sponsored research)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-1">→</span>
                  <span>Structured process that respects your IP and timeline</span>
                </li>
              </ul>
            </div>

            {/* For Researchers */}
            <div className="card p-8 fade-in delay-350">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-4">For Researchers & Academics</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold mt-1">→</span>
                  <span>Discover real-world industry problems aligned with your research</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold mt-1">→</span>
                  <span>Opportunities for consultancy, projects, and sponsored research</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold mt-1">→</span>
                  <span>Scale your research impact beyond publications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
