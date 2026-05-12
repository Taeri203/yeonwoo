import { CheckCircle2 } from "lucide-react";
import type { Generation } from "@/types";

export function GenerationCard({ generation }: { generation: Generation }) {
  const Icon = generation.icon;
  return <article className="rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-sm"><span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF4FF] text-[#0052B8]"><Icon size={26} aria-hidden /></span><p className="mt-4 text-sm font-black text-[#0052B8]">{generation.audience}</p><h3 className="mt-1 text-2xl font-black text-[#11205A]">{generation.title}</h3><p className="mt-3 font-bold leading-7 text-[#344054]">{generation.message}</p><ul className="mt-5 grid gap-2">{generation.pledges.map((p) => <li key={p} className="flex gap-2 text-sm leading-6 text-[#667085]"><CheckCircle2 size={16} className="mt-1 shrink-0 text-[#0052B8]" aria-hidden />{p}</li>)}</ul></article>;
}
