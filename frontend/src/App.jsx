
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

/*
Temporarily disabled auth provider and protected routes for curated consultancy model.
Re-enable `AuthProvider` and the commented routes when restoring full platform.
*/

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Authentication and protected routes are temporarily disabled.
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/post-problem" element={<PostProblem />} />
            <Route path="/problems" element={<ViewProblems />} />
            <Route path="/my-problems" element={<IndustryProblems />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/interested-projects" element={<InterestedProjects />} />
            <Route path="/dashboard" element={<Dashboard />} />
        */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
