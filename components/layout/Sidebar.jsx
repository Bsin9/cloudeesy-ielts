"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, BookOpen, PenLine, Headphones, Mic,
  BarChart2, User, FileText, Zap, LogOut, GraduationCap,
} from "lucide-react";
import { signOut } from "next-auth/react";
import { ROUTES } from "@/config/routes.js";

const NAV_ITEMS = [
  { href: ROUTES.DASHBOARD,          label: "Dashboard",  Icon: LayoutDashboard },
  { href: ROUTES.MY_COURSES,         label: "My Courses", Icon: GraduationCap   },
  { href: ROUTES.PRACTICE.READING,   label: "Reading",    Icon: BookOpen        },
  { href: ROUTES.PRACTICE.WRITING,   label: "Writing",    Icon: PenLine         },
  { href: ROUTES.PRACTICE.LISTENING, label: "Listening",  Icon: Headphones      },
  { href: ROUTES.PRACTICE.SPEAKING,  label: "Speaking",   Icon: Mic             },
  { href: ROUTES.MOCK_TEST,          label: "Mock Test",  Icon: FileText        },
  { href: ROUTES.PROGRESS,           label: "Progress",   Icon: BarChart2       },
  { href: ROUTES.PROFILE,            label: "Profile",    Icon: User            },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      aria-label="App navigation"
      style={{
        display: "flex", flexDirection: "column", width: "15rem",
        background: "#fff", borderRight: "1px solid rgba(0,0,0,0.07)",
        minHeight: "100vh", position: "sticky", top: 0,
      }}
      className="hide-mobile">

      {/* Logo */}
      <div style={{
        display: "flex", alignItems: "center", gap: "0.625rem",
        padding: "1.25rem", borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}>
        <div style={{
          width: "2rem", height: "2rem", borderRadius: "0.5rem",
          background: "var(--color-brand-teal)", display: "flex",
          alignItems: "center", justifyContent: "center", flexShrink: 0,
        }}>
          <Zap size={16} color="#fff" aria-hidden="true" />
        </div>
        <div>
          <span style={{ fontWeight: 800, fontSize: "0.9375rem", color: "var(--color-brand-navy)", lineHeight: 1 }}>
            Rise<span style={{ color: "var(--color-brand-teal)" }}>IQ</span>
          </span>
          <p style={{ fontSize: "0.6rem", color: "var(--color-brand-gray)", margin: 0, lineHeight: 1.3 }}>
            Learn. Grow. Rise.
          </p>
        </div>
      </div>

      {/* Nav links */}
      <nav aria-label="Main navigation" style={{
        flex: 1, padding: "0.75rem 0.5rem",
        display: "flex", flexDirection: "column", gap: "0.125rem",
      }}>
        {NAV_ITEMS.map(({ href, label, Icon }) => {
          const isActive = pathname === href || (href !== ROUTES.DASHBOARD && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              aria-current={isActive ? "page" : undefined}
              style={{
                display: "flex", alignItems: "center", gap: "0.625rem",
                padding: "0.5rem 0.75rem", borderRadius: "0.5rem",
                fontSize: "0.875rem", fontWeight: isActive ? 600 : 500,
                textDecoration: "none", transition: "background 0.15s, color 0.15s",
                background: isActive ? "var(--color-brand-teal-pale, #e8f8f5)" : "transparent",
                color: isActive ? "var(--color-brand-teal)" : "var(--color-brand-gray)",
              }}>
              <Icon size={16} aria-hidden="true" />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Footer info */}
      <div style={{ padding: "0.75rem 0.5rem", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        {/* Synapse Brain badge */}
        <div style={{
          padding: "0.5rem 0.75rem", borderRadius: "0.5rem",
          background: "var(--color-brand-navy)", marginBottom: "0.375rem",
          display: "flex", alignItems: "center", gap: "0.375rem",
        }}>
          <span style={{ fontSize: "0.8rem" }}>🧠</span>
          <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.7)", margin: 0 }}>
            Powered by{" "}
            <span style={{ color: "var(--color-brand-teal)", fontWeight: 600 }}>Synapse Brain</span>
          </p>
        </div>

        <div style={{
          padding: "0.625rem 0.75rem", borderRadius: "0.5rem",
          background: "var(--color-brand-gray-light)", marginBottom: "0.375rem",
        }}>
          <p style={{ fontSize: "0.7rem", color: "var(--color-brand-gray)", margin: 0 }}>IELTS target band</p>
          <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-brand-navy)", margin: 0 }}>
            7.5 · May 2026
          </p>
        </div>

        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          style={{
            display: "flex", alignItems: "center", gap: "0.625rem", width: "100%",
            padding: "0.5rem 0.75rem", borderRadius: "0.5rem", border: "none",
            background: "transparent", cursor: "pointer", fontSize: "0.875rem",
            color: "#ef4444", fontWeight: 500, fontFamily: "inherit",
          }}>
          <LogOut size={16} aria-hidden="true" /> Log Out
        </button>
      </div>
    </aside>
  );
}
