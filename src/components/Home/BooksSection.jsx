import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
import { books } from '@/data/books';

export default function BooksSection() {
  const openPreview = (book) => {
    const previewUrl = book.aladinPreviewUrl || `https://product.kyobobook.co.kr/book/preview/${book.kyobobookId}`;
    
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
    <section id="books" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <BookOpen className="text-accent-sage" size={32} />
          </div>
          <h2
            className="text-4xl lg:text-6xl mb-8 text-text-warm font-display-en"
            style={{ 
              letterSpacing: '0.05em'
            }}
          >
            Published Works
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto text-text-warm/70 font-sans-en"
            style={{ 
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
                  <div className="overflow-hidden rounded-2xl shadow-lg bg-white p-4">
                    <Image
                      src={book.image}
                      alt={book.title}
                      width={600}
                      height={800}
                      sizes="(max-width: 1024px) 80vw, 40vw"
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Year Badge */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-sage rounded-full flex items-center justify-center text-white shadow-lg">
                    <span
                      className="text-lg font-display-en"
                    >
                      {book.year}
                    </span>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1 flex flex-col items-end text-right' : 'flex flex-col items-start'}>
                <h3
                  className="text-3xl lg:text-4xl mb-3 text-text-warm font-display-en"
                  style={{ 
                    letterSpacing: '0.05em'
                  }}
                >
                  {book.title}
                </h3>
                <p
                  className="text-xl mb-6 text-accent-sage font-display-en"
                >
                  {book.subtitle}
                </p>
                <p
                  className="text-text-warm/80 mb-8 font-sans-en"
                  style={{ 
                    lineHeight: '1.8'
                  }}
                >
                  {book.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => openPreview(book)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent-sage text-white rounded-full tracking-[0.2em] transition-all hover:bg-accent-sage-dark font-sans-en text-[13px] shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <BookOpen size={16} />
                    PREVIEW
                  </button>
                  {book.purchaseLink && (
                    <a
                      href={book.purchaseLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 border border-text-warm/20 text-text-warm/80 rounded-full tracking-[0.1em] transition-all hover:bg-text-warm hover:text-white font-sans-en text-[13px]"
                    >
                      VIEW DETAILS
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
