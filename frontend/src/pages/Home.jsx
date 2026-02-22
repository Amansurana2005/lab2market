import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center px-6 py-24 md:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="w-full max-w-[800px] mx-auto text-center fade-in relative z-10">
          <h1 className="text-3xl md:text-5xl font-medium text-[#0F172A] mb-7 leading-tight tracking-tight">
            Where Industry Problems Meet Academic Expertise
          </h1>
          <p className="text-base md:text-lg text-[#64748B] mb-10 max-w-[800px] mx-auto leading-relaxed font-normal">
            We help MSME/ Startups find the right Researchers/ Professors to solve technical challenges. From reviewing your requirement to making the right introduction, we ensure focused and meaningful collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-7">
            <button
              onClick={() => window.open("https://forms.gle/3oXdVdDcPJASJzgL6", "_blank")}
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-lg bg-[#1D4ED8] text-white shadow-sm transition-all duration-200 hover:bg-[#1E40AF] hover:shadow-md"
            >
              Submit Technical Requirement
            </button>
            <button
              onClick={() => window.open("https://forms.gle/QtyzTMCSaDqtt7Nb7", "_blank")}
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-lg border border-[#1D4ED8] text-[#1D4ED8] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-200 hover:bg-[#EFF6FF] hover:shadow-sm"
            >
              Join as Research Partner
            </button>
          </div>
          <p className="text-sm text-[#64748B] font-normal">
            Independent review. Verified experts. Clear outcomes.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0F172A] mb-2">
              How the Facilitation Process Works
            </h2>
            <p className="text-base text-[#475569] max-w-xl mx-auto">
              A clear, structured process for credible collaboration
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Structured Intake", desc: "We receive technical requirements from industry and onboarding requests from researchers." },
              { num: "02", title: "Independent Review", desc: "Each submission is evaluated for clarity, scope, and suitability." },
              { num: "03", title: "Curated Alignment", desc: "Relevant matches are identified based on domain expertise and project requirements." },
              { num: "04", title: "Structured Introduction", desc: "We facilitate formal introductions for direct discussion between both parties." },
            ].map((step, idx) => (
              <div
                key={idx}
                className={`card p-6 text-left fade-in hover:border-[#1D4ED8]/30 transition-colors ${idx === 0 ? "delay-100" : idx === 1 ? "delay-150" : idx === 2 ? "delay-200" : "delay-300"}`}
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1D4ED8]/10 text-[#1D4ED8] font-semibold text-sm mb-4">
                  {step.num}
                </span>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-2">{step.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Role */}
      <section className="py-12 px-6 bg-slate-50 border-b border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto fade-in">
          <h2 className="text-xl font-semibold text-[#0F172A] mb-3">Our Role</h2>
          <p className="text-[#475569] leading-relaxed">
            We operate as an <strong className="text-[#0F172A]">independent facilitator</strong> of industry–research collaboration. We do not function as an open marketplace. All submissions are reviewed before being shared.
          </p>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-16 px-6 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0F172A] mb-2">
              Who We Work With
            </h2>
            <p className="text-base text-[#475569]">
              We facilitate collaboration between credible industry partners and academic researchers.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="card p-6 fade-in border-l-4 border-l-[#1D4ED8]">
              <h3 className="text-lg font-semibold text-[#0F172A] mb-3">Industry & Startups</h3>
              <ul className="space-y-2 text-sm text-[#475569]">
                <li className="flex items-start gap-2">
                  <span className="text-[#1D4ED8] mt-0.5">·</span>
                  Defined technical requirements
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1D4ED8] mt-0.5">·</span>
                  Applied research collaboration
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1D4ED8] mt-0.5">·</span>
                  Process and product development support
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1D4ED8] mt-0.5">·</span>
                  Structured expert identification
                </li>
              </ul>
            </div>
            <div className="card p-6 fade-in border-l-4 border-l-[#1D4ED8]">
              <h3 className="text-lg font-semibold text-[#0F172A] mb-3">Researchers & Academics</h3>
              <ul className="space-y-2 text-sm text-[#475569]">
                <li className="flex items-start gap-2">
                  <span className="text-[#1D4ED8] mt-0.5">·</span>
                  Structured industry problem statements
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1D4ED8] mt-0.5">·</span>
                  Applied collaboration opportunities
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1D4ED8] mt-0.5">·</span>
                  Direct engagement with organizations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1D4ED8] mt-0.5">·</span>
                  Transparent facilitation process
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 fade-in">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0F172A] mb-2">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            <FAQItem
              question="Is this an open marketplace?"
              answer="No. All submissions are reviewed before matching."
            />
            <FAQItem
              question="Do you guarantee project outcomes?"
              answer="We facilitate introductions. Execution terms are decided directly between both parties."
            />
            <FAQItem
              question="Is there a facilitation fee?"
              answer="A structured introduction fee may apply after review."
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-accordion overflow-hidden">
      <button
        type="button"
        className="faq-question w-full text-left flex items-center justify-between gap-3"
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span
          className="text-[#1D4ED8] text-lg font-light transition-transform duration-200 shrink-0"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ▼
        </span>
      </button>
      <div
        className="faq-answer overflow-hidden transition-all duration-200 ease-out"
        style={{ maxHeight: open ? "300px" : "0" }}
      >
        {answer}
      </div>
    </div>
  );
}

