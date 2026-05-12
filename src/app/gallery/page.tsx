import type { Metadata } from "next";
import { SectionTitle } from "@/components/common/SectionTitle";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = { title: "홍보 이미지 | 정연우.kr", description: "정연우 후보의 메인, 현장, 비전, 후원회 배너 이미지를 확인하세요." };
export default function GalleryPage() { return <><section className="campaign-gradient py-16"><div className="container-page"><p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#0052B8]">홍보 이미지</p><h1 className="mt-5 text-4xl font-black tracking-tight text-[#11205A] md:text-6xl">홍보 이미지</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-[#344054]">정연우 후보의 핵심 배너 이미지를 확인하세요.</p></div></section><section className="py-16"><div className="container-page"><SectionTitle title="젊은 변화, 새로운 남구" description="이미지를 클릭하면 크게 볼 수 있습니다." /><div className="mt-10"><GalleryGrid items={galleryItems} /></div></div></section></>; }
