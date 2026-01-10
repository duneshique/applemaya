import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Instagram, BookOpen } from 'lucide-react';

export default function AboutSection() {
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
      id="about" 
      className="py-[120px] px-6 md:px-[60px] bg-[#FAF8F3]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: Circular Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                <img
                  src="https://image.yes24.com/momo/TopCate5502/MidCate007/550165343.jpg?rb-4.1.0&q=80&w=1080"
                  alt="Hyejeong Moon"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="text-[36px] mb-8 font-serif text-[#3D3D3D]"
              style={{ fontFamily: 'Fraunces, serif' }}
            >
              About Hyejeong
            </h2>
            
            <div 
              className="space-y-6 text-[16px] text-[#6B7A6E] leading-relaxed font-sans"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <p>
                With a background in psychology and years as a marketer, I spent most of my life understanding others' desires. But when I finally asked what I truly wanted, everything changed. Following my heart led me to flowers and to founding Hyejeong's Studio—a studio where I practice eco-friendly, naturalistic design, replacing plastic with biodegradable materials and honoring the beauty of each season.
              </p>
              
              <p>
                Flowers taught me that we all have our own seasons, and beauty isn't about perfection—it's about authenticity. I've shared these reflections in Every Moment Needs Flowers, Eco Flower Recipe, and Season Flower Work Journal. Recently, I began writing Tarot Card Reading Café, revisiting my lifelong dream of storytelling and exploring how we learn to listen to ourselves.
              </p>
              
              <p>
                I live by one question: "Will I regret not doing this before I die?" It's helped me choose meaning over comfort. My hope is that through my work—with flowers or words—I can encourage you to ask the same question and trust where your heart leads.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://www.instagram.com/mayaflor_co/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#9CAF88] flex items-center justify-center text-white hover:bg-[#7A9168] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://brunch.co.kr/@mayaflor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#9CAF88] flex items-center justify-center text-white hover:bg-[#7A9168] transition-colors duration-300"
                aria-label="Brunch"
              >
                <BookOpen className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

