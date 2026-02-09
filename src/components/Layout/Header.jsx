import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram } from 'lucide-react';

const NAV_LINKS = [
  { label: 'ABOUT', href: '/#about' },
  { label: 'BOOKS', href: '/#books' },
  { label: 'FLOWERS', href: '/flowers' },
  { label: 'MEDIA', href: '/media' }
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [router.asPath]);

  // Close mobile menu on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      return () => document.removeEventListener('keydown', handleEsc);
    }
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background-linen/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          <Link 
            href="/"
            className="text-2xl font-display-en font-semibold tracking-tight text-text-warm hover:opacity-70 transition-opacity"
          >
            Hyejoung Moon
          </Link>

          <div className="hidden lg:flex items-center gap-12">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="tracking-[0.2em] text-[13px] transition-all duration-300 hover:text-accent-sage text-text-warm font-sans-en inline-block"
                style={{ 
                  WebkitFontSmoothing: 'antialiased',
                  transform: 'translateZ(0)'
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-text-warm"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
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
              className="lg:hidden overflow-hidden absolute top-full left-0 right-0 bg-background-linen/95 backdrop-blur-xl border-b border-text-warm/10 shadow-lg"
            >
              <nav
                id="mobile-navigation"
                role="navigation"
                aria-label="Mobile navigation"
                className="py-6 px-6 space-y-4"
              >
                {NAV_LINKS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block tracking-[0.2em] text-[13px] transition-colors hover:text-accent-sage text-text-warm font-sans-en"
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Language Toggle */}
                <div className="pt-6 mt-6 border-t border-background-beige flex items-center gap-3 text-[13px] font-sans-en tracking-wider">
                  <Link
                    href={router.asPath}
                    locale="en"
                    onClick={() => setIsOpen(false)}
                    className={`transition-colors ${
                      router.locale === 'en' 
                        ? 'text-text-warm font-medium' 
                        : 'text-text-muted/50 hover:text-text-muted'
                    }`}
                  >
                    EN
                  </Link>
                  <span className="text-text-muted/30">|</span>
                  <Link
                    href={router.asPath}
                    locale="ko"
                    onClick={() => setIsOpen(false)}
                    className={`transition-colors ${
                      router.locale === 'ko' 
                        ? 'text-text-warm font-medium' 
                        : 'text-text-muted/50 hover:text-text-muted'
                    }`}
                  >
                    KO
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
