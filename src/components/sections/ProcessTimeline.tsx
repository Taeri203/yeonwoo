export function ProcessTimeline({ steps }: { steps: string[] }) {
  return <div className="grid gap-4 md:grid-cols-5">{steps.map((step, index) => <article key={step} className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-5 text-center shadow-sm"><p className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#0052B8] font-black text-white">{index + 1}</p><p className="mt-4 font-black text-[#11205A]">{step}</p></article>)}</div>;
}
