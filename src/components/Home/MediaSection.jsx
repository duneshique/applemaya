import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Newspaper, Youtube, Mic, BookOpen, ArrowRight } from 'lucide-react';

// Import shared media data from MediaArchive
import { mediaItems } from '@/components/Media/MediaArchive';

const getIcon = (category) => {
  switch (category) {
    case 'news': return Newspaper;
    case 'interview': return Mic;
    case 'youtube': return Youtube;
    default: return BookOpen;
  }
};

export default function MediaSection() {
  // Get the 4 most recent items sorted by date
  const recentItems = [...mediaItems]
    .sort((a, b) => b.sortDate - a.sortDate)
    .slice(0, 4);

  return (
    <section id="media" className="py-24 lg:py-32 bg-[#FAF8F3]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Newspaper className="text-[#9CAF88]" size={28} />
          </div>
          <h2 className="font-display-en text-4xl lg:text-5xl mb-4 text-[#3D3D3D]">
            Press & Media
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[#3D3D3D]/70 italic" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.8' }}>
            Features, interviews, and conversations
          </p>
        </motion.div>

        {/* Media Grid - Horizontal Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {recentItems.map((item, index) => {
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group border border-[#E8DCC8]/30"
              >
                {/* Thumbnail */}
                <div className="w-1/3 h-full relative overflow-hidden flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 p-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[#9CAF88] shadow-sm">
                    <Icon size={14} />
                  </div>
                </div>

                <div className="flex-1 p-6 flex flex-col justify-center">
                  <span className="font-label-en text-[#9CAF88] text-[9px] block mb-2 tracking-[0.2em]">
                    {item.type}
                  </span>
                  <h3 className="font-title-ko text-base mb-2 text-[#3D3D3D] group-hover:text-[#9CAF88] transition-colors line-clamp-2 leading-[1.5]">
                    {item.title}
                  </h3>
                  
                  <p className="font-sans text-[#3D3D3D]/40 mb-3 italic text-[11px] tracking-wide">
                    {item.publication}
                  </p>

                  <span className="font-label-en text-[#9CAF88] text-[9px] tracking-[0.15em] group-hover:text-[#B85C50] transition-colors inline-flex items-center gap-1">
                    READ MORE →
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/media"
            className="inline-flex items-center gap-2 px-10 py-3.5 bg-[#9CAF88] text-white rounded-full font-label-en text-[11px] tracking-[0.2em] hover:bg-[#8A9E78] transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
          >
            VIEW ALL MEDIA
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
