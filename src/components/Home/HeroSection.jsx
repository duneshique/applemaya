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
    <section className="relative h-screen overflow-hidden">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          willChange: 'transform'
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1756266749980-eb11d4a8194c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmbG93ZXIlMjBhcnJhbmdlbWVudHxlbnwxfHx8fDE3NjgwMjk3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Flower Arrangement"
          className="w-full h-full object-cover"
        />
        {/* Semi-transparent cream gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F3]/60 via-[#FAF8F3]/50 to-[#FAF8F3]/70" />
      </div>

      {/* Center Content */}
      <div className="relative h-full flex flex-col items-center justify-center z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h1 
            className="text-[56px] md:text-[72px] mb-4 font-serif text-[#3D3D3D]"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            Maya Moon
          </h1>
          <p 
            className="text-[18px] tracking-[0.3em] text-[#2C3E2F] uppercase font-sans"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Author · Florist
          </p>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div
          className="absolute bottom-12"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        >
          <ChevronDown className="w-8 h-8 text-[#9CAF88]" />
        </motion.div>
      </div>
    </section>
  );
}

