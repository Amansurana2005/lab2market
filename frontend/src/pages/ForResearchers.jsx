import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function ForResearchers() {
  return (
    <>
      <Navbar />

      <section className="py-10 md:py-12 px-6 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-semibold text-primary mb-2">For Researchers & Academics</h1>
          <p className="text-base text-text-secondary mb-4">Collaborative opportunities with vetted industry partners.</p>
        </div>
      </section>

      <section className="py-8 md:py-10 px-6 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary mb-4">Types of Opportunities Shared</h2>
          <p className="text-text-secondary mb-4">We facilitate introductions for applied research and industry collaboration, including:</p>
          <ul className="list-disc pl-5 text-text-secondary space-y-2 mb-4">
            <li>Industry-funded problem statements</li>
            <li>Applied research collaborations</li>
            <li>Prototype development requests</li>
            <li>Technical advisory roles</li>
          </ul>
        </div>
      </section>

      <section className="py-8 md:py-10 px-6 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary mb-4">Our Approach</h2>
          <div className="space-y-4">
            <div className="card p-4">
              <h3 className="font-semibold text-primary mb-2">No Open Marketplace</h3>
              <p className="text-text-secondary text-sm">Opportunities are shared only with researchers whose expertise matches the requirements. No public browsing.</p>
            </div>
            <div className="card p-4">
              <h3 className="font-semibold text-primary mb-2">Review Before Sharing</h3>
              <p className="text-text-secondary text-sm">We vet all industry submissions for seriousness, scope clarity, and institutional credibility before sharing possibilities with you.</p>
            </div>
            <div className="card p-4">
              <h3 className="font-semibold text-primary mb-2">Respect for Your Time</h3>
              <p className="text-text-secondary text-sm">We pre-screen for feasibility and seriousness so you only spend time on viable collaborations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 px-6 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary mb-4">Engagement Process</h2>
          <p className="text-text-secondary mb-4">Once you register and we introduce you to an opportunity:</p>
          <ul className="list-disc pl-5 text-text-secondary space-y-2 mb-4">
            <li><strong>Direct discussion</strong> — You communicate directly with the industry partner</li>
            <li><strong>Mutual scope negotiation</strong> — Terms, timeline, and budget are decided between you and the organization</li>
            <li><strong>Confidentiality support</strong> — We can facilitate NDA execution if needed</li>
            <li><strong>Transparent process</strong> — Clear expectations and communication from the outset</li>
          </ul>
        </div>
      </section>

      <section className="py-8 md:py-10 px-6 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary mb-4">Why Register With Us</h2>
          <p className="text-text-secondary mb-4">Registration and profile creation allows us to:</p>
          <ul className="list-disc pl-5 text-text-secondary space-y-2 mb-4">
            <li>Understand your research interests and expertise</li>
            <li>Match you with appropriate industry problems</li>
            <li>Respect your availability and scope preferences</li>
            <li>Facilitate introductions that align with your career goals</li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}

