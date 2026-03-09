import { META } from "@/config/metadata.js";
import { Avatar } from "@/components/ui/Avatar.jsx";
import { Badge }  from "@/components/ui/Badge.jsx";
import { bandToLabel, formatDate } from "@/lib/utils.js";
import userData from "@/data/users.json";

export const metadata = META.pages.profile;

export default function ProfilePage() {
  const user = userData[0];

  return (
    <div style={{ padding: "1.5rem", maxWidth: "700px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--color-brand-navy)", marginBottom: "2rem" }}>
        👤 Profile &amp; Settings
      </h1>

      {/* Profile card */}
      <div className="card" style={{ padding: "2rem", marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "1.5rem" }}>
          <Avatar name={user.name} size={64} />
          <div>
            <h2 style={{ fontWeight: 800, fontSize: "1.25rem", color: "var(--color-brand-navy)" }}>
              {user.name}
            </h2>
            <p style={{ color: "var(--color-brand-gray)", fontSize: "0.875rem" }}>{user.email}</p>
            <Badge variant="teal" style={{ marginTop: "0.375rem" }}>
              {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
            </Badge>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          {[
            { label: "Target Band",   value: user.targetBand },
            { label: "Current Band",  value: `${user.currentBand} — ${bandToLabel(user.currentBand)}` },
            { label: "Exam Date",     value: formatDate(user.examDate) },
            { label: "Member Since",  value: formatDate(user.joinedAt) },
          ].map((row) => (
            <div key={row.label} style={{ background: "var(--color-brand-gray-light)",
              padding: "0.875rem", borderRadius: "0.5rem" }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--color-brand-gray)",
                letterSpacing: "0.06em", marginBottom: "0.25rem" }}>{row.label.toUpperCase()}</p>
              <p style={{ fontWeight: 700, color: "var(--color-brand-navy)" }}>{row.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Settings */}
      <div className="card" style={{ padding: "1.5rem" }}>
        <h3 style={{ fontWeight: 700, color: "var(--color-brand-navy)", marginBottom: "1rem" }}>
          Settings
        </h3>
        <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label style={{ display: "block", fontWeight: 600, fontSize: "0.875rem",
              color: "var(--color-brand-navy)", marginBottom: "0.375rem" }}>Full Name</label>
            <input className="input-field" defaultValue={user.name} />
          </div>
          <div>
            <label style={{ display: "block", fontWeight: 600, fontSize: "0.875rem",
              color: "var(--color-brand-navy)", marginBottom: "0.375rem" }}>Exam Date</label>
            <input className="input-field" type="date" defaultValue={user.examDate} />
          </div>
          <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start" }}>
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
