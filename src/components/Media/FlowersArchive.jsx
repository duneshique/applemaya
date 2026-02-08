import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Flower2, Video, FolderOpen, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';

const tabs = [
  { id: 'flora', label: 'Flora', icon: BookOpen },
  { id: 'portfolio', label: 'Portfolio', icon: Flower2 },
  { id: 'class', label: 'Online Class', icon: Video },
];

const floraItems = [
  // 2026
  { year: '2026', month: '2월', title: '월간 플로라 2026년 2월호', thumbnail: '/images/flora/flora_2026_02.webp', link: 'https://product.kyobobook.co.kr/detail/S000219157501' },
  { year: '2026', month: '1월', title: '월간 플로라 2026년 1월호', thumbnail: '/images/flora/flora_2026_01.webp', link: 'https://product.kyobobook.co.kr/detail/S000218936265' },
  // 2025
  { year: '2025', month: '12월', title: '월간 플로라 2025년 12월호', thumbnail: '/images/flora/flora_2025_12.webp', link: 'https://product.kyobobook.co.kr/detail/S000218704290' },
  { year: '2025', month: '11월', title: '월간 플로라 2025년 11월호', thumbnail: '/images/flora/flora_2025_11.webp', link: 'https://product.kyobobook.co.kr/detail/S000218315399' },
  { year: '2025', month: '10월', title: '월간 플로라 2025년 10월호', thumbnail: '/images/flora/flora_2025_10.webp', link: 'https://product.kyobobook.co.kr/detail/S000218053700' },
  { year: '2025', month: '9월', title: '월간 플로라 2025년 9월호', thumbnail: '/images/flora/flora_2025_09.webp', link: 'https://product.kyobobook.co.kr/detail/S000217444463' },
  { year: '2025', month: '8월', title: '월간 플로라 2025년 8월호', thumbnail: '/images/flora/flora_2025_08.webp', link: 'https://product.kyobobook.co.kr/detail/S000217192569' },
  { year: '2025', month: '7월', title: '월간 플로라 2025년 7월호', thumbnail: '/images/flora/flora_2025_07.webp', link: 'https://product.kyobobook.co.kr/detail/S000216951107' },
  { year: '2025', month: '6월', title: '월간 플로라 2025년 6월호', thumbnail: '/images/flora/flora_2025_06.webp', link: 'https://product.kyobobook.co.kr/detail/S000216702974' },
  { year: '2025', month: '5월', title: '월간 플로라 2025년 5월호', thumbnail: '/images/flora/flora_2025_05.webp', link: 'https://product.kyobobook.co.kr/detail/S000216406228' },
  { year: '2025', month: '4월', title: '월간 플로라 2025년 4월호', thumbnail: '/images/flora/flora_2025_04.webp', link: 'https://product.kyobobook.co.kr/detail/S000216180058' },
  { year: '2025', month: '3월', title: '월간 플로라 2025년 3월호', thumbnail: '/images/flora/flora_2025_03.webp', link: 'https://product.kyobobook.co.kr/detail/S000215934167' },
  { year: '2025', month: '2월', title: '월간 플로라 2025년 2월호', thumbnail: '/images/flora/flora_2025_02.webp', link: 'https://product.kyobobook.co.kr/detail/S000215648247' },
  { year: '2025', month: '1월', title: '월간 플로라 2025년 1월호', thumbnail: '/images/flora/flora_2025_01.webp', link: 'https://product.kyobobook.co.kr/detail/S000215097734' },
  // 2024
  { year: '2024', month: '12월', title: '월간 플로라 2024년 12월호', thumbnail: '/images/flora/flora_2024_12.webp', link: 'https://product.kyobobook.co.kr/detail/S000214883307' },
  { year: '2024', month: '11월', title: '월간 플로라 2024년 11월호', thumbnail: '/images/flora/flora_2024_11.webp', link: 'https://product.kyobobook.co.kr/detail/S000214650698' },
  { year: '2024', month: '10월', title: '월간 플로라 2024년 10월호', thumbnail: '/images/flora/flora_2024_10.webp', link: 'https://product.kyobobook.co.kr/detail/S000214451651' },
  { year: '2024', month: '9월', title: '월간 플로라 2024년 9월호', thumbnail: '/images/flora/flora_2024_09.webp', link: 'https://product.kyobobook.co.kr/detail/S000214158441' },
  { year: '2024', month: '8월', title: '월간 플로라 2024년 8월호', thumbnail: '/images/flora/flora_2024_08.webp', link: 'https://product.kyobobook.co.kr/detail/S000213921689' },
  { year: '2024', month: '7월', title: '월간 플로라 2024년 7월호', thumbnail: '/images/flora/flora_2024_07.webp', link: 'https://product.kyobobook.co.kr/detail/S000213676021' },
  { year: '2024', month: '6월', title: '월간 플로라 2024년 6월호', thumbnail: '/images/flora/flora_2024_06.webp', link: 'https://product.kyobobook.co.kr/detail/S000213425216' },
  { year: '2024', month: '5월', title: '월간 플로라 2024년 5월호', thumbnail: '/images/flora/flora_2024_05.webp', link: 'https://product.kyobobook.co.kr/detail/S000213134285' },
  { year: '2024', month: '4월', title: '월간 플로라 2024년 4월호', thumbnail: '/images/flora/flora_2024_04.webp', link: 'https://product.kyobobook.co.kr/detail/S000212807433' },
  { year: '2024', month: '3월', title: '월간 플로라 2024년 3월호', thumbnail: '/images/flora/flora_2024_03.webp', link: 'https://product.kyobobook.co.kr/detail/S000212604598' },
  { year: '2024', month: '2월', title: '월간 플로라 2024년 2월호', thumbnail: '/images/flora/flora_2024_02.webp', link: 'https://product.kyobobook.co.kr/detail/S000212176719' },
  { year: '2024', month: '1월', title: '월간 플로라 2024년 1월호', thumbnail: '/images/flora/flora_2024_01.webp', link: 'https://product.kyobobook.co.kr/detail/S000211796521' },
  // 2023
  { year: '2023', month: '12월', title: '월간 플로라 2023년 12월호', thumbnail: '/images/flora/flora_2023_12.webp', link: 'https://product.kyobobook.co.kr/detail/S000211545967' },
  { year: '2023', month: '11월', title: '월간 플로라 2023년 11월호', thumbnail: '/images/flora/flora_2023_11.webp', link: 'https://product.kyobobook.co.kr/detail/S000210833232' },
  { year: '2023', month: '10월', title: '월간 플로라 2023년 10월호', thumbnail: '/images/flora/flora_2023_10.webp', link: 'https://product.kyobobook.co.kr/detail/S000209650973' },
  { year: '2023', month: '9월', title: '월간 플로라 2023년 9월호', thumbnail: '/images/flora/flora_2023_09.webp', link: 'https://product.kyobobook.co.kr/detail/S000208721315' },
  { year: '2023', month: '8월', title: '월간 플로라 2023년 8월호', thumbnail: '/images/flora/flora_2023_08.webp', link: 'https://product.kyobobook.co.kr/detail/S000208257475' },
  { year: '2023', month: '7월', title: '월간 플로라 2023년 7월호', thumbnail: '/images/flora/flora_2023_07.webp', link: 'https://product.kyobobook.co.kr/detail/S000202827421' },
  { year: '2023', month: '6월', title: '월간 플로라 2023년 6월호', thumbnail: '/images/flora/flora_2023_06.webp', link: 'https://product.kyobobook.co.kr/detail/S000202478958' },
  { year: '2023', month: '5월', title: '월간 플로라 2023년 5월호', thumbnail: '/images/flora/flora_2023_05.webp', link: 'https://product.kyobobook.co.kr/detail/S000201794311' },
  { year: '2023', month: '4월', title: '월간 플로라 2023년 4월호', thumbnail: '/images/flora/flora_2023_04.webp', link: 'https://product.kyobobook.co.kr/detail/S000201360836' },
  { year: '2023', month: '3월', title: '월간 플로라 2023년 3월호', thumbnail: '/images/flora/flora_2023_03.webp', link: 'https://product.kyobobook.co.kr/detail/S000201160902' },
  { year: '2023', month: '2월', title: '월간 플로라 2023년 2월호', thumbnail: '/images/flora/flora_2023_02.webp', link: 'https://product.kyobobook.co.kr/detail/S000200787686' },
  { year: '2023', month: '1월', title: '월간 플로라 2023년 1월호', thumbnail: '/images/flora/flora_2023_01.webp', link: 'https://product.kyobobook.co.kr/detail/S000200554180' },
  // 2022
  { year: '2022', month: '12월', title: '월간 플로라 2022년 12월호', thumbnail: '/images/flora/flora_2022_12.webp', link: 'https://product.kyobobook.co.kr/detail/S000200330305' },
  { year: '2022', month: '11월', title: '월간 플로라 2022년 11월호', subtitle: "'에코 플라워' 플라잉드라이플라워 슈즈 / 표지 작업", thumbnail: '/images/flora/flora_2022_11.webp', link: 'https://product.kyobobook.co.kr/detail/S000200128281' },
  { year: '2022', month: '10월', title: '월간 플로라 2022년 10월호', subtitle: "'에코 플라워' 후르츠어레인지먼트 시즌테마 디자인 2종", thumbnail: '/images/flora/flora_2022_10.webp', link: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000005018101' },
  { year: '2022', month: '9월', title: '월간 플로라 2022년 9월호', subtitle: "'에코 플라워' 포토테이블 장식", thumbnail: '/images/flora/flora_2022_09.webp', link: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000005018095' },
  { year: '2022', month: '8월', title: '월간 플로라 2022년 8월호', subtitle: "'에코 플라워' 스머지 스틱 / 표지 작업", thumbnail: '/images/flora/flora_2022_08.webp', link: 'https://product.kyobobook.co.kr/detail/S000000327681' },
  { year: '2022', month: '7월', title: '월간 플로라 2022년 7월호', subtitle: "'에코 플라워' 그린 시험관 어레인지먼트", thumbnail: '/images/flora/flora_2022_07.webp', link: 'https://product.kyobobook.co.kr/detail/S000000327568' },
  { year: '2022', month: '6월', title: '월간 플로라 2022년 6월호', subtitle: "'에코 플라워' 레인 포레스트", thumbnail: '/images/flora/flora_2022_06.webp', link: 'https://product.kyobobook.co.kr/detail/S000000327468' },
  { year: '2022', month: '5월', title: '월간 플로라 2022년 5월호', subtitle: "'에코 플라워' 버드네스트 어레인지먼트", thumbnail: '/images/flora/flora_2022_05.webp', link: 'https://product.kyobobook.co.kr/detail/S000000327364' },
  { year: '2022', month: '4월', title: '월간 플로라 2022년 4월호', subtitle: "'에코 플라워' 내추럴폼 카네이션 화단", thumbnail: '/images/flora/flora_2022_04.webp', link: 'https://product.kyobobook.co.kr/detail/S000000327342' },
  { year: '2022', month: '3월', title: '월간 플로라 2022년 3월호', subtitle: "'에코 플라워' 노플로랄폼 스프링 토피어리", thumbnail: '/images/flora/flora_2022_03.webp', link: 'https://product.kyobobook.co.kr/detail/S000000328383' },
];

const projectItems = [
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

const classItems = [
  { 
    title: 'Part 1. 부케 Bouquet', 
    subtitle: '마야플로르의 첫 번째 온라인 플라워 워크샵',
    desc: '단순한 기술을 넘어 꽃을 고르고 컬러를 결정하는 안목을 다룹니다.',
    curriculum: ['도구 및 소재 다루기', 'Light Bouquet', 'Bold Bouquet', 'Vivid Bouquet'],
    link: 'https://mayaflor.liveklass.com/classes/6942',
    thumbnail: '/images/flowers/class_bouquet.webp'
  },
  { 
    title: 'Part 2. 노플로랄폼 어레인지먼트', 
    subtitle: '지속가능한 디자인을 위한 테크닉',
    desc: '침봉, 치킨와이어 등 자연 친화적 재료를 활용한 고정 기법을 배웁니다.',
    curriculum: ['노플로랄폼의 이해', '치킨와이어 페데스탈', '에코 꽃바구니 세팅'],
    link: 'https://mayaflor.liveklass.com/classes/6943',
    thumbnail: '/images/flowers/class_no_floral_foam.webp'
  },
];

export default function FlowersArchive() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('flora');
  const [selectedYear, setSelectedYear] = useState('all');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && tabs.some(tab => tab.id === hash)) {
        setActiveTab(hash);
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    router.push({ pathname: router.pathname, hash: tabId }, undefined, { shallow: true });
  };

  const groupedFlora = floraItems.reduce((acc, item) => {
    if (!acc[item.year]) acc[item.year] = [];
    acc[item.year].push(item);
    return acc;
  }, {});

  const sortedYears = Object.keys(groupedFlora).sort((a, b) => b - a);
  const filteredYears = selectedYear === 'all' ? sortedYears : sortedYears.filter(y => y === selectedYear);

  return (
    <section className="bg-[#FAF8F3]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs transition-all font-label-en tracking-widest ${
                  activeTab === tab.id
                    ? 'bg-[#3D3D3D] text-white shadow-md border-transparent'
                    : 'bg-white text-[#3D3D3D]/70 hover:bg-white/80 shadow-sm border border-[#E8DCC8]'
                }`}
              >
                <Icon size={14} />
                {tab.label.toUpperCase()}
              </button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'flora' && (
            <motion.div
              key="flora"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex flex-wrap justify-center gap-2 mb-10">
                <button
                  onClick={() => setSelectedYear('all')}
                  className={`px-4 py-2 rounded-full text-sm transition-all font-sans ${
                    selectedYear === 'all' ? 'bg-[#9CAF88] text-white' : 'bg-white text-[#3D3D3D]/60 hover:bg-[#9CAF88]/10'
                  }`}
                >
                  전체
                </button>
                {sortedYears.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-4 py-2 rounded-full text-sm transition-all font-sans ${
                      selectedYear === year ? 'bg-[#9CAF88] text-white' : 'bg-white text-[#3D3D3D]/60 hover:bg-[#9CAF88]/10'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>

              {filteredYears.map((year) => (
                <div key={year} className="mb-16">
                  <div className="flex items-center gap-3 mb-8">
                    <h3 className="text-3xl text-[#3D3D3D] font-serif" style={{ fontFamily: 'Fraunces, serif' }}>{year}</h3>
                    <div className="flex-1 h-px bg-[#E8DCC8]" />
                    <span className="text-[#9CAF88] text-sm font-sans">{groupedFlora[year].length}권</span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                    {groupedFlora[year].map((item, idx) => (
                      <motion.a
                        key={idx}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        className="group block"
                      >
                        <div className="relative overflow-hidden rounded-xl bg-white shadow-sm group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                          <img
                            src={item.thumbnail || '/images/placeholders/flora.webp'}
                            alt={item.title}
                            className="w-full aspect-[3/4] object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                            <span className="text-white text-sm tracking-[0.1em] flex items-center gap-2 font-sans px-4 text-center">
                              <ExternalLink size={14} /> 교보문고에서 보기
                            </span>
                          </div>
                        </div>
                        <div className="mt-4">
                          <h4 className="text-[#3D3D3D] text-base mb-1 font-sans font-medium">
                            월간 플로라 {item.year}년 {item.month}호
                          </h4>
                          {item.subtitle && <p className="text-[#3D3D3D]/60 text-sm leading-relaxed font-sans">{item.subtitle}</p>}
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'portfolio' && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Instagram Style Grid */}
              <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mb-20 max-w-4xl mx-auto">
                {[1, 2, 3, 2, 3, 1, 3, 1, 2].map((imgIdx, idx) => (
                  <div key={idx} className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-sm group">
                    <img
                      src={`/images/gallery/gallery_${imgIdx}.webp`}
                      alt={`Gallery ${idx}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Flower2 className="text-white/80" size={24} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-12">
                <div className="flex items-center gap-4">
                  <FolderOpen className="text-[#9CAF88]" size={28} />
                  <h3 className="text-3xl font-title-ko text-[#3D3D3D]">Projects</h3>
                </div>
                
                {projectItems.map((project, idx) => (
                  <div key={idx} className={`bg-white rounded-[2.5rem] p-10 lg:p-12 shadow-sm border border-[#E8DCC8]/30 ${project.isSpecial ? 'ring-2 ring-[#9CAF88]/20' : ''}`}>
                    <div className="mb-8">
                      {project.isSpecial && (
                        <span className="inline-block px-3 py-1 rounded-full bg-[#9CAF88]/10 text-[#9CAF88] text-[10px] font-label-en tracking-widest mb-4">SPECIAL PROJECT</span>
                      )}
                      <h4 className="text-2xl mb-2 text-[#3D3D3D] font-title-ko">{project.title}</h4>
                      <p className="text-[#3D3D3D]/60 font-sans">{project.subtitle}</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8">
                      {project.items.map((item, i) => (
                        <a
                          key={i}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col gap-4 p-6 bg-[#FAF8F3] rounded-[1.5rem] hover:bg-[#9CAF88]/10 transition-all group"
                        >
                          {item.thumbnail && (
                            <img src={item.thumbnail} alt={item.name} className="w-full h-32 object-cover rounded-xl mb-2" />
                          )}
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Flower2 size={16} className="text-[#9CAF88] transition-transform group-hover:rotate-12" />
                              <span className="font-title-ko text-lg text-[#3D3D3D]">{item.name}</span>
                            </div>
                            {item.desc && <p className="text-sm text-[#3D3D3D]/60 leading-relaxed font-sans">{item.desc}</p>}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'class' && (
            <motion.div
              key="class"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                {classItems.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-[#E8DCC8]/30 flex flex-col">
                    <div className="aspect-video relative overflow-hidden group">
                      <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute top-6 left-6">
                        <span className="px-3 py-1 bg-[#3D3D3D] text-white text-[10px] font-label-en tracking-widest rounded-full shadow-lg">ONLINE WORKSHOP</span>
                      </div>
                    </div>
                    <div className="p-10 flex flex-col flex-1">
                      <h4 className="text-2xl text-[#3D3D3D] font-title-ko mb-2">{item.title}</h4>
                      <p className="text-[#9CAF88] text-sm font-sans mb-4">{item.subtitle}</p>
                      <p className="text-[#3D3D3D]/60 text-[15px] leading-relaxed mb-8 font-sans">{item.desc}</p>
                      
                      <div className="mt-auto">
                        <div className="space-y-3 mb-10">
                          {item.curriculum.map((c, i) => (
                            <div key={i} className="flex items-center gap-3 text-sm text-[#3D3D3D]/70 font-sans">
                              <CheckCircle2 size={14} className="text-[#9CAF88]" />
                              {c}
                            </div>
                          ))}
                        </div>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-4 bg-[#FAF8F3] rounded-2xl flex items-center justify-center gap-3 text-[#3D3D3D] hover:bg-[#3D3D3D] hover:text-white transition-all font-label-en tracking-widest text-xs"
                        >
                          <Video size={16} /> VIEW CURRICULUM
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
