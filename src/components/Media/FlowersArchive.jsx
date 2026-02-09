import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Flower2, Video, FolderOpen, ExternalLink, Calendar, CheckCircle2, X } from 'lucide-react';
import { floraItems, projectItems, classItems, portfolioImages, monthlyFlowerImages, ECO_FLOWER_TOTAL } from '@/data/flowers';
import { handleImageError } from '@/utils/imageUtils';

const tabs = [
  { id: 'flora', label: 'Flora', icon: BookOpen },
  { id: 'portfolio', label: 'Portfolio', icon: Flower2 },
  { id: 'class', label: 'Online Class', icon: Video },
];

export default function FlowersArchive() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('flora');
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleEcoCount, setVisibleEcoCount] = useState(9);
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && tabs.some(tab => tab.id === hash)) {
        setActiveTab(hash);
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    router.push({ pathname: router.pathname, hash: tabId }, undefined, { shallow: true });
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === 'ArrowRight') {
      const nextIdx = (idx + 1) % tabs.length;
      document.getElementById(`tab-${tabs[nextIdx].id}`).focus();
      handleTabChange(tabs[nextIdx].id);
    } else if (e.key === 'ArrowLeft') {
      const prevIdx = (idx - 1 + tabs.length) % tabs.length;
      document.getElementById(`tab-${tabs[prevIdx].id}`).focus();
      handleTabChange(tabs[prevIdx].id);
    }
  };

  return (
    <section className="bg-background-linen">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-12"
          role="tablist"
          aria-label="Portfolio Categories"
        >
          {tabs.map((tab, idx) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                role="tab"
                aria-selected={isSelected}
                aria-controls={`panel-${tab.id}`}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => handleTabChange(tab.id)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className={`flex items-center gap-1.5 md:gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-full text-[10px] md:text-xs transition-all font-label-en tracking-widest ${
                  isSelected
                    ? 'bg-text-warm text-white shadow-md border-transparent'
                    : 'bg-white text-text-warm/70 hover:bg-white/80 shadow-sm border border-background-beige'
                }`}
              >
                <Icon size={14} aria-hidden="true" />
                {tab.label.toUpperCase()}
              </button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'flora' && (
            <motion.div
              key="flora"
              id="panel-flora"
              role="tabpanel"
              aria-labelledby="tab-flora"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-10">
                  <h3 className="text-2xl text-text-warm font-display-en">
                    Magazine 'Flora' Cover Floral Design
                  </h3>
                  <div className="flex-1 h-px bg-background-beige" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-10">
                  {floraItems.map((item, idx) => (
                    <motion.a
                      key={idx}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="group block"
                    >
                      <div className="relative overflow-hidden rounded-xl bg-white shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 aspect-[3/4]">
                        <Image
                          src={item.thumbnail || '/images/placeholders/flora.webp'}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 50vw, 33vw"
                          className="object-cover"
                          onError={handleImageError}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                          <span className="text-white text-[11px] tracking-[0.2em] flex items-center gap-2 font-sans px-4 text-center uppercase">
                            <ExternalLink size={14} /> View Details
                          </span>
                        </div>
                      </div>
                      <div className="mt-6 text-center lg:text-left">
                        <h4 className="text-text-warm text-[15px] mb-1 tracking-wide italic font-display-en">
                          {item.title}
                        </h4>
                        <p className="text-accent-sage text-[11px] uppercase tracking-[0.1em] font-sans">
                          Mayaflor Design
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Eco-Flower Series Section */}
              <div className="mb-24">
                <div className="flex flex-col gap-2 mb-12">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl text-text-warm font-display-en">
                      Eco-Flower series
                    </h3>
                    <div className="flex-1 h-px bg-background-beige" />
                  </div>
                  <p className="text-text-warm/60 text-sm font-sans italic">
                    Currently serializing the 'Eco-Flower' series in Magazine 'Flora' (since 2021)
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-10">
                  {Array.from({ length: visibleEcoCount }, (_, i) => {
                    const imgNum = String(i + 1).padStart(2, '0');
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                        className="relative group cursor-pointer"
                        onClick={() => setSelectedImage(`/images/flora_ecoflower/flora_megazine_eco_flower${imgNum}.webp`)}
                      >
                        {/* Thumbnail Container: Zoomed to left half, matching upper section style */}
                        <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-sm bg-white group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                          <img
                            src={`/images/flora_ecoflower/flora_megazine_eco_flower${imgNum}.webp`}
                            alt={`Eco-Flower series ${imgNum}`}
                            className="w-[200%] h-full object-cover object-left transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                          />

                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pb-0">
                            <span className="text-white text-[10px] tracking-[0.2em] font-label-en border border-white/40 px-3 py-2 rounded-full backdrop-blur-sm">
                              VIEW FULL ARTICLE
                            </span>
                          </div>
                        </div>

                        {/* Caption styling to match Flora covers */}
                        <div className="mt-6 text-center lg:text-left">
                          <h4 className="text-text-warm text-[15px] mb-1 tracking-wide italic font-display-en">
                            Eco-Flower No.{imgNum}
                          </h4>
                          <p className="text-accent-sage text-[11px] uppercase tracking-[0.1em] font-sans">
                            Published in Flora
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Load More Button */}
                {visibleEcoCount < ECO_FLOWER_TOTAL && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center gap-3 mt-12"
                  >
                    <p className="text-text-warm/40 text-xs font-label-en tracking-widest">
                      {visibleEcoCount} / {ECO_FLOWER_TOTAL}
                    </p>
                    <button
                      onClick={() => setVisibleEcoCount(prev => Math.min(prev + 9, ECO_FLOWER_TOTAL))}
                      className="px-8 py-3 bg-white border border-background-beige text-text-warm/70 rounded-full text-xs font-label-en tracking-widest hover:bg-text-warm hover:text-white hover:border-transparent transition-all shadow-sm hover:shadow-md"
                    >
                      LOAD MORE
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {activeTab === 'portfolio' && (
            <motion.div
              key="portfolio"
              id="panel-portfolio"
              role="tabpanel"
              aria-labelledby="tab-portfolio"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-24">
                <div className="flex items-center gap-3 mb-10">
                  <h3 className="text-2xl text-text-warm font-display-en">
                    Flower Reflection on Books
                  </h3>
                  <div className="flex-1 h-px bg-background-beige" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 mb-12 w-full">
                  {portfolioImages.map((image, idx) => (
                    <motion.div
                      key={image.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      onClick={() => setSelectedImage(image.src)}
                      className={`relative overflow-hidden bg-white group cursor-pointer ${
                        image.isWide ? 'col-span-2 aspect-[16/9]' : 'aspect-square'
                      } rounded-sm sm:rounded-md`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Flower2 className="text-white/80" size={image.isWide ? 32 : 24} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Monthly Flower Section - Scroll Layered Animation */}
              <div className="mb-24">
                <div className="flex flex-col gap-2 mb-16">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl text-text-warm font-display-en">
                      Monthly Flower
                    </h3>
                    <div className="flex-1 h-px bg-background-beige" />
                  </div>
                  <p className="text-text-warm/60 text-sm font-sans italic">
                    A year of floral expressions, layered month by month
                  </p>
                </div>

                <div className="space-y-24">
                  {monthlyFlowerImages.map((item, idx) => (
                    <motion.div
                      key={item.month}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.8 }}
                      className="max-w-5xl mx-auto px-4"
                    >
                      <div className="relative group">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                          {/* Month Indicator Sidebar */}
                          <div className="flex flex-col items-center pt-2 min-w-[60px]">
                            <span className="text-4xl font-display-en text-accent-sage/30 font-bold select-none">
                              {String(item.month).padStart(2, '0')}
                            </span>
                            <div className="w-px h-16 bg-accent-sage/20 mt-4 hidden md:block" />
                          </div>
                          
                          {/* Image Container */}
                          <div className="flex-1 relative">
                            <div className="overflow-hidden rounded-[2rem] bg-white shadow-lg hover:shadow-2xl transition-all duration-700 border border-background-beige/20">
                              <img
                                src={item.src}
                                alt={item.alt}
                                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                                loading="lazy"
                              />
                            </div>

                            {/* Label */}
                            <div className="absolute -bottom-6 right-8 md:-right-6 bg-white/90 backdrop-blur-md border border-background-beige/30 px-8 py-5 rounded-2xl shadow-xl">
                              <p className="text-accent-sage font-label-en tracking-[0.2em] text-[10px] mb-1">MAYFLOR ARCHIVE</p>
                              <h4 className="text-text-warm font-display-en text-2xl italic">
                                {new Date(2024, item.month - 1).toLocaleString('en-US', { month: 'long' })}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/*
              <div className="space-y-12">
                <div className="flex items-center gap-4">
                  <FolderOpen className="text-accent-sage" size={28} />
                  <h3 className="text-3xl font-title-ko text-text-warm">Projects</h3>
                </div>
                
                {projectItems.map((project, idx) => (
                  <div key={idx} className={`bg-white rounded-[2.5rem] p-10 lg:p-12 shadow-sm border border-background-beige/30 ${project.isSpecial ? 'ring-2 ring-accent-sage/20' : ''}`}>
                    <div className="mb-8">
                      {project.isSpecial && (
                        <span className="inline-block px-3 py-1 rounded-full bg-accent-sage/10 text-accent-sage text-[10px] font-label-en tracking-widest mb-4">SPECIAL PROJECT</span>
                      )}
                      <h4 className="text-2xl mb-2 text-text-warm font-title-ko">{project.title}</h4>
                      <p className="text-text-warm/60 font-sans">{project.subtitle}</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8">
                      {project.items.map((item, i) => (
                        <a
                          key={i}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col gap-4 p-6 bg-background-linen rounded-[1.5rem] hover:bg-accent-sage/10 transition-all group"
                        >
                          {item.thumbnail && (
                            <div className="relative w-full h-32 overflow-hidden rounded-xl mb-2">
                              <Image src={item.thumbnail} alt={item.name} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
                            </div>
                          )}
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Flower2 size={16} className="text-accent-sage transition-transform group-hover:rotate-12" />
                              <span className="font-title-ko text-lg text-text-warm">{item.name}</span>
                            </div>
                            {item.desc && <p className="text-sm text-text-warm/60 leading-relaxed font-sans">{item.desc}</p>}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              */}
            </motion.div>
          )}

          {activeTab === 'class' && (
            <motion.div
              key="class"
              id="panel-class"
              role="tabpanel"
              aria-labelledby="tab-class"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-10">
                  <h3 className="text-2xl text-text-warm font-display-en">
                    Flower Online Class
                  </h3>
                  <div className="flex-1 h-px bg-background-beige" />
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                {classItems.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-background-beige/30 flex flex-col">
                    <div className="aspect-video relative overflow-hidden group">
                      <Image src={item.thumbnail} alt={item.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute top-6 left-6">
                        <span className="px-3 py-1 bg-text-warm text-white text-[10px] font-label-en tracking-widest rounded-full shadow-lg">ONLINE WORKSHOP</span>
                      </div>
                    </div>
                    <div className="p-10 flex flex-col flex-1">
                      <h4 className="text-2xl text-text-warm font-title-ko mb-2">{item.title}</h4>
                      <p className="text-accent-sage text-sm font-sans mb-4">{item.subtitle}</p>
                      <p className="text-text-warm/60 text-[15px] leading-relaxed mb-8 font-sans">{item.desc}</p>
                      
                      <div className="mt-auto">
                        <div className="space-y-3 mb-10">
                          {item.curriculum.map((c, i) => (
                            <div key={i} className="flex items-center gap-3 text-sm text-text-warm/70 font-sans">
                              <CheckCircle2 size={14} className="text-accent-sage" />
                              {c}
                            </div>
                          ))}
                        </div>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-4 bg-background-linen rounded-2xl flex items-center justify-center gap-3 text-text-warm hover:bg-text-warm hover:text-white transition-all font-label-en tracking-widest text-xs"
                        >
                          <Video size={16} /> VIEW CURRICULUM
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl w-full max-h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-full flex items-center justify-center group/modal">
                  <img
                    src={selectedImage}
                    alt="Full view"
                    className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                  />
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 backdrop-blur-md text-white rounded-full p-2.5 transition-all duration-300 hover:scale-110 border border-white/20 shadow-lg"
                    aria-label="Close"
                  >
                    <X size={20} strokeWidth={2.5} />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
