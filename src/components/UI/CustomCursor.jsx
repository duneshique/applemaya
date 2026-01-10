import { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    let rafId;
    
    const mouseMove = (e) => {
      // Use requestAnimationFrame to optimize mouse move updates
      if (rafId) cancelAnimationFrame(rafId);
      
      rafId = requestAnimationFrame(() => {
        cursorX.set(e.clientX - 16);
        cursorY.set(e.clientY - 16);
        setMousePosition({ x: e.clientX, y: e.clientY });
        
        // Accurate target detection using data-cursor or standard interactive elements
        const target = e.target;
        const isInteractive = target.closest('a, button, [role="button"], [data-cursor]');
        
        if (isInteractive) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      });
    };

    window.addEventListener("mousemove", mouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent-sage pointer-events-none z-[9999] hidden lg:block"
      style={{
        x: cursorX,
        y: cursorY,
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? 'rgba(156, 175, 136, 0.1)' : 'transparent',
      }}
      transition={{ type: "spring", damping: 20, stiffness: 100, mass: 0.5 }}
    />
  );
}
