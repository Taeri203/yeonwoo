import Link from "next/link";
import { FileText, Heart, MapPinned, MessageSquareText, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

const items = [
  { label: "공약보기", href: "/pledges", icon: FileText },
  { label: "공약지도", href: "/map", icon: MapPinned },
  { label: "의견남기기", href: "/voice", icon: MessageSquareText },
  { label: "후원하기", href: "/donation", icon: Heart },
  { label: "전화문의", href: siteConfig.phoneHref, icon: Phone },
];

export function MobileBottomCTA() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-5 border-t border-[#E5E7EB] bg-white lg:hidden">
      {items.map((item) => {
        const Icon = item.icon;
        return <Link key={item.label} href={item.href} className="flex flex-col items-center gap-1 px-1 py-2 text-[11px] font-black text-[#11205A]"><Icon size={18} className="text-[#0052B8]" aria-hidden />{item.label}</Link>;
      })}
    </nav>
  );
}
