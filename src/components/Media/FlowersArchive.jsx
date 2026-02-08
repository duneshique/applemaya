import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Flower2, Video, FolderOpen, ExternalLink, Calendar } from 'lucide-react';

const tabs = [
  { id: 'flora', label: '월간 플로라', icon: BookOpen },
  { id: 'works', label: '플라워 작품', icon: Flower2 },
  { id: 'class', label: '온라인 클래스', icon: Video },
  { id: 'project', label: '프로젝트', icon: FolderOpen },
];

// cms_raw_data.json 에서 추출한 월간플로라 데이터 (print 버전만, 2022.12 ~ 2026.02)
const floraItems = [
  // 2026
  { year: '2026', month: '2월', title: '월간 플로라 2026년 2월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000586441.jpg', link: 'https://product.kyobobook.co.kr/detail/S000219157501' },
  { year: '2026', month: '1월', title: '월간 플로라 2026년 1월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000580166.jpg', link: 'https://product.kyobobook.co.kr/detail/S000218936265' },
  // 2025
  { year: '2025', month: '12월', title: '월간 플로라 2025년 12월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000573038.jpg', link: 'https://product.kyobobook.co.kr/detail/S000218704290' },
  { year: '2025', month: '11월', title: '월간 플로라 2025년 11월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000566535.jpg', link: 'https://product.kyobobook.co.kr/detail/S000218315399' },
  { year: '2025', month: '10월', title: '월간 플로라 2025년 10월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000559537.jpg', link: 'https://product.kyobobook.co.kr/detail/S000218053700' },
  { year: '2025', month: '9월', title: '월간 플로라 2025년 9월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000553856.jpg', link: 'https://product.kyobobook.co.kr/detail/S000217444463' },
  { year: '2025', month: '8월', title: '월간 플로라 2025년 8월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000547244.jpg', link: 'https://product.kyobobook.co.kr/detail/S000217192569' },
  { year: '2025', month: '7월', title: '월간 플로라 2025년 7월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000541273.jpg', link: 'https://product.kyobobook.co.kr/detail/S000216951107' },
  { year: '2025', month: '6월', title: '월간 플로라 2025년 6월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000534961.jpg', link: 'https://product.kyobobook.co.kr/detail/S000216702974' },
  { year: '2025', month: '5월', title: '월간 플로라 2025년 5월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000528328.jpg', link: 'https://product.kyobobook.co.kr/detail/S000216406228' },
  { year: '2025', month: '4월', title: '월간 플로라 2025년 4월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000521800.jpg', link: 'https://product.kyobobook.co.kr/detail/S000216180058' },
  { year: '2025', month: '3월', title: '월간 플로라 2025년 3월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000515281.jpg', link: 'https://product.kyobobook.co.kr/detail/S000215934167' },
  { year: '2025', month: '2월', title: '월간 플로라 2025년 2월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000508009.jpg', link: 'https://product.kyobobook.co.kr/detail/S000215648247' },
  { year: '2025', month: '1월', title: '월간 플로라 2025년 1월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000503103.jpg', link: 'https://product.kyobobook.co.kr/detail/S000215097734' },
  // 2024
  { year: '2024', month: '12월', title: '월간 플로라 2024년 12월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000496122.jpg', link: 'https://product.kyobobook.co.kr/detail/S000214883307' },
  { year: '2024', month: '11월', title: '월간 플로라 2024년 11월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000490045.jpg', link: 'https://product.kyobobook.co.kr/detail/S000214650698' },
  { year: '2024', month: '10월', title: '월간 플로라 2024년 10월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000483511.jpg', link: 'https://product.kyobobook.co.kr/detail/S000214451651' },
  { year: '2024', month: '9월', title: '월간 플로라 2024년 9월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000476575.jpg', link: 'https://product.kyobobook.co.kr/detail/S000214158441' },
  { year: '2024', month: '8월', title: '월간 플로라 2024년 8월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000470559.jpg', link: 'https://product.kyobobook.co.kr/detail/S000213921689' },
  { year: '2024', month: '7월', title: '월간 플로라 2024년 7월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000465005.jpg', link: 'https://product.kyobobook.co.kr/detail/S000213676021' },
  { year: '2024', month: '6월', title: '월간 플로라 2024년 6월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000457765.jpg', link: 'https://product.kyobobook.co.kr/detail/S000213425216' },
  { year: '2024', month: '5월', title: '월간 플로라 2024년 5월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000452463.jpg', link: 'https://product.kyobobook.co.kr/detail/S000213134285' },
  { year: '2024', month: '4월', title: '월간 플로라 2024년 4월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000445892.jpg', link: 'https://product.kyobobook.co.kr/detail/S000212807433' },
  { year: '2024', month: '3월', title: '월간 플로라 2024년 3월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000439785.jpg', link: 'https://product.kyobobook.co.kr/detail/S000212604598' },
  { year: '2024', month: '2월', title: '월간 플로라 2024년 2월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000433837.jpg', link: 'https://product.kyobobook.co.kr/detail/S000212176719' },
  { year: '2024', month: '1월', title: '월간 플로라 2024년 1월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000428369.jpg', link: 'https://product.kyobobook.co.kr/detail/S000211796521' },
  // 2023
  { year: '2023', month: '12월', title: '월간 플로라 2023년 12월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000421858.jpg', link: 'https://product.kyobobook.co.kr/detail/S000211545967' },
  { year: '2023', month: '11월', title: '월간 플로라 2023년 11월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000415727.jpg', link: 'https://product.kyobobook.co.kr/detail/S000210833232' },
  { year: '2023', month: '10월', title: '월간 플로라 2023년 10월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000410616.jpg', link: 'https://product.kyobobook.co.kr/detail/S000209650973' },
  { year: '2023', month: '9월', title: '월간 플로라 2023년 9월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000402864.jpg', link: 'https://product.kyobobook.co.kr/detail/S000208721315' },
  { year: '2023', month: '8월', title: '월간 플로라 2023년 8월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000397146.jpg', link: 'https://product.kyobobook.co.kr/detail/S000208257475' },
  { year: '2023', month: '7월', title: '월간 플로라 2023년 7월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000390840.jpg', link: 'https://product.kyobobook.co.kr/detail/S000202827421' },
  { year: '2023', month: '6월', title: '월간 플로라 2023년 6월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000384313.jpg', link: 'https://product.kyobobook.co.kr/detail/S000202478958' },
  { year: '2023', month: '5월', title: '월간 플로라 2023년 5월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000378466.jpg', link: 'https://product.kyobobook.co.kr/detail/S000201794311' },
  { year: '2023', month: '4월', title: '월간 플로라 2023년 4월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000371399.jpg', link: 'https://product.kyobobook.co.kr/detail/S000201360836' },
  { year: '2023', month: '3월', title: '월간 플로라 2023년 3월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000365701.jpg', link: 'https://product.kyobobook.co.kr/detail/S000201160902' },
  { year: '2023', month: '2월', title: '월간 플로라 2023년 2월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000358734.jpg', link: 'https://product.kyobobook.co.kr/detail/S000200787686' },
  { year: '2023', month: '1월', title: '월간 플로라 2023년 1월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000352640.jpg', link: 'https://product.kyobobook.co.kr/detail/S000200554180' },
  // 2022
  { year: '2022', month: '12월', title: '월간 플로라 2022년 12월호', thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000345390.jpg', link: 'https://product.kyobobook.co.kr/detail/S000200330305' },
  { year: '2022', month: '11월', title: '월간 플로라 2022년 11월호', subtitle: "'에코 플라워' 플라잉드라이플라워 슈즈 / 표지 작업", thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000339726.jpg', link: 'https://product.kyobobook.co.kr/detail/S000200128281' },
  { year: '2022', month: '10월', title: '월간 플로라 2022년 10월호', subtitle: "'에코 플라워' 후르츠어레인지먼트 시즌테마 디자인 2종", thumbnail: null, link: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000005018101' },
  { year: '2022', month: '9월', title: '월간 플로라 2022년 9월호', subtitle: "'에코 플라워' 포토테이블 장식", thumbnail: null, link: 'https://ebook-product.kyobobook.co.kr/dig/epd/ebook/E000005018095' },
  { year: '2022', month: '8월', title: '월간 플로라 2022년 8월호', subtitle: "'에코 플라워' 스머지 스틱 / 표지 작업", thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000285214.jpg', link: 'https://product.kyobobook.co.kr/detail/S000000327681' },
  { year: '2022', month: '7월', title: '월간 플로라 2022년 7월호', subtitle: "'에코 플라워' 그린 시험관 어레인지먼트", thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000284088.jpg', link: 'https://product.kyobobook.co.kr/detail/S000000327568' },
  { year: '2022', month: '6월', title: '월간 플로라 2022년 6월호', subtitle: "'에코 플라워' 레인 포레스트", thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000283081.jpg', link: 'https://product.kyobobook.co.kr/detail/S000000327468' },
  { year: '2022', month: '5월', title: '월간 플로라 2022년 5월호', subtitle: "'에코 플라워' 버드네스트 어레인지먼트", thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000282046.jpg', link: 'https://product.kyobobook.co.kr/detail/S000000327364' },
  { year: '2022', month: '4월', title: '월간 플로라 2022년 4월호', subtitle: "'에코 플라워' 내추럴폼 카네이션 화단", thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000281827.jpg', link: 'https://product.kyobobook.co.kr/detail/S000000327342' },
  { year: '2022', month: '3월', title: '월간 플로라 2022년 3월호', subtitle: "'에코 플라워' 노플로랄폼 스프링 토피어리", thumbnail: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/3904000292236.jpg', link: 'https://product.kyobobook.co.kr/detail/S000000328383' },
];

const projectItems = [
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
  { title: '꽃도시락 만들기 - 재료준비', type: '온라인 클래스' },
  { title: '꽃도시락 만들기 - 제작편', type: '온라인 클래스' },
];

export default function FlowersArchive() {
  const [activeTab, setActiveTab] = useState('flora');
  const [selectedYear, setSelectedYear] = useState('all');

  const groupedFlora = floraItems.reduce((acc, item) => {
    if (!acc[item.year]) acc[item.year] = [];
    acc[item.year].push(item);
    return acc;
  }, {});

  const sortedYears = Object.keys(groupedFlora).sort((a, b) => b - a);
  
  const filteredYears = selectedYear === 'all' 
    ? sortedYears 
    : sortedYears.filter(y => y === selectedYear);

  return (
    <section className="py-16 lg:py-24 bg-[#FAF8F3]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span 
            className="text-[#9CAF88] tracking-[0.2em] block mb-4"
            style={{ fontSize: '12px', fontFamily: 'Inter, sans-serif' }}
          >
            MAGAZINE
          </span>
          <h2
            className="text-4xl lg:text-5xl mb-4 text-[#3D3D3D]"
            style={{ fontFamily: 'Fraunces, serif', letterSpacing: '0.02em' }}
          >
            월간 플로라
          </h2>
          <p
            className="text-base max-w-2xl mx-auto text-[#3D3D3D]/60"
            style={{ fontFamily: 'Noto Sans KR, sans-serif', lineHeight: '1.8' }}
          >
            2022년 12월부터 매월 연재 중인 플라워 디자인 포트폴리오
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm transition-all font-ui-ko ${
                  activeTab === tab.id
                    ? 'bg-[#3D3D3D] text-white shadow-md'
                    : 'bg-white text-[#3D3D3D]/70 hover:bg-white/80 shadow-sm'
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'flora' && (
            <motion.div
              key="flora"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Year Filter */}
              <div className="flex flex-wrap justify-center gap-2 mb-10">
                <button
                  onClick={() => setSelectedYear('all')}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    selectedYear === 'all'
                      ? 'bg-[#9CAF88] text-white'
                      : 'bg-white text-[#3D3D3D]/60 hover:bg-[#9CAF88]/10'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  전체
                </button>
                {sortedYears.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      selectedYear === year
                        ? 'bg-[#9CAF88] text-white'
                        : 'bg-white text-[#3D3D3D]/60 hover:bg-[#9CAF88]/10'
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {year}
                  </button>
                ))}
              </div>

              {filteredYears.map((year) => (
                <div key={year} className="mb-16">
                  {/* Year Header */}
                  <div className="flex items-center gap-3 mb-8">
                    <h3
                      className="text-3xl text-[#3D3D3D]"
                      style={{ fontFamily: 'Fraunces, serif' }}
                    >
                      {year}
                    </h3>
                    <div className="flex-1 h-px bg-[#E8DCC8]" />
                    <span 
                      className="text-[#9CAF88] text-sm"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {groupedFlora[year].length}권
                    </span>
                  </div>

                  {/* 3-Column Grid (Desktop), 3x4 per year layout */}
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
                        {/* Cover Image */}
                        <div className="relative overflow-hidden rounded-xl bg-white shadow-sm group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                          {item.thumbnail ? (
                            <img
                              src={item.thumbnail}
                              alt={item.title}
                              className="w-full aspect-[3/4] object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full aspect-[3/4] bg-gradient-to-b from-[#9CAF88]/20 to-[#E8DCC8]/30 flex items-center justify-center">
                              <div className="text-center">
                                <BookOpen className="mx-auto text-[#9CAF88]/40 mb-2" size={40} />
                                <span className="text-[#3D3D3D]/40 text-sm" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
                                  표지 준비중
                                </span>
                              </div>
                            </div>
                          )}
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                            <span className="text-white text-sm tracking-[0.1em] flex items-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                              <ExternalLink size={14} />
                              교보문고에서 보기
                            </span>
                          </div>
                        </div>

                        {/* Title & Subtitle */}
                        <div className="mt-4">
                          <h4
                            className="text-[#3D3D3D] text-base mb-1"
                            style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 500 }}
                          >
                            월간 플로라 {item.year}년 {item.month}호
                          </h4>
                          {item.subtitle && (
                            <p
                              className="text-[#3D3D3D]/60 text-sm leading-relaxed"
                              style={{ fontFamily: 'Noto Sans KR, sans-serif' }}
                            >
                              {item.subtitle}
                            </p>
                          )}
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              ))}

              {/* Total Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-12 text-center"
              >
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm">
                  <Calendar size={18} className="text-[#9CAF88]" />
                  <span className="text-[#3D3D3D]/60 text-sm" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
                    총 <strong className="text-[#3D3D3D]">{floraItems.length}</strong>권 연재 중
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'works' && (
            <motion.div
              key="works"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center py-16"
            >
              <Flower2 className="mx-auto text-[#E8DCC8] mb-4" size={48} />
              <p className="text-[#3D3D3D]/50" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
                플라워 작품 갤러리 준비 중입니다.
              </p>
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
              <div className="grid md:grid-cols-2 gap-6">
                {classItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-8 shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Video className="text-[#9CAF88]" size={24} />
                      <span
                        className="text-[#9CAF88] tracking-[0.15em]"
                        style={{ fontSize: '11px', fontFamily: 'Inter, sans-serif' }}
                      >
                        {item.type}
                      </span>
                    </div>
                    <h4
                      className="text-xl text-[#3D3D3D]"
                      style={{ fontFamily: 'Noto Serif KR, serif' }}
                    >
                      🌼 꽃문화플랫폼 {item.title}
                    </h4>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'project' && (
            <motion.div
              key="project"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {projectItems.map((project, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3
                    className="text-2xl mb-2 text-[#3D3D3D]"
                    style={{ fontFamily: 'Noto Serif KR, serif' }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-[#3D3D3D]/70 mb-6"
                    style={{ fontFamily: 'Noto Sans KR, sans-serif' }}
                  >
                    {project.subtitle}
                  </p>
                  <div className="space-y-3">
                    {project.items.map((item, i) => (
                      <a
                        key={i}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-[#3D3D3D] hover:text-[#9CAF88] transition-colors"
                        style={{ fontFamily: 'Noto Sans KR, sans-serif', fontSize: '15px' }}
                      >
                        <Flower2 size={16} className="text-[#9CAF88]" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
