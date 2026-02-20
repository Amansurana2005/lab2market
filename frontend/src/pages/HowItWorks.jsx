import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function HowItWorks() {
  return (
    <>
      <Navbar />

      <section className="py-16 px-6 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-semibold text-primary mb-2">Detailed Facilitation Process</h1>
          <p className="text-base text-text-secondary mb-8">How we match credible industry challenges with academic expertise.</p>
        </div>
      </section>

      <section className="py-12 px-6 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary mb-4">1. Submission & Intake</h2>
          <p className="text-text-secondary mb-4">Industry partners and researchers submit structured information through our intake forms. We require:</p>
          <ul className="list-disc pl-5 text-text-secondary space-y-2 mb-4">
            <li>Clear problem or opportunity statement</li>
            <li>Technical or domain expertise required</li>
            <li>Expected timeline and scope</li>
            <li>Contact information and institutional affiliation</li>
          </ul>
        </div>
      </section>

      <section className="py-12 px-6 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary mb-4">2. Review Criteria</h2>
          <p className="text-text-secondary mb-4">Every submission is evaluated against:</p>
          <ul className="list-disc pl-5 text-text-secondary space-y-2 mb-4">
            <li><strong>Clarity of scope</strong> — Is the problem well-defined?</li>
            <li><strong>Defined objectives</strong> — What are the expected outcomes?</li>
            <li><strong>Technical feasibility</strong> — Is the scope reasonable?</li>
            <li><strong>Serious engagement intent</strong> — Is there genuine commitment?</li>
          </ul>
        </div>
      </section>

      <section className="py-12 px-6 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary mb-4">3. Matching Methodology</h2>
          <p className="text-text-secondary mb-4">We use domain expertise tagging, institution knowledge, and publication alignment to identify suitable matches. Our methodology considers:</p>
          <ul className="list-disc pl-5 text-text-secondary space-y-2 mb-4">
            <li>Research interests and credentials</li>
            <li>Industry sector and technical requirements</li>
            <li>Institutional capacity and NDA capability</li>
            <li>Geographic and timezone compatibility</li>
          </ul>
        </div>
      </section>

      <section className="py-12 px-6 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary mb-4">4. Introduction Process</h2>
          <p className="text-text-secondary mb-4">Once a match is confirmed, we facilitate a structured email introduction that includes:</p>
          <ul className="list-disc pl-5 text-text-secondary space-y-2 mb-4">
            <li>Clear problem statement and context</li>
            <li>Researcher/industry profile and background</li>
            <li>Next steps and proposed communication</li>
            <li>Support for NDA execution if needed</li>
          </ul>
        </div>
      </section>

      <section className="py-12 px-6 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary mb-4">5. Confidentiality & NDA</h2>
          <p className="text-text-secondary mb-4">We understand that sensitive projects require confidentiality agreements. We facilitate NDA-based discussions and maintain secure communication channels for all sensitive information. Both parties can negotiate commercial terms privately after introduction.</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
