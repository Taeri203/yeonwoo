import Link from "next/link";
import type { CSSProperties, ElementType } from "react";
import { ArrowRight, BadgeCheck, Compass, Heart, Images, MapPinned, MessageSquareText, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";

const primaryKeywords = ["문화예술", "지역자치", "미래세대"];
const secondaryKeywords = ["공교육", "투명행정", "청년정주", "앞산관광", "주민참여"];

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
              <HeroButton href="/donation" label="후원회 안내" icon={Heart} />
              <HeroButton href="/voice" label="의견 남기기" icon={MessageSquareText} />
            </div>
          </div>
          <div className="glass-panel relative overflow-hidden rounded-[2.2rem] p-5 shadow-xl lg:max-w-[520px] lg:justify-self-end md:p-6">
            <div className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-[#FFD84D]/30 blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute -bottom-16 left-6 h-40 w-40 rounded-full bg-[#0052B8]/15 blur-3xl" aria-hidden />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="inline-flex items-center gap-2 rounded-full bg-[#EAF4FF] px-3 py-1 text-xs font-black text-[#0052B8]">
                    <Sparkles size={14} aria-hidden />
                    정연우의 남구 키워드
                  </p>
                  <h2 className="text-keep mt-4 text-2xl font-black leading-tight text-[#11205A] md:text-3xl">
                    문화의 힘과 주민자치로 남구의 내일을 열겠습니다
                  </h2>
                </div>
                <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#11205A] text-[#FFD84D] shadow-lg sm:flex">
                  <Compass size={24} aria-hidden />
                </span>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {primaryKeywords.map((keyword, index) => (
                  <p key={keyword} className="keyword-chip keyword-chip-strong" style={{ "--float-delay": `${index * 80}ms` } as CSSProperties}>
                    <BadgeCheck size={16} className="text-[#0052B8]" aria-hidden />
                    {keyword}
                  </p>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {secondaryKeywords.map((keyword, index) => (
                  <p key={keyword} className="keyword-chip keyword-chip-soft" style={{ "--float-delay": `${(index + 3) * 70}ms` } as CSSProperties}>
                    {keyword}
                  </p>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 border-t border-white/70 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm font-bold leading-6 text-[#667085]">후보 이미지와 현장 홍보물을 한곳에서 확인하세요.</p>
                <Link href="/gallery" className="btn-base btn-dark btn-small shrink-0"><Images size={16} aria-hidden />홍보 이미지 보기</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroButton({ href, label, icon: Icon, primary, yellow }: { href: string; label: string; icon: ElementType; primary?: boolean; yellow?: boolean }) {
  return <Link href={href} className={`btn-base ${primary ? "btn-primary" : yellow ? "btn-yellow" : "btn-white"}`}><Icon size={18} aria-hidden />{label}</Link>;
}
