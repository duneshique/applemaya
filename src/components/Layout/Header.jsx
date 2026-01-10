import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram } from 'lucide-react';

const NAV_LINKS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'BOOKS', href: '#books' },
  { label: 'FLOWERS', href: '#flowers' },
  { label: 'MEDIA', href: '#media' },
  { label: 'CONTACT', href: '#contact' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#FAF8F3]/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/"
            className="text-2xl tracking-wide font-serif text-[#3D3D3D]"
            style={{ 
              fontFamily: 'Fraunces, serif',
              WebkitFontSmoothing: 'antialiased'
            }}
          >
            <motion.span 
              whileHover={{ scale: 1.02 }} 
              className="inline-block origin-left"
              style={{ backfaceVisibility: 'hidden' }}
            >
              Hyejeong Moon
            </motion.span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-12">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="tracking-[0.2em] text-[13px] transition-all duration-300 hover:text-[#9CAF88] text-[#3D3D3D] inline-block"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  WebkitFontSmoothing: 'antialiased',
                  transform: 'translateZ(0)'
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#3D3D3D]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 space-y-4">
                {NAV_LINKS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block tracking-[0.2em] text-[13px] transition-colors hover:text-[#9CAF88] text-[#3D3D3D]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {item.label}
                  </a>
                ))}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

