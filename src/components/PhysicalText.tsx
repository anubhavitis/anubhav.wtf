"use client";

import { useEffect, useRef } from "react";

const RADIUS = 45;
const STRENGTH = 14;
const EASE = 0.15;
const Y_DAMP = 0.35;

type CharState = {
  node: HTMLSpanElement;
  cx: number;
  cy: number;
  x: number;
  y: number;
};

export default function PhysicalText({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const rootRef = useRef<HTMLSpanElement>(null);
  const text = children.replace(/\s+/g, " ").trim();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const chars: CharState[] = Array.from(
      root.querySelectorAll<HTMLSpanElement>("[data-char]")
    ).map((node) => ({ node, cx: 0, cy: 0, x: 0, y: 0 }));

    const measure = () => {
      for (const c of chars) {
        c.node.style.transform = "";
      }
      for (const c of chars) {
        const r = c.node.getBoundingClientRect();
        c.cx = r.left + r.width / 2;
        c.cy = r.top + r.height / 2;
      }
    };
    measure();

    const pointer = { x: -Infinity, y: -Infinity };
    let frame = 0;

    const tick = () => {
      for (const c of chars) {
        const dx = c.cx - pointer.x;
        const dy = c.cy - pointer.y;
        const dist = Math.hypot(dx, dy);

        let tx = 0;
        let ty = 0;
        if (dist < RADIUS && dist > 0) {
          const push = (1 - dist / RADIUS) ** 2 * STRENGTH;
          tx = (dx / dist) * push;
          ty = (dy / dist) * push * Y_DAMP;
        }

        c.x += (tx - c.x) * EASE;
        c.y += (ty - c.y) * EASE;

        c.node.style.transform =
          Math.abs(c.x) < 0.01 && Math.abs(c.y) < 0.01
            ? ""
            : `translate(${c.x.toFixed(2)}px, ${c.y.toFixed(2)}px)`;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };
    const onLeave = () => {
      pointer.x = -Infinity;
      pointer.y = -Infinity;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure);
    };
  }, [text]);

  return (
    <>
      <span className="sr-only">{text}</span>
      <span
        ref={rootRef}
        className={className}
        aria-hidden="true"
        style={{ cursor: "default" }}
      >
        {text.split(/(\s+)/).map((chunk, i) =>
          /^\s+$/.test(chunk) ? (
            <span key={i}> </span>
          ) : (
            <span key={i} className="inline-block whitespace-pre">
              {Array.from(chunk).map((ch, j) => (
                <span key={j} data-char className="inline-block">
                  {ch}
                </span>
              ))}
            </span>
          )
        )}
      </span>
    </>
  );
}
