import { cn } from "@/lib/utils";

export function FeatureCard({ icon: Icon, title, description, className }: { icon: React.ElementType; title: string; description: string; className?: string }) {
  return (
    <article className={cn("rounded-[1.7rem] border border-[#E5E7EB] bg-white p-6 shadow-sm", className)}>
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF4FF] text-[#0052B8]"><Icon size={24} aria-hidden /></span>
      <h3 className="mt-4 text-xl font-black text-[#11205A]">{title}</h3>
      <p className="mt-3 leading-7 text-[#667085]">{description}</p>
    </article>
  );
}
