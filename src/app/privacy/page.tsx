import type { Metadata } from "next";

export const metadata: Metadata = { title: "개인정보처리방침 | 정연우.kr", description: "정연우.kr 유권자의 소리 개인정보 처리 안내입니다." };

const sections = [
  { title: "수집 항목", body: "이름, 연락처, 거주지, 의견 제목과 내용, 답변 희망 여부를 수집할 수 있습니다." },
  { title: "수집 목적", body: "유권자 의견 확인, 공약 보완, 현장점검, 답변 안내 목적으로 사용합니다." },
  { title: "보유 기간", body: "목적 달성 시 지체 없이 파기하는 것을 원칙으로 합니다." },
  { title: "제3자 제공 원칙", body: "법령에 따른 경우를 제외하고 동의 없이 제3자에게 제공하지 않습니다." },
  { title: "동의 거부권", body: "개인정보 수집에 동의하지 않을 수 있으며, 이 경우 의견 접수와 답변이 제한될 수 있습니다." },
  { title: "문의처", body: "정연우 선거사무소 · 전화 010-8054-8586" },
];

export default function PrivacyPage() {
  return <><section className="campaign-gradient py-16"><div className="container-page"><p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#0052B8]">개인정보처리방침</p><h1 className="mt-5 text-4xl font-black tracking-tight text-[#11205A] md:text-6xl">개인정보처리방침</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-[#344054]">유권자의 소리 접수와 답변을 위한 개인정보 처리 기준입니다.</p></div></section><section className="py-16"><div className="container-page grid gap-4">{sections.map((section) => <article key={section.title} className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-6 shadow-sm"><h2 className="text-2xl font-black text-[#11205A]">{section.title}</h2><p className="mt-3 leading-8 text-[#667085]">{section.body}</p></article>)}</div></section></>;
}
