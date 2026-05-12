import { CheckCircle2 } from "lucide-react";
import type { DistrictGroup } from "@/types";

export function DistrictCard({ district }: { district: DistrictGroup }) {
  return (
    <article className="rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-sm md:p-8">
      <p className="inline-flex rounded-full bg-[#EAF4FF] px-3 py-1 text-xs font-black text-[#0052B8]">{district.areas.join(" · ")}</p>
      <h3 className="mt-4 text-3xl font-black text-[#11205A]">{district.name}</h3>
      <p className="mt-3 text-xl font-black leading-8 text-[#11205A]">{district.direction}</p>
      <p className="mt-3 leading-7 text-[#667085]">{district.description}</p>
      <ul className="mt-6 grid gap-3 md:grid-cols-2">
        {district.pledges.map((pledge) => <li key={pledge} className="flex gap-2 text-sm leading-6 text-[#344054]"><CheckCircle2 size={17} className="mt-1 shrink-0 text-[#0052B8]" aria-hidden />{pledge}</li>)}
      </ul>
    </article>
  );
}
