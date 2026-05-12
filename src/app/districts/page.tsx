import type { Metadata } from "next";
import { SectionTitle } from "@/components/common/SectionTitle";
import { DistrictCard } from "@/components/cards/DistrictCard";
import { CTASection } from "@/components/common/CTASection";
import { districtGroups } from "@/data/districts";

export const metadata: Metadata = { title: "동별 공약 | 정연우.kr", description: "남구 13개 동을 생활권별로 묶어 정연우 후보의 생활공약을 안내합니다." };
export default function DistrictsPage() { return <><section className="campaign-gradient py-16"><div className="container-page"><p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#0052B8]">동별 공약</p><h1 className="mt-5 text-4xl font-black tracking-tight text-[#11205A] md:text-6xl">동별·생활권별 공약</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-[#344054]">남구의 13개 동, 필요한 변화는 생활권마다 다릅니다.</p></div></section><section className="py-16"><div className="container-page grid gap-6">{districtGroups.map((district) => <DistrictCard key={district.name} district={district} />)}</div></section><section className="pb-16"><div className="container-page"><CTASection title="우리 동네 공약을 지도에서 확인하세요" description="지도에 없는 문제도 유권자의 소리로 남겨주세요." href="/map" buttonLabel="남구 공약지도 보기" /></div></section></>; }
