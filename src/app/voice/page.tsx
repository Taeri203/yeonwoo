import type { Metadata } from "next";
import { SectionTitle } from "@/components/common/SectionTitle";
import { CampaignImageBlock } from "@/components/sections/CampaignImageBlock";
import { VoiceForm } from "@/components/forms/VoiceForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = { title: "유권자의 소리 | 정연우.kr", description: "남구의 문화, 교육, 교통, 복지, 주거 의견을 정연우 후보에게 남겨주세요." };
export default function VoicePage() { return <><section className="campaign-gradient py-16"><div className="container-page"><p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#0052B8]">유권자의 소리</p><h1 className="mt-5 text-4xl font-black tracking-tight text-[#11205A] md:text-6xl">유권자의 소리</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-[#344054]">남구의 문화, 교육, 교통, 복지, 주거 의견을 남겨주세요.</p></div></section><section className="py-16"><div className="container-page grid gap-8 lg:grid-cols-[0.72fr_1.28fr]"><div className="grid gap-5 self-start"><SectionTitle title="거리에서 듣고 구청에서 바꾸겠습니다" description="생활 속 불편과 필요한 변화를 편하게 들려주세요." /><CampaignImageBlock src={siteConfig.images.fieldCampaign} alt="거리에서 시민을 만나는 정연우 남구청장 후보 배너" title="현장에서 듣겠습니다" description="남구 주민의 목소리가 공약의 시작입니다." /></div><VoiceForm /></div></section></>; }
