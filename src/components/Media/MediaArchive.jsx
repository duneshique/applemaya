import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Youtube, Mic, BookOpen } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All', icon: null },
  { id: 'news', label: 'News', icon: Newspaper },
  { id: 'interview', label: 'Interview', icon: Mic },
  { id: 'youtube', label: 'YouTube', icon: Youtube },
];

// Shared media data - sorted by date descending
export const mediaItems = [
  {
    id: 1,
    category: 'interview',
    type: 'Interview',
    title: '운명은 정해져 있지만 내 선택으로 매 순간 바뀔 수 있다는 것이 타로카드의 매력',
    publication: '채널예스',
    date: '2025. 8. 4.',
    excerpt: '타로카드는 사주팔자처럼 태어날 때부터 정해진 틀이 있는 게 아니라 카드를 뽑는 사람의 현재 상황, 마음 상태, 질문을 하는 시기에 따라 답이 달라집니다.',
    url: 'https://ch.yes24.com/article/details/81401',
    year: 2025,
    sortDate: new Date('2025-08-04'),
    image: '/images/media/media_yes24_interview.webp'
  },
  {
    id: 2,
    category: 'news',
    type: 'News',
    title: '삶을 버텨내야 한다면…다와다 요코 \'언어\'·이서수 \'춤\'·문혜정 \'카드\'',
    publication: '노컷뉴스',
    date: '2025. 8. 21.',
    excerpt: '다와다 요코 \'영혼 없는 작가\' 이서수 \'그래도 춤을 추세요\' 문혜정 \'타로카드 읽는 카페\'.',
    url: 'https://www.nocutnews.co.kr/news/6388188',
    year: 2025,
    sortDate: new Date('2025-08-21'),
    image: '/images/media/media_nocut_news.webp'
  },
  {
    id: 3,
    category: 'news',
    type: 'News',
    title: '카카오 브런치스토리, 1000:1 경쟁 뚫은 10편의 이야기 책으로 펴내',
    publication: '지디넷코리아',
    date: '2025. 8. 4.',
    excerpt: '카카오가 운영하는 콘텐츠 퍼블리싱 플랫폼 브런치스토리가 \'제12회 브런치북 출판 프로젝트\' 대상 수상작 10편을 도서로 출간했다.',
    url: 'https://zdnet.co.kr/view/?no=20250804141609',
    year: 2025,
    sortDate: new Date('2025-08-04'),
    image: '/images/media/media_zdnet_news.webp'
  },
  {
    id: 4,
    category: 'news',
    type: 'News',
    title: '카카오, 브런치북 대상 수상작 출간…경쟁률 1000대 1',
    publication: '뉴시스',
    date: '2025. 8. 4.',
    excerpt: '카카오는 콘텐츠 퍼블리싱 플랫폼 브런치스토리가 \'제12회 브런치북 출판 프로젝트\' 대상 수상작 10편을 도서로 출간했다.',
    url: 'https://www.newsis.com/view/NISX20250804_0003277165',
    year: 2025,
    sortDate: new Date('2025-08-04'),
    image: '/images/media/media_newsis_news.webp'
  },
  {
    id: 5,
    category: 'youtube',
    type: 'YouTube',
    title: '『타로카드 읽는 카페』 문혜정 작가가 알려주는 하반기 연애운',
    publication: '창비 아카이브',
    date: '2025. 9. 17.',
    excerpt: '『타로카드 읽는 카페』 문혜정 작가님이 여러분의 연애운을 봐드립니다 ❣️ 모태솔로의 연애운부터 짝사랑, 재회, 그리고 사랑에 임해야 하는 자세까지 다채로운 연애운을 지금 바로 만나보세요!',
    url: 'https://www.youtube.com/watch?v=UbVsLtNcTQ4&t=583s',
    year: 2025,
    sortDate: new Date('2025-09-17'),
    image: '/images/media/media_youtube_love.webp'
  },
  {
    id: 6,
    category: 'youtube',
    type: 'YouTube',
    title: '당신도 모르는 당신의 마음을 읽어드립니다!',
    publication: '브런치',
    date: '2025. 9. 1.',
    excerpt: '이혜성 아나운서가 소개하는 브런치북 12회 대상 출간작 10편 중, 마지막 작품 『타로카드 읽는 카페』가 출간되었습니다.',
    url: 'https://www.youtube.com/shorts/z4Chs7yXjIU',
    year: 2025,
    sortDate: new Date('2025-09-01'),
    image: '/images/media/media_youtube_brunch.webp'
  }
];

const getIcon = (category) => {
  switch (category) {
    case 'news': return Newspaper;
    case 'interview': return Mic;
    case 'youtube': return Youtube;
    default: return BookOpen;
  }
};

export default function MediaArchive() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = (activeCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeCategory))
    .sort((a, b) => b.sortDate - a.sortDate);

  const groupedByYear = filteredItems.reduce((acc, item) => {
    if (!acc[item.year]) acc[item.year] = [];
    acc[item.year].push(item);
    return acc;
  }, {});

  const sortedYears = Object.keys(groupedByYear).sort((a, b) => b - a);

  return (
    <section className="py-16 lg:py-24 bg-[#FAF8F3]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full transition-all font-label-en text-[10px] tracking-[0.15em] ${
                activeCategory === cat.id
                  ? 'bg-[#9CAF88] text-white shadow-md'
                  : 'bg-white text-[#3D3D3D]/70 hover:bg-[#9CAF88]/10 border border-[#E8DCC8]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Year Groups */}
        {sortedYears.map((year) => (
          <div key={year} className="mb-20">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl mb-10 text-[#9CAF88] font-display-en opacity-80"
              style={{ letterSpacing: '0.05em' }}
            >
              {year}
            </motion.h3>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
              {groupedByYear[year].map((item, index) => {
                const Icon = getIcon(item.category);
                return (
                  <motion.a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col sm:flex-row bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group border border-[#E8DCC8]/30"
                  >
                    {/* Thumbnail */}
                    <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 p-2 bg-white/90 backdrop-blur-sm rounded-full text-[#9CAF88] shadow-sm">
                        <Icon size={16} />
                      </div>
                    </div>

                    <div className="flex-1 p-6 lg:p-8 flex flex-col">
                      <div className="flex-1">
                        <span className="font-label-en text-[#9CAF88] text-[9px] block mb-2 tracking-[0.2em]">
                          {item.type}
                        </span>
                        <h4 className="font-title-ko text-xl mb-3 text-[#3D3D3D] group-hover:text-[#9CAF88] transition-colors line-clamp-2 leading-[1.45]">
                          {item.title}
                        </h4>
                        
                        <p className="font-sans text-[#3D3D3D]/40 mb-4 text-xs tracking-wide">
                          {item.publication} · {item.date}
                        </p>

                        {item.excerpt && (
                          <p className="font-sans text-[#3D3D3D]/60 text-sm line-clamp-2 leading-[1.8] mb-4">
                            {item.excerpt}
                          </p>
                        )}
                      </div>

                      <span className="font-label-en text-[#9CAF88] text-[10px] tracking-[0.15em] group-hover:text-[#B85C50] transition-colors inline-flex items-center gap-1">
                        READ MORE 
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
