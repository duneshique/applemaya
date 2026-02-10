import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useSpring(0, { damping: 20, stiffness: 100, mass: 0.5 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 100, mass: 0.5 });

  useEffect(() => {
    const mouseMove = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);

      // Raf loop or direct check for interactive nodes
      requestAnimationFrame(() => {
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
    />
  );
}
