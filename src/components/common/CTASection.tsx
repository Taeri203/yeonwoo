import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = { title: string; description: string; href: string; buttonLabel: string; tone?: "blue" | "yellow" };
export function CTASection({ title, description, href, buttonLabel, tone = "blue" }: Props) {
  const isBlue = tone === "blue";
  return (
    <div className={cn("rounded-[2rem] p-7 md:p-10", isBlue ? "blue-gradient text-white" : "bg-[#FFF7D6] text-[#11205A]") }>
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="text-3xl font-black md:text-4xl">{title}</h2>
          <p className={cn("mt-3 leading-8", isBlue ? "text-blue-50" : "text-[#344054]")}>{description}</p>
        </div>
        <Link href={href} className={cn("inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 font-black", isBlue ? "bg-[#FFD84D] text-[#11205A]" : "bg-[#0052B8] text-white")}>
          {buttonLabel}<ArrowRight size={18} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
