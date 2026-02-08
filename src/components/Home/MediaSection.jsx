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

        {/* Media Grid - 4 most recent items */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
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
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="p-2.5 bg-[#9CAF88]/10 rounded-full text-[#9CAF88] group-hover:bg-[#9CAF88] group-hover:text-white transition-colors flex-shrink-0">
                    <Icon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-label-en text-[#9CAF88] block mb-1" style={{ fontSize: '11px' }}>
                      {item.type}
                    </span>
                    <h3 className="font-title-ko text-lg mb-2 text-[#3D3D3D] group-hover:text-[#9CAF88] transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-[#3D3D3D]/50 mb-3 italic text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {item.publication} · {item.date}
                </p>

                {item.excerpt && (
                  <p className="text-[#3D3D3D]/70 text-sm line-clamp-2" style={{ fontFamily: 'Noto Sans KR, sans-serif', lineHeight: '1.7' }}>
                    {item.excerpt}
                  </p>
                )}

                <span className="inline-block mt-4 font-label-en text-[#9CAF88] text-xs group-hover:text-[#B85C50] transition-colors">
                  READ MORE →
                </span>
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
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#9CAF88] text-white rounded-full font-label-en text-sm hover:bg-[#8A9E78] transition-colors shadow-md hover:shadow-lg"
          >
            VIEW ALL MEDIA
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
