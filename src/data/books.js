import { imageData } from './images';

export const booksData = [
  {
    id: 1,
    title: {
      ko: "타로카드 읽는 카페",
      en: "Tarot Card Reading Cafe"
    },
    subtitle: {
      ko: "마음을 읽는 타로, 운명을 바꾸는 선택",
      en: "Reading Hearts Through Tarot, Changing Fate Through Choice"
    },
    author: {
      ko: "문혜정",
      en: "Moon Hyejeong (Maya)"
    },
    publisher: {
      ko: "창비",
      en: "Changbi Publishers"
    },
    publishDate: "2025-08-14",
    coverImage: imageData.books[0].cover,
    description: {
      ko: "타로카드를 통해 사람들의 흔들리는 마음을 조용히 읽어내는 타로 리더 '신세련'의 시선을 따라 불안과 욕망, 사랑의 민낯을 예리하게 포착해내는 심리소설이자 섬세한 감정선으로 독자의 마음을 움직이는 로맨스 힐링소설입니다.",
      en: "A psychological novel that captures the raw essence of anxiety, desire, and love through the eyes of tarot reader 'Shin Se-ryeon', who quietly reads people's wavering hearts through tarot cards."
    },
    awards: [
      {
        ko: "🏆 브런치북 12회 대상",
        en: "🏆 Brunch Book Project 12th Grand Prize"
      }
    ],
    translations: {
      upcoming: ["English", "Japanese", "Chinese"]
    },
    purchaseLinks: [
      {
        name: "YES24",
        url: "https://www.yes24.com/product/goods/150529430"
      },
      {
        name: "교보문고",
        url: "https://product.kyobobook.co.kr/detail/S000217222317"
      },
      {
        name: "알라딘",
        url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=369307743"
      }
    ],
    reviews: [
      {
        source: "YES24",
        text: "정해진 미래를 예언하는 것이 아니라 지금 이 순간의 마음을 비춰주는 타로카드처럼..."
      }
    ]
  },
  {
    id: 2,
    title: {
      ko: "에코 플라워 스타일링 북",
      en: "Eco Flower Styling Book"
    },
    subtitle: {
      ko: "자연에 해가 되지 않는",
      en: "Harmless to Nature"
    },
    author: {
      ko: "문혜정",
      en: "Moon Hyejeong (Maya)"
    },
    publishDate: "2021-03-15",
    coverImage: imageData.books[1].cover,
    description: {
      ko: "자연에 해가 되지 않는 에코 플라워 스타일링의 모든 것. 지속 가능한 플로리스트리를 실천하는 방법과 아름다운 작품들을 담았습니다.",
      en: "Everything about eco-friendly flower styling that doesn't harm nature. Contains methods of practicing sustainable floristry and beautiful works."
    },
    purchaseLinks: [
      {
        name: "YES24",
        url: "http://www.yes24.com/Product/Goods/99480676"
      }
    ]
  }
];
