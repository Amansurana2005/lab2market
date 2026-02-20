import { useState } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/facilitation/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (err) {
      console.error("Contact form error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="py-16 px-6 bg-white border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-semibold text-primary mb-2">Contact Us</h1>
          <p className="text-base text-text-secondary">Questions about our facilitation process or partnership inquiries?</p>
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-6px text-green-800 text-sm">
              <div className="font-semibold mb-1">Message sent successfully</div>
              <p>We'll respond within 2 business days.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-primary mb-2">Name</label>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-border rounded-6px px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-2">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-border rounded-6px px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-2">Message</label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-border rounded-6px px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                rows={6}
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-primary mb-2">Direct Contact</h3>
            <p className="text-text-secondary">
              Email: <a href="mailto:amansurana5454@gmail.com" className="text-accent hover:underline">amansurana5454@gmail.com</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
