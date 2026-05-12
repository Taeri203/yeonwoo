"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send, X } from "lucide-react";

const residences = ["이천동", "봉덕1동", "봉덕2동", "봉덕3동", "대명1동", "대명2동", "대명3동", "대명4동", "대명5동", "대명6동", "대명9동", "대명10동", "대명11동", "기타"];
const categories = ["문화예술", "주민자치", "교육", "청년정주", "교통·보행", "관광·상권", "복지", "주거·도시재생", "후적지 개발", "기타"];

export function VoiceForm() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitted(true); event.currentTarget.reset(); }
  return (
    <>
      <form onSubmit={handleSubmit} className="grid gap-5 rounded-[2rem] border border-[#E5E7EB] bg-white p-5 shadow-xl md:p-8">
        <div className="grid gap-5 md:grid-cols-2"><Field label="이름" id="name"><input required id="name" name="name" className="form-input" placeholder="성함을 입력해 주세요" /></Field><Field label="연락처" id="phone"><input required id="phone" name="phone" className="form-input" placeholder="010-0000-0000" /></Field></div>
        <div className="grid gap-5 md:grid-cols-2"><Field label="거주지" id="residence"><select required id="residence" name="residence" className="form-input"><option value="">선택</option>{residences.map((r) => <option key={r}>{r}</option>)}</select></Field><Field label="분야" id="category"><select required id="category" name="category" className="form-input"><option value="">선택</option>{categories.map((c) => <option key={c}>{c}</option>)}</select></Field></div>
        <Field label="위치" id="location"><input id="location" name="location" className="form-input" placeholder="예: 대명공연거리 인근" /></Field>
        <Field label="제목" id="title"><input required id="title" name="title" className="form-input" placeholder="의견을 한 줄로 적어주세요" /></Field>
        <Field label="내용" id="content"><textarea required id="content" name="content" rows={7} className="form-input resize-y" placeholder="언제, 어디서, 어떤 의견이 있는지 편하게 적어주세요." /></Field>
        <label className="flex items-center gap-3 rounded-2xl bg-[#F8FAFC] p-4 text-sm font-bold text-[#344054]"><input type="checkbox" name="reply" />답변을 희망합니다.</label>
        <div className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-4 text-sm leading-7 text-[#667085]">정연우 선거사무소는 유권자 의견 접수 및 답변을 위해 이름, 연락처, 거주지, 의견 내용을 수집합니다. 수집된 정보는 의견 확인 및 답변 목적으로만 사용되며 목적 달성 시 파기됩니다.</div>
        <label className="flex items-start gap-3 rounded-2xl bg-[#FFF7D6] p-4 text-sm font-bold text-[#344054]"><input required type="checkbox" className="mt-1" aria-label="개인정보 수집 동의" />개인정보 수집 및 이용에 동의합니다.</label>
        <p className="text-sm font-bold text-[#667085]">현재 페이지는 시안 버전으로, 실제 저장 기능은 운영 단계에서 연결됩니다.</p>
        <button type="submit" className="btn-base btn-primary text-lg"><Send size={19} aria-hidden />의견 남기기</button>
      </form>
      {submitted ? <div className="fixed inset-0 z-[90] flex items-center justify-center bg-[#11205A]/70 p-4"><div className="max-w-lg rounded-[2rem] bg-white p-8 text-center shadow-2xl"><button type="button" onClick={() => setSubmitted(false)} className="ml-auto block rounded-full bg-[#F8FAFC] p-2"><X size={20} aria-label="닫기" /></button><CheckCircle2 size={52} className="mx-auto text-[#0052B8]" aria-hidden /><h2 className="mt-4 text-3xl font-black text-[#11205A]">의견이 접수될 준비가 되었습니다</h2><p className="mt-3 leading-8 text-[#667085]">실제 운영 시 정연우 캠프가 확인 후 공약과 현장점검에 반영하겠습니다.</p></div></div> : null}
    </>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) { return <div><label htmlFor={id} className="mb-2 block text-sm font-black text-[#11205A]">{label}</label>{children}</div>; }
