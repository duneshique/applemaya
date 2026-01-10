import { imageData } from './images';

export const flowerWorks = [
  { id: 1, title: "Spring Bouquet", category: "Bouquet", image: "/images/flowers/spring-bouquet.webp", description: "튤립과 라넌큘러스의 봄 부케" },
  { id: 2, title: "Autumn Table", category: "Table Setting", image: "/images/flowers/autumn-table.webp", description: "가을 정취를 담은 테이블 세팅" },
  { id: 3, title: "Winter Wreath", category: "Wreath", image: "/images/flowers/winter-wreath.webp", description: "포근한 겨울 리스" },
  { id: 4, title: "Summer Box", category: "Arrangement", image: "/images/flowers/summer-box.webp", description: "청량한 여름 플라워 박스" },
  { id: 5, title: "Garden Party", category: "Table Setting", image: "/images/flowers/garden-party.webp", description: "야외 정원 파티 스타일링" },
  { id: 6, title: "Pastel Dream", category: "Bouquet", image: "/images/flowers/pastel-dream.webp", description: "파스텔톤의 로맨틱 부케" },
  // ... extra mock data for masonry
  { id: 7, title: "Wild Flower", category: "Arrangement", image: "/images/flowers/wild-flower.webp", description: "들꽃의 자연스러운 멋" },
  { id: 8, title: "Eucalyptus Wreath", category: "Wreath", image: "/images/flowers/eucalyptus.webp", description: "유칼립투스 향 가득한 리스" },
];

export const monthlyFloraArchive = [
  {
    id: 1,
    year: 2026,
    month: 1,
    title: "새해를 맞이하는 에코 리스",
    image: imageData.flowers.monthly[0].src,
    summary: "재활용 소재로 만드는 새해 리스 레시피",
    link: "https://floragreen.shop.blogpay.co.kr/"
  },
  {
    id: 2,
    year: 2025,
    month: 12,
    title: "크리스마스 테이블 센터피스",
    image: "/images/flowers/flora-dec-2025.webp",
    summary: "침엽수와 빨간 열매로 만드는 테이블 장식",
    link: "https://floragreen.shop.blogpay.co.kr/"
  }
];

export const onlineClasses = [
  {
    id: 1,
    level: "Basic",
    title: "Eco Flower Basic Class",
    description: "기본기를 다지는 기초 클래스",
    lectures: 26,
    duration: "4시간",
    materials: ["비법노트", "도구 키트 별도 구매 가능"],
    platforms: [
      { name: "BEAR-U", url: "https://bear-u.com/course/?courseId=38" },
      { name: "LiveKlass", url: "https://liveklass.com/ch/mayaflor" }
    ],
    thumbnail: imageData.flowers.gallery[0].src
  },
  {
    id: 2,
    level: "Advanced",
    title: "Eco Flower Advanced Class",
    description: "심화 과정: 부케 & 어레인지먼트",
    parts: [
      { name: "Part 1: Bouquet", lectures: 13 },
      { name: "Part 2: Arrangement", lectures: 25 }
    ],
    materials: ["PDF 섹션 8개"],
    platforms: [
      { name: "LiveKlass", url: "https://liveklass.com/ch/mayaflor" }
    ],
    thumbnail: imageData.flowers.gallery[0].src
  }
];
