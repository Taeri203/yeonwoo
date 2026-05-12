export function StatCard({ label, value, description }: { label: string; value: string; description: string }) {
  return (
    <article className="rounded-[1.7rem] border border-[#E5E7EB] bg-white p-6 shadow-sm">
      <p className="text-sm font-black text-[#0052B8]">{label}</p>
      <p className="mt-2 text-3xl font-black text-[#11205A]">{value}</p>
      <p className="mt-3 leading-7 text-[#667085]">{description}</p>
    </article>
  );
}
