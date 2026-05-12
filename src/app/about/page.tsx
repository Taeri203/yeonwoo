import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ProfileCard } from "@/components/cards/ProfileCard";
import { SectionTitle } from "@/components/common/SectionTitle";
import { FeatureCard } from "@/components/common/FeatureCard";
import { CampaignImageBlock } from "@/components/sections/CampaignImageBlock";
import { CTASection } from "@/components/common/CTASection";
import { careers, profileHighlights } from "@/data/profile";
import { siteConfig } from "@/data/site";
import { Landmark, Mic2, School, ShieldCheck } from "lucide-react";

export const metadata: Metadata = { title: "정연우 소개 | 정연우.kr", description: "지역자치 · 문화예술 · 미래세대를 연결하는 남구청장 후보 정연우를 소개합니다." };
const icons = [Landmark, Mic2, School, ShieldCheck];

export default function AboutPage() {
  return <><section className="campaign-gradient py-16"><div className="container-page grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center"><ProfileCard /><div><p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#0052B8]">정연우 소개</p><h1 className="mt-5 text-4xl font-black tracking-tight text-[#11205A] md:text-6xl">지역자치 · 문화예술 · 미래세대를 연결하는 남구청장 후보</h1><p className="mt-5 text-lg leading-8 text-[#344054]">정연우는 지역의 문화예술 현장, 공교육의 문제, 주민자치의 가능성을 함께 봐온 후보입니다. 남구의 오래된 문제를 낡은 방식이 아니라 주민과 함께하는 새로운 행정으로 풀겠습니다.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><Link href="/pledges" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0052B8] px-6 py-4 font-black text-white">핵심 공약 보기<ArrowRight size={18} /></Link><Link href="/daemyeong" className="inline-flex items-center justify-center rounded-full bg-[#FFD84D] px-6 py-4 font-black text-[#11205A]">대명 프로젝트 보기</Link></div></div></div></section><section className="py-16"><div className="container-page"><SectionTitle eyebrow="핵심 강점" title="주민과 현장을 행정으로 연결하겠습니다" align="center" /><div className="mt-10 grid gap-5 md:grid-cols-4">{profileHighlights.map((item, index) => <FeatureCard key={item.title} icon={icons[index]} title={item.title} description={item.description} />)}</div></div></section><section className="bg-[#F8FAFC] py-16"><div className="container-page grid gap-8 lg:grid-cols-2"><div><SectionTitle eyebrow="학력·경력" title="지역과 의회를 모두 아는 후보" /><div className="mt-8 grid gap-3">{careers.map((career) => <p key={career} className="flex gap-2 rounded-2xl bg-white px-4 py-3 font-black text-[#11205A] shadow-sm"><CheckCircle2 size={18} className="mt-1 shrink-0 text-[#0052B8]" />{career}</p>)}</div></div><div className="rounded-[2rem] bg-[#11205A] p-8 text-white"><h2 className="text-3xl font-black">구청장은 주민의 가능성을 연결하는 사람입니다.</h2><p className="mt-5 leading-8 text-blue-50">남구에는 예술가, 교사, 청년, 상인, 어르신, 마을활동가가 있습니다. 행정은 이 사람들을 연결해야 합니다. 정연우는 현장을 행정과 연결하는 구청장이 되겠습니다.</p></div></div></section><section className="py-16"><div className="container-page grid gap-6 md:grid-cols-2"><CampaignImageBlock src={siteConfig.images.fieldCampaign} alt="거리에서 시민을 만나는 정연우 남구청장 후보 배너" title="남구의 현장에서 시작하겠습니다" description="거리에서 듣고 구청에서 바꾸는 현장형 후보가 되겠습니다." /><CampaignImageBlock src={siteConfig.images.coreVision} alt="정연우 후보 남구 핵심 비전 배너" title="남구 변화의 방향" description="문화예술, 교육환경, 골목경제, 안전, 소통행정을 함께 추진하겠습니다." /></div></section><section className="pb-16"><div className="container-page"><CTASection title="젊은 변화, 새로운 남구" description="핵심 공약과 대명 프로젝트를 확인하고 의견을 남겨주세요." href="/voice" buttonLabel="의견 남기기" /></div></section></>;
}
