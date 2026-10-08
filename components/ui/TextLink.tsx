import { Arrow } from "@/components/ui/Arrow";
import { cn } from "@/lib/cn";

export function TextLink({
  href,
  children,
  className,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className={cn("text-link group inline-flex items-center gap-3 caption", className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>{children}</span>
      <Arrow />
    </a>
  );
}
