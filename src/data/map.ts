import type { MapCategory, MapMarker } from "@/types";

export const mapCategories: MapCategory[] = ["전체", "문화예술", "주민자치", "청년정주", "교육", "교통보행", "관광상권", "후적지", "복지"];

export const mapMarkers: MapMarker[] = [
  { title: "대명공연거리", category: "문화예술", issue: "자생적 예술 생태계", pledge: "대명 프로젝트와 다원공연예술 지원", area: "대명권", x: 40, y: 38 },
  { title: "대명공연예술센터", category: "문화예술", issue: "중간지원조직 필요", pledge: "예술인과 행정을 연결하는 지원조직 강화", area: "대명권", x: 46, y: 44 },
  { title: "계대네거리~명덕역", category: "문화예술", issue: "문화예술촌 축 조성", pledge: "대명·계대네거리 문화예술특구 추진", area: "대명권", x: 53, y: 32 },
  { title: "13개 동 주민자치회", category: "주민자치", issue: "주민 참여 행정", pledge: "모든 동 주민자치회 설립 추진", area: "전 남구", x: 58, y: 50 },
  { title: "구청 공개행정", category: "주민자치", issue: "행정 투명성", pledge: "회의 공개, 생중계, 주민 공론장", area: "구청", x: 61, y: 42 },
  { title: "청년정주 거점", category: "청년정주", issue: "인구소멸 대응", pledge: "청년 주거비 보조, 남구형 임대주택, 지역정착 프로그램", area: "대명·봉덕", x: 50, y: 56 },
  { title: "남구형 공교육 플랫폼", category: "교육", issue: "공교육 정상화 지원", pledge: "마을·학교·예술가가 함께하는 교육지원", area: "전 남구", x: 38, y: 58 },
  { title: "주요 네거리", category: "교통보행", issue: "보행자 안전", pledge: "X자 횡단보도 설치 검토", area: "생활도로", x: 65, y: 58 },
  { title: "남구형 마을버스", category: "교통보행", issue: "동네 이동성", pledge: "마을버스 시범 운영 검토", area: "전 남구", x: 70, y: 48 },
  { title: "전기자전거 친화도시", category: "교통보행", issue: "짧은 거리 이동", pledge: "자전거도로망과 전기자전거 친화 환경 조성", area: "전 남구", x: 55, y: 70 },
  { title: "3차 순환도로 서편", category: "교통보행", issue: "도심 교통망", pledge: "3차 순환도로 완전 개통 추진", area: "교통축", x: 75, y: 66 },
  { title: "앞산 가족문화 복합센터", category: "관광상권", issue: "가족문화와 관광 연계", pledge: "앞산 가족문화 복합센터 조성 추진", area: "앞산권", x: 34, y: 78 },
  { title: "안지랑곱창골목", category: "관광상권", issue: "대표 상권 활성화", pledge: "앞산·안지랑·대명 문화관광 동선 구축", area: "안지랑", x: 44, y: 74 },
  { title: "앞산카페거리·앞산전망대", category: "관광상권", issue: "체류형 관광", pledge: "머무르는 남구 관광코스", area: "앞산권", x: 50, y: 82 },
  { title: "고산골 공룡공원", category: "관광상권", issue: "가족 관광", pledge: "앞산 가족문화·어린이 관광 동선 연결", area: "고산골", x: 28, y: 69 },
  { title: "앞산 생활복지권", category: "복지", issue: "어르신 생활 안전", pledge: "앞산 생활권 복지·여가 프로그램과 보행 안전을 함께 정비", area: "봉덕·이천", x: 31, y: 61 },
  { title: "캠프조지 후적지", category: "후적지", issue: "행정복합타운", pledge: "캠프조지 후적지 행정복합타운 조성 추진", area: "후적지", x: 67, y: 30 },
  { title: "서부정류장 후적지", category: "후적지", issue: "도시재생과 개발", pledge: "서부정류장 후적지 개발", area: "서부정류장", x: 76, y: 78 },
  { title: "전선 지중화", category: "후적지", issue: "도시경관 개선", pledge: "도심 경관 개선과 노후 주거지 정비", area: "주거지", x: 62, y: 76 },
];
