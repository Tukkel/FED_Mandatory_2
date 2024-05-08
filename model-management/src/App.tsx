import { Routes, Route, Navigate } from "react-router-dom";
import DefaultPage from "./pages/DefaultPage";
import LoginPage from "./pages/LoginPage";
import JobsPage from "./pages/JobsPage";
import ManageJobsPage from "./pages/ManageJobsPage";

function ProtectedModelPage() {
  const isAuthenticated = localStorage.getItem("role") === "Model";
  return isAuthenticated ? <JobsPage /> : <Navigate to="/login" />;
}

function ProtectedManagerPage() {
  const isAuthenticated = localStorage.getItem("role") === "Manager";
  return isAuthenticated ? <ManageJobsPage /> : <Navigate to="/login" />;
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/jobs" element={<ProtectedModelPage />} />
        <Route path="/manageJobs" element={<ProtectedManagerPage />} />
      </Routes>
    </div>
  );
}

export default App;
