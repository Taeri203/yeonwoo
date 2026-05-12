import { CheckCircle2 } from "lucide-react";
import type { Pledge } from "@/types";

export function PledgeCard({ pledge, index }: { pledge: Pledge; index: number }) {
  return (
    <article id={pledge.id} className="scroll-mt-28 rounded-[2rem] border border-[#E5E7EB] bg-white p-6 shadow-sm md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="inline-flex rounded-full bg-[#EAF4FF] px-3 py-1 text-xs font-black text-[#0052B8]">{index.toString().padStart(2, "0")} · {pledge.category}</p>
          <h3 className="mt-4 text-2xl font-black text-[#11205A] md:text-3xl">{pledge.title}</h3>
          <p className="mt-3 text-lg font-bold leading-8 text-[#344054]">{pledge.summary}</p>
        </div>
        <p className="rounded-2xl bg-[#FFF7D6] px-4 py-3 text-sm font-black leading-6 text-[#11205A] md:max-w-xs">{pledge.principle}</p>
      </div>
      <ul className="mt-6 grid gap-3 md:grid-cols-2">
        {pledge.tasks.map((task) => <li key={task} className="flex gap-2 text-sm leading-6 text-[#344054]"><CheckCircle2 size={17} className="mt-1 shrink-0 text-[#0052B8]" aria-hidden />{task}</li>)}
      </ul>
    </article>
  );
}
