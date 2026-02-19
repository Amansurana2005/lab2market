import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

/*
Dashboard page temporarily disabled for curated consultancy model.
Original dashboard views (researcher/investor/admin, chat, project creation)
are preserved in source history and can be restored when needed.
*/

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="max-w-2xl text-center">
          <h1 className="text-3xl font-semibold mb-4">Dashboards temporarily disabled</h1>
          <p className="text-gray-700 mb-6">User dashboards, chat and project creation are currently paused while we operate as a curated consultancy service. For partner access or questions, contact <a href="mailto:amansurana5454@gmail.com" className="text-blue-600">amansurana5454@gmail.com</a>.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
