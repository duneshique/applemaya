import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export default function AboutSection() {
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
      { threshold: 0.2 }
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
      id="about" 
      ref={sectionRef}
      className="py-24 lg:py-32 bg-background-linen"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            {/* Oval Frame Container - 20% smaller */}
            <div className="relative w-[80%] max-w-[400px] mx-auto">
              {/* Decorative Oval Border */}
              <div 
                className="absolute inset-0 rounded-[50%] border-4 border-accent-sage/30"
                style={{
                  transform: 'scale(1.05)',
                  filter: 'blur(1px)'
                }}
              />
              
              {/* Main Oval Image Container */}
              <div 
                className="relative w-full overflow-hidden shadow-2xl"
                style={{
                  aspectRatio: '3/4',
                  borderRadius: '50%'
                }}
              >
                <Image
                  src="/images/profile/hyejeong_moon.webp"
                  alt={t('about.altPhoto')}
                  fill
                  sizes="(max-width: 768px) 80vw, 40vw"
                  className="object-cover"
                  style={{
                    objectPosition: 'center 20%'
                  }}
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className={`text-3xl mb-8 text-text-warm ${isEnglish ? 'font-display-en font-medium' : 'font-bold'}`}
            >
              {t('about.title')}
            </h2>
            
            <div 
              className="space-y-6 text-[16px] text-text-muted leading-relaxed"
            >
              <p>
                {t('about.paragraph1')}
              </p>
              <p>
                {t('about.paragraph2')}
              </p>
              <p>
                {t('about.paragraph3')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
