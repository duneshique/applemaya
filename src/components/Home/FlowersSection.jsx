import React from 'react';
import { motion } from 'framer-motion';
import { Flower2, BookOpen, Video, FolderOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const categoryConfig = [
  {
    id: 'flora',
    icon: BookOpen,
    link: "/flowers#flora",
    color: "#9CAF88"
  },
  {
    id: 'portfolio',
    icon: Flower2,
    link: "/flowers#portfolio",
    color: "#B85C50"
  },
  {
    id: 'class',
    icon: Video,
    link: "/flowers#class",
    color: "#7A6B5D"
  }
];

export default function FlowersSection() {
  const { t } = useTranslation(['home', 'common']);
  const router = useRouter();
  const isEnglish = router.locale === 'en';
  
  return (
    <section id="flowers" className="py-24 lg:py-32 bg-background-linen">
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
            <Flower2 className="text-accent-sage" size={36} />
          </div>
          <h2
            className={`text-4xl lg:text-6xl mb-8 text-text-warm ${isEnglish ? 'font-display-en font-medium' : 'font-bold'}`}
            style={{ 
              letterSpacing: isEnglish ? '0.05em' : '0.02em'
            }}
          >
            {t('flowersSection.title')}
          </h2>
          <p
            className="text-lg lg:text-xl max-w-3xl mx-auto text-text-warm/70 leading-relaxed"
          >
            {t('flowersSection.subtitle')}
          </p>
        </motion.div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categoryConfig.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-[2.5rem] bg-white p-10 shadow-sm border border-background-beige/30 hover:shadow-xl transition-all duration-500"
              >
                {/* Icon Circle */}
                <div 
                  className="w-16 h-16 rounded-3xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{ backgroundColor: `${cat.color}15` }}
                >
                  <Icon size={32} style={{ color: cat.color }} />
                </div>

                <div className="mb-2">
                  <span className="text-[11px] font-label-en tracking-[0.2em] text-accent-sage block mb-2">
                    {t(`flowersSection.categories.${index}.label`).toUpperCase()}
                  </span>
                  <h3 
                    className={`text-2xl text-text-warm mb-4 ${isEnglish ? 'font-display-en' : 'font-bold'}`}
                  >
                    {t(`flowersSection.categories.${index}.display`)}
                  </h3>
                </div>

                <p 
                  className={`text-text-warm/60 text-[15px] leading-relaxed mb-8 ${isEnglish ? 'font-sans-en' : ''}`}
                >
                  {t(`flowersSection.categories.${index}.description`)}
                </p>

                <Link
                  href={cat.link}
                  className="inline-flex items-center gap-2 tracking-wider text-text-warm group/btn transition-colors hover:text-accent-sage font-sans-en text-[13px]"
                >
                  {t('common:cta.viewDetails')}
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
