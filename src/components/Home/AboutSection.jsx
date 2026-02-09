import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Instagram, BookOpen, Youtube } from 'lucide-react';

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
      className="py-[120px] px-6 md:px-[60px] bg-background-linen"
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
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                <Image
                  src="/images/profile/hyejeong_moon.webp"
                  alt="Hyejoung Moon"
                  fill
                  sizes="(max-width: 768px) 300px, 400px"
                  className="object-cover"
                  priority
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
              className="text-3xl font-semibold mb-8 text-text-warm font-display-en"
            >
              About Hyejoung
            </h2>
            
            <div 
              className="space-y-6 text-[16px] text-text-muted leading-relaxed font-sans-en"
            >
              <p>
                With a background in psychology and years as a marketer, I spent most of my life understanding others' desires. But when I finally asked what I truly wanted, everything changed. Following my heart led me to flowers and to founding Hyejoung's Studio—a studio where I practice eco-friendly, naturalistic design, replacing plastic with biodegradable materials and honoring the beauty of each season.
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
                className="w-12 h-12 rounded-full bg-accent-sage flex items-center justify-center text-white hover:bg-[#E4405F] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://brunch.co.kr/@mayaflor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-accent-sage flex items-center justify-center text-white hover:bg-[#1C1C1C] transition-colors duration-300"
                aria-label="Brunch"
              >
                <BookOpen className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@mayaflor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-accent-sage flex items-center justify-center text-white hover:bg-[#FF0000] transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
