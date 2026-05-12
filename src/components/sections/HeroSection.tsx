import Link from "next/link";
import { ArrowRight, BadgeCheck, Heart, Images, MapPinned, MessageSquareText } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

const keywords = ["지역자치", "문화예술", "공교육", "투명행정", "청년정주", "앞산관광", "주민참여"];

export function HeroSection() {
  return (
    <section className="campaign-gradient overflow-hidden py-8 md:py-14">
      <div className="container-page">
        <div className="overflow-hidden rounded-[2rem] border border-white bg-white p-2 shadow-2xl md:p-3">
          <ImageWithFallback src={siteConfig.images.heroMain} alt="정연우 대구 남구청장 후보 메인 배너" className="rounded-[1.5rem]" imgClassName="h-auto w-full object-contain" />
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-[#B9DBFF] bg-white px-4 py-2 text-sm font-black text-[#0052B8] shadow-sm">{siteConfig.party} · {siteConfig.electionName}</p>
            <h1 className="text-keep mt-5 text-4xl font-black tracking-tight text-[#11205A] md:text-6xl">
              <span className="inline-block">남구를</span>{" "}
              <span className="inline-block">대구 문화예술의</span>{" "}
              <span className="inline-block">심장으로</span>
            </h1>
            <p className="mt-3 text-[4.8rem] font-black leading-none tracking-[-0.08em] text-[#0052B8] md:text-[8rem]">{siteConfig.candidateName}</p>
            <p className="text-keep mt-4 text-2xl font-black text-[#11205A] md:text-3xl">
              <span className="inline-block">젊은 변화,</span>{" "}
              <span className="inline-block">새로운 남구</span>
            </p>
            <p className="text-keep mt-4 max-w-3xl text-lg leading-8 text-[#344054]">대명공연거리에서 앞산까지, 안지랑골목에서 13개 동 주민자치까지. 남구의 현장을 행정의 중심에 놓겠습니다.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <HeroButton href="/pledges" label="핵심 공약 보기" icon={ArrowRight} primary />
              <HeroButton href="/daemyeong" label="대명 프로젝트 보기" icon={MapPinned} />
              <HeroButton href="/donation" label="후원회 안내" icon={Heart} yellow />
              <HeroButton href="/voice" label="의견 남기기" icon={MessageSquareText} />
            </div>
          </div>
          <div className="grid gap-3 rounded-[2rem] bg-white/80 p-5 shadow-sm">
            {keywords.map((keyword) => <p key={keyword} className="flex items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 font-black text-[#11205A]"><BadgeCheck size={18} className="text-[#0052B8]" aria-hidden />{keyword}</p>)}
            <Link href="/gallery" className="btn-base btn-dark mt-2"><Images size={18} aria-hidden />홍보 이미지 보기</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroButton({ href, label, icon: Icon, primary, yellow }: { href: string; label: string; icon: React.ElementType; primary?: boolean; yellow?: boolean }) {
  return <Link href={href} className={`btn-base ${primary ? "btn-primary" : yellow ? "btn-yellow" : "btn-white"}`}><Icon size={18} aria-hidden />{label}</Link>;
}
