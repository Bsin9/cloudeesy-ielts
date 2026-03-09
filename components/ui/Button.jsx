import { cn } from "@/lib/utils.js";

const variants = {
  primary:  "btn-primary",
  secondary:"btn-secondary",
  ghost:    "btn-ghost",
  danger:   "btn-danger",
};

const sizes = {
  sm: { padding: "0.375rem 0.875rem", fontSize: "0.8rem" },
  md: { padding: "0.625rem 1.25rem",  fontSize: "0.875rem" },
  lg: { padding: "0.875rem 1.75rem",  fontSize: "1rem" },
};

/**
 * @param {{ variant?: keyof variants, size?: keyof sizes, fullWidth?: boolean, loading?: boolean, disabled?: boolean, className?: string, children: React.ReactNode } & React.ButtonHTMLAttributes<HTMLButtonElement>} props
 */
export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled = false,
  className,
  children,
  ...rest
}) {
  return (
    <button
      className={cn(variants[variant], className)}
      style={{
        ...sizes[size],
        width: fullWidth ? "100%" : undefined,
        justifyContent: fullWidth ? "center" : undefined,
        opacity: disabled || loading ? 0.6 : 1,
        cursor: disabled || loading ? "not-allowed" : "pointer",
      }}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span className="spinner" style={{ width: "1rem", height: "1rem" }} aria-hidden />
          Loading…
        </span>
      ) : children}
    </button>
  );
}
