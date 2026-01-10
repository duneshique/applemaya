import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

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
      className="py-[120px] px-6 md:px-[60px] bg-[#FAF8F3]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[36px] text-center mb-16 font-serif text-[#3D3D3D]"
          style={{ fontFamily: 'Fraunces, serif' }}
        >
          Featured Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredWorks.map((work, index) => (
            <motion.a
              key={work.id}
              href={work.link}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group block bg-white rounded-[16px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative w-full overflow-hidden" style={{ paddingTop: '62.5%' }}>
                <img
                  src={work.image}
                  alt={work.title}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 
                  className="text-[24px] mb-3 text-[#2C3E2F] font-serif"
                  style={{ fontFamily: 'Fraunces, serif' }}
                >
                  {work.title}
                </h3>
                <p 
                  className="text-[14px] text-[#6B7A6E] mb-4 line-clamp-2 font-sans"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: '1.6'
                  }}
                >
                  {work.description}
                </p>
                <div className="flex items-center gap-2 text-[#B85C50] group-hover:gap-3 transition-all font-sans">
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>View More</span>
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

