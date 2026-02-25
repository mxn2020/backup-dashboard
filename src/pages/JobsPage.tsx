import { Archive, Play, RefreshCw, Settings2, Plus } from "lucide-react";
const jobs = [
    { id: "1", name: "Postgres Prod DB", schedule: "@daily 02:00", lastRun: "2026-02-25 02:00", size: "42.5 GB", status: "success", vault: "S3-Prod-Backups" },
    { id: "2", name: "User Uploads", schedule: "@weekly Sun 04:00", lastRun: "2026-02-22 04:00", size: "840.1 GB", status: "success", vault: "S3-Prod-Backups" },
    { id: "3", name: "Staging DB", schedule: "@daily 03:00", lastRun: "2026-02-25 03:00", size: "8.2 GB", status: "warn", vault: "S3-Staging" },
    { id: "4", name: "Gitlab Config", schedule: "@hourly", lastRun: "2026-02-25 10:00", size: "124 MB", status: "failed", vault: "Local-NAS" },
    { id: "5", name: "Finance Reports", schedule: "@monthly 1st", lastRun: "2026-02-01 00:00", size: "1.2 GB", status: "success", vault: "Glacier-Archive" }
];
export default function JobsPage() {
    return (<div style={{ padding: "var(--space-6)", maxWidth: 1400 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <div>
                <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, display: "flex", alignItems: "center", gap: "var(--space-2)" }}><RefreshCw size={24} style={{ color: "var(--color-accent-primary)" }} /> Backup Jobs</h1>
                <p style={{ color: "var(--color-text-secondary)", marginTop: 4 }}>5 active schedules configured</p>
            </div>
            <button className="btn btn-primary"><Plus size={16} /> New Job</button>
        </div>

        <div className="card" style={{ overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "var(--space-3) var(--space-4)", background: "var(--color-bg-secondary)", borderBottom: "1px solid var(--color-border)" }}>
                <input type="text" placeholder="Filter jobs..." className="mono" style={{ border: "1px solid var(--color-border)", background: "var(--color-bg-card)", padding: "4px 8px", borderRadius: "var(--radius-sm)", fontSize: "13px", outline: "none", color: "var(--color-text-primary)" }} />
                <button className="btn btn-ghost btn-sm"><Settings2 size={16} /> View Options</button>
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
                <thead>
                    <tr style={{ borderBottom: "1px solid var(--color-border)", background: "var(--color-bg-card)" }}>
                        {["Job Name", "Schedule", "Last Run", "Size", "Vault", "Status", ""].map(h => (
                            <th key={h} style={{ textAlign: "left", padding: "12px 16px", fontSize: "11px", textTransform: "uppercase", letterSpacing: 1, color: "var(--color-text-tertiary)", fontWeight: 600 }}>{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {jobs.map(j => (
                        <tr key={j.id} style={{ borderBottom: "1px solid var(--color-border)" }}>
                            <td style={{ padding: "14px 16px", fontWeight: 600 }}><div style={{ display: "flex", alignItems: "center", gap: 8 }}><Archive size={16} style={{ color: "var(--color-text-tertiary)" }} />{j.name}</div></td>
                            <td style={{ padding: "14px 16px" }}><span className="badge badge-neutral bg-secondary">{j.schedule}</span></td>
                            <td style={{ padding: "14px 16px", fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)", fontSize: "12px" }}>{j.lastRun}</td>
                            <td style={{ padding: "14px 16px", fontFamily: "var(--font-mono)", fontWeight: 500 }}>{j.size}</td>
                            <td style={{ padding: "14px 16px", color: "var(--color-text-secondary)" }}>{j.vault}</td>
                            <td style={{ padding: "14px 16px" }}><span className={`badge ${j.status === "success" ? "badge-success" : j.status === "warn" ? "badge-warning" : "badge-danger"}`}>{j.status}</span></td>
                            <td style={{ padding: "14px 16px", textAlign: "right" }}>
                                <button className="btn btn-sm"><Play size={14} /> Run Now</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>);
}
