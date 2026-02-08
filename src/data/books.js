import { imageData } from './images';

export const booksData = [
  {
    id: 1,
    title: {
      ko: "타로카드 읽는 카페",
      en: "Tarot Card Reading Café"
    },
    subtitle: {
      ko: "타로로 마음을 읽고, 선택으로 운명을 바꾸는 곳",
      en: "Reading Hearts Through Tarot, Changing Fate Through Choice"
    },
    author: {
      ko: "Hyejoung Moon",
      en: "Hyejoung Moon"
    },
    publisher: {
      ko: "창비 공식 출판",
      en: "Changbi Publishers"
    },
    publishDate: "2025-08-14",
    coverImage: imageData.books[0].cover,
    description: {
      ko: "타로 카드로 타인의 흔들리는 마음을 읽어주는 타로 리더 '신세련'의 시선을 통해, 불안과 열망, 사랑의 민낯을 예리하게 포착해낸 심리 소설입니다.",
      en: "A psychological novel that captures the raw essence of anxiety, desire, and love through the eyes of tarot reader 'Shin Se-ryeon', who quietly reads people's wavering hearts through tarot cards."
    },
    awards: [
      {
        ko: "🏆 브런치북 프로젝트 12회 대상 수상",
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
        name: "Kyobo Book",
        url: "https://product.kyobobook.co.kr/detail/S000217222317"
      },
      {
        name: "Aladdin",
        url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=369307743"
      }
    ],
    reviews: [
      {
        source: "YES24",
        text: "Like a tarot card that reflects the heart of this moment rather than predicting a fixed future..."
      }
    ]
  },
  {
    id: 2,
    title: {
      ko: "에코 플라워 스타일링북",
      en: "Eco Flower Styling Book"
    },
    subtitle: {
      ko: "자연에게 해롭지 않게",
      en: "Harmless to Nature"
    },
    author: {
      ko: "Hyejoung Moon",
      en: "Hyejoung Moon"
    },
    publishDate: "2021-03-15",
    coverImage: imageData.books[1].cover,
    description: {
      ko: "자연을 해치지 않는 친환경 플라워 스타일링의 모든 것. 지속 가능한 플로리스트리를 실천하는 방법과 아름다운 작품들을 담았습니다.",
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
