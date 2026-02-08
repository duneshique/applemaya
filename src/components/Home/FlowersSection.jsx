import React from 'react';
import { motion } from 'framer-motion';
import { Flower2, BookOpen, Video, FolderOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    id: 'flora',
    title: "Monthly Flora",
    titleKo: "FLORA",
    description: "A 2022 collection that celebrates sustainable flower design through thoughtful craftsmanship and natural botanicals, creating timeless arrangements for everyday enjoyment.",
    icon: BookOpen,
    link: "/flowers#flora",
    color: "#9CAF88"
  },
  {
    id: 'portfolio',
    title: "Artistic Works",
    titleKo: "PORTFOLIO",
    description: "A showcase of diverse design disciplines and artistic methodologies that transform creative vision into distinctive, impactful work across multiple mediums.",
    icon: Flower2,
    link: "/flowers#portfolio",
    color: "#B85C50"
  },
  {
    id: 'class',
    title: "Workshop",
    titleKo: "ONLINE CLASS",
    description: "Comprehensive flower design workshops developed for aspiring artists to master professional techniques, industry insights, and creative skills through structured curriculum.",
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
          <div className="flex items-center justify-center gap-3 mb-8">
            <Flower2 className="text-[#9CAF88]" size={36} />
          </div>
          <h2
            className="text-4xl lg:text-6xl mb-8 text-[#3D3D3D] font-serif"
            style={{ 
              fontFamily: 'Fraunces, serif',
              letterSpacing: '0.05em'
            }}
          >
            Flowers
          </h2>
          <p
            className="text-lg lg:text-xl max-w-3xl mx-auto text-[#3D3D3D]/70 font-sans leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Creating botanical beauty for life's meaningful moments
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
                  className="inline-flex items-center gap-2 tracking-wider text-[#3D3D3D] group/btn transition-colors hover:text-[#9CAF88]"
                  style={{ fontSize: '13px', fontFamily: 'Inter, sans-serif' }}
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
