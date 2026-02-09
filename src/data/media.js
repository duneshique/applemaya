/**
 * Media data - single source of truth for all media/press components.
 * Used by: MediaSection (home), MediaArchive (media page)
 */
export const mediaItems = [
  {
    id: 1,
    category: 'interview',
    type: 'Interview',
    title: '운명은 정해져 있지만 내 선택으로 매 순간 바뀔 수 있다는 것이 타로카드의 매력 (The charm of Tarot is that destiny is set, but it can change every moment by my choices)',
    publication: '채널예스',
    date: '2025. 8. 4.',
    excerpt: '타로카드는 사주팔자처럼 태어날 때부터 정해진 틀이 있는 게 아니라 카드를 뽑는 사람의 현재 상황, 마음 상태, 질문을 하는 시기에 따라 답이 달라집니다.',
    url: 'https://ch.yes24.com/article/details/81401',
    year: 2025,
    sortDate: new Date('2025-08-04'),
    image: '/images/media/media_yes24_interview.webp'
  },
  {
    id: 6,
    category: 'youtube',
    type: 'YouTube',
    title: '당신도 모르는 당신의 마음을 읽어드립니다! (Reading your heart even you don\'t know!)',
    publication: '브런치',
    date: '2025. 9. 1.',
    excerpt: '이혜성 아나운서가 소개하는 브런치북 12회 대상 출간작 10편 중, 마지막 작품 『타로카드 읽는 카페』가 출간되었습니다.',
    url: 'https://www.youtube.com/shorts/z4Chs7yXjIU',
    year: 2025,
    sortDate: new Date('2025-09-01'),
    image: '/images/media/media_youtube_brunch.webp'
  },
  {
    id: 7,
    category: 'interview',
    type: 'Interview',
    title: '꽃과 살다보면 달라지는 것들 (What Changes When You Live with Flowers)',
    publication: '채널 예스 (Channel YES)',
    date: '2021. 05. 11.',
    url: 'https://ch.yes24.com/article/details/44770',
    year: 2021,
    sortDate: new Date('2021-05-11'),
    image: '/images/media/media_yes24_interview_2.webp'
  },
  {
    id: 8,
    category: 'news',
    type: 'News',
    title: "오늘의 책 '타로카드 읽는 카페' (Today's Featured Read: The Tarot Card Reading Cafe)",
    publication: 'KNN 뉴스',
    date: '2025. 10. 20.',
    url: 'https://news.knn.co.kr/news/article/178954',
    year: 2025,
    sortDate: new Date('2025-10-20'),
    image: '/images/media/media_knn_news.webp'
  },
  {
    id: 9,
    category: 'news',
    type: 'News',
    title: "[신간] 결핍을 마주하고 치유하는 과정…'타로카드 읽는 카페' ([New Release] The process of facing and healing deficiency: 'The Tarot Card Reading Cafe')",
    publication: '뉴시스 (Newsis)',
    date: '2025. 08. 26.',
    url: 'https://www.newsis.com/view/NISX20250825_0003302667#',
    year: 2025,
    sortDate: new Date('2025-08-26'),
    image: '/images/media/media_newsis_book.webp'
  },
  {
    id: 10,
    category: 'news',
    type: 'News',
    title: '일 년 열두 달, 흔들리는 꽃 (Twelve Months of Swaying Flowers)',
    publication: '월간에세이',
    date: '2025. 12. 01.',
    url: 'https://www.essayon.co.kr/kr/essay/month_essay_view.php?No=488&cNo=8263&newEssay=',
    year: 2025,
    sortDate: new Date('2025-12-01'),
    image: '/images/media/media_essayon.webp'
  }
];
