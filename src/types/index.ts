import type { LucideIcon } from "lucide-react";

export type NavItem = { label: string; href: string };

export type Pledge = {
  id: string;
  category: string;
  title: string;
  summary: string;
  tasks: string[];
  principle: string;
};

export type DistrictGroup = {
  name: string;
  areas: string[];
  direction: string;
  description: string;
  pledges: string[];
};

export type MapCategory = "전체" | "문화예술" | "주민자치" | "청년정주" | "교육" | "교통보행" | "관광상권" | "후적지" | "복지";

export type MapMarker = {
  title: string;
  category: Exclude<MapCategory, "전체">;
  issue: string;
  pledge: string;
  area: string;
  x: number;
  y: number;
};

export type GalleryItem = {
  title: string;
  description: string;
  src: string;
  alt: string;
  kind: "메인" | "현장" | "비전" | "후원";
};

export type Generation = {
  audience: string;
  title: string;
  message: string;
  icon: LucideIcon;
  pledges: string[];
};
