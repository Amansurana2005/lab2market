
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PostProblem from "./pages/PostProblem";
import ViewProblems from "./pages/ViewProblems";
import IndustryProblems from "./pages/IndustryProblems";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import EditProfile from "./components/EditProfile";
import InterestedProjects from "./components/InterestedProjects";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/post-problem" element={<PostProblem />} />
          <Route path="/problems" element={<ViewProblems />} />
          <Route path="/my-problems" element={<IndustryProblems />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/interested-projects" element={<InterestedProjects />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
