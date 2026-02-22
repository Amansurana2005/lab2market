import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="py-10 md:py-12 px-6 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-semibold text-primary mb-2">About lab2market</h1>
          <p className="text-base text-text-secondary mb-4">Structured facilitation between industry and academic research.</p>
        </div>
      </section>

      <section className="py-8 md:py-10 px-6 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary mb-4">The Industry–Academia Gap</h2>
          <p className="text-text-secondary mb-4">Despite significant research happening in universities and highly technical challenges in industry, meaningful collaboration between these communities remains difficult. Companies struggle to find the right academic expertise. Researchers receive unsolicited outreach from companies that lack credibility or clear scope.</p>
          <p className="text-text-secondary">This mismatch wastes time, creates friction, and prevents potentially valuable collaborations from happening.</p>
        </div>
      </section>

      <section className="py-8 md:py-10 px-6 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary mb-4">Our Role</h2>
          <p className="text-text-secondary mb-4">We operate as an independent, neutral facilitator. We are not a marketplace. We are not a research directory. We are not a startup platform. We are a structured facilitation service.</p>
          <p className="text-text-secondary mb-4">Our responsibility is to:</p>
          <ul className="list-disc pl-5 text-text-secondary space-y-2 mb-4">
            <li>Review all submissions for credibility and clarity</li>
            <li>Identify domain-appropriate matches based on expertise</li>
            <li>Facilitate formal, professional introductions</li>
            <li>Maintain confidentiality and manage sensitive discussions</li>
            <li>Operate transparently about process and limitations</li>
          </ul>
        </div>
      </section>

      <section className="py-8 md:py-10 px-6 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary mb-4">What We Are Not</h2>
          <p className="text-text-secondary mb-4">To be clear about our scope:</p>
          <ul className="list-disc pl-5 text-text-secondary space-y-2 mb-4">
            <li><strong>Not a marketplace</strong> — There is no open browsing or public listing of problems or researchers</li>
            <li><strong>Not a directory</strong> — We do not provide lists of experts or research groups</li>
            <li><strong>Not a research platform</strong> — We don't manage projects, IP, or funding</li>
            <li><strong>Not a SaaS product</strong> — We are a human-centered facilitation service</li>
          </ul>
        </div>
      </section>

      <section className="py-8 md:py-10 px-6 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary mb-4">Our Focus</h2>
          <p className="text-text-secondary mb-4">We believe credible collaboration requires:</p>
          <ul className="list-disc pl-5 text-text-secondary space-y-2 mb-4">
            <li><strong>Clarity</strong> — Both parties understand scope, timeline, and expectations</li>
            <li><strong>Credibility</strong> — Submissions are evaluated for seriousness and institutional standing</li>
            <li><strong>Structure</strong> — Formal introductions, clear process, transparent communication</li>
            <li><strong>Confidentiality</strong> — Sensitive discussions are protected and NDA-ready</li>
            <li><strong>Respect</strong> — For both researchers' time and industry partners' confidentiality needs</li>
          </ul>
        </div>
      </section>

      <section className="py-8 md:py-10 px-6 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary mb-4">Long-Term Vision</h2>
          <p className="text-text-secondary">We aim to foster a culture of responsible, structured industry–research collaboration. This is a long-term vision that depends on credibility, transparency, and respect for all participants. We see lab2market as infrastructure for connecting serious industry challenges with rigorous academic expertise, without the noise, hype, or friction that characterizes unstructured outreach.</p>
        </div>
      </section>

      <Footer />
    </>
  );
}

