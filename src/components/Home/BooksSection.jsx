import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';

const books = [
  {
    title: "Tarot Card Reading Café",
    subtitle: "A Story of Love, Growth, and Healing in Tarot Cards",
    year: "2025",
    description: "Tarot Card Reading Café is a psychological novel that keenly captures the raw truth of love, wounds, and desire through the eyes of tarot reader 'Shin Se-ryeon,' who peers into the wavering hearts of others. It is a romance narrative of healing and growth that never misses the subtle tremors of emotion.",
    image: "https://images.unsplash.com/photo-1584670679624-78d361cc64f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwcGFnZXMlMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzY4MDI4NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    kyobobookId: "S000217222317",
    purchaseLinks: [
      { name: "Kyobo", url: "https://product.kyobobook.co.kr/detail/S000217222317" },
      { name: "YES24", url: "https://www.yes24.com/product/goods/150529430" },
      { name: "Aladin", url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=369307743" }
    ]
  },
  {
    title: "Eco Flower Recipe",
    subtitle: "Flower Styling Starting with a Single Bloom",
    year: "2022",
    description: "An eco-friendly flower styling book featuring 36 projects with step-by-step instructions using easily accessible flowers and sustainable materials. Packed with Hyejeong's unique arrangement techniques, it guides everyone from beginners to professional florists in creating naturally beautiful designs—from single-stem pieces to full space styling.",
    image: "https://images.unsplash.com/photo-1591966801718-48eb8ba0f8f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9yYWwlMjBhcnJhbmdlbWVudHxlbnwxfHx8fDE3NjgwMjg0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    kyobobookId: "S000001943120",
    purchaseLinks: [
      { name: "Kyobo", url: "https://product.kyobobook.co.kr/detail/S000001943120" },
      { name: "YES24", url: "http://www.yes24.com/Product/Goods/99480676" },
      { name: "Aladin", url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=266925841" }
    ]
  },
  {
    title: "Every Moment Needs Flowers",
    subtitle: "How to Comfort Your Heart with Flowers",
    year: "2021",
    description: "Everything learned from watching flowers bloom and fade. 'No flower blooms without swaying.' As flowers become part of everyday self-care, this book offers healing for those newly drawn to blooms and comprehensive knowledge for enthusiasts—from flower history to care techniques. Includes practical lessons on arrangement and maintenance to help you enjoy beautiful flowers at home longer.",
    image: "https://images.unsplash.com/photo-1727527248663-5b0c475061b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBpbGx1c3RyYXRpb258ZW58MXx8fHwxNzY4MDI4NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    kyobobookId: "S000001949403",
    purchaseLinks: [
      { name: "Kyobo", url: "https://product.kyobobook.co.kr/detail/S000001949403" },
      { name: "YES24", url: "http://www.yes24.com/Product/Goods/106540288" },
      { name: "Aladin", url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=283048281" }
    ]
  }
];

export default function BooksSection() {
  const openPreview = (bookId) => {
    const previewUrl = `https://product.kyobobook.co.kr/book/preview/${bookId}`;
    
    const width = 1024;
    const height = 768;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    
    window.open(
      previewUrl,
      'BookPreview',
      `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
    );
  };

  return (
    <section id="books" className="py-24 lg:py-32 bg-[#FAF8F3]">
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
            <BookOpen className="text-[#9CAF88]" size={32} />
          </div>
          <h2
            className="text-4xl lg:text-6xl mb-4 text-[#3D3D3D] font-serif"
            style={{ 
              fontFamily: 'Fraunces, serif',
              letterSpacing: '0.05em'
            }}
          >
            Published Works
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto text-[#3D3D3D]/70 font-sans"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              lineHeight: '1.8'
            }}
          >
            Stories that bloom on the page
          </p>
        </motion.div>

        {/* Books Grid */}
        <div className="space-y-24">
          {books.map((book, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative group">
                  <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Year Badge */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#9CAF88] rounded-full flex items-center justify-center text-white shadow-lg">
                    <span
                      style={{ fontFamily: 'Fraunces, serif' }}
                      className="text-lg"
                    >
                      {book.year}
                    </span>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1 flex flex-col items-end text-right' : 'flex flex-col items-start'}>
                <h3
                  className="text-3xl lg:text-4xl mb-3 text-[#3D3D3D] font-serif"
                  style={{ 
                    fontFamily: 'Fraunces, serif',
                    letterSpacing: '0.05em'
                  }}
                >
                  {book.title}
                </h3>
                <p
                  className="text-xl mb-6 text-[#9CAF88] italic font-serif"
                  style={{ 
                    fontFamily: 'Fraunces, serif'
                  }}
                >
                  {book.subtitle}
                </p>
                <p
                  className="text-[#3D3D3D]/80 mb-8 font-sans"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: '1.8'
                  }}
                >
                  {book.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => openPreview(book.kyobobookId)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#9CAF88] text-white rounded-full tracking-[0.2em] transition-all hover:bg-[#8A9E78] font-sans shadow-md hover:shadow-lg"
                    style={{ fontSize: '13px', fontFamily: 'Inter, sans-serif' }}
                  >
                    <BookOpen size={16} />
                    PREVIEW
                  </button>
                  {book.purchaseLinks.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 border border-[#3D3D3D]/20 text-[#3D3D3D]/80 rounded-full tracking-[0.1em] transition-all hover:bg-[#3D3D3D] hover:text-white font-sans text-sm"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {link.name}
                      <ExternalLink size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
