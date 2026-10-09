import { MotifVeil } from "@/components/ui/Motif";

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="relative overflow-hidden pt-36 pb-16 lg:pt-44 lg:pb-24">
      <MotifVeil fade="down" className="text-chocolate/30" />
      <div className="relative px-[var(--gutter)]">
        <p className="caption text-pistachio">{eyebrow}</p>
        <h1 className="display-lg mt-5 max-w-[11ch]">{title}</h1>
        {lede ? <p className="body-lg mt-8 max-w-[36ch] text-muted">{lede}</p> : null}
      </div>
    </header>
  );
}
