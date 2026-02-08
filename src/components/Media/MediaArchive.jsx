import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Youtube, Mic, BookOpen } from 'lucide-react';

const categories = [
  { id: 'all', label: '전체', icon: null },
  { id: 'news', label: '뉴스', icon: Newspaper },
  { id: 'interview', label: '인터뷰', icon: Mic },
  { id: 'youtube', label: '유튜브', icon: Youtube },
];

const mediaItems = [
  {
    id: 1,
    category: 'interview',
    type: '인터뷰',
    title: '운명은 정해져 있지만 내 선택으로 매 순간 바뀔 수 있다는 것이 타로카드의 매력',
    publication: '채널예스',
    date: '2025. 8. 4.',
    excerpt: '『타로카드 읽는 카페』 문혜정 작가 인터뷰.',
    url: 'https://ch.yes24.com/article/details/81401',
    year: 2025
  },
  {
    id: 2,
    category: 'news',
    type: '뉴스',
    title: '카카오 브런치스토리, 1000:1 경쟁 뚫은 10편의 이야기 책으로 펴내',
    publication: '지디넷코리아',
    date: '2025. 8. 4.',
    excerpt: '카카오가 운영하는 콘텐츠 퍼블리싱 플랫폼 브런치스토리가 \'제12회 브런치북 출판 프로젝트\' 대상 수상작 10편을 도서로 출간했다.',
    url: 'https://zdnet.co.kr/view/?no=20250804141609',
    year: 2025
  },
  {
    id: 3,
    category: 'news',
    type: '뉴스',
    title: '카카오, 브런치북 대상 수상작 출간…경쟁률 1000대 1',
    publication: '뉴시스',
    date: '2025. 8. 4.',
    excerpt: '카카오는 콘텐츠 퍼블리싱 플랫폼 브런치스토리가 \'제12회 브런치북 출판 프로젝트\' 대상 수상작 10편을 도서로 출간했다.',
    url: 'https://www.newsis.com/view/NISX20250804_0003277165',
    year: 2025
  },
  {
    id: 4,
    category: 'news',
    type: '뉴스',
    title: '삶을 버텨내야 한다면…다와다 요코 \'언어\'·이서수 \'춤\'·문혜정 \'카드\'',
    publication: '노컷뉴스',
    date: '2025. 8. 21.',
    excerpt: '다와다 요코 \'영혼 없는 작가\' 이서수 \'그래도 춤을 추세요\' 문혜정 \'타로카드 읽는 카페\'.',
    url: 'https://www.nocutnews.co.kr/news/6388188',
    year: 2025
  },
  {
    id: 5,
    category: 'youtube',
    type: 'YouTube',
    title: '타로카드 읽는 카페 | 소설 낭독 & 북트레일러',
    publication: '창비',
    date: '2025',
    excerpt: '타로카드 읽는 카페 북트레일러 영상',
    url: 'https://www.youtube.com/watch?v=UbVsLtNcTQ4&t=583s',
    year: 2025
  },
  {
    id: 6,
    category: 'youtube',
    type: 'YouTube',
    title: '문혜정 작가 인터뷰: 타로로 읽는 마음',
    publication: '창비',
    date: '2025',
    excerpt: '작가 인터뷰 영상',
    url: 'https://www.youtube.com/watch?v=AvU3VA_Xv3U',
    year: 2025
  },
  {
    id: 7,
    category: 'youtube',
    type: 'YouTube Shorts',
    title: '작가 픽 오늘의 한 구절: 사랑의 정답',
    publication: '브런치',
    date: '2025',
    excerpt: '',
    url: 'https://www.youtube.com/shorts/yUifn31TI3Q',
    year: 2025
  },
  {
    id: 8,
    category: 'youtube',
    type: 'YouTube Shorts',
    title: '작가 픽 오늘의 한 구절: 눈물',
    publication: '브런치',
    date: '2025',
    excerpt: '',
    url: 'https://www.youtube.com/shorts/z4Chs7yXjIU',
    year: 2025
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

  const filteredItems = activeCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeCategory);

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
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm transition-all font-ui-ko ${
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
          <div key={year} className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl mb-8 text-[#9CAF88]"
              style={{ fontFamily: 'Fraunces, serif', letterSpacing: '0.05em' }}
            >
              {year}
            </motion.h3>

            <div className="grid md:grid-cols-2 gap-6">
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
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group"
                  >
                    <div className="flex items-start gap-4 mb-3">
                      <div className="p-2.5 bg-[#9CAF88]/10 rounded-full text-[#9CAF88] group-hover:bg-[#9CAF88] group-hover:text-white transition-colors">
                        <Icon size={20} />
                      </div>
                      <div className="flex-1">
                        <span
                          className="text-[#9CAF88] tracking-[0.15em] block mb-1"
                          style={{ fontSize: '11px', fontFamily: 'Inter, sans-serif' }}
                        >
                          {item.type}
                        </span>
                        <h4
                          className="text-lg mb-2 text-[#3D3D3D] group-hover:text-[#9CAF88] transition-colors"
                          style={{ fontFamily: 'Noto Serif KR, serif', lineHeight: '1.5' }}
                        >
                          {item.title}
                        </h4>
                      </div>
                    </div>
                    
                    <p
                      className="text-[#3D3D3D]/50 mb-3 italic"
                      style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px' }}
                    >
                      {item.publication} · {item.date}
                    </p>

                    {item.excerpt && (
                      <p
                        className="text-[#3D3D3D]/70 text-sm line-clamp-2"
                        style={{ fontFamily: 'Noto Sans KR, sans-serif', lineHeight: '1.7' }}
                      >
                        {item.excerpt}
                      </p>
                    )}

                    <span
                      className="inline-block mt-4 text-[#9CAF88] tracking-[0.1em] text-xs group-hover:text-[#B85C50] transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      READ MORE →
                    </span>
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
