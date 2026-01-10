import { imageData } from './images';

export const mediaData = [
  {
    id: 1,
    date: "2025-08-04",
    outlet: "YES24 채널",
    title: "[브런치북 12회 대상 작가] 문혜정 작가 인터뷰",
    excerpt: "운명은 정해져 있지만 내 선택으로 매 순간 바뀔 수 있다는 것이 타로카드의 매력 같아요",
    thumbnail: imageData.media.featured.src,
    link: "https://ch.yes24.com/article/details/81401",
    category: "Interview",
    featured: true
  },
  {
    id: 2,
    date: "2024-11-20",
    outlet: "중앙일보",
    title: "타로로 마음을 말하다, 문혜정의 힐링 스토리",
    excerpt: "그녀의 소설은 타로라는 소재를 통해 현대인의 고독과 희망을 동시에 비춘다.",
    thumbnail: "/images/media/newspaper-1.webp",
    link: "https://example.com/interview1",
    category: "Review"
  },
  {
    id: 3,
    date: "2024-05-15",
    outlet: "Brunch",
    title: "브런치북 12기 대상 수상 소감",
    excerpt: "글을 쓰는 시간은 저에게 있어 가장 고귀한 꽃을 피우는 시간과 같았습니다.",
    thumbnail: "/images/media/brunch-award.webp",
    link: "https://brunch.co.kr",
    category: "Award"
  },
  {
    id: 4,
    date: "2023-10-10",
    outlet: "VOGUE",
    title: "에코 플라워: 환경을 생각하는 아름다움",
    excerpt: "꽃을 다루는 사람이라면 자연을 먼저 생각해야 한다는 그녀의 철학.",
    thumbnail: "/images/media/vogue-feature.webp",
    link: "https://example.com/vogue",
    category: "Interview"
  }
];
