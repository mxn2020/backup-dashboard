import { HardDrive, Cloud, Server } from "lucide-react";
const vaults = [
    { id: "1", name: "S3-Prod-Backups", type: "AWS S3", used: "882.6 GB", limit: "2 TB", icon: Cloud, color: "#F59E0B" },
    { id: "2", name: "S3-Staging", type: "AWS S3", used: "8.2 GB", limit: "100 GB", icon: Cloud, color: "#F59E0B" },
    { id: "3", name: "Local-NAS", type: "NFS Mount", used: "124 MB", limit: "500 GB", icon: Server, color: "#3B82F6" },
    { id: "4", name: "Glacier-Archive", type: "AWS Glacier", used: "1.2 GB", limit: "Unlimited", icon: HardDrive, color: "#10B981" }
];
export default function VaultsPage() {
    return (<div style={{ padding: "var(--space-6)", maxWidth: 1200 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, display: "flex", alignItems: "center", gap: "var(--space-2)" }}><HardDrive style={{ color: "var(--color-accent-primary)" }} /> Storage Vaults</h1>
            <button className="btn btn-primary">Add Vault</button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "var(--space-4)" }}>
            {vaults.map(v => (
                <div key={v.id} className="card" style={{ padding: "var(--space-5)" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-4)" }}>
                        <div style={{ padding: 8, background: "var(--color-bg-secondary)", borderRadius: "var(--radius-sm)" }}><v.icon size={20} style={{ color: v.color }} /></div>
                        <div>
                            <h3 style={{ fontWeight: 600 }}>{v.name}</h3>
                            <div style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>{v.type}</div>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontFamily: "var(--font-mono)", marginBottom: "var(--space-2)" }}>
                        <span>Used: <strong style={{ color: "var(--color-text-primary)" }}>{v.used}</strong></span>
                        <span style={{ color: "var(--color-text-secondary)" }}>Limit: {v.limit}</span>
                    </div>
                    <div style={{ height: 6, background: "var(--color-bg-secondary)", borderRadius: 999, overflow: "hidden" }}>
                        <div style={{ height: "100%", width: `${v.limit === "Unlimited" ? 5 : (parseFloat(v.used) / parseFloat(v.limit) / (v.limit.includes("TB") ? 1024 : 1)) * 100}%`, background: "var(--color-accent-primary)" }}></div>
                    </div>
                </div>
            ))}
        </div>
    </div>);
}
