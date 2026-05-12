"use client";

import { useMemo, useState } from "react";
import { Landmark, MapPin } from "lucide-react";
import { mapCategories, mapMarkers } from "@/data/map";
import type { MapCategory, MapMarker } from "@/types";
import { MarkerCard } from "@/components/cards/MarkerCard";

const colorByCategory: Record<MapMarker["category"], string> = {
  문화예술: "bg-[#FFD84D] text-[#11205A]",
  주민자치: "bg-[#0052B8] text-white",
  청년정주: "bg-[#0877E8] text-white",
  교육: "bg-[#6E56CF] text-white",
  교통보행: "bg-[#10B981] text-white",
  관광상권: "bg-[#F97316] text-white",
  후적지: "bg-[#EF4444] text-white",
  복지: "bg-[#475467] text-white",
};

export function StaticMap({ preview = false }: { preview?: boolean }) {
  const [category, setCategory] = useState<MapCategory>("전체");
  const [selected, setSelected] = useState<MapMarker>(mapMarkers[0]);
  const visible = useMemo(() => mapMarkers.filter((m) => category === "전체" || m.category === category), [category]);
  const markers = preview ? mapMarkers.slice(0, 8) : visible;

  return (
    <div className={`grid gap-6 ${preview ? "" : "lg:grid-cols-[1.08fr_0.92fr]"}`}>
      <div className="rounded-[2rem] border border-[#B9DBFF] bg-[#EAF4FF] p-3 shadow-xl shadow-blue-900/10">
        <div className="overflow-hidden rounded-[1.5rem] bg-white">
          <div className="flex flex-col gap-3 border-b border-[#E5E7EB] p-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="inline-flex rounded-full bg-[#FFF7D6] px-3 py-1 text-xs font-black text-[#11205A]">대명권 · 봉덕이천권 · 앞산안지랑권 · 후적지교통권</p>
              <h2 className="mt-3 text-2xl font-black text-[#11205A]">남구 핵심 현안 공약지도</h2>
            </div>
            <p className="text-sm leading-6 text-[#667085]">마커를 선택하면 현안과 약속을 볼 수 있습니다.</p>
          </div>
          <div className="relative h-[520px] overflow-hidden bg-[#F8FBFF] md:h-[620px]">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" role="img" aria-label="대구 남구 공약지도">
              <defs><pattern id="namguGrid" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M 8 0 L 0 0 0 8" fill="none" stroke="#D9EAFB" strokeWidth="0.35" /></pattern></defs>
              <rect width="100" height="100" fill="url(#namguGrid)" />
              <path d="M14 20 L58 12 L84 34 L78 84 L42 92 L16 70 Z" fill="#EAF4FF" stroke="#B9DBFF" strokeWidth="1" />
              <path d="M22 26 L52 20 L58 50 L35 62 L18 48 Z" fill="#FFF7D6" stroke="#FFE88A" strokeWidth=".8" opacity=".95" />
              <path d="M55 18 L82 34 L74 58 L59 51 Z" fill="#EAF4FF" stroke="#B9DBFF" strokeWidth=".8" opacity=".95" />
              <path d="M22 64 L48 56 L74 61 L78 83 L42 91 L16 71 Z" fill="#F8FAFC" stroke="#D0D5DD" strokeWidth=".8" opacity=".95" />
              <path d="M12 78 C30 68 48 75 62 65 C72 58 82 60 92 52" fill="none" stroke="#B9DBFF" strokeWidth="8" strokeLinecap="round" opacity=".6" />
              <path d="M12 78 C30 68 48 75 62 65 C72 58 82 60 92 52" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
              <text x="30" y="36" fill="#11205A" fontSize="4" fontWeight="800">대명 문화예술권</text>
              <text x="59" y="34" fill="#11205A" fontSize="4" fontWeight="800">봉덕·이천권</text>
              <text x="34" y="80" fill="#11205A" fontSize="4" fontWeight="800">앞산·안지랑권</text>
              <text x="62" y="72" fill="#0052B8" fontSize="3" fontWeight="800">후적지·교통축</text>
            </svg>
            {markers.map((marker) => {
              const active = marker.title === selected.title;
              return (
                <button key={marker.title} type="button" onClick={() => setSelected(marker)} className="absolute -translate-x-1/2 -translate-y-full" style={{ left: `${marker.x}%`, top: `${marker.y}%` }} aria-label={`${marker.title} 공약 보기`}>
                  <span className={`flex h-10 w-10 items-center justify-center rounded-full border-4 border-white shadow-xl transition ${active ? "scale-110 bg-[#0052B8] text-white ring-4 ring-[#FFD84D]/70" : colorByCategory[marker.category]}`}><MapPin size={19} fill="currentColor" aria-hidden /></span>
                </button>
              );
            })}
            <div className="absolute bottom-4 left-4 right-4 rounded-[1.5rem] border border-white/80 bg-white/95 p-5 shadow-xl md:right-auto md:max-w-md">
              <p className="text-xs font-black text-[#0052B8]">{selected.category} · {selected.area}</p>
              <p className="mt-2 text-xl font-black text-[#11205A]">{selected.title}</p>
              <p className="mt-2 font-bold text-[#0052B8]">{selected.issue}</p>
              <p className="mt-2 leading-7 text-[#667085]">{selected.pledge}</p>
            </div>
          </div>
        </div>
      </div>
      {!preview ? (
        <aside className="grid gap-4 lg:content-start">
          <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2"><Landmark size={19} className="text-[#0052B8]" aria-hidden /><p className="font-black text-[#11205A]">현안 분류</p></div>
            <div className="mt-4 flex flex-wrap gap-2">{mapCategories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} className={`rounded-full border px-4 py-2 text-sm font-black ${category === item ? "border-[#0052B8] bg-[#0052B8] text-white" : "border-[#E5E7EB] bg-white text-[#11205A]"}`}>{item}</button>)}</div>
          </div>
          <div className="grid max-h-[560px] gap-2 overflow-y-auto pr-1">{visible.map((marker) => <MarkerCard key={marker.title} marker={marker} selected={selected.title === marker.title} onClick={() => setSelected(marker)} />)}</div>
        </aside>
      ) : null}
    </div>
  );
}
