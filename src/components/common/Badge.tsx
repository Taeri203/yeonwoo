import { cn } from "@/lib/utils";

export function Badge({ children, tone = "blue" }: { children: React.ReactNode; tone?: "blue" | "yellow" | "white" }) {
  return <span className={cn("inline-flex rounded-full px-3 py-1 text-xs font-black", tone === "blue" && "bg-[#EAF4FF] text-[#0052B8]", tone === "yellow" && "bg-[#FFD84D] text-[#11205A]", tone === "white" && "bg-white text-[#0052B8]")}>{children}</span>;
}
