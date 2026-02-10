import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if it's the first visit of the session
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('hasVisited', 'true');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[100] bg-background-linen flex flex-col items-center justify-center p-6"
        >
          <div className="relative flex flex-col items-center">
            <svg width="100" height="100" viewBox="0 0 100 100" className="mb-8">
              {/* Organic "Flower" SVG Animation */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation, i) => (
                <motion.ellipse
                  key={i}
                  cx="50" cy="35" rx="10" ry="25"
                  fill="none"
                  stroke="#9CAF88"
                  strokeWidth="1.5"
                  initial={{ rotate: rotation, scale: 0, opacity: 0 }}
                  animate={{ 
                    rotate: rotation, 
                    scale: [0, 1.2, 1], 
                    opacity: 1 
                  }}
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
                fill="#C4A57B"
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
