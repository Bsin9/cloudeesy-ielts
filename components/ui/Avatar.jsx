/**
 * @param {{ name: string, size?: number, src?: string }} props
 */
export function Avatar({ name, size = 36, src }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  if (src) {
    return (
      <img src={src} alt={name} width={size} height={size}
        style={{ borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
    );
  }

  return (
    <div aria-label={name} style={{
      width: size, height: size, borderRadius: "50%", flexShrink: 0,
      background: "linear-gradient(135deg, var(--color-brand-teal) 0%, var(--color-brand-navy) 100%)",
      color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
      fontWeight: 700, fontSize: size * 0.35,
    }}>
      {initials}
    </div>
  );
}
