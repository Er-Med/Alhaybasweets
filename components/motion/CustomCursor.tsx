"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/lib/i18n";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLDivElement>(null);
  const [view, setView] = useState(false);
  const { copy } = useLocale();

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    root.current?.removeAttribute("hidden");
    document.body.classList.add("has-cursor");

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const cur = { ...pos };
    let frame = 0;
    let running = false;
    let viewing = false;

    const paint = () => {
      cur.x += (pos.x - cur.x) * 0.22;
      cur.y += (pos.y - cur.y) * 0.22;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${cur.x}px, ${cur.y}px, 0) translate(-50%, -50%)`;
      }
      if (Math.abs(pos.x - cur.x) > 0.2 || Math.abs(pos.y - cur.y) > 0.2) {
        frame = window.requestAnimationFrame(paint);
      } else {
        running = false;
      }
    };

    const move = (event: MouseEvent) => {
      pos.x = event.clientX;
      pos.y = event.clientY;
      const target = event.target as HTMLElement | null;
      const next = Boolean(target?.closest?.("[data-cursor='view']"));
      if (next !== viewing) {
        viewing = next;
        setView(next);
      }
      if (!running) {
        running = true;
        frame = window.requestAnimationFrame(paint);
      }
    };

    const leave = () => {
      if (dot.current) dot.current.style.opacity = "0";
    };
    const enter = () => {
      if (dot.current) dot.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    frame = window.requestAnimationFrame(paint);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
      document.body.classList.remove("has-cursor");
    };
  }, []);

  return (
    <div
      ref={root}
      hidden
      className="pointer-events-none"
      aria-hidden="true"
    >
    <div
      ref={dot}
      className="fixed top-0 left-0 z-[90]"
    >
      {view ? (
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-espresso text-ivory">
          <span className="caption text-[0.58rem] tracking-[0.22em]">{copy.collection.view}</span>
        </div>
      ) : (
        <div className="h-2 w-2 rounded-full bg-espresso shadow-[0_0_0_1px_#F5EFE4]" />
      )}
    </div>
    </div>
  );
}
