import { cn } from "@/lib/utils.js";

const variantClass = {
  teal:  "badge badge-teal",
  navy:  "badge badge-navy",
  gold:  "badge badge-gold",
  red:   "badge badge-red",
  green: "badge badge-green",
  gray:  "badge badge-gray",
};

/**
 * @param {{ variant?: string, className?: string, children: React.ReactNode }} props
 */
export function Badge({ variant = "gray", className, children }) {
  return (
    <span className={cn(variantClass[variant] ?? "badge badge-gray", className)}>
      {children}
    </span>
  );
}
