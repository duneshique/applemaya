import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Newspaper, Youtube, Mic, BookOpen, ArrowRight } from 'lucide-react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import { mediaItems } from '@/data/media';

const getIcon = (category) => {
  switch (category) {
    case 'news': return Newspaper;
    case 'interview': return Mic;
    case 'youtube': return Youtube;
    default: return BookOpen;
  }
};

export default function MediaSection() {
  const { t } = useTranslation(['home', 'common', 'media']);
  const router = useRouter();
  const isEnglish = router.locale === 'en';
  
  // Get the 4 most recent items sorted by date
  const recentItems = [...mediaItems]
    .sort((a, b) => b.sortDate - a.sortDate)
    .slice(0, 4);

  return (
    <section id="media" className="py-24 lg:py-32 bg-white">
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
            <Newspaper className="text-accent-sage" size={32} />
          </div>
          <h2 className={`text-4xl lg:text-6xl mb-8 text-text-warm ${isEnglish ? 'font-display-en font-medium' : 'font-bold'}`}>
            {t('mediaSection.title')}
          </h2>
          <p className={`text-lg lg:text-xl max-w-2xl mx-auto text-text-warm/70 leading-relaxed ${isEnglish ? 'font-sans-en' : ''}`}>
            {t('mediaSection.subtitle')}
          </p>
        </motion.div>

        {/* Media Grid - Horizontal Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {recentItems.map((item, index) => {
            const Icon = getIcon(item.category);
            const title = t(`items.${item.id}.title`, { ns: 'media' });
            const publication = t(`items.${item.id}.publication`, { ns: 'media' });
            const categoryLabel = t(`filter_${item.category}`, { ns: 'media' });

            return (
              <motion.a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex bg-white rounded-[2rem] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] group border border-background-beige/30 transition-all duration-500"
              >
                {/* Thumbnail */}
                <div className="w-2/5 h-full min-h-[180px] relative overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 40vw, 20vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-md rounded-2xl text-accent-sage shadow-sm z-10">
                    <Icon size={20} />
                  </div>
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="flex-1 p-8 flex flex-col justify-center">
                  <span className="font-label-en text-accent-sage text-[10px] block mb-3 tracking-[0.25em] font-medium">
                    {categoryLabel.toUpperCase()}
                  </span>
                  <h3 className={`text-lg lg:text-xl mb-3 text-text-warm group-hover:text-accent-sage transition-colors line-clamp-2 leading-[1.5] ${isEnglish ? 'font-display-en' : 'font-bold'}`}>
                    {title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-sage/30" />
                    <p className={`text-text-warm/50 text-xs tracking-wide ${isEnglish ? 'font-sans-en' : 'font-sans'}`}>
                      {publication}
                    </p>
                  </div>

                  <span className="font-label-en text-accent-sage text-[11px] tracking-[0.15em] font-semibold group-hover:text-accent-rose transition-colors inline-flex items-center gap-1 mt-auto">
                    {t('common:cta.readMore')}
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
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
            className="inline-flex items-center gap-3 px-12 py-4 bg-text-warm text-white rounded-full tracking-[0.2em] hover:bg-black transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1 font-sans-en text-[13px] font-medium"
          >
            {t('common:cta.viewAllMedia')}
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
