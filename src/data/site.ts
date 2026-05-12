import type { NavItem } from "@/types";

export const siteConfig = {
  siteName: "정연우.kr",
  candidateName: "정연우",
  party: "더불어민주당",
  electionName: "대구 남구청장 후보",
  area: "대구광역시 남구",
  slogan: "젊은 변화, 새로운 남구",
  mainVision: "남구를 대구 문화예술의 심장으로",
  heroTitle: "거리에서 듣고, 구청에서 바꾸겠습니다",
  heroSubtitle: "지역자치 · 문화예술 · 미래세대",
  phone: "010-8054-8586",
  phoneHref: "tel:01080548586",
  donationName: "정연우후원회(남구청장선거)",
  donationBank: "우체국",
  donationAccount: "100-0003-72874",
  donationAccountHolder: "정연우후원회(남구청장선거)",
  images: {
    heroMain: "/images/banners/hero-main.png",
    fieldCampaign: "/images/banners/field-campaign.png",
    coreVision: "/images/banners/core-vision.png",
    donationBanner: "/images/banners/donation-banner.png",
    profileCrop: "/images/candidate/candidate-profile-crop.png",
    fieldCrop: "/images/candidate/candidate-field-crop.png",
  },
};

export const navItems: NavItem[] = [
  { label: "정연우 소개", href: "/about" },
  { label: "핵심 공약", href: "/pledges" },
  { label: "대명 프로젝트", href: "/daemyeong" },
  { label: "동별 공약", href: "/districts" },
  { label: "남구 공약지도", href: "/map" },
  { label: "유권자의 소리", href: "/voice" },
  { label: "후원회", href: "/donation" },
  { label: "홍보 이미지", href: "/gallery" },
];

export const namguInfo = {
  type: "도심 생활권",
  dongCount: 13,
  dongs: ["이천동", "봉덕1동", "봉덕2동", "봉덕3동", "대명1동", "대명2동", "대명3동", "대명4동", "대명5동", "대명6동", "대명9동", "대명10동", "대명11동"],
  resources: ["대명공연거리", "대명공연예술센터", "계명대 대명캠퍼스", "명덕역", "앞산", "안지랑곱창골목", "앞산카페거리", "고산골 공룡공원", "캠프조지 후적지", "서부정류장", "3차 순환도로"],
  challenges: ["인구감소", "고령화", "청년정주", "문화예술 생태계 지원", "교육환경", "골목상권", "보행안전", "후적지 개발", "관광상권 연계"],
};

export const defaultSeo = {
  title: "정연우.kr | 젊은 변화, 새로운 남구",
  description: "더불어민주당 정연우 대구 남구청장 후보의 대명 프로젝트, 문화예술, 주민자치, 청년정주, 공교육, 교통·보행 공약을 확인하세요.",
};
