import { imageData } from './images';

export const booksData = [
  {
    id: 1,
    title: {
      ko: "Tarot Card Reading Café",
      en: "Tarot Card Reading Café"
    },
    subtitle: {
      ko: "Reading Hearts Through Tarot, Changing Fate Through Choice",
      en: "Reading Hearts Through Tarot, Changing Fate Through Choice"
    },
    author: {
      ko: "Hyejeong Moon",
      en: "Hyejeong Moon"
    },
    publisher: {
      ko: "Changbi Publishers",
      en: "Changbi Publishers"
    },
    publishDate: "2025-08-14",
    coverImage: imageData.books[0].cover,
    description: {
      ko: "A psychological novel that captures the raw essence of anxiety, desire, and love through the eyes of tarot reader 'Shin Se-ryeon', who quietly reads people's wavering hearts through tarot cards.",
      en: "A psychological novel that captures the raw essence of anxiety, desire, and love through the eyes of tarot reader 'Shin Se-ryeon', who quietly reads people's wavering hearts through tarot cards."
    },
    awards: [
      {
        ko: "🏆 Brunch Book Project 12th Grand Prize",
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
      ko: "Eco Flower Styling Book",
      en: "Eco Flower Styling Book"
    },
    subtitle: {
      ko: "Harmless to Nature",
      en: "Harmless to Nature"
    },
    author: {
      ko: "Hyejeong Moon",
      en: "Hyejeong Moon"
    },
    publishDate: "2021-03-15",
    coverImage: imageData.books[1].cover,
    description: {
      ko: "Everything about eco-friendly flower styling that doesn't harm nature. Contains methods of practicing sustainable floristry and beautiful works.",
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
