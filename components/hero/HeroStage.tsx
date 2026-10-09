import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Photo } from "@/components/ui/Photo";

type Vars = CSSProperties & Record<`--${string}`, string | number>;

/** Seeded so server and client render identical particles. */
const DUST = Array.from({ length: 24 }, (_, i) => {
  const rand = (n: number) => {
    const v = Math.sin(i * 127.1 + n * 311.7) * 43758.5453;
    return Math.round((v - Math.floor(v)) * 1000) / 1000;
  };
  return {
    left: `${(8 + rand(1) * 84).toFixed(1)}%`,
    top: `${(10 + rand(2) * 80).toFixed(1)}%`,
    size: `${(1.5 + rand(3) * 2.5).toFixed(1)}px`,
    z: `${Math.round(-280 + rand(4) * 520)}px`,
    duration: `${(10 + rand(5) * 10).toFixed(1)}s`,
    delay: `${(-rand(6) * 20).toFixed(1)}s`,
  };
});

function Layer({
  name,
  x,
  xs = x,
  y,
  z,
  k = 0,
  className,
  children,
}: {
  name: string;
  x: number;
  /** Horizontal position below the lg breakpoint. */
  xs?: number;
  y: number;
  z: number;
  k?: number;
  className?: string;
  children: ReactNode;
}) {
  const style: Vars = { top: `${y}%`, "--x": `${x}%`, "--xs": `${xs}%`, "--z": `${z}px`, "--k": k };
  return (
    <div className={cn("hero-layer absolute", className)} style={style}>
      <div data-hero-layer={name} className="hero-await hero-3d">
        {children}
      </div>
    </div>
  );
}

function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" aria-hidden className={className}>
      <g stroke="currentColor" vectorEffect="non-scaling-stroke">
        <circle cx="100" cy="100" r="98" strokeWidth="0.35" />
        <circle cx="100" cy="100" r="88" strokeWidth="0.25" strokeDasharray="1 3" />
        <rect x="37.8" y="37.8" width="124.4" height="124.4" strokeWidth="0.45" />
        <rect
          x="37.8"
          y="37.8"
          width="124.4"
          height="124.4"
          strokeWidth="0.45"
          transform="rotate(45 100 100)"
        />
        <rect x="56" y="56" width="88" height="88" strokeWidth="0.3" />
        <rect
          x="56"
          y="56"
          width="88"
          height="88"
          strokeWidth="0.3"
          transform="rotate(45 100 100)"
        />
        <circle cx="100" cy="100" r="44" strokeWidth="0.3" />
      </g>
      {Array.from({ length: 8 }, (_, i) => (
        <circle
          key={i}
          cx="100"
          cy="12"
          r="1.3"
          fill="currentColor"
          transform={`rotate(${i * 45} 100 100)`}
        />
      ))}
    </svg>
  );
}

function Seal() {
  return (
    <svg viewBox="0 0 120 120" aria-hidden className="h-full w-full">
      <defs>
        <path id="hero-seal-path" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" />
      </defs>
      <circle cx="60" cy="60" r="59" fill="#1a110b" stroke="#b89a5a" strokeOpacity="0.55" strokeWidth="0.6" />
      <circle cx="60" cy="60" r="34" fill="none" stroke="#b89a5a" strokeOpacity="0.35" strokeWidth="0.5" />
      <g className="hero-spin-slow" style={{ transformOrigin: "60px 60px" }}>
        <text
          lang="en"
          direction="ltr"
          fill="#d9c08a"
          fontSize="8.4"
          fontWeight="500"
          letterSpacing="2.6"
          className="font-serif"
        >
          <textPath href="#hero-seal-path" textLength="280" lengthAdjust="spacing">
            AL HAYBA SWEETS · CASABLANCA ·
          </textPath>
        </text>
      </g>
      <g stroke="#d9c08a" strokeWidth="0.8" fill="none">
        <rect x="48" y="48" width="24" height="24" />
        <rect x="48" y="48" width="24" height="24" transform="rotate(45 60 60)" />
      </g>
    </svg>
  );
}

export function HeroStage({ alt }: { alt: string }) {
  return (
    <div data-hero="stage" className="absolute inset-0 [perspective:1700px]">
      <div
        data-hero="halo"
        aria-hidden
        className="hero-await pointer-events-none absolute left-1/2 top-[52%] aspect-square w-[min(56rem,120%)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(184,154,90,0.32)_0%,rgba(184,154,90,0.08)_38%,transparent_68%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[84%] h-16 w-[min(30rem,70%)] -translate-x-1/2 rounded-[50%] bg-black/60 blur-3xl"
      />

      <div data-hero="scroll-rig" className="hero-3d absolute inset-0">
        <div data-hero="mouse-rig" className="hero-3d absolute inset-0">
          <Layer name="star" x={50} y={52} z={-260} k={-1.3} className="w-[min(44rem,112%)]">
            <div className="hero-spin aspect-square text-gold/45">
              <Star className="h-full w-full" />
            </div>
          </Layer>

          <Layer
            name="outline"
            x={53}
            y={50}
            z={-90}
            k={-0.5}
            className="w-[calc(clamp(12.5rem,25vw,25rem)+2.5rem)]"
          >
            <div className="aspect-[3/4.15] hero-arch border border-gold/30" />
          </Layer>

          <Layer
            name="box"
            x={21}
            xs={24}
            y={30}
            z={-170}
            k={-0.9}
            className="w-[clamp(6.25rem,11vw,11.5rem)]"
          >
            <div className="hero-float" style={{ "--float-d": "9s" } as Vars}>
              <div className="relative aspect-[3/4] overflow-hidden hero-arch shadow-[0_40px_80px_-24px_rgba(0,0,0,0.8)] ring-1 ring-gold/35">
                <Photo
                  src="/images/gold-box.jpg"
                  alt=""
                  sizes="(max-width: 1024px) 30vw, 12vw"
                  className="object-cover object-[50%_60%]"
                />
                <div className="absolute inset-0 bg-espresso/25" />
              </div>
            </div>
          </Layer>

          <Layer name="main" x={50} y={53} z={0} className="w-[clamp(12.5rem,25vw,25rem)]">
            <div className="hero-float" style={{ "--float-d": "12s" } as Vars}>
              <div className="relative aspect-[3/4.15] overflow-hidden hero-arch shadow-[0_70px_120px_-30px_rgba(0,0,0,0.85)] ring-1 ring-gold/50">
                <div data-hero="main-img" className="absolute inset-0">
                  <Photo
                    src="/images/baklava-tray.jpg"
                    alt={alt}
                    priority
                    sizes="(max-width: 1024px) 60vw, 26vw"
                    className="object-cover object-[50%_45%]"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/55 via-transparent to-transparent" />
                <div className="hero-sheen absolute inset-0" />
                <div className="absolute inset-[0.6rem] hero-arch border border-ivory/25" />
              </div>
            </div>
          </Layer>

          <Layer
            name="slice"
            x={77}
            xs={73}
            y={71}
            z={170}
            k={1}
            className="w-[clamp(6.5rem,12vw,12.5rem)]"
          >
            <div className="hero-float" style={{ "--float-d": "10s", "--float-delay": "-4s" } as Vars}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-full shadow-[0_50px_90px_-24px_rgba(0,0,0,0.85)] ring-1 ring-gold/45">
                <Photo
                  src="/images/pistachio-slice.jpg"
                  alt=""
                  sizes="(max-width: 1024px) 30vw, 13vw"
                  className="object-cover object-[50%_55%]"
                />
              </div>
            </div>
          </Layer>

          <Layer name="seal" x={74} xs={72} y={22} z={230} k={1.5} className="w-[clamp(4.25rem,7.5vw,7.5rem)]">
            <div className="hero-float aspect-square" style={{ "--float-d": "8s", "--float-delay": "-2s" } as Vars}>
              <Seal />
            </div>
          </Layer>

          <div data-hero="dust" aria-hidden className="hero-await hero-3d pointer-events-none absolute inset-0">
            {DUST.map((p, i) => (
              <span
                key={i}
                className="hero-dust absolute rounded-full bg-[#e6cf98]"
                style={
                  {
                    left: p.left,
                    top: p.top,
                    width: p.size,
                    height: p.size,
                    "--z": p.z,
                    animationDuration: p.duration,
                    animationDelay: p.delay,
                  } as Vars
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
