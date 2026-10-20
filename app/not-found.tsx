import Link from "next/link";
import { MotifVeil } from "@/components/ui/Motif";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-[var(--gutter)] pt-36 pb-24">
      <MotifVeil fade="soft" className="text-chocolate/28" />
      <div className="relative">
        <p className="caption text-pistachio">404</p>
        <h1 className="display-lg mt-4 max-w-[12ch]">Cette page a quitté la table.</h1>
        <p lang="ar" dir="rtl" className="arabic-display mt-6 text-3xl text-pistachio">
          هذه الصفحة غادرت المائدة.
        </p>
        <Link href="/" className="caption mt-10 inline-flex text-chocolate">
          Al Hayba
        </Link>
      </div>
    </div>
  );
}
