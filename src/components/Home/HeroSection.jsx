import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          willChange: 'transform'
        }}
      >
        <div 
          className="w-full h-full bg-cover bg-center-right"
          style={{
            backgroundImage: 'url(/images/hero/hero_background1.webp)',
            backgroundPosition: 'center right',
            backgroundSize: 'cover'
          }}
        />
        {/* Overlay for visual balance - 40% opacity */}
        <div 
          className="absolute inset-0 bg-white"
          style={{ opacity: 0.4 }}
        />
      </div>

      {/* Center Content */}
      <div className="relative h-full flex flex-col items-center justify-center z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl mb-4 text-text-warm font-display-en font-semibold"
            style={{ 
              textRendering: 'geometricPrecision',
              fontOpticalSizing: 'auto',
              fontVariationSettings: '"wght" 600, "opsz" 72',
              letterSpacing: '0.02em'
            }}
          >
            Hyejoung Moon
          </h1>
          <p 
            className="text-base md:text-lg tracking-[0.3em] text-text-warm/80 uppercase font-sans-en"
          >
            Author · Florist
          </p>
        </motion.div>

        {/* Animated Scroll Indicator - Pulsing V shape for next action guidance */}
        <motion.div
          className="absolute bottom-10 md:bottom-16 flex flex-col items-center gap-2 cursor-pointer group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-text-warm/40 text-[10px] tracking-[0.3em] font-sans uppercase mb-1 group-hover:text-accent-sage transition-colors">
            Scroll
          </span>
          <motion.div
            animate={{ 
              y: [0, 8, 0],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ChevronDown className="w-8 h-8 text-accent-sage" strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
