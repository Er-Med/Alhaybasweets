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
    <header className="px-[var(--gutter)] pt-36 pb-14 lg:pt-44 lg:pb-20">
      <p className="caption text-pistachio">{eyebrow}</p>
      <h1 className="display-lg mt-5 max-w-[11ch]">{title}</h1>
      {lede ? <p className="body-lg mt-8 max-w-[36ch] text-muted">{lede}</p> : null}
    </header>
  );
}
