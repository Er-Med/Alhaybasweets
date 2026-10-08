import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[100svh] flex-col justify-end px-[var(--gutter)] pt-36 pb-24">
      <p className="caption text-pistachio">404</p>
      <h1 className="display-lg mt-4 max-w-[10ch]">This page has left the table.</h1>
      <p lang="ar" dir="rtl" className="arabic-display mt-6 text-3xl text-pistachio">
        هذه الصفحة غادرت المائدة.
      </p>
      <Link href="/" className="caption mt-10 inline-flex text-chocolate">
        Al Hayba
      </Link>
    </div>
  );
}
