import type { Metadata } from "next";
import { SectionTitle } from "@/components/common/SectionTitle";
import { CampaignImageBlock } from "@/components/sections/CampaignImageBlock";
import { PledgeCard } from "@/components/cards/PledgeCard";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CTASection } from "@/components/common/CTASection";
import { pledges } from "@/data/pledges";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "핵심 공약 | 정연우.kr", description: "정연우 후보의 대명 프로젝트, 주민자치, 청년정주, 공교육, 교통·보행, 관광상권, 후적지 개발 공약입니다." };

export default function PledgesPage() {
  return <><section className="campaign-gradient py-16"><div className="container-page"><p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#0052B8]">핵심 공약</p><h1 className="mt-5 text-4xl font-black tracking-tight text-[#11205A] md:text-6xl">남구의 오래된 문제를 주민과 함께 푸는 새로운 행정</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-[#344054]">문화예술, 주민자치, 인구소멸, 교육, 교통·보행, 후적지 개발, 앞산 관광을 종합하겠습니다.</p><div className="mt-8"><CampaignImageBlock src={siteConfig.images.coreVision} alt="정연우 후보 남구 핵심 비전 배너" title="남구의 변화를 위한 핵심 비전" description="정연우가 제안하는 새로운 남구의 방향" /></div></div></section><section className="py-16"><div className="container-page"><div className="grid gap-6">{pledges.map((pledge, index) => <PledgeCard key={pledge.id} pledge={pledge} index={index + 1} />)}</div></div></section><section className="bg-[#F8FAFC] py-16"><div className="container-page"><SectionTitle eyebrow="추진 과정" title="정연우의 공약은 주민과 함께 업데이트됩니다" align="center" /><div className="mt-10"><ProcessTimeline steps={["듣기", "공론장 열기", "부서와 예산 확인", "사업으로 추진", "진행상황 공유"]} /></div><div className="mt-10"><CTASection title="공약에 의견을 더해 주세요" description="주민 의견이 공약을 더 정확하게 만듭니다." href="/voice" buttonLabel="의견 남기기" tone="yellow" /></div></div></section></>;
}
