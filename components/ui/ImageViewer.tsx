"use client";

import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { getLenis } from "@/lib/scroll";
import { Photo } from "@/components/ui/Photo";

export type ViewerShot = {
  src: string;
  alt: string;
  title: string;
  detail?: string;
  meta?: string;
};

export function ImageViewer({
  item,
  onClose,
  closeLabel,
}: {
  item: ViewerShot | null;
  onClose: () => void;
  closeLabel: string;
}) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const signature = item ? `${item.src}\n${item.title}\n${item.detail ?? ""}\n${item.meta ?? ""}` : "";

  useEffect(() => {
    if (!signature) return;
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const lenis = getLenis();
    lenis?.stop();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCloseRef.current();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      lenis?.start();
      previous?.focus();
    };
  }, [signature]);

  if (!item) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto bg-espresso px-[var(--gutter)] py-20"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={() => onCloseRef.current()}
    >
      <button
        ref={closeRef}
        type="button"
        className="caption absolute end-[var(--gutter)] top-6 text-ivory"
        onClick={() => onCloseRef.current()}
      >
        {closeLabel}
      </button>
      <div
        className="quote-in flex w-full max-w-3xl flex-col items-center"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative h-[min(58svh,34rem)] w-[min(92vw,40rem)] overflow-hidden bg-espresso">
          <Photo
            src={item.src}
            alt={item.alt}
            sizes="(max-width: 640px) 92vw, 42rem"
            className="object-contain object-center"
          />
        </div>
        <div className="mt-6 max-w-[34ch] text-center text-ivory">
          <h2 id={titleId} className="font-serif text-[clamp(1.7rem,3vw,2.5rem)] leading-none">
            {item.title}
          </h2>
          {item.meta ? <p className="caption mt-4 text-gold">{item.meta}</p> : null}
          {item.detail ? <p className="body-md mt-3 text-ivory/75">{item.detail}</p> : null}
        </div>
      </div>
    </div>,
    document.body,
  );
}
