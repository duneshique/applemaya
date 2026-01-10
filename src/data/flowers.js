import { imageData } from './images';

export const flowerWorks = [
  { id: 1, title: "Spring Bouquet", category: "Bouquet", image: "/images/flowers/spring-bouquet.webp", description: "Spring bouquet of tulips and ranunculus" },
  { id: 2, title: "Autumn Table", category: "Table Setting", image: "/images/flowers/autumn-table.webp", description: "Table setting with autumn mood" },
  { id: 3, title: "Winter Wreath", category: "Wreath", image: "/images/flowers/winter-wreath.webp", description: "Cozy winter wreath" },
  { id: 4, title: "Summer Box", category: "Arrangement", image: "/images/flowers/summer-box.webp", description: "Refreshing summer flower box" },
  { id: 5, title: "Garden Party", category: "Table Setting", image: "/images/flowers/garden-party.webp", description: "Outdoor garden party styling" },
  { id: 6, title: "Pastel Dream", category: "Bouquet", image: "/images/flowers/pastel-dream.webp", description: "Romantic bouquet in pastel tones" },
  // ... extra mock data for masonry
  { id: 7, title: "Wild Flower", category: "Arrangement", image: "/images/flowers/wild-flower.webp", description: "Natural beauty of wildflowers" },
  { id: 8, title: "Eucalyptus Wreath", category: "Wreath", image: "/images/flowers/eucalyptus.webp", description: "Wreath full of eucalyptus scent" },
];

export const monthlyFloraArchive = [
  {
    id: 1,
    year: 2026,
    month: 1,
    title: "Eco Wreath for the New Year",
    image: imageData.flowers.monthly[0].src,
    summary: "New Year's wreath recipe made with recycled materials",
    link: "https://floragreen.shop.blogpay.co.kr/"
  },
  {
    id: 2,
    year: 2025,
    month: 12,
    title: "Christmas Table Centerpiece",
    image: "/images/flowers/flora-dec-2025.webp",
    summary: "Table decoration made with conifers and red berries",
    link: "https://floragreen.shop.blogpay.co.kr/"
  }
];

export const onlineClasses = [
  {
    id: 1,
    level: "Basic",
    title: "Eco Flower Basic Class",
    description: "Basic class to build fundamentals",
    lectures: 26,
    duration: "4 hours",
    materials: ["Secret Note", "Tool kit available for separate purchase"],
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
    description: "Advanced Course: Bouquet & Arrangement",
    parts: [
      { name: "Part 1: Bouquet", lectures: 13 },
      { name: "Part 2: Arrangement", lectures: 25 }
    ],
    materials: ["8 PDF sections"],
    platforms: [
      { name: "LiveKlass", url: "https://liveklass.com/ch/mayaflor" }
    ],
    thumbnail: imageData.flowers.gallery[0].src
  }
];
