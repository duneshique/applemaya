import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-background-linen flex items-center justify-center"
        >
          <div className="relative flex flex-col items-center">
            {/* Blooming Flower SVG */}
            <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Petals */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <motion.path
                  key={i}
                  d="M50 50C50 50 40 20 50 10C60 20 50 50 50 50Z"
                  fill="var(--color-accent-sage, #9CAF88)"
                  initial={{ scale: 0, rotate: angle, opacity: 0 }}
                  animate={{ scale: 1, rotate: angle, opacity: 0.6 }}
                  transition={{ 
                    duration: 1, 
                    delay: i * 0.1, 
                    ease: "easeOut" 
                  }}
                  style={{ originX: "50px", originY: "50px" }}
                />
              ))}
              {/* Center */}
              <motion.circle
                cx="50" cy="50" r="5"
                fill="var(--color-accent-warm, #C4A57B)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              />
            </svg>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-6 text-[10px] uppercase tracking-[0.4em] text-accent-sage font-bold"
            >
              Hyejoung Studio
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
