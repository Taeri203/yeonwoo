"use client";

import { useState } from "react";
import { X } from "lucide-react";
import type { GalleryItem } from "@/types";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<GalleryItem | null>(null);
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <button key={item.src} type="button" onClick={() => setActive(item)} className="overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <ImageWithFallback src={item.src} alt={item.alt} className="bg-[#EAF4FF]" imgClassName="h-auto w-full object-contain" />
            <div className="p-5"><p className="text-xs font-black text-[#0052B8]">{item.kind}</p><h3 className="mt-2 text-2xl font-black text-[#11205A]">{item.title}</h3><p className="mt-2 leading-7 text-[#667085]">{item.description}</p></div>
          </button>
        ))}
      </div>
      {active ? (
        <div className="fixed inset-0 z-[90] bg-[#11205A]/85 p-4" role="dialog" aria-modal="true">
          <button type="button" onClick={() => setActive(null)} className="absolute right-5 top-5 rounded-full bg-white p-2"><X size={24} aria-label="닫기" /></button>
          <div className="flex h-full items-center justify-center"><img src={active.src} alt={active.alt} className="max-h-[88vh] w-full max-w-6xl object-contain" /></div>
        </div>
      ) : null}
    </>
  );
}
