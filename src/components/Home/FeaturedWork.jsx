import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const featuredWorks = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1708863827471-4a46e65d2348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXJvdCUyMGNhcmRzJTIwYm9va3xlbnwxfHx8fDE3NjgwMjk3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Tarot Card Reading Café",
    description: "A journey through tarot wisdom and coffee culture, exploring the mystical connections between cards and daily life.",
    link: "#books"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1726345876870-ea706c6ed408?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBmbG9yYSUyMHN0eWxpbmd8ZW58MXx8fHwxNzY4MDI5Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Monthly Flora",
    description: "Seasonal floral arrangements celebrating nature's beauty, designed with sustainable and eco-friendly practices.",
    link: "#flowers"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1591617870684-6e861e6a48ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBzdXN0YWluYWJsZSUyMGZsb3dlcnN8ZW58MXx8fHwxNzY4MDI5Nzg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Eco Flower Styling Book",
    description: "Comprehensive guide to sustainable floral design, featuring zero-waste techniques and natural materials.",
    link: "#books"
  }
];

export default function FeaturedWork() {
  const { t } = useTranslation('home');
  const router = useRouter();
  const isEnglish = router.locale === 'en';
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-[120px] px-6 md:px-[60px] bg-background-linen"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={`text-[36px] text-center mb-16 text-text-warm ${
            isEnglish ? 'font-display-en font-medium' : 'font-bold'
          }`}
        >
          {t('featured.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredWorks.map((work, index) => (
            <motion.a
              key={work.id}
              href={work.link}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group block bg-white rounded-[16px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-2 border border-background-beige/20"
            >
              <div className="relative w-full overflow-hidden" style={{ paddingTop: '62.5%' }}>
                <Image
                  src={work.image}
                  alt={t(`featured.works.${index}.title`)}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 
                  className={`text-[24px] mb-3 text-text-warm group-hover:text-accent-sage transition-colors ${
                    isEnglish ? 'font-display-en' : 'font-bold'
                  }`}
                >
                  {t(`featured.works.${index}.title`)}
                </h3>
                <p 
                  className={`text-[14px] text-text-muted mb-4 line-clamp-2 ${
                    isEnglish ? 'font-sans-en' : 'font-sans'
                  }`}
                  style={{ 
                    lineHeight: '1.6'
                  }}
                >
                  {t(`featured.works.${index}.description`)}
                </p>
                <div className="flex items-center gap-2 text-accent-sage group-hover:gap-3 transition-all font-sans-en text-[13px] tracking-wider">
                  <span>VIEW MORE</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
