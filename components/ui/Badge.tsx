"use client";
import React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "teal" | "navy" | "gold" | "green" | "red" | "gray";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantMap: Record<BadgeVariant, string> = {
  teal:  "bg-brand-teal-pale text-brand-teal",
  navy:  "bg-brand-navy/10 text-brand-navy",
  gold:  "bg-brand-gold/15 text-brand-gold",
  green: "bg-green-50 text-green-700",
  red:   "bg-red-50 text-red-600",
  gray:  "bg-brand-gray-light text-brand-gray",
};

export function Badge({ variant = "teal", children, className }: BadgeProps) {
  return (
    <span className={cn("badge", variantMap[variant], className)}>
      {children}
    </span>
  );
}
