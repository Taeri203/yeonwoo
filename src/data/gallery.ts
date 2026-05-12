import { siteConfig } from "@/data/site";
import type { GalleryItem } from "@/types";

export const galleryItems: GalleryItem[] = [
  { title: "메인 후보 배너", description: "젊은 변화, 새로운 남구를 담은 정연우 후보 메인 배너", src: siteConfig.images.heroMain, alt: "정연우 대구 남구청장 후보 메인 배너", kind: "메인" },
  { title: "현장 소통 배너", description: "거리에서 듣고, 구청에서 바꾸겠다는 현장형 후보 이미지", src: siteConfig.images.fieldCampaign, alt: "거리에서 시민을 만나는 정연우 남구청장 후보 배너", kind: "현장" },
  { title: "핵심 비전 배너", description: "남구의 변화를 위한 5대 핵심 비전", src: siteConfig.images.coreVision, alt: "정연우 후보 남구 핵심 비전 배너", kind: "비전" },
  { title: "후원회 배너", description: "정연우후원회 후원 안내 이미지", src: siteConfig.images.donationBanner, alt: "정연우후원회 남구청장선거 후원 안내 배너", kind: "후원" },
];
