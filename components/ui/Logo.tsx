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
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      aria-hidden
      style={logoMask}
      className={cn(
        "block aspect-[598/333] bg-current transition-colors duration-500",
        tone === "light" ? "h-[3.15rem] text-[#0b3831] lg:h-[3.85rem]" : "h-9 text-ivory lg:h-11",
        className,
      )}
    />
  );
}
