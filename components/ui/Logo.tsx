import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

export const logoMask = {
  maskImage: "url(/elhaybalogo-mask.png)",
  WebkitMaskImage: "url(/elhaybalogo-mask.png)",
  maskSize: "contain",
  WebkitMaskSize: "contain",
  maskRepeat: "no-repeat",
  WebkitMaskRepeat: "no-repeat",
  maskPosition: "center",
  WebkitMaskPosition: "center",
} as CSSProperties;

/** Tinted with `currentColor`, so the mark can sit on light or dark grounds. */
export function Logo({
  tone = "light",
  compact = false,
  className,
}: {
  tone?: "light" | "dark";
  compact?: boolean;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      style={logoMask}
      className={cn(
        "block aspect-[598/333] bg-current transition-[height,color] duration-500 ease-[var(--ease)]",
        tone === "light"
          ? cn("h-11 text-[#0b3831]", compact ? "lg:h-10" : "lg:h-[3.85rem]")
          : "h-9 text-ivory lg:h-11",
        className,
      )}
    />
  );
}
