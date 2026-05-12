import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { siteConfig } from "@/data/site";

export function ProfileCard() {
  return (
    <aside className="overflow-hidden rounded-[2rem] bg-[#11205A] text-white shadow-2xl">
      <ImageWithFallback src={siteConfig.images.profileCrop} alt="정연우 후보 프로필 이미지" className="h-[420px] bg-[#EAF4FF] md:h-[520px]" imgClassName="object-cover object-right" />
      <div className="p-6">
        <p className="text-4xl font-black">{siteConfig.candidateName}</p>
        <p className="mt-2 text-blue-100">{siteConfig.party} {siteConfig.electionName}</p>
        <p className="mt-1 text-blue-100">서울대학교 사회학과 졸업</p>
        <p className="mt-5 rounded-2xl bg-white/10 px-4 py-3 font-black">전 대구 남구의회 의원</p>
      </div>
    </aside>
  );
}
