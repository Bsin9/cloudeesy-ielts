"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap } from "lucide-react";
import { ROUTES } from "@/config/routes.js";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = usePathname();
  const isLanding = path === "/";

  const navStyle = (base) => ({
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    fontSize: "0.875rem",
    fontWeight: 500,
    textDecoration: "none",
    transition: "color 0.15s, background 0.15s",
    ...(isLanding
      ? { color: "rgba(255,255,255,0.8)" }
      : { color: "var(--color-brand-gray)" }),
    ...base,
  });

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 40,
      borderBottom: isLanding ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.08)",
      background: isLanding ? "var(--color-brand-navy)" : "#fff",
      boxShadow: isLanding ? "none" : "0 1px 4px rgba(0,0,0,0.06)",
    }}>
      <div style={{
        maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem",
        display: "flex", alignItems: "center", justifyContent: "space-between", height: "4rem",
      }}>
        {/* Logo */}
        <Link href="/" aria-label="RiseIQ IELTS — Home"
          style={{ display: "flex", alignItems: "center", gap: "0.625rem", textDecoration: "none" }}>
          <div style={{
            width: "2rem", height: "2rem", borderRadius: "0.5rem",
            background: "var(--color-brand-teal)", display: "flex", alignItems: "center",
            justifyContent: "center",
          }}>
            <Zap size={16} color="#fff" aria-hidden="true" />
          </div>
          <span style={{
            fontWeight: 800, fontSize: "1.125rem",
            color: isLanding ? "#fff" : "var(--color-brand-navy)",
          }}>
            RiseIQ <span style={{ color: "var(--color-brand-teal)" }}>IELTS</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" style={{ display: "flex", gap: "0.25rem" }}
          className="hide-mobile">
          {[
            { href: "/#modules",      label: "Modules"     },
            { href: "/#how-it-works", label: "How It Works"},
            { href: "/#pricing",      label: "Pricing"     },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={navStyle()}>{label}</Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Link href={ROUTES.LOGIN} style={navStyle()}>Log in</Link>
          <Link href={ROUTES.SIGNUP} className="btn-primary"
            style={{ fontSize: "0.875rem", padding: "0.5rem 1rem" }}>
            Start Free
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="show-mobile"
          style={{
            padding: "0.5rem", borderRadius: "0.5rem", border: "none",
            background: "transparent", cursor: "pointer",
            color: isLanding ? "#fff" : "var(--color-brand-navy)",
          }}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: "#fff", borderTop: "1px solid rgba(0,0,0,0.08)",
          padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.25rem",
        }}>
          {[
            { href: "/#modules",      label: "Modules"     },
            { href: "/#how-it-works", label: "How It Works"},
            { href: "/#pricing",      label: "Pricing"     },
            { href: ROUTES.LOGIN,     label: "Log in"      },
          ].map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)} style={{
              display: "block", padding: "0.625rem 1rem", borderRadius: "0.5rem",
              fontSize: "0.875rem", fontWeight: 500, color: "var(--color-brand-gray)",
              textDecoration: "none",
            }}>{label}</Link>
          ))}
          <Link href={ROUTES.SIGNUP} onClick={() => setMenuOpen(false)} className="btn-primary"
            style={{ textAlign: "center", marginTop: "0.5rem" }}>
            Start Free
          </Link>
        </div>
      )}
    </header>
  );
}
