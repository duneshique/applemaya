import React from 'react';
import { motion } from 'framer-motion';
import { Flower2, BookOpen, Video, FolderOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    id: 'flora',
    title: "Flora",
    titleKo: "월간 플로라",
    description: "2022년부터 매월 친환경 플라워 프로젝트를 주제로 연재 중인 플라워 디자인 포트폴리오입니다.",
    icon: BookOpen,
    link: "/flowers#flora",
    color: "#9CAF88"
  },
  {
    id: 'portfolio',
    title: "Portfolio",
    titleKo: "플라워 작품",
    description: "다양한 공간 장식과 프로젝트를 통해 선보이는 마야플로르의 독창적인 플라워 작품들을 소개합니다.",
    icon: Flower2,
    link: "/flowers#portfolio",
    color: "#B85C50"
  },
  {
    id: 'class',
    title: "Online Class",
    titleKo: "온라인 클래스",
    description: "플라워 러버들을 위해 제작된 전문적인 온라인 플라워 워크샵과 에코 디자인 강의를 만나보세요.",
    icon: Video,
    link: "/flowers#class",
    color: "#7A6B5D"
  }
];

export default function FlowersSection() {
  return (
    <section id="flowers" className="py-24 lg:py-32 bg-[#FAF8F3]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Flower2 className="text-[#9CAF88]" size={32} />
          </div>
          <h2
            className="text-4xl lg:text-6xl mb-6 text-[#3D3D3D] font-serif"
            style={{ 
              fontFamily: 'Fraunces, serif',
              letterSpacing: '0.05em'
            }}
          >
            Flowers
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto text-[#3D3D3D]/70 font-sans leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            계절의 흐름을 담은 지속가능한 플라워 디자인 프로젝트
          </p>
        </motion.div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-[2.5rem] bg-white p-10 shadow-sm border border-[#E8DCC8]/30 hover:shadow-xl transition-all duration-500"
              >
                {/* Icon Circle */}
                <div 
                  className="w-16 h-16 rounded-3xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{ backgroundColor: `${cat.color}15` }}
                >
                  <Icon size={32} style={{ color: cat.color }} />
                </div>

                <div className="mb-2">
                  <span className="text-[11px] font-label-en tracking-[0.2em] text-[#9CAF88] block mb-2">
                    {cat.title.toUpperCase()}
                  </span>
                  <h3 
                    className="text-2xl font-title-ko text-[#3D3D3D] mb-4"
                  >
                    {cat.titleKo}
                  </h3>
                </div>

                <p 
                  className="text-[#3D3D3D]/60 text-[15px] leading-relaxed mb-8 font-sans"
                >
                  {cat.description}
                </p>

                <Link
                  href={cat.link}
                  className="inline-flex items-center gap-2 text-sm font-label-en tracking-wider text-[#3D3D3D] group/btn transition-colors hover:text-[#9CAF88]"
                >
                  VIEW DETAILS
                  <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                </Link>

                {/* Subtle Background Accent */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                  style={{ backgroundColor: cat.color }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
