import Link from "next/link";
import { ArrowRight, Building2, GraduationCap, Heart, Landmark, MapPinned, Music, ShieldCheck, Store, Users } from "lucide-react";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionTitle } from "@/components/common/SectionTitle";
import { StatCard } from "@/components/cards/StatCard";
import { FeatureCard } from "@/components/common/FeatureCard";
import { CampaignImageBlock } from "@/components/sections/CampaignImageBlock";
import { CTASection } from "@/components/common/CTASection";
import { StaticMap } from "@/components/sections/StaticMap";
import { siteConfig, namguInfo } from "@/data/site";
import { visionCards } from "@/data/pledges";

const icons = [Music, GraduationCap, Store, ShieldCheck, Users];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section className="py-16"><div className="container-page"><SectionTitle eyebrow="남구 데이터" title="남구의 문제는 숫자로도 보입니다" description="작아지는 남구를 그냥 두지 않겠습니다. 예술가와 청년이 머물고, 어르신이 안전하고, 아이들이 배울 수 있는 남구를 만들겠습니다." align="center" /><div className="mt-10 grid gap-5 md:grid-cols-5"><StatCard label="도시 성격" value={namguInfo.type} description="대구 도심 생활권의 장점을 살리겠습니다." /><StatCard label="행정동" value="13개" description="모든 동 주민자치를 추진합니다." /><StatCard label="문화자원" value="대명" description="대명공연거리를 남구의 미래자산으로." /><StatCard label="핵심 과제" value="청년정주" description="머무를 이유를 만드는 행정." /><StatCard label="관광상권" value="앞산·안지랑" description="체류형 관광으로 연결합니다." /></div></div></section>
      <section className="bg-[#F8FAFC] py-16"><div className="container-page"><div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><CampaignImageBlock src={siteConfig.images.coreVision} alt="정연우 후보 남구 핵심 비전 배너" title="남구의 변화를 위한 핵심 비전" description="문화예술, 미래세대, 골목경제, 안전, 소통행정을 남구 변화의 축으로 세우겠습니다." /><div><SectionTitle eyebrow="핵심 비전" title="구청장급 행정 비전으로 남구를 바꾸겠습니다" /><div className="mt-8 grid gap-4 sm:grid-cols-2">{visionCards.map((title, index) => <FeatureCard key={title} icon={icons[index]} title={title} description="주민 삶의 현장에서 체감되는 변화로 추진하겠습니다." />)}</div></div></div></div></section>
      <section className="py-16"><div className="container-page grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"><div><SectionTitle eyebrow="1호 공약" title="대명 프로젝트" description="남구는 자생적 예술촌의 힘을 가진 도시입니다. 행정이 보지 못했던 현장의 가치를 예술가와 주민이 함께 살리겠습니다." /><div className="mt-6 flex flex-wrap gap-2">{["대명공연거리", "지역쿼터제", "공연비 선지급제", "다원공연예술", "중간지원조직"].map((item) => <span key={item} className="rounded-full bg-[#EAF4FF] px-4 py-2 text-sm font-black text-[#0052B8]">{item}</span>)}</div><Link href="/daemyeong" className="btn-base btn-primary mt-8">대명 프로젝트 자세히 보기<ArrowRight size={18} /></Link></div><div className="rounded-[2rem] bg-[#11205A] p-8 text-white"><Building2 size={42} className="text-[#FFD84D]" /><p className="mt-6 text-3xl font-black leading-tight">남구를 대구 문화예술의 심장으로</p><p className="mt-4 leading-8 text-blue-50">대명공연거리, 계대네거리, 명덕역을 잇는 문화예술축을 만들겠습니다.</p></div></div></section>
      <section className="bg-[#11205A] py-16 text-white"><div className="container-page grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center"><div><p className="inline-flex rounded-full bg-[#FFD84D] px-4 py-2 text-sm font-black text-[#11205A]">현장형 후보</p><h2 className="mt-5 text-4xl font-black md:text-5xl">거리에서 듣고, 구청에서 바꾸겠습니다</h2><p className="mt-5 text-lg leading-8 text-blue-50">남구청장 후보 정연우는 책상 위 보고서보다 거리의 목소리를 먼저 듣겠습니다. 주민의 불편을 행정의 언어로 바꾸겠습니다.</p><Link href="/voice" className="btn-base btn-white mt-7">의견 남기기</Link></div><CampaignImageBlock src={siteConfig.images.fieldCampaign} alt="거리에서 시민을 만나는 정연우 남구청장 후보 배너" title="거리에서 듣겠습니다" description="현장에서 시작하는 남구 행정" /></div></section>
      <section className="py-16"><div className="container-page"><SectionTitle eyebrow="남구 공약지도" title="남구의 핵심 현안을 한눈에" description="대명공연거리, 앞산, 안지랑, 후적지와 생활교통 공약을 지도형으로 확인하세요." /><div className="mt-8"><StaticMap preview /></div><Link href="/map" className="btn-base btn-primary mt-8">남구 공약지도 보기<ArrowRight size={18} /></Link></div></section>
      <section className="bg-[#F8FAFC] py-16"><div className="container-page grid gap-8 lg:grid-cols-2"><CampaignImageBlock src={siteConfig.images.donationBanner} alt="정연우후원회 남구청장선거 후원 안내 배너" title="정연우의 남구 변화에 함께해 주세요" description="소중한 정성은 정연우후원회(남구청장선거)를 통해 투명하게 관리됩니다." /><CTASection title="남구의 의견을 남겨주세요" description="작은 의견도 모이면 남구를 바꾸는 공약이 됩니다." href="/voice" buttonLabel="의견 남기기" tone="yellow" /></div></section>
    </>
  );
}
