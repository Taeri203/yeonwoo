import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-[#11205A] py-10 text-white">
      <div className="container-page grid gap-6 md:grid-cols-[1fr_auto]">
        <div>
          <p className="text-3xl font-black">{siteConfig.candidateName}</p>
          <p className="mt-2 text-blue-100">{siteConfig.party} {siteConfig.electionName}</p>
          <p className="mt-1 text-blue-100">{siteConfig.area}</p>
          <p className="mt-4 text-sm text-blue-100">후원회: {siteConfig.donationName}</p>
          <p className="text-sm text-blue-100">후원계좌: {siteConfig.donationBank} {siteConfig.donationAccount}</p>
          <p className="text-sm text-blue-100">후원 및 영수증 발급 문의: {siteConfig.phone}</p>
        </div>
        <div className="text-sm leading-7 text-blue-100 md:text-right">
          <Link href="/privacy" className="font-black text-white">개인정보처리방침</Link>
          <p className="mt-3">본 사이트의 공약 및 후보자 정보는 선거사무소 검수 후 업데이트될 수 있습니다.</p>
          <p>후원 안내는 {siteConfig.donationName}를 기준으로 제공합니다.</p>
        </div>
      </div>
    </footer>
  );
}
