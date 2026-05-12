import { cn } from "@/lib/utils";

type SectionTitleProps = { eyebrow?: string; title: string; description?: string; align?: "left" | "center"; className?: string };

export function SectionTitle({ eyebrow, title, description, align = "left", className }: SectionTitleProps) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <p className="inline-flex rounded-full bg-[#EAF4FF] px-4 py-2 text-sm font-black text-[#0052B8]">{eyebrow}</p> : null}
      <h2 className="mt-4 text-3xl font-black tracking-tight text-[#11205A] md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 max-w-3xl text-lg leading-8 text-[#667085]">{description}</p> : null}
    </div>
  );
}
