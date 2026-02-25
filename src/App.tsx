import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import JobsPage from "./pages/JobsPage";
import VaultsPage from "./pages/VaultsPage";
import AuditLogsPage from "./pages/AuditLogsPage";

export default function App() {
  return (<BrowserRouter>
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ marginLeft: "var(--sidebar-width)", flex: 1, minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<JobsPage />} />
          <Route path="/vaults" element={<VaultsPage />} />
          <Route path="/audit" element={<AuditLogsPage />} />
          <Route path="/settings" element={<JobsPage />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>);
}
