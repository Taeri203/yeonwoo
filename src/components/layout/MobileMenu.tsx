"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { navItems, siteConfig } from "@/data/site";

export function MobileMenu({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <button type="button" onClick={() => setOpen(true)} className="rounded-full border border-[#E5E7EB] p-2">{trigger}</button>
      {open ? (
        <div className="fixed inset-0 z-[80] bg-[#11205A]/40" role="dialog" aria-modal="true">
          <div className="ml-auto h-full w-[86%] max-w-sm bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <p className="text-xl font-black text-[#11205A]">정연우.kr</p>
              <button type="button" onClick={() => setOpen(false)} className="rounded-full bg-[#F8FAFC] p-2"><X size={22} aria-label="메뉴 닫기" /></button>
            </div>
            <nav className="mt-8 grid gap-2">
              {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 font-black text-[#11205A] hover:bg-[#EAF4FF]">{item.label}</Link>)}
            </nav>
            <a href={siteConfig.phoneHref} className="btn-base btn-dark mt-8 flex">전화문의</a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
