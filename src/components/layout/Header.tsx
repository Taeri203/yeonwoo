import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { siteConfig, navItems } from "@/data/site";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-white/92 backdrop-blur">
      <div className="container-page flex h-[72px] items-center justify-between gap-4">
        <Link href="/" className="font-black text-[#11205A]"><span className="text-[#0052B8]">정</span>연우.kr</Link>
        <nav className="hidden items-center gap-4 text-sm font-black text-[#11205A] lg:flex">
          {navItems.map((item) => <Link key={item.href} href={item.href} className="hover:text-[#0052B8]">{item.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a href={siteConfig.phoneHref} className="btn-base btn-dark btn-small"><Phone size={15} aria-hidden />전화문의</a>
        </div>
        <MobileMenu trigger={<Menu size={26} aria-label="메뉴 열기" />} />
      </div>
    </header>
  );
}
