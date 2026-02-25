import { describe, it, expect } from "vitest"; import { render, screen } from "@testing-library/react"; import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar"; import JobsPage from "../pages/JobsPage"; import VaultsPage from "../pages/VaultsPage"; import AuditLogsPage from "../pages/AuditLogsPage";
function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }

describe("Pages", () => {
    it("Sidebar renders", () => { wrap(<Sidebar />); expect(screen.getByText("BackupDash")).toBeInTheDocument(); });
    it("JobsPage renders", () => { wrap(<JobsPage />); expect(screen.getByText("Backup Jobs")).toBeInTheDocument(); });
    it("VaultsPage renders", () => { wrap(<VaultsPage />); expect(screen.getByText("Storage Vaults")).toBeInTheDocument(); });
    it("AuditLogsPage renders", () => { wrap(<AuditLogsPage />); expect(screen.getAllByText("System Audit Logs")[0]).toBeInTheDocument(); });
});
