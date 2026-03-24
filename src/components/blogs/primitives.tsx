"use client";

import React, { useEffect, useRef, useState } from "react";

interface SceneProps {
  index: number;
  children: React.ReactNode;
  className?: string;
  compact?: boolean;
  snap?: boolean;
  scrollRoot?: React.RefObject<HTMLElement | null>;
  onVisible?: () => void;
}

export function Scene({
  index,
  children,
  className = "",
  compact = false,
  snap = false,
  scrollRoot,
  onVisible,
}: SceneProps) {
  const ref = useRef<HTMLDivElement>(null);
  const onVisibleRef = useRef(onVisible);
  onVisibleRef.current = onVisible;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const root = scrollRoot?.current ?? null;
    const obs = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          onVisibleRef.current?.();
        }
      },
      { threshold: 0.6, root },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [scrollRoot]);

  return (
    <div
      ref={ref}
      data-scene={index}
      className={`${compact ? "min-h-[60vh] py-6 md:py-12" : "min-h-screen py-20"} ${snap ? "snap-start snap-always h-screen overflow-hidden" : ""} flex flex-col items-center justify-start pt-[42vh] md:justify-center md:pt-0 px-6 relative transition-all duration-200 md:duration-500 ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-6 scale-[0.98]"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function SceneInner({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`max-w-[640px] w-full ${className}`}>{children}</div>;
}

export function Label({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`text-xs font-bold tracking-[2px] uppercase text-muted-foreground mb-3 ${className}`}
    >
      {children}
    </div>
  );
}

export function BlockBox({
  num,
  sub,
  variant,
  className = "",
  style,
}: {
  num: string;
  sub?: string;
  variant: "ok" | "new" | "dead" | "winner";
  className?: string;
  style?: React.CSSProperties;
}) {
  const variantStyles = {
    ok: "bg-blue-500/10 border-blue-500/40 text-blue-500 dark:bg-blue-400/10 dark:border-blue-400/40 dark:text-blue-400",
    new: "bg-amber-500/10 border-amber-500/50 text-amber-500 dark:bg-amber-400/10 dark:border-amber-400/50 dark:text-amber-400",
    dead: "bg-red-500/30 border-red-500 text-red-600 dark:bg-red-500/30 dark:border-red-500 dark:text-red-400",
    winner:
      "bg-emerald-500/10 border-emerald-500/50 text-emerald-500 dark:bg-emerald-400/10 dark:border-emerald-400/50 dark:text-emerald-400",
  };

  return (
    <div
      className={`w-20 h-20 rounded-xl flex flex-col items-center justify-center font-bold text-sm shrink-0 border-[1.5px] transition-all duration-500 ${variantStyles[variant]} ${className}`}
      style={style}
    >
      <span className="text-base font-bold">{num}</span>
      {sub && (
        <span className="text-[10px] opacity-60 mt-0.5 font-normal">{sub}</span>
      )}
    </div>
  );
}

export function ArrowLink({ blue = false }: { blue?: boolean }) {
  return (
    <div className="relative w-8 h-0.5 shrink-0">
      <div
        className={`w-full h-full ${
          blue ? "bg-blue-500/40 dark:bg-blue-400/40" : "bg-border"
        }`}
      />
      <div
        className={`absolute -right-px -top-1 w-0 h-0 border-y-[5px] border-y-transparent border-l-[6px] ${
          blue
            ? "border-l-blue-500/40 dark:border-l-blue-400/40"
            : "border-l-border"
        }`}
      />
    </div>
  );
}

export function Chain({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-0 overflow-x-auto py-5 ${className}`}
    >
      {children}
    </div>
  );
}

export function TxPill({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "in-block" | "waiting" | "returned" | "gone" | "safe";
}) {
  const styles = {
    "in-block":
      "bg-blue-500/15 text-blue-500 border-blue-500/30 dark:text-blue-400 dark:border-blue-400/30",
    waiting:
      "bg-gray-500/15 text-gray-500 border-gray-500/30 border-dashed dark:text-gray-400 dark:border-gray-400/30",
    returned:
      "bg-amber-500/15 text-amber-500 border-amber-500/30 dark:text-amber-400 dark:border-amber-400/30",
    gone: "bg-red-500/10 text-red-500 border-red-500/20 line-through opacity-50 dark:text-red-400 dark:border-red-400/20",
    safe: "bg-emerald-500/12 text-emerald-500 border-emerald-500/30 dark:text-emerald-400 dark:border-emerald-400/30",
  };

  return (
    <span
      className={`inline-flex items-center font-mono text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-400 ${styles[variant]}`}
    >
      {children}
    </span>
  );
}

export function Callout({
  children,
  border,
}: {
  children: React.ReactNode;
  border?: "amber" | "red" | "green";
}) {
  const borderStyle = border
    ? {
        amber: "border-l-amber-500 dark:border-l-amber-400",
        red: "border-l-red-500 dark:border-l-red-400",
        green: "border-l-emerald-500 dark:border-l-emerald-400",
      }[border] + " border-l-[3px]"
    : "";

  return (
    <div
      className={`bg-card rounded-[14px] p-4 my-2 md:p-6 md:my-8 ${borderStyle}`}
    >
      {children}
    </div>
  );
}
