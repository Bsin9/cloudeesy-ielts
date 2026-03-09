import { cn } from "@/lib/utils.js";

/**
 * @param {{ label?: string, error?: string, className?: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>} props
 */
export function Textarea({ label, error, id, className, ...rest }) {
  return (
    <div>
      {label && (
        <label htmlFor={id} style={{ display: "block", fontSize: "0.875rem", fontWeight: 600,
          color: "var(--color-brand-navy)", marginBottom: "0.375rem" }}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={cn("input-field", error && "input-error", className)}
        style={{ resize: "vertical", minHeight: "120px" }}
        aria-invalid={!!error}
        {...rest}
      />
      {error && (
        <p role="alert" style={{ fontSize: "0.75rem", color: "var(--color-brand-red)", marginTop: "0.25rem" }}>
          {error}
        </p>
      )}
    </div>
  );
}
