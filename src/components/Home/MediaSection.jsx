import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Radio, Camera } from 'lucide-react';

const mediaItems = [
  {
    icon: Newspaper,
    type: "INTERVIEW",
    title: "The Art of Floral Storytelling",
    publication: "Seoul Design Magazine",
    date: "January 2026",
    excerpt: "Hyejeong Moon shares her unique approach to blending literary and botanical arts..."
  },
  {
    icon: Radio,
    type: "PODCAST",
    title: "Creative Conversations",
    publication: "The Modern Maker Podcast",
    date: "December 2025",
    excerpt: "An intimate discussion about finding inspiration in nature and the creative process..."
  },
  {
    icon: Camera,
    type: "FEATURE",
    title: "Gardens & Pages: A Visual Essay",
    publication: "Kinfolk Magazine",
    date: "October 2025",
    excerpt: "A photographic journey through Hyejeong's studio and garden sanctuary..."
  },
  {
    icon: Newspaper,
    type: "ARTICLE",
    title: "Seasonal Living",
    publication: "Cereal Magazine",
    date: "September 2025",
    excerpt: "On the philosophy of slow living and seasonal creativity..."
  }
];

export default function MediaSection() {
  return (
    <section id="media" className="py-24 lg:py-32 bg-[#FAF8F3]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            className="text-4xl lg:text-6xl mb-4 text-[#3D3D3D] font-serif"
            style={{ 
              fontFamily: 'Fraunces, serif',
              letterSpacing: '0.05em'
            }}
          >
            Press & Media
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto text-[#3D3D3D]/70 font-sans"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              lineHeight: '1.8'
            }}
          >
            Features, interviews, and conversations
          </p>
        </motion.div>

        {/* Media Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-[#9CAF88]/10 rounded-full text-[#9CAF88] group-hover:bg-[#9CAF88] group-hover:text-white transition-colors">
                  <item.icon size={24} />
                </div>
                <div className="flex-1">
                  <span
                    className="text-[#9CAF88] tracking-[0.2em] block mb-2 font-sans"
                    style={{ fontSize: '12px', fontFamily: 'Inter, sans-serif' }}
                  >
                    {item.type}
                  </span>
                  <h3
                    className="text-xl mb-2 text-[#3D3D3D] font-serif"
                    style={{ 
                      fontFamily: 'Fraunces, serif',
                      letterSpacing: '0.02em'
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
              
              <div className="mb-3">
                <p
                  className="text-[#3D3D3D]/60 font-sans italic"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px'
                  }}
                >
                  {item.publication} · {item.date}
                </p>
              </div>

              <p
                className="text-[#3D3D3D]/70 mb-4 font-sans"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: '1.7',
                  fontSize: '15px'
                }}
              >
                {item.excerpt}
              </p>

              <span
                className="text-[#9CAF88] tracking-[0.15em] text-sm group-hover:text-[#B85C50] transition-colors font-sans"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                READ MORE →
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
