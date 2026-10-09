import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

/** One seamless cell from public/motif-alhayba.ai. */
const TILE_W = 57.5651;
const TILE_H = 34.0157;

const LOZENGE_LEFT =
  "M0 0L0 17.284L-15.467 26.214L-15.467 33.704L6.486 21.029L6.486 -3.745Z";
const LOZENGE_RIGHT =
  "M0 0L0 17.284L15.467 26.214L15.467 33.704L-6.486 21.029L-6.486 -3.745Z";
const CHEVRON =
  "M0 0L22.06 12.675L14.68 16.996L0 8.522L-0.005 8.522L-14.685 16.996L-22.065 12.675L-0.005 0";

const PLACEMENTS: Array<[string, number, number]> = [
  [LOZENGE_LEFT, 50.9701, -17.1499],
  [LOZENGE_RIGHT, 64.1602, -17.1499],
  [CHEVRON, 57.5674, 3.8988],
  [LOZENGE_LEFT, 22.1875, -34.1577],
  [LOZENGE_RIGHT, 35.3776, -34.1577],
  [CHEVRON, 28.7849, -13.109],
  [LOZENGE_LEFT, -6.595, -17.1499],
  [LOZENGE_RIGHT, 6.5951, -17.1499],
  [CHEVRON, 0.0023, 3.8988],
  [LOZENGE_LEFT, 50.9701, 16.8659],
  [LOZENGE_RIGHT, 64.1602, 16.8659],
  [LOZENGE_LEFT, 22.1875, -0.142],
  [LOZENGE_RIGHT, 35.3776, -0.142],
  [CHEVRON, 28.7849, 20.9067],
  [LOZENGE_LEFT, -6.595, 16.8659],
  [LOZENGE_RIGHT, 6.5951, 16.8659],
  [LOZENGE_LEFT, 22.1875, 33.8737],
  [LOZENGE_RIGHT, 35.3776, 33.8737],
];

function motifMask(stroke: number) {
  const paths = PLACEMENTS.map(
    ([d, x, y]) => `<path d="${d}" transform="translate(${x} ${y})"/>`,
  ).join("");
  return `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${TILE_W} ${TILE_H}"><g transform="translate(0 ${TILE_H}) scale(1 -1)" fill="none" stroke="#fff" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">${paths}</g></svg>`,
  )}")`;
}

const MOTIF_MASK = motifMask(1.35);
const MOTIF_VEIL = motifMask(0.85);

const maskStyle = {
  maskImage: MOTIF_MASK,
  WebkitMaskImage: MOTIF_MASK,
  maskRepeat: "repeat",
  WebkitMaskRepeat: "repeat",
  maskMode: "alpha",
} as CSSProperties;

export function MotifBand({
  className = "",
  drift = false,
}: {
  className?: string;
  drift?: boolean;
}) {
  return (
    <div aria-hidden className={cn("h-9 shrink-0", className)}>
      <div
        className={cn("h-full w-full bg-current", drift && "motif-drift")}
        style={{
          ...maskStyle,
          maskSize: "auto 50%",
          WebkitMaskSize: "auto 50%",
        }}
      />
    </div>
  );
}

export function MotifVeil({
  className = "",
  fade = "soft",
  drift = false,
}: {
  className?: string;
  fade?: "soft" | "down" | "hero" | "aside";
  drift?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0",
        fade === "soft" && "motif-fade",
        fade === "down" && "motif-veil-down",
        fade === "hero" && "motif-veil-hero",
        fade === "aside" && "motif-veil-aside",
        className,
      )}
    >
      <div
        className={cn("absolute inset-0 bg-current", drift && "motif-veil-drift")}
        style={{
          ...maskStyle,
          maskImage: MOTIF_VEIL,
          WebkitMaskImage: MOTIF_VEIL,
          maskSize: "3.15rem auto",
          WebkitMaskSize: "3.15rem auto",
        }}
      />
    </div>
  );
}

export function MotifField({
  className = "",
  fade = false,
}: {
  className?: string;
  fade?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none",
        fade && "motif-fade",
        className,
      )}
    >
      <div
        className="absolute inset-0 bg-current"
        style={{
          ...maskStyle,
          maskSize: "12rem auto",
          WebkitMaskSize: "12rem auto",
        }}
      />
    </div>
  );
}
