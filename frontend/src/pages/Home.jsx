import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-white px-6 border-b border-border">
        <div className="max-w-3xl mx-auto text-center fade-in">
          <h1 className="text-4xl md:text-5xl font-semibold text-primary mb-4 leading-tight">
            Structured Industry–Research Collaboration
          </h1>
          <p className="text-base md:text-lg text-text-secondary mb-6 max-w-2xl mx-auto">
            We review technical requirements, identify relevant expertise, and facilitate structured introductions for direct engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
            <button
              onClick={() => window.open('https://forms.gle/3oXdVdDcPJASJzgL6', '_blank')}
              className="btn-primary"
            >
              Submit Technical Requirement
            </button>
            <button
              onClick={() => window.open('https://forms.gle/QtyzTMCSaDqtt7Nb7', '_blank')}
              className="btn-secondary"
            >
              Join as Research Partner
            </button>
          </div>
          <p className="text-xs text-gray-500">Independent review. Curated alignment. Transparent process.</p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-6 bg-white border-b border-border fade-in delay-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">How the Facilitation Process Works</h2>
            <p className="text-base text-text-secondary">A clear, structured process for credible collaboration</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {[
              { num: "01", title: "Structured Intake", desc: "We receive technical requirements from industry and onboarding requests from researchers." },
              { num: "02", title: "Independent Review", desc: "Each submission is evaluated for clarity, scope, and suitability." },
              { num: "03", title: "Curated Alignment", desc: "Relevant matches are identified based on domain expertise and project requirements." },
              { num: "04", title: "Structured Introduction", desc: "We facilitate formal introductions for direct discussion between both parties." }
            ].map((step, idx) => (
              <div key={idx} className="card p-4 text-center">
                <div className="step-number text-lg">{step.num}</div>
                <h3 className="text-sm font-semibold text-primary mt-2 mb-1">{step.title}</h3>
                <p className="text-xs text-text-secondary">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Role */}
      <section className="py-8 px-6 bg-white border-b border-border fade-in delay-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold text-primary mb-2">Our Role</h2>
          <p className="text-sm text-text-secondary">We operate as an independent facilitator of industry–research collaboration. We do not function as an open marketplace. All submissions are reviewed before being shared.</p>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-12 px-6 bg-white border-b border-border fade-in delay-300">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">Who We Work With</h2>
            <p className="text-base text-text-secondary">We facilitate collaboration between credible industry partners and academic researchers.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">Industry & Startups</h3>
              <ul className="list-disc pl-5 text-sm text-text-secondary space-y-2">
                <li>Defined technical requirements</li>
                <li>Applied research collaboration</li>
                <li>Process and product development support</li>
                <li>Structured expert identification</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-primary mb-3">Researchers & Academics</h3>
              <ul className="list-disc pl-5 text-sm text-text-secondary space-y-2">
                <li>Structured industry problem statements</li>
                <li>Applied collaboration opportunities</li>
                <li>Direct engagement with organizations</li>
                <li>Transparent facilitation process</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-6 bg-white fade-in delay-400">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">Frequently Asked Questions</h2>
          </div>
          <div>
            <FAQItem question="Is this an open marketplace?" answer="No. All submissions are reviewed before matching." />
            <FAQItem question="Do you guarantee project outcomes?" answer="We facilitate introductions. Execution terms are decided directly between both parties." />
            <FAQItem question="Is there a facilitation fee?" answer="A structured introduction fee may apply after review." />
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
    <div className="faq-accordion">
      <div className="faq-question" onClick={() => setOpen((s) => !s)}>
        {question}
      </div>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  );
}
