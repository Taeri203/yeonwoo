import { MapPin } from "lucide-react";
import type { MapMarker } from "@/types";

export function MarkerCard({ marker, selected, onClick }: { marker: MapMarker; selected?: boolean; onClick?: () => void }) {
  return (
    <button type="button" onClick={onClick} className={`rounded-2xl border p-4 text-left transition ${selected ? "border-[#0052B8] bg-[#0052B8] text-white" : "border-[#E5E7EB] bg-white text-[#11205A] hover:border-[#B9DBFF] hover:bg-[#F8FBFF]"}`}>
      <span className={`inline-flex items-center gap-1.5 text-xs font-black ${selected ? "text-[#FFD84D]" : "text-[#0052B8]"}`}><MapPin size={14} fill="currentColor" aria-hidden />{marker.category} · {marker.area}</span>
      <span className="mt-2 block font-black leading-6">{marker.title}</span>
      <span className={`mt-1 block text-sm leading-6 ${selected ? "text-blue-50" : "text-[#667085]"}`}>{marker.issue}</span>
    </button>
  );
}
