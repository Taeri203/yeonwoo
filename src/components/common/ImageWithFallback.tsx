"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = { src: string; alt: string; className?: string; imgClassName?: string; fallbackLabel?: string };

export function ImageWithFallback({ src, alt, className, imgClassName, fallbackLabel }: Props) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={cn("relative overflow-hidden bg-[#EAF4FF]", className)}>
      {failed ? (
        <div className="flex h-full min-h-[220px] flex-col items-center justify-center gap-3 p-6 text-center text-[#11205A]">
          <ImageIcon size={34} aria-hidden />
          <p className="text-sm font-black">{fallbackLabel || alt}</p>
        </div>
      ) : (
        <img src={src} alt={alt} className={cn("h-full w-full", imgClassName || "object-cover")} onError={() => setFailed(true)} />
      )}
    </div>
  );
}
