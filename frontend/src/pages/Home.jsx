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
      <section className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-hero-gradient px-6 text-center fade-in">
        <div className="max-w-4xl text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Connecting Industry Problems with Academic Expertise
          </h1>

          <p className="mt-4 text-base md:text-lg text-blue-100 leading-relaxed">
            Structured and curated collaboration between MSMEs, startups, and researchers.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => {}}
              className="inline-block rounded-xl bg-white px-6 py-2 text-[#1363d4] font-medium shadow-sm hover:scale-[1.02] transition"
            >
              Submit Technical Requirement
            </button>

            <button
              onClick={() => {}}
              className="inline-block rounded-xl bg-transparent border border-white px-6 py-2 text-white font-medium hover:bg-white/5 transition"
            >
              Join as Research Partner
            </button>
          </div>
        </div>
      </section>

      {/* Process / 3 Steps */}
      <section className="py-12 px-6 bg-white fade-in delay-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-900">How we work</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-[#1f66ca]">1</div>
              <h3 className="mt-3 font-medium">Submit your technical requirement</h3>
              <p className="mt-2 text-sm text-gray-600">Provide a concise problem statement and desired outcomes.</p>
            </div>

            <div className="p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-[#1f66ca]">2</div>
              <h3 className="mt-3 font-medium">We review and identify suitable researchers</h3>
              <p className="mt-2 text-sm text-gray-600">Our team evaluates and matches the problem to relevant expertise.</p>
            </div>

            <div className="p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-[#1f66ca]">3</div>
              <h3 className="mt-3 font-medium">We facilitate structured introductions</h3>
              <p className="mt-2 text-sm text-gray-600">We arrange focused introductions and defined next steps for collaboration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-10 px-6 bg-gray-50 fade-in delay-200">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-gray-900">Trust & transparency</h3>
          <p className="mt-4 text-gray-700">
            All problem statements are reviewed to ensure clarity and relevance before being shared with researchers. This helps maintain quality and respect everyone’s time.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
