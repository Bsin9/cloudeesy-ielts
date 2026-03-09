import { Sidebar }   from "./Sidebar.jsx";
import { MobileNav } from "./MobileNav.jsx";

/**
 * @param {{ children: import("react").ReactNode }} props
 */
export function AppLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "var(--color-brand-gray-light)" }}>
      <Sidebar />
      <main
        id="main-content"
        tabIndex={-1}
        style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <div style={{ flex: 1, padding: "1.5rem", maxWidth: "80rem", width: "100%", margin: "0 auto" }}>
          {children}
        </div>
      </main>
      <MobileNav />
    </div>
  );
}
