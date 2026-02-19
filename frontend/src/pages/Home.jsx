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
          <div className="badge blue mb-4 inline-block">Facilitated Industry–Research Collaboration</div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Structured Industry–Research Collaboration for Real Technical Problems
          </h1>

          <p className="mt-6 text-lg md:text-xl text-blue-50 leading-relaxed max-w-3xl mx-auto">
            We review every requirement, identify suitable researchers, and facilitate structured introductions within 3–7 days.
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
              <h3 className="text-xl font-semibold mb-3">Submit Structured Requirement</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Provide a clear technical problem statement with expected outcomes and constraints.</p>
            </div>

            {/* Arrow */}
            <div className="hidden sm:flex items-center justify-center fade-in delay-150">
              <div className="text-3xl text-gray-300">→</div>
            </div>

            {/* Step 2 */}
            <div className="card p-8 fade-in delay-200">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Review & Curated Matching</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Our team evaluates the requirement and shortlists relevant researchers based on expertise and suitability.</p>
              <div className="mt-4 p-3 bg-green-50 rounded-lg text-xs text-green-700 font-medium">
                ✓ 3–7 days review
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden sm:flex items-center justify-center fade-in delay-200">
              <div className="text-3xl text-gray-300">→</div>
            </div>

            {/* Step 3 */}
            <div className="card p-8 fade-in delay-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Structured Introduction</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We facilitate a formal introduction so both parties can directly discuss scope, timelines, and engagement terms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Transparency */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-50 fade-in delay-200">
        <div className="max-w-4xl mx-auto">
          <div className="card p-10 border-l-4 border-l-blue-500">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">✓ Quality & Transparency</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              All submissions are reviewed before being shared. We maintain structured communication, transparent processes, and respect for both industry and academic stakeholders.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-gray-700">Curated Matching</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-gray-700">Verified Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-gray-700">Clear Scope</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Not Direct Outreach */}
      <section className="py-16 px-6 bg-white fade-in delay-300">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2>Why Not Direct Outreach?</h2>
            <p className="text-lg text-gray-600 mt-3">The hidden challenges companies face when contacting researchers directly</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4 fade-in delay-300">
              <div className="text-3xl text-blue-500 flex-shrink-0">→</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Identifying the right researcher takes time</h3>
                <p className="text-gray-600 text-sm">Finding specialists in your domain requires extensive research and networking.</p>
              </div>
            </div>

            <div className="flex gap-4 fade-in delay-350">
              <div className="text-3xl text-blue-500 flex-shrink-0">→</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Cold outreach often results in low response</h3>
                <p className="text-gray-600 text-sm">Researchers receive multiple inquiries daily and may not prioritize unsolicited requests.</p>
              </div>
            </div>

            <div className="flex gap-4 fade-in delay-400">
              <div className="text-3xl text-blue-500 flex-shrink-0">→</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">We pre-screen submissions to ensure seriousness</h3>
                <p className="text-gray-600 text-sm">Not all inquiries are well-scoped or viable. We filter and validate before sharing.</p>
              </div>
            </div>

            <div className="flex gap-4 fade-in delay-450">
              <div className="text-3xl text-blue-500 flex-shrink-0">→</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Structured introductions reduce friction</h3>
                <p className="text-gray-600 text-sm">We provide context, expectations, and facilitate clearer communication from the start.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-50 fade-in delay-400">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2>Why Partner With Us</h2>
            <p className="text-lg text-gray-600 mt-3">Clear value for both industry and academia</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For Industry */}
            <div className="card p-8 fade-in delay-450">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">For Industry & Startups</h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-0.5">•</span>
                  <span>Structured expert identification without long-term hiring commitment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-0.5">•</span>
                  <span>Reduced discovery time — we handle researcher vetting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-0.5">•</span>
                  <span>NDA-supported introductions and formal engagement terms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-0.5">•</span>
                  <span>Flexible collaboration models (consultancy, projects, research)</span>
                </li>
              </ul>
            </div>

            {/* For Researchers */}
            <div className="card p-8 fade-in delay-500">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">For Researchers & Academics</h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold mt-0.5">•</span>
                  <span>Access to real industry problems aligned with your research</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold mt-0.5">•</span>
                  <span>Curated serious requests only — no low-quality inquiries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold mt-0.5">•</span>
                  <span>Direct engagement with industry decision-makers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold mt-0.5">•</span>
                  <span>Transparent facilitation process with clear expectations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-white fade-in delay-500">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="card p-6 fade-in delay-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Is this an open marketplace?</h3>
              <p className="text-gray-700 text-sm">No. All submissions are reviewed before matching. We maintain a curated platform to ensure quality for both parties.</p>
            </div>

            {/* FAQ 2 */}
            <div className="card p-6 fade-in delay-550">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you guarantee project success?</h3>
              <p className="text-gray-700 text-sm">We facilitate structured introductions and initial discussions. Final engagement terms, scope, and success metrics are decided directly by both parties.</p>
            </div>

            {/* FAQ 3 */}
            <div className="card p-6 fade-in delay-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Is there a facilitation fee?</h3>
              <p className="text-gray-700 text-sm">A structured introduction fee may apply after review and matching. Details will be communicated during the process.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
