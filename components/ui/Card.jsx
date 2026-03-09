import { cn } from "@/lib/utils.js";

/**
 * @param {{ hover?: boolean, padding?: string, className?: string, children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>} props
 */
export function Card({ hover = false, padding = "1.5rem", className, children, style, ...rest }) {
  return (
    <div
      className={cn("card", hover && "card-hover", className)}
      style={{ padding, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
