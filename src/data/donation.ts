import { siteConfig } from "@/data/site";

export const donationInfo = {
  name: siteConfig.donationName,
  bank: siteConfig.donationBank,
  account: siteConfig.donationAccount,
  holder: siteConfig.donationAccountHolder,
  phone: siteConfig.phone,
  phoneHref: siteConfig.phoneHref,
};

export const donationGuides = [
  "개인 후원 연간 500만 원까지",
  "10만 원 이하 전액 세액공제",
  "10만 원 초과분은 관련 기준에 따라 세액공제 가능",
  "후원자격은 개인 실명 기준",
  "법인, 단체, 공무원, 교원, 외국인은 제한될 수 있음",
  "후원 영수증 발급을 위해 성명, 주민등록번호, 주소, 연락처, 후원일자 확인이 필요할 수 있음",
  "자세한 내용은 후원회 또는 선거관리위원회 안내를 확인해 주세요.",
];

export const donationFaqs = [
  { q: "후원은 어디로 하나요?", a: "우체국 100-0003-72874, 정연우후원회(남구청장선거)로 후원하실 수 있습니다." },
  { q: "영수증은 어떻게 발급받나요?", a: "성명, 주민등록번호, 주소, 연락처, 후원일자를 문자로 남겨주시면 후원회에서 영수증 발급을 안내합니다." },
  { q: "세액공제는 어떻게 되나요?", a: "10만 원 이하 전액 세액공제, 10만 원 초과분은 관련 기준에 따라 세액공제가 적용될 수 있습니다." },
  { q: "누가 후원할 수 있나요?", a: "개인 실명 후원이 원칙이며, 법인·단체·공무원·교원·외국인 등은 제한될 수 있습니다. 세부 사항은 후원회로 문의해 주세요." },
];
