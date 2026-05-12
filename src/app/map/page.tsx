import type { Metadata } from "next";
import { SectionTitle } from "@/components/common/SectionTitle";
import { StaticMap } from "@/components/sections/StaticMap";
import { CTASection } from "@/components/common/CTASection";

export const metadata: Metadata = { title: "남구 공약지도 | 정연우.kr", description: "문화예술, 주민자치, 청년정주, 교육, 교통보행, 관광상권, 후적지, 복지 공약을 지도형으로 확인하세요." };
export default function MapPage() { return <><section className="campaign-gradient py-16"><div className="container-page"><p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#0052B8]">남구 공약지도</p><h1 className="mt-5 text-4xl font-black tracking-tight text-[#11205A] md:text-6xl">남구의 핵심 현안을 한눈에</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-[#344054]">대명권, 봉덕·이천권, 앞산·안지랑권, 후적지·교통권의 주요 현안과 약속을 생활권별로 확인하세요.</p></div></section><section className="py-16"><div className="container-page"><SectionTitle eyebrow="공약지도" title="대명권, 봉덕·이천권, 앞산·안지랑권, 후적지·교통권" description="마커를 눌러 현안과 공약을 확인하세요." /><div className="mt-8"><StaticMap /></div></div></section><section className="pb-16"><div className="container-page"><CTASection title="지도에 없는 남구의 문제도 남겨주세요" description="작은 의견도 남구를 바꾸는 공약이 됩니다." href="/voice" buttonLabel="유권자의 소리 남기기" tone="yellow" /></div></section></>; }
