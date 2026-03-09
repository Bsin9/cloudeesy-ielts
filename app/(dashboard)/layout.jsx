import { Sidebar }  from "@/components/layout/Sidebar.jsx";
import { MobileNav } from "@/components/layout/MobileNav.jsx";

export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "var(--color-brand-gray-light)" }}>
      {/* Desktop sidebar */}
      <Sidebar />

      {/* Main content */}
      <main id="main-content" style={{ flex: 1, minWidth: 0, overflowX: "hidden" }}>
        {children}
      </main>

      {/* Mobile bottom nav */}
      <MobileNav />
    </div>
  );
}
