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
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-gray-600 mb-8">
            Have questions or feedback? We'd love to hear from you. Fill out the form below or email us directly at{" "}
            <a href="mailto:amansurana5454@gmail.com" className="text-blue-600 hover:underline">
              amansurana5454@gmail.com
            </a>
          </p>

          {success && (
            <div className="mb-6 rounded bg-green-50 border border-green-200 p-4 text-sm text-green-800">
              Thank you for your message. We'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border rounded px-3 py-2"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border rounded px-3 py-2"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input
                required
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full border rounded px-3 py-2"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border rounded px-3 py-2"
                rows={6}
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2a73d9] text-white py-2 rounded font-medium hover:bg-[#1f66ca] disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-blue-900 mb-2">Other ways to reach us</h2>
            <p className="text-blue-800 text-sm">
              <strong>Email:</strong>{" "}
              <a href="mailto:amansurana5454@gmail.com" className="hover:underline">
                amansurana5454@gmail.com
              </a>
            </p>
            <p className="text-blue-800 text-sm mt-2">
              We typically respond within 24 hours. For urgent matters, please mark your subject as [URGENT].
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
