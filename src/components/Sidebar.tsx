import { Link, useLocation } from "react-router-dom";
import { Archive, HardDrive, History, Settings } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
export default function Sidebar() {
    const loc = useLocation();
    const links = [
        { to: "/", icon: Archive, label: "Backup Jobs" },
        { to: "/vaults", icon: HardDrive, label: "Storage Vaults" },
        { to: "/audit", icon: History, label: "Audit Logs" },
        { to: "/settings", icon: Settings, label: "Settings" }
    ];
    return (<aside style={{ width: "var(--sidebar-width)", background: "var(--color-bg-secondary)", borderRight: "1px solid var(--color-border)", height: "100vh", position: "fixed", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "var(--space-6)", display: "flex", alignItems: "center", gap: "var(--space-3)", borderBottom: "1px solid var(--color-border)", background: "var(--color-bg-card)" }}>
            <div style={{ background: "var(--color-accent-primary)", borderRadius: "var(--radius-sm)", padding: 6, display: "flex", alignItems: "center", justifyContent: "center" }}><Archive size={20} style={{ color: "white" }} /></div>
            <strong style={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "-0.5px" }}>BackupDash</strong>
        </div>
        <nav style={{ padding: "var(--space-4)", flex: 1, display: "flex", flexDirection: "column", gap: "var(--space-1)", background: "var(--color-bg-card)" }}>
            {links.map(l => <Link key={l.to} to={l.to} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "var(--space-3)", borderRadius: "var(--radius-sm)", color: loc.pathname === l.to ? "var(--color-accent-primary)" : "var(--color-text-secondary)", background: loc.pathname === l.to ? "var(--color-accent-soft)" : "transparent", fontWeight: 500, fontSize: "14px", transition: "all var(--transition-fast)" }}><l.icon size={18} />{l.label}</Link>)}
        </nav>
        <div style={{ padding: "var(--space-4)", display: "flex", justifyContent: "flex-end", background: "var(--color-bg-card)", borderTop: "1px solid var(--color-border)" }}><ThemeToggle /></div>
    </aside>);
}
