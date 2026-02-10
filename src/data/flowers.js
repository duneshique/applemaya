/**
 * Flowers data - single source of truth for all flower-related components.
 * Used by: FlowersSection (home), FlowersArchive (flowers page)
 */

export const floraItems = [
  { year: '2023', month: 4, thumbnail: '/images/flora/flora_2023_04.webp', link: 'https://product.kyobobook.co.kr/detail/S000201360836' },
  { year: '2023', month: 2, thumbnail: '/images/flora/flora_2023_02.webp', link: 'https://product.kyobobook.co.kr/detail/S000200787686' },
  { year: '2023', month: 1, thumbnail: '/images/flora/flora_2023_01.webp', link: 'https://product.kyobobook.co.kr/detail/S000200554180' },
  { year: '2022', month: 11, thumbnail: '/images/flora/flora_2022_11.webp', link: 'https://product.kyobobook.co.kr/detail/S000200128281' },
  { year: '2022', month: 10, thumbnail: '/images/flora/flora_2022_10.webp', link: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000005018101' },
  { year: '2022', month: 8, thumbnail: '/images/flora/flora_2022_08.webp', link: 'https://product.kyobobook.co.kr/detail/S000000327681' },
];

export const projectItems = [
  {
    id: 1,
    isSpecial: true,
    items: [
      {
        id: 'ecoflower',
        url: 'https://tumblbug.com/ecoflower',
        thumbnail: '/images/flowers/project_ecoflower.webp'
      },
      {
        id: 'yearflower',
        url: 'https://tumblbug.com/yearflower',
        thumbnail: '/images/flowers/project_yearflower.webp'
      }
    ]
  },
  {
    id: 2,
    items: [
      { id: 'winter_cymbidium', url: 'https://www.instagram.com/p/CI-GFwzn_6s/' },
      { id: 'winter_scabiosa', url: 'https://www.instagram.com/p/CIDHpINnaYQ/' },
      { id: 'winter_anemone', url: 'https://www.instagram.com/p/CH-I3YUHjrC/' },
    ]
  }
];

export const classItems = [
  {
    id: 1,
    link: 'https://mayaflor.liveklass.com/classes/6942',
    thumbnail: '/images/flowers/class_bouquet.webp'
  },
  {
    id: 2,
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
