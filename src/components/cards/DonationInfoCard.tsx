import { CheckCircle2, Phone } from "lucide-react";
import { CopyButton } from "@/components/common/CopyButton";
import { donationInfo } from "@/data/donation";

export function DonationInfoCard() {
  return (
    <article className="rounded-[2rem] border border-[#B9DBFF] bg-white p-6 shadow-xl md:p-8">
      <p className="text-sm font-black text-[#0052B8]">후원 정보</p>
      <h2 className="mt-2 text-3xl font-black text-[#11205A]">{donationInfo.name}</h2>
      <div className="mt-6 grid gap-3">
        <Info label="후원계좌" value={`${donationInfo.bank} ${donationInfo.account}`} />
        <Info label="예금주" value={donationInfo.holder} />
        <Info label="후원 및 영수증 발급 문의" value={donationInfo.phone} />
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row"><CopyButton value={`${donationInfo.bank} ${donationInfo.account}`} label="후원계좌 복사" /><a href={donationInfo.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FFD84D] px-5 py-3 font-black text-[#11205A]"><Phone size={17} aria-hidden />전화문의</a></div>
      <p className="mt-6 flex gap-2 rounded-2xl bg-[#FFF7D6] p-4 text-sm font-bold leading-7 text-[#344054]"><CheckCircle2 size={18} className="mt-1 shrink-0 text-[#0052B8]" aria-hidden />소중한 정성은 정연우후원회(남구청장선거)를 통해 투명하게 관리됩니다.</p>
    </article>
  );
}
function Info({ label, value }: { label: string; value: string }) { return <div className="rounded-2xl bg-[#F8FAFC] p-4"><p className="text-xs font-black text-[#667085]">{label}</p><p className="mt-1 text-lg font-black text-[#11205A]">{value}</p></div>; }
