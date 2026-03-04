import { History, Search, Download } from "lucide-react";
import { Button, Card, Badge, Input } from "@geenius-ui/react-css";

const logs = [
    { id: "1", time: "2026-02-25 10:05:12", user: "System", action: "Backup Job Started", detail: "Job: Gitlab Config (Local-NAS)" },
    { id: "2", time: "2026-02-25 10:05:45", user: "System", action: "Backup Failed", detail: "Connection timed out to 192.168.1.100:22" },
    { id: "3", time: "2026-02-25 03:00:01", user: "System", action: "Backup Job Started", detail: "Job: Staging DB (S3-Staging)" },
    { id: "4", time: "2026-02-25 03:04:12", user: "System", action: "Backup Success", detail: "8.2 GB transferred in 4m 11s" },
    { id: "5", time: "2026-02-24 16:30:00", user: "admin@openclaw", action: "Vault Created", detail: "Added new vault: Glacier-Archive" }
];

export default function AuditLogsPage() {
    return (<div style={{ padding: "var(--space-6)", maxWidth: 1200 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <div>
                <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, display: "flex", alignItems: "center", gap: "var(--space-2)" }}><History style={{ color: "var(--color-accent-primary)" }} /> System Audit Logs</h1>
                <p style={{ color: "var(--color-text-secondary)", marginTop: 4 }}>Immutable record of all backup operations and configuration changes</p>
            </div>
            <Button variant="outline" icon={<Download size={16} />}>Export CSV</Button>
        </div>

        <Card padding="none">
            <div style={{ padding: "var(--space-3) var(--space-4)", background: "var(--color-bg-secondary)", borderBottom: "1px solid var(--color-border)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                <Search size={16} style={{ color: "var(--color-text-tertiary)" }} />
                <Input type="text" placeholder="Search logs..." style={{ border: "none", background: "transparent", boxShadow: "none", width: "100%" }} />
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
                <thead>
                    <tr style={{ borderBottom: "1px solid var(--color-border)", background: "var(--color-bg-card)" }}>
                        {["Timestamp", "User", "Action", "Details"].map(h => (
                            <th key={h} style={{ textAlign: "left", padding: "12px 16px", fontSize: "11px", textTransform: "uppercase", letterSpacing: 1, color: "var(--color-text-tertiary)", fontWeight: 600 }}>{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {logs.map(l => (
                        <tr key={l.id} style={{ borderBottom: "1px solid var(--color-border)" }}>
                            <td style={{ padding: "12px 16px", fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)", whiteSpace: "nowrap" }}>{l.time}</td>
                            <td style={{ padding: "12px 16px", fontWeight: 500 }}><Badge variant="secondary">{l.user}</Badge></td>
                            <td style={{ padding: "12px 16px", fontWeight: 600, color: l.action.includes("Failed") ? "var(--color-danger)" : l.action.includes("Success") ? "var(--color-success)" : "inherit" }}>{l.action}</td>
                            <td style={{ padding: "12px 16px", fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)" }}>{l.detail}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    </div>);
}
