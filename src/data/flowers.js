/**
 * Flowers data - single source of truth for all flower-related components.
 * Used by: FlowersSection (home), FlowersArchive (flowers page)
 */

export const floraItems = [
  { year: '2023', month: 'April', title: '2023, April Issue', thumbnail: '/images/flora/flora_2023_04.webp', link: 'https://product.kyobobook.co.kr/detail/S000201360836' },
  { year: '2023', month: 'February', title: '2023, February Issue', thumbnail: '/images/flora/flora_2023_02.webp', link: 'https://product.kyobobook.co.kr/detail/S000200787686' },
  { year: '2023', month: 'January', title: '2023, January Issue', thumbnail: '/images/flora/flora_2023_01.webp', link: 'https://product.kyobobook.co.kr/detail/S000200554180' },
  { year: '2022', month: 'November', title: '2022, November Issue', thumbnail: '/images/flora/flora_2022_11.webp', link: 'https://product.kyobobook.co.kr/detail/S000200128281' },
  { year: '2022', month: 'October', title: '2022, October Issue', thumbnail: '/images/flora/flora_2022_10.webp', link: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000005018101' },
  { year: '2022', month: 'August', title: '2022, August Issue', thumbnail: '/images/flora/flora_2022_08.webp', link: 'https://product.kyobobook.co.kr/detail/S000000327681' },
];

export const projectItems = [
  {
    title: 'Sustainability & Eco Projects',
    subtitle: '지속가능한 디자인을 향한 크라우드펀딩 및 출간 프로젝트',
    isSpecial: true,
    items: [
      {
        name: "선물 <에코 플라워 디자인>",
        desc: "일회용 플로럴폼을 대신하는 친환경 기법 소개. 텀블벅 325% 달성 및 'Eco Flower Recipe' 도서 출간의 모태.",
        url: 'https://tumblbug.com/ecoflower',
        thumbnail: '/images/flowers/project_ecoflower.webp'
      },
      {
        name: "에세이 <일년, 열두달 흔들리는 꽃>",
        desc: "제철 꽃들이 선사하는 위로의 기록. 텀블벅 251% 달성 후 '꽃이 필요한 모든 순간'으로 정식 출간.",
        url: 'https://tumblbug.com/yearflower',
        thumbnail: '/images/flowers/project_yearflower.webp'
      }
    ]
  },
  {
    title: '농림축산식품부 X aT 계절 꽃 프로젝트',
    subtitle: '꽃문화 플랫폼 겨울꽃 시즌 참여',
    items: [
      { name: "겨울꽃: 심비디움 '우아하고 유니크한 심비디움 부케'", url: 'https://www.instagram.com/p/CI-GFwzn_6s/' },
      { name: "겨울꽃: 스카비오사 '시험관 어레인지먼트'", url: 'https://www.instagram.com/p/CIDHpINnaYQ/' },
      { name: "겨울꽃: 아네모네 '파티 어레인지먼트'", url: 'https://www.instagram.com/p/CH-I3YUHjrC/' },
    ]
  }
];

export const classItems = [
  {
    title: 'Part 1. Bouquet',
    subtitle: 'Design your own Bouquet',
    desc: 'Video lectures and text handbook to start your Mayaflor flower design workshop',
    curriculum: ['Light Bouquet', 'Bold Bouquet', 'Vivid Bouquet', 'Neutral Bouquet'],
    link: 'https://mayaflor.liveklass.com/classes/6942',
    thumbnail: '/images/flowers/class_bouquet.webp'
  },
  {
    title: 'Part 2. No-Floral Foam Arrangement',
    subtitle: 'Sustainable techniques for eco-friendly design',
    desc: 'Master natural fixing methods using chicken wire and pin frogs for environmentally conscious arrangements',
    curriculum: ['Chicken wire fixing technique', 'Pin frog fixing technique', 'No-floral foam arrangement inspiration'],
    link: 'https://mayaflor.liveklass.com/classes/6943',
    thumbnail: '/images/flowers/no_floral_foam.webp'
  },
];

export const portfolioImages = [
  { id: 1, src: '/images/flowers/Flower Reflection on Books/Flower Reflection on Books_1.webp', alt: 'Flower Reflection on Books 1' },
  { id: 2, src: '/images/flowers/Flower Reflection on Books/Flower Reflection on Books_2.webp', alt: 'Flower Reflection on Books 2' },
  { id: 3, src: '/images/flowers/Flower Reflection on Books/Flower Reflection on Books_3.webp', alt: 'Flower Reflection on Books 3' },
  { id: 4, src: '/images/flowers/Flower Reflection on Books/Flower Reflection on Books_4.webp', alt: 'Flower Reflection on Books 4' },
  { id: 5, src: '/images/flowers/Flower Reflection on Books/Flower Reflection on Books_5.webp', alt: 'Flower Reflection on Books 5' },
  { id: 6, src: '/images/flowers/Flower Reflection on Books/Flower Reflection on Books_6.webp', alt: 'Flower Reflection on Books 6' },
  { id: 7, src: '/images/flowers/Flower Reflection on Books/Flower Reflection on Books_7.webp', alt: 'Flower Reflection on Books 7', isWide: true },
];

export const monthlyFlowerImages = Array.from({ length: 12 }, (_, i) => ({
  month: i + 1,
  src: `/images/flowers/Monthly Flower/Monthly Flower_${i + 1}.webp`,
  alt: `Monthly Flower ${i + 1}`
}));

/** Total count of Eco-Flower series images */
export const ECO_FLOWER_TOTAL = 45;
