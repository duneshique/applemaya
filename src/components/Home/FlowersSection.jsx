import React from 'react';
import { motion } from 'framer-motion';
import { Flower2 } from 'lucide-react';

const services = [
  {
    title: "Custom Arrangements",
    description: "Bespoke floral designs tailored to your vision and occasion, from intimate gatherings to grand celebrations.",
    features: ["Weddings", "Events", "Corporate", "Personal Gifting"]
  },
  {
    title: "Subscriptions",
    description: "Weekly or monthly deliveries of fresh, seasonal blooms curated to bring nature's beauty into your space.",
    features: ["Weekly Bouquets", "Monthly Collections", "Seasonal Themes", "Sustainable Sourcing"]
  },
  {
    title: "Workshops",
    description: "Learn the art of floral design in intimate classes where creativity blooms alongside botanical knowledge.",
    features: ["Beginner Classes", "Advanced Techniques", "Seasonal Specials", "Private Sessions"]
  }
];

const gallery = [
  "/images/gallery/gallery_1.webp",
  "/images/gallery/gallery_2.webp",
  "/images/gallery/gallery_3.webp"
];

export default function FlowersSection() {
  return (
    <section id="flowers" className="py-24 lg:py-32 bg-[#FAF8F3]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Flower2 className="text-[#9CAF88]" size={32} />
          </div>
          <h2
            className="text-4xl lg:text-6xl mb-4 text-[#3D3D3D] font-serif"
            style={{ 
              fontFamily: 'Fraunces, serif',
              letterSpacing: '0.05em'
            }}
          >
            Flowers
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto text-[#3D3D3D]/70 font-sans"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              lineHeight: '1.8'
            }}
          >
            Creating botanical beauty for life's meaningful moments
          </p>
        </motion.div>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <h3
                className="text-2xl mb-4 text-[#3D3D3D] font-serif"
                style={{ 
                  fontFamily: 'Fraunces, serif',
                  letterSpacing: '0.05em'
                }}
              >
                {service.title}
              </h3>
              <p
                className="text-[#3D3D3D]/70 mb-6 font-sans"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: '1.8'
                }}
              >
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-[#3D3D3D]/70 font-sans"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px'
                    }}
                  >
                    <div className="w-1.5 h-1.5 bg-[#9CAF88] rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3
            className="text-3xl mb-8 text-center text-[#3D3D3D] font-serif"
            style={{ 
              fontFamily: 'Fraunces, serif',
              letterSpacing: '0.05em'
            }}
          >
            
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow aspect-square"
              >
                <img
                  src={image}
                  alt={`Floral arrangement ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D3D3D]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-[#9CAF88] text-white rounded-full tracking-[0.2em] transition-all hover:bg-[#B85C50] hover:shadow-lg font-sans"
            style={{ fontSize: '13px', fontFamily: 'Inter, sans-serif' }}
          >
            BOOK A CONSULTATION
          </a>
        </motion.div>
      </div>
    </section>
  );
}
