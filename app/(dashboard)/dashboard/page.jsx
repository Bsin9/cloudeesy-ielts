import { META } from "@/config/metadata.js";
import { ROUTES } from "@/config/routes.js";
import Link from "next/link";
import progressData from "@/data/progress.json";

export const metadata = META.pages.dashboard;

const MODULE_META = [
  { id: "reading",   icon: "📖", label: "Reading",   desc: "Academic & General passages · 60 min",  href: ROUTES.PRACTICE.READING,   accent: "#0EA5E9", bg: "#0EA5E914" },
  { id: "writing",   icon: "✍️", label: "Writing",   desc: "Task 1 reports & Task 2 essays · 60 min", href: ROUTES.PRACTICE.WRITING,  accent: "#8B5CF6", bg: "#8B5CF614" },
  { id: "listening", icon: "🎧", label: "Listening", desc: "4 sections · 40 questions · 30 min",    href: ROUTES.PRACTICE.LISTENING, accent: "#F59E0B", bg: "#F59E0B14" },
  { id: "speaking",  icon: "🎤", label: "Speaking",  desc: "Parts 1, 2 & 3 · 11–14 min",          href: ROUTES.PRACTICE.SPEAKING,  accent: "#EC4899", bg: "#EC489914" },
];

const BAND_GUIDE = [
  { range: "5.0–5.5", level: "Foundation",          color: "#F59E0B" },
  { range: "6.0–6.5", level: "Intermediate",         color: "#0EA5E9" },
  { range: "7.0–7.5", level: "Upper-Intermediate",   color: "#8B5CF6" },
  { range: "8.0+",    level: "Advanced",              color: "#22C55E" },
];

export default function DashboardPage() {
  const progress = progressData;
  const moduleScores = Object.fromEntries(
    Object.entries(progress.moduleScores ?? {}).map(([mod, data]) => [mod, data.current])
  );
  const recentSessions = progress.recentSessions ?? [];

  return (
    <div style={{ padding: "1.5rem", maxWidth: "1100px", margin: "0 auto" }}>

      {/* ── Hero ── */}
      <div style={{
        background: "linear-gradient(135deg,var(--color-brand-navy) 0%,#1E3A5F 100%)",
        borderRadius: "var(--radius-lg)", padding: "2rem 2rem 1.75rem",
        marginBottom: "1.75rem", position: "relative", overflow: "hidden",
      }}>
        <div aria-hidden="true" style={{ position:"absolute",right:"-60px",top:"-60px",width:"220px",height:"220px",borderRadius:"50%",border:"40px solid rgba(255,255,255,0.05)" }} />
        <div aria-hidden="true" style={{ position:"absolute",right:"20px",bottom:"-40px",width:"120px",height:"120px",borderRadius:"50%",border:"24px solid rgba(255,255,255,0.04)" }} />
        <p style={{ fontSize:"0.78rem",fontWeight:700,letterSpacing:"0.1em",color:"rgba(255,255,255,0.5)",textTransform:"uppercase",marginBottom:"0.5rem" }}>
          IELTS Preparation Platform
        </p>
        <h1 style={{ fontSize:"1.75rem",fontWeight:900,color:"#fff",lineHeight:1.2,marginBottom:"0.75rem" }}>
          Welcome to your<br />IELTS learning dashboard
        </h1>
        <p style={{ color:"rgba(255,255,255,0.65)",fontSize:"0.9rem",maxWidth:"520px",lineHeight:1.6,marginBottom:"1.5rem" }}>
          Practice all four modules — Reading, Writing, Listening and Speaking —
          then take a timed Full Mock Test to see your estimated band score.
        </p>
        <div style={{ display:"flex",gap:"0.75rem",flexWrap:"wrap" }}>
          <Link href={ROUTES.MOCK_TEST} style={{ display:"inline-flex",alignItems:"center",gap:"0.5rem",background:"var(--color-brand-teal)",color:"#fff",fontWeight:800,fontSize:"0.9rem",padding:"0.65rem 1.25rem",borderRadius:"var(--radius-md)",textDecoration:"none",boxShadow:"0 4px 14px rgba(14,165,233,0.35)" }}>
            📝 Take Full Mock Test
          </Link>
          <Link href={ROUTES.PRACTICE.READING} style={{ display:"inline-flex",alignItems:"center",gap:"0.5rem",background:"rgba(255,255,255,0.12)",color:"#fff",fontWeight:700,fontSize:"0.9rem",padding:"0.65rem 1.25rem",borderRadius:"var(--radius-md)",textDecoration:"none",border:"1px solid rgba(255,255,255,0.2)" }}>
            Start Practising →
          </Link>
        </div>
      </div>

      <div style={{ display:"grid",gridTemplateColumns:"1fr 300px",gap:"1.5rem",alignItems:"start" }}>

        {/* ── Left column ── */}
        <div>
          {/* Module grid */}
          <h2 style={{ fontWeight:800,fontSize:"1rem",color:"var(--color-brand-navy)",marginBottom:"0.875rem" }}>Practice Modules</h2>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"0.875rem",marginBottom:"1.5rem" }}>
            {MODULE_META.map((m) => {
              const band = moduleScores[m.id];
              return (
                <Link key={m.id} href={m.href} style={{ textDecoration:"none" }}>
                  <div className="card card-hover" style={{ padding:"1.125rem 1rem",display:"flex",flexDirection:"column",gap:"0.5rem" }}>
                    <div style={{ display:"flex",alignItems:"center",gap:"0.75rem" }}>
                      <div style={{ width:"2.75rem",height:"2.75rem",borderRadius:"0.75rem",flexShrink:0,background:m.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.35rem" }}>
                        {m.icon}
                      </div>
                      <div>
                        <p style={{ fontWeight:800,fontSize:"0.9rem",color:"var(--color-brand-navy)" }}>{m.label}</p>
                        {band != null
                          ? <p style={{ fontSize:"0.75rem",color:"var(--color-brand-gray)" }}>Band <strong style={{ color:m.accent,fontWeight:800 }}>{band}</strong></p>
                          : <p style={{ fontSize:"0.72rem",color:"var(--color-brand-gray)",fontStyle:"italic" }}>Not started yet</p>
                        }
                      </div>
                    </div>
                    <p style={{ fontSize:"0.72rem",color:"var(--color-brand-gray)",paddingLeft:"3.5rem",lineHeight:1.4 }}>{m.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Mock test card */}
          <h2 style={{ fontWeight:800,fontSize:"1rem",color:"var(--color-brand-navy)",marginBottom:"0.875rem" }}>Full Mock Test</h2>
          <div style={{ background:"linear-gradient(135deg,var(--color-brand-navy) 0%,#1E3A5F 100%)",borderRadius:"var(--radius-lg)",padding:"1.5rem",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1.25rem",marginBottom:"1.5rem" }}>
            <div>
              <p style={{ fontWeight:900,color:"#fff",fontSize:"1.05rem",marginBottom:"0.35rem" }}>Simulate real exam conditions</p>
              <p style={{ color:"rgba(255,255,255,0.65)",fontSize:"0.82rem",maxWidth:"340px",lineHeight:1.55 }}>
                Reading (60 min) → Writing (60 min) → Listening (30 min) → Speaking (15 min).
                Get your estimated overall IELTS band score.
              </p>
            </div>
            <div style={{ display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"0.5rem" }}>
              <Link href={ROUTES.MOCK_TEST} className="btn-primary" style={{ fontSize:"0.9rem" }}>
                Start Mock Test →
              </Link>
              <p style={{ color:"rgba(255,255,255,0.45)",fontSize:"0.72rem" }}>⏱ ~165 minutes total</p>
            </div>
          </div>

          {/* Recent sessions (only shown if data exists) */}
          {recentSessions.length > 0 && (
            <div className="card" style={{ padding:"1.25rem" }}>
              <p style={{ fontWeight:800,fontSize:"0.875rem",color:"var(--color-brand-navy)",marginBottom:"0.875rem" }}>Recent Sessions</p>
              <div style={{ display:"flex",flexDirection:"column",gap:"0.625rem" }}>
                {recentSessions.slice(0,5).map((s) => (
                  <div key={s.id} style={{ display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.8rem" }}>
                    <div style={{ display:"flex",alignItems:"center",gap:"0.5rem" }}>
                      <span style={{ display:"inline-block",width:"8px",height:"8px",borderRadius:"50%",background:"var(--color-brand-teal)" }} />
                      <span style={{ fontWeight:600,color:"var(--color-brand-navy)",textTransform:"capitalize" }}>{s.module}</span>
                      <span style={{ color:"var(--color-brand-gray)" }}>{s.date}</span>
                    </div>
                    {s.score != null && <span style={{ fontWeight:800,color:"var(--color-brand-teal)" }}>{s.score}</span>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── Right column ── */}
        <div style={{ display:"flex",flexDirection:"column",gap:"1rem" }}>
          {/* Band guide */}
          <div className="card" style={{ padding:"1.25rem" }}>
            <p style={{ fontWeight:800,fontSize:"0.875rem",color:"var(--color-brand-navy)",marginBottom:"0.875rem" }}>IELTS Band Score Guide</p>
            <div style={{ display:"flex",flexDirection:"column",gap:"0.5rem",marginBottom:"0.875rem" }}>
              {BAND_GUIDE.map((b) => (
                <div key={b.range} style={{ display:"flex",alignItems:"center",gap:"0.75rem" }}>
                  <span style={{ width:"0.45rem",height:"0.45rem",borderRadius:"50%",background:b.color,flexShrink:0,display:"inline-block" }} />
                  <span style={{ fontWeight:700,fontSize:"0.78rem",color:b.color,minWidth:"3.5rem" }}>{b.range}</span>
                  <span style={{ fontSize:"0.78rem",color:"var(--color-brand-gray)" }}>{b.level}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize:"0.72rem",color:"var(--color-brand-gray)",lineHeight:1.5 }}>
              Most universities require Band 6.5–7.0.
              Nursing, engineering & legal bodies typically require 7.0–8.0.
            </p>
          </div>

          {/* How it works */}
          <div className="card" style={{ padding:"1.25rem" }}>
            <p style={{ fontWeight:800,fontSize:"0.875rem",color:"var(--color-brand-navy)",marginBottom:"1rem" }}>How it works</p>
            <ol style={{ listStyle:"none",margin:0,padding:0,display:"flex",flexDirection:"column",gap:"0.875rem" }}>
              {[
                { n:"1", title:"Pick a module",         desc:"Choose any of the 4 IELTS skills and start a practice session." },
                { n:"2", title:"Complete a session",    desc:"Work through timed, scored questions just like the real exam." },
                { n:"3", title:"Review your feedback",  desc:"See your band estimate, weak areas and improvement tips." },
                { n:"4", title:"Take a Mock Test",      desc:"Sit a full timed test for your estimated overall band score." },
              ].map((s) => (
                <li key={s.n} style={{ display:"flex",gap:"0.875rem",alignItems:"flex-start" }}>
                  <div style={{ width:"1.75rem",height:"1.75rem",borderRadius:"50%",flexShrink:0,background:"var(--color-brand-teal)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"0.8rem" }}>{s.n}</div>
                  <div>
                    <p style={{ fontWeight:700,fontSize:"0.82rem",color:"var(--color-brand-navy)",marginBottom:"0.2rem" }}>{s.title}</p>
                    <p style={{ fontSize:"0.75rem",color:"var(--color-brand-gray)",lineHeight:1.5 }}>{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

      </div>
    </div>
  );
}
