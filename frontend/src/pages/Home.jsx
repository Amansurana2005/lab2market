import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

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
      <section className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-bg px-6 text-center border-b border-border">
        <div className="max-w-3xl w-full mx-auto fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-4 leading-tight">
            Structured Industry–Research Collaboration
          </h1>
          <p className="text-base md:text-lg text-secondary mb-6 max-w-2xl mx-auto">
            We review technical requirements, identify relevant expertise, and facilitate structured introductions for direct engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
          <p className="text-xs text-gray-500 mt-4">Independent review. Curated alignment. Transparent process.</p>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-12 px-6 bg-white border-b border-border fade-in delay-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-2">How the Facilitation Process Works</h2>
            <p className="text-base text-secondary">A clear, structured process for credible collaboration</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="card p-4 text-center">
              <div className="step-number">01</div>
              <h3 className="text-sm font-semibold text-primary mt-2 mb-1">Structured Intake</h3>
              <p className="text-xs text-secondary">We receive technical requirements from industry and onboarding requests from researchers.</p>
            </div>
            <div className="card p-4 text-center">
              <div className="step-number">02</div>
              <h3 className="text-sm font-semibold text-primary mt-2 mb-1">Independent Review</h3>
              <p className="text-xs text-secondary">Each submission is evaluated for clarity, scope, and suitability.</p>
            </div>
            <div className="card p-4 text-center">
              <div className="step-number">03</div>
              <h3 className="text-sm font-semibold text-primary mt-2 mb-1">Curated Alignment</h3>
              <p className="text-xs text-secondary">Relevant matches are identified based on domain expertise and project requirements.</p>
            </div>
            <div className="card p-4 text-center">
              <div className="step-number">04</div>
              <h3 className="text-sm font-semibold text-primary mt-2 mb-1">Structured Introduction</h3>
              <p className="text-xs text-secondary">We facilitate formal introductions for direct discussion between both parties.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Role */}
      <section className="py-8 px-6 bg-bg border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold text-primary mb-2">Our Role</h2>
          <p className="text-sm text-secondary">We operate as an independent facilitator of industry–research collaboration. We do not function as an open marketplace. All submissions are reviewed before being shared.</p>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-12 px-6 bg-bg border-b border-border fade-in delay-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-primary mb-2">Who We Work With</h2>
            <p className="text-base text-secondary">We facilitate collaboration between credible industry partners and academic researchers.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-primary mb-2">Industry & Startups</h3>
              <ul className="list-disc pl-5 text-sm text-secondary space-y-2">
                <li>Defined technical requirements</li>
                <li>Applied research collaboration</li>
                <li>Process and product development support</li>
                <li>Structured expert identification</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-primary mb-2">Researchers & Academics</h3>
              <ul className="list-disc pl-5 text-sm text-secondary space-y-2">
                <li>Structured industry problem statements</li>
                <li>Applied collaboration opportunities</li>
                <li>Direct engagement with organizations</li>
                <li>Transparent facilitation process</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Not Direct Outreach */}
      <section className="py-12 px-6 bg-white border-b border-border fade-in delay-300">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-primary mb-2">Why Not Direct Outreach?</h2>
            <p className="text-base text-secondary">Why companies and researchers benefit from structured facilitation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-5">
              <h3 className="font-semibold text-primary mb-1">Identifying the right researcher is slow</h3>
              <p className="text-sm text-secondary">Finding credible, relevant expertise requires time and networks.</p>
            </div>
            <div className="card p-5">
              <h3 className="font-semibold text-primary mb-1">Cold outreach has low response rates</h3>
              <p className="text-sm text-secondary">Researchers are selective and may not prioritize unsolicited requests.</p>
            </div>
            <div className="card p-5">
              <h3 className="font-semibold text-primary mb-1">We pre-screen for seriousness</h3>
              <p className="text-sm text-secondary">Not all inquiries are viable. We filter and validate before sharing.</p>
            </div>
            <div className="card p-5">
              <h3 className="font-semibold text-primary mb-1">Structured introductions reduce friction</h3>
              <p className="text-sm text-secondary">We provide context and expectations for clear communication from the start.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency & Process */}
      <section className="py-12 px-6 bg-bg border-b border-border fade-in delay-400">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8">
            <h3 className="text-xl font-semibold text-primary mb-3">Transparency & Process</h3>
            <ul className="list-disc pl-5 text-sm text-secondary space-y-2">
              <li>Every submission is reviewed by our team before matching</li>
              <li>No open marketplace—no unsolicited outreach or spam</li>
              <li>Structured, transparent communication at every step</li>
              <li>Clear scope and expectations for all parties</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-6 bg-white fade-in delay-500">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-primary mb-2">Frequently Asked Questions</h2>
          </div>
          <div>
            {[
              {
                q: 'Is this an open marketplace?',
                a: 'No. All submissions are reviewed before matching.'
              },
              {
                q: 'Do you guarantee project outcomes?',
                a: 'We facilitate introductions. Execution terms are decided directly between the parties involved.'
              },
              {
                q: 'Is there a facilitation fee?',
                a: 'A structured introduction fee may apply after review.'
              }
            ].map((item, idx) => (
              <AccordionItem key={idx} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function AccordionItem({ question, answer }) {
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
