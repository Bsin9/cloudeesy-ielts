import { cn } from "@/lib/utils.js";

/**
 * @param {{ label?: string, error?: string, className?: string } & React.InputHTMLAttributes<HTMLInputElement>} props
 */
export function Input({ label, error, id, className, ...rest }) {
  return (
    <div>
      {label && (
        <label htmlFor={id} style={{ display: "block", fontSize: "0.875rem", fontWeight: 600,
          color: "var(--color-brand-navy)", marginBottom: "0.375rem" }}>
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn("input-field", error && "input-error", className)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} role="alert"
          style={{ fontSize: "0.75rem", color: "var(--color-brand-red)", marginTop: "0.25rem" }}>
          {error}
        </p>
      )}
    </div>
  );
}
