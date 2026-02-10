import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Newspaper, Youtube, Mic, BookOpen } from 'lucide-react';
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

export default function MediaArchive() {
  const { t } = useTranslation(['media', 'common']);
  const router = useRouter();
  const isEnglish = router.locale === 'en';
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: t('filter_all'), icon: BookOpen },
    { id: 'news', label: t('filter_news'), icon: Newspaper },
    { id: 'interview', label: t('filter_interview'), icon: Mic },
    { id: 'youtube', label: t('filter_youtube'), icon: Youtube },
  ];

  const filteredItems = (activeCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeCategory))
    .sort((a, b) => b.sortDate - a.sortDate);

  return (
    <section className="bg-background-linen pb-24 lg:pb-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-2 mb-12 max-w-sm mx-auto md:max-w-none"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs transition-all font-label-en tracking-widest ${
                  activeCategory === cat.id
                    ? 'bg-text-warm text-white shadow-md border-transparent'
                    : 'bg-white text-text-warm/70 hover:bg-white/80 shadow-sm border border-background-beige'
                }`}
              >
                <Icon size={14} />
                {cat.label.toUpperCase()}
              </button>
            );
          })}
        </motion.div>

        {/* Unified Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {filteredItems.map((item, index) => {
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
                className="flex flex-col sm:flex-row bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group border border-background-beige/30"
              >
                {/* Thumbnail */}
                <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={t(`media:items.${item.id}.title`)}
                    fill
                    sizes="(max-width: 640px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 p-2 bg-white/90 backdrop-blur-sm rounded-full text-accent-sage shadow-sm">
                    <Icon size={16} />
                  </div>
                </div>

                <div className="flex-1 p-6 lg:p-8 flex flex-col">
                  <div className="flex-1">
                    <span className="font-label-en text-accent-sage text-[9px] block mb-2 tracking-[0.2em]">
                      {t(`media:filter_${item.category}`).toUpperCase()}
                    </span>
                    <h4 className={`text-xl mb-3 text-text-warm group-hover:text-accent-sage transition-colors line-clamp-2 leading-[1.45] ${isEnglish ? 'font-display-en' : 'font-title-ko'}`}>
                      {t(`media:items.${item.id}.title`)}
                    </h4>
                    
                    <p className={`text-text-warm/40 mb-4 text-xs tracking-wide ${isEnglish ? 'font-sans-en' : 'font-sans'}`}>
                      {t(`media:items.${item.id}.publication`)} · {item.date}
                    </p>

                    {t(`media:items.${item.id}.excerpt`) && (
                      <p className={`text-text-warm/60 text-sm line-clamp-2 leading-[1.8] mb-4 ${isEnglish ? 'font-sans-en' : 'font-sans'}`}>
                        {t(`media:items.${item.id}.excerpt`)}
                      </p>
                    )}
                  </div>

                  <span className="font-label-en text-accent-sage text-[10px] tracking-[0.15em] group-hover:text-accent-rose transition-colors inline-flex items-center gap-1">
                    {t('common:cta.readMore')}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
