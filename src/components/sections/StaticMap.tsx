"use client";

import { useMemo, useState } from "react";
import { Landmark, MapPin } from "lucide-react";
import { mapCategories, mapMarkers } from "@/data/map";
import type { MapCategory, MapMarker } from "@/types";
import { MarkerCard } from "@/components/cards/MarkerCard";

const categoryStyles: Record<MapMarker["category"], { marker: string; chip: string }> = {
  문화예술: { marker: "bg-[#FFD84D] text-[#11205A]", chip: "bg-[#FFF7D6] text-[#11205A]" },
  주민자치: { marker: "bg-[#0052B8] text-white", chip: "bg-[#EAF4FF] text-[#0052B8]" },
  청년정주: { marker: "bg-[#0877E8] text-white", chip: "bg-[#EAF4FF] text-[#0052B8]" },
  교육: { marker: "bg-[#6E56CF] text-white", chip: "bg-[#F2EEFF] text-[#4B32A5]" },
  교통보행: { marker: "bg-[#10B981] text-white", chip: "bg-[#ECFDF3] text-[#027A48]" },
  관광상권: { marker: "bg-[#F97316] text-white", chip: "bg-[#FFF4ED] text-[#C2410C]" },
  후적지: { marker: "bg-[#EF4444] text-white", chip: "bg-[#FEF2F2] text-[#B42318]" },
  복지: { marker: "bg-[#475467] text-white", chip: "bg-[#F2F4F7] text-[#344054]" },
};

const zones = [
  { title: "대명 문화예술권", description: "공연거리 · 계대네거리 · 명덕역", className: "border-[#FFE88A] bg-[#FFF7D6]", swatch: "bg-[#FFD84D]" },
  { title: "봉덕·이천 생활권", description: "앞산 생활복지 · 보행안전", className: "border-[#B9DBFF] bg-[#EAF4FF]", swatch: "bg-[#0052B8]" },
  { title: "앞산·안지랑 관광권", description: "체류형 관광 · 가족문화", className: "border-[#D0D5DD] bg-[#F8FAFC]", swatch: "bg-[#10B981]" },
  { title: "후적지·교통축", description: "캠프조지 · 서부정류장 · 순환도로", className: "border-[#FECACA] bg-[#FEF2F2]", swatch: "bg-[#EF4444]" },
];

export function StaticMap({ preview = false }: { preview?: boolean }) {
  const [category, setCategory] = useState<MapCategory>("전체");
  const [selected, setSelected] = useState<MapMarker>(mapMarkers[0]);
  const visible = useMemo(() => mapMarkers.filter((m) => category === "전체" || m.category === category), [category]);
  const markers = preview ? mapMarkers.slice(0, 8) : visible;
  const selectedStyle = categoryStyles[selected.category];
  const handleCategoryChange = (nextCategory: MapCategory) => {
    setCategory(nextCategory);
    const nextMarkers = mapMarkers.filter((m) => nextCategory === "전체" || m.category === nextCategory);
    if (nextMarkers.length > 0) setSelected(nextMarkers[0]);
  };

  return (
    <div className={`grid gap-6 ${preview ? "" : "lg:grid-cols-[1.08fr_0.92fr]"}`}>
      {!preview ? (
        <div className="grid gap-3 md:grid-cols-4 lg:col-span-2">
          {zones.map((zone) => (
            <article key={zone.title} className={`rounded-[1.4rem] border p-4 shadow-sm ${zone.className}`}>
              <p className="flex items-center gap-2 font-black text-[#11205A]"><span className={`h-2.5 w-2.5 rounded-full ${zone.swatch}`} />{zone.title}</p>
              <p className="mt-1 text-sm leading-6 text-[#667085]">{zone.description}</p>
            </article>
          ))}
        </div>
      ) : null}
      <div className="rounded-[2.2rem] border border-[#B9DBFF] bg-[#EAF4FF] p-3 shadow-xl shadow-blue-900/10">
        <div className="overflow-hidden rounded-[1.7rem] bg-white">
          <div className="flex flex-col gap-3 border-b border-[#E5E7EB] p-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="inline-flex rounded-full bg-[#FFF7D6] px-3 py-1 text-xs font-black text-[#11205A]">문화예술 · 주민자치 · 청년정주 · 생활교통</p>
              <h2 className="text-keep mt-3 text-2xl font-black text-[#11205A]">남구 핵심 현안 공약지도</h2>
            </div>
            <p className="text-sm leading-6 text-[#667085]">마커를 선택하면 현안과 약속을 볼 수 있습니다.</p>
          </div>
          <div className={`${preview ? "h-[480px] md:h-[560px]" : "h-[560px] md:h-[660px]"} relative overflow-hidden bg-[#F8FBFF]`}>
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" role="img" aria-label="대구 남구 공약지도">
              <defs>
                <pattern id="namguGrid" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M 8 0 L 0 0 0 8" fill="none" stroke="#D9EAFB" strokeWidth="0.35" /></pattern>
                <linearGradient id="namguBody" x1="14" x2="86" y1="14" y2="88" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F8FBFF" />
                  <stop offset="1" stopColor="#EAF4FF" />
                </linearGradient>
                <filter id="namguShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#11205A" floodOpacity=".12" />
                </filter>
              </defs>
              <rect width="100" height="100" fill="url(#namguGrid)" />
              <path d="M14 20 L58 12 L84 34 L78 84 L42 92 L16 70 Z" fill="url(#namguBody)" stroke="#B9DBFF" strokeWidth="1.2" filter="url(#namguShadow)" />
              <path d="M22 26 L52 20 L58 50 L35 62 L18 48 Z" fill="#FFF7D6" stroke="#FFE88A" strokeWidth=".9" opacity=".96" />
              <path d="M55 18 L82 34 L74 58 L59 51 Z" fill="#EAF4FF" stroke="#B9DBFF" strokeWidth=".9" opacity=".96" />
              <path d="M22 64 L48 56 L74 61 L78 83 L42 91 L16 71 Z" fill="#F8FAFC" stroke="#D0D5DD" strokeWidth=".9" opacity=".97" />
              <path d="M60 55 L76 62 L78 84 L62 80 L52 66 Z" fill="#FEF2F2" stroke="#FECACA" strokeWidth=".8" opacity=".9" />
              <path d="M12 78 C30 68 48 75 62 65 C72 58 82 60 92 52" fill="none" stroke="#B9DBFF" strokeWidth="8" strokeLinecap="round" opacity=".56" />
              <path d="M12 78 C30 68 48 75 62 65 C72 58 82 60 92 52" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".96" />
              <path d="M19 48 C32 43 47 47 58 50 C65 52 72 50 80 46" fill="none" stroke="#0052B8" strokeWidth="1.2" strokeDasharray="2 2" opacity=".38" />
              <path d="M42 91 C48 75 53 62 58 50 C62 40 68 35 82 34" fill="none" stroke="#0052B8" strokeWidth="1.2" strokeDasharray="2 2" opacity=".38" />
              <circle cx="58" cy="50" r="2.6" fill="#fff" stroke="#0052B8" strokeWidth=".7" opacity=".88" />
            </svg>
            {markers.map((marker) => {
              const active = marker.title === selected.title;
              return (
                <button key={marker.title} type="button" onClick={() => setSelected(marker)} className="group absolute -translate-x-1/2 -translate-y-full" style={{ left: `${marker.x}%`, top: `${marker.y}%` }} aria-label={`${marker.title} 공약 보기`}>
                  <span className={`flex items-center justify-center rounded-full border-[3px] border-white shadow-xl transition group-hover:-translate-y-1 ${active ? "h-11 w-11 bg-[#0052B8] text-white ring-4 ring-[#FFD84D]/70" : `h-9 w-9 ${categoryStyles[marker.category].marker}`}`}><MapPin size={active ? 20 : 17} fill="currentColor" aria-hidden /></span>
                </button>
              );
            })}
            <div className="absolute bottom-3 left-3 right-3 rounded-[1.5rem] border border-white/80 bg-white/95 p-4 shadow-xl backdrop-blur md:bottom-4 md:left-4 md:right-auto md:max-w-[420px] md:p-5">
              <p className={`inline-flex rounded-full px-3 py-1 text-xs font-black ${selectedStyle.chip}`}>{selected.category} · {selected.area}</p>
              <p className="text-keep mt-3 text-xl font-black text-[#11205A]">{selected.title}</p>
              <p className="mt-2 font-bold text-[#0052B8]">{selected.issue}</p>
              <p className="mt-2 leading-7 text-[#667085]">{selected.pledge}</p>
            </div>
            {!preview ? <div className="absolute left-4 right-4 top-4 grid gap-2 sm:grid-cols-2 md:right-auto md:w-[360px]">
              {zones.map((zone) => (
                <div key={zone.title} className="rounded-2xl border border-white/80 bg-white/90 px-3 py-2 shadow-sm backdrop-blur">
                  <p className="flex items-center gap-2 text-xs font-black text-[#11205A]"><span className={`h-2 w-2 rounded-full ${zone.swatch}`} />{zone.title}</p>
                  <p className="mt-0.5 text-[11px] font-bold leading-4 text-[#667085]">{zone.description}</p>
                </div>
              ))}
            </div> : null}
          </div>
        </div>
      </div>
      {!preview ? (
        <aside className="grid gap-4 lg:content-start">
          <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2"><Landmark size={19} className="text-[#0052B8]" aria-hidden /><p className="font-black text-[#11205A]">현안 분류</p></div>
            <div className="mt-4 flex flex-wrap gap-2">{mapCategories.map((item) => <button key={item} type="button" onClick={() => handleCategoryChange(item)} className={`rounded-full border px-4 py-2 text-sm font-black transition ${category === item ? "border-[#0052B8] bg-[#0052B8] text-white shadow-lg shadow-blue-900/10" : "border-[#E5E7EB] bg-white text-[#11205A] hover:border-[#B9DBFF] hover:bg-[#F8FBFF]"}`}>{item}</button>)}</div>
          </div>
          <div className="rounded-[2rem] border border-[#B9DBFF] bg-[#F8FBFF] p-5 shadow-sm">
            <p className="text-xs font-black text-[#0052B8]">선택된 약속</p>
            <h3 className="text-keep mt-2 text-2xl font-black text-[#11205A]">{selected.title}</h3>
            <p className="mt-3 leading-7 text-[#667085]">{selected.pledge}</p>
          </div>
          <div className="grid max-h-[560px] gap-2 overflow-y-auto pr-1">{visible.map((marker) => <MarkerCard key={marker.title} marker={marker} selected={selected.title === marker.title} onClick={() => setSelected(marker)} />)}</div>
        </aside>
      ) : null}
    </div>
  );
}
