import { Routes, Route } from "react-router-dom";
import DefaultPage from "./pages/DefaultPage";
import LoginPage from "./pages/LoginPage";
import JobsPage from "./pages/JobsPage";
import ManageJobsPage from "./pages/ManageJobsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/manageJobs" element={<ManageJobsPage />} />
      </Routes>
    </div>
  );
}

export default App;
