"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyButton({ value, label = "복사" }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }
  return (
    <button type="button" onClick={copy} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0052B8] px-5 py-3 font-black text-white shadow-lg">
      {copied ? <Check size={17} aria-hidden /> : <Copy size={17} aria-hidden />}
      {copied ? "복사 완료" : label}
    </button>
  );
}
