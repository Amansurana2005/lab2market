import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function ForIndustry() {
  return (
    <>
      <Navbar />

      <section className="py-10 md:py-12 px-6 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-semibold text-primary mb-2">For Industry & Startups</h1>
          <p className="text-base text-text-secondary mb-4">Access credible academic expertise for your technical challenges.</p>
        </div>
      </section>

      <section className="py-8 md:py-10 px-6 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary mb-4">What You Can Submit</h2>
          <p className="text-text-secondary mb-4">We match industry with academic researchers for applied projects including:</p>
          <ul className="list-disc pl-5 text-text-secondary space-y-2 mb-4">
            <li>Process optimization challenges</li>
            <li>Product development requirements</li>
            <li>Testing and validation needs</li>
            <li>Applied R&D collaboration</li>
          </ul>
        </div>
      </section>

      <section className="py-8 md:py-10 px-6 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary mb-4">What Happens After Submission</h2>
          <div className="space-y-4">
            <div className="card p-4">
              <h3 className="font-semibold text-primary mb-2">Structured Review</h3>
              <p className="text-text-secondary text-sm">We evaluate your technical requirements for clarity, scope, and feasibility.</p>
            </div>
            <div className="card p-4">
              <h3 className="font-semibold text-primary mb-2">Researcher Shortlisting</h3>
              <p className="text-text-secondary text-sm">We identify researchers with relevant expertise and institutional capacity.</p>
            </div>
            <div className="card p-4">
              <h3 className="font-semibold text-primary mb-2">Introduction After Confirmation</h3>
              <p className="text-text-secondary text-sm">We facilitate a formal introduction with contextual background and next steps.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 px-6 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary mb-4">Expectations</h2>
          <p className="text-text-secondary mb-4">For a successful collaboration, submissions should include:</p>
          <ul className="list-disc pl-5 text-text-secondary space-y-2 mb-4">
            <li><strong>Clear scope</strong> — Specific technical problem or requirement</li>
            <li><strong>Defined objectives</strong> — What success looks like</li>
            <li><strong>Realistic timeline</strong> — Actual project schedule and milestones</li>
            <li><strong>Genuine commitment</strong> — Dedicated resource allocation and seriousness</li>
          </ul>
        </div>
      </section>

      <section className="py-8 md:py-10 px-6 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary mb-4">How We Add Value</h2>
          <p className="text-text-secondary mb-4">Rather than an open directory, we provide:</p>
          <ul className="list-disc pl-5 text-text-secondary space-y-2 mb-4">
            <li>Pre-screened researchers with verified credentials</li>
            <li>Structured matching based on domain expertise</li>
            <li>Confidentiality support (NDA facilitation)</li>
            <li>Clear introduction and communication framework</li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}

