import { useState } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // For now, log to console and show success
      // In production, you'd send to an API endpoint that stores/emails the message
      console.log("Contact form submission:", form);
      setSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 fade-in">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Get in Touch
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Have questions about our platform or want to discuss a collaboration? We'd love to hear from you. 
              Reach out using the form below or email us directly.
            </p>
          </div>

          {success && (
            <div className="mb-8 rounded-lg bg-green-50 border-2 border-green-200 p-5 text-sm text-green-800 fade-in">
              <div className="font-semibold mb-1">✓ Message Sent Successfully</div>
              <div>Thank you for reaching out. We'll get back to you within 24 hours.</div>
            </div>
          )}

          {/* Main Form Card */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-xl border border-gray-100 p-8 shadow-lg hover:shadow-xl transition duration-300 mb-8 fade-in delay-100">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">Full Name</label>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border-1.5 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-100 transition duration-200"
                placeholder="e.g., Dr. Sarah Johnson"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">Email Address</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border-1.5 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-100 transition duration-200"
                placeholder="your@institution.edu"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">Subject</label>
              <input
                required
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full border-1.5 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-100 transition duration-200"
                placeholder="e.g., Partnership Inquiry for AI Research"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">Message</label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border-1.5 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-3 focus:ring-blue-100 transition duration-200"
                rows={6}
                placeholder="Tell us about your research, challenges, or how we can help..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.01] transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Contact Info Card */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-600 rounded-xl p-8 fade-in delay-200">
            <div className="flex items-start gap-4">
              <div className="text-3xl">💬</div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-3">Other Ways to Reach Us</h2>
                <p className="text-gray-700 mb-4">
                  <strong className="text-blue-600">Email:</strong>{" "}
                  <a 
                    href="mailto:amansurana5454@gmail.com" 
                    className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition"
                  >
                    amansurana5454@gmail.com
                  </a>
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We typically respond within <span className="font-semibold text-blue-600">24 hours</span>. 
                  For time-sensitive inquiries, please include <span className="font-semibold">[URGENT]</span> in your subject line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
