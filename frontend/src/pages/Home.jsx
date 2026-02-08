import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Home() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-[#2a73d9] px-6 text-center">
        <div className="max-w-4xl text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Connecting Industry Problems with Academic Expertise
          </h1>

          <p className="mt-4 text-base md:text-lg text-blue-100">
            A platform that helps organisations collaborate with researchers to
            solve real-world technical challenges.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            {!user && (
              <Link
                to="/post-problem"
                className="inline-block rounded-xl bg-white px-6 py-2 text-[#1363d4] font-medium"
              >
                Post a Problem
              </Link>
            )}

            {!user && (
              <Link
                to="/signup"
                className="inline-block rounded-xl bg-transparent border border-white px-6 py-2 text-white font-medium"
              >
                Join as a Researcher
              </Link>
            )}

            {user && (
              <Link
                to="/dashboard"
                className="inline-block rounded-xl bg-white px-6 py-2 text-[#1363d4] font-medium"
              >
                Go to Dashboard
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 text-center">
            Who is this for
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-medium">For Industry</h3>
              <p className="mt-2 text-sm text-gray-700">MSMEs, startups, product teams</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>• Solve technical or process challenges</li>
                <li>• Access academic expertise without building in-house R&amp;D</li>
                <li>• Flexible collaboration: discussion, consultancy, projects</li>
              </ul>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-medium">For Researchers &amp; Professors</h3>
              <p className="mt-2 text-sm text-gray-700">Academic researchers and faculty</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>• Discover real industry problems</li>
                <li>• Apply research beyond publications</li>
                <li>• Work on consultancy or sponsored projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problem statement */}
      <section className="py-10 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700">
            Industry–academia collaboration in India is often limited, informal,
            and hard to access. This platform simplifies and formalises that
            connection so organisations and researchers can work together with
            clarity and trust.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-gray-900">How it works</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium">1. Post a problem</h4>
              <p className="text-sm text-gray-600 mt-2">Industry posts a clear technical problem.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium">2. Researchers respond</h4>
              <p className="text-sm text-gray-600 mt-2">Researchers submit proposals or suggestions.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium">3. Collaborate securely</h4>
              <p className="text-sm text-gray-600 mt-2">Work together with clear scope and expectations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Collaboration */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-gray-900">Areas of collaboration</h3>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-gray-700">
            <div>Materials &amp; Manufacturing</div>
            <div>Mechanical &amp; Automation</div>
            <div>Energy &amp; Sustainability</div>
            <div>Chemical &amp; Process Engineering</div>
            <div>Biotechnology &amp; Food Tech</div>
            <div>Electronics &amp; Embedded Systems</div>
            <div>Testing &amp; Prototyping</div>
          </div>
        </div>
      </section>

      {/* Trust & Transparency */}
      <section className="py-10 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-gray-900">Trust &amp; transparency</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="p-4 border rounded-lg">Verified profiles</div>
            <div className="p-4 border rounded-lg">Secure communication</div>
            <div className="p-4 border rounded-lg">NDA-based information sharing</div>
            <div className="p-4 border rounded-lg">Clear project scope</div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-lg font-semibold text-gray-900">Our vision</h3>
          <p className="mt-3 text-sm text-gray-700">
            To build a reliable bridge between research and industry across India,
            making technical collaboration straightforward, transparent, and impactful.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
