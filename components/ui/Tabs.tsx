"use client";
import React, { createContext, useContext, useState } from "react";
import { cn } from "@/lib/utils";

interface TabsContextType {
  active: string;
  setActive: (v: string) => void;
}
const TabsCtx = createContext<TabsContextType>({ active: "", setActive: () => {} });

export function Tabs({ defaultValue, children, className }: { defaultValue: string; children: React.ReactNode; className?: string }) {
  const [active, setActive] = useState(defaultValue);
  return (
    <TabsCtx.Provider value={{ active, setActive }}>
      <div className={className}>{children}</div>
    </TabsCtx.Provider>
  );
}

export function TabsList({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div role="tablist" className={cn("flex gap-1 bg-brand-gray-light p-1 rounded-xl", className)}>
      {children}
    </div>
  );
}

export function TabsTrigger({ value, children, className }: { value: string; children: React.ReactNode; className?: string }) {
  const { active, setActive } = useContext(TabsCtx);
  const isActive = active === value;
  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={() => setActive(value)}
      className={cn(
        "flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
        isActive
          ? "bg-white text-brand-navy shadow-card font-semibold"
          : "text-brand-gray hover:text-brand-navy",
        className
      )}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, className }: { value: string; children: React.ReactNode; className?: string }) {
  const { active } = useContext(TabsCtx);
  if (active !== value) return null;
  return <div role="tabpanel" className={cn("animate-fade-in", className)}>{children}</div>;
}
