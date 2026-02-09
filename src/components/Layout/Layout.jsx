import Header from './Header';
import ScrollToTop from './ScrollToTop';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useRouter } from 'next/router';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, scale: 0.98, transition: { duration: 0.2 } },
};

export default function Layout({ children }) {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  // If it's a home path with a hash, we want to skip the entrance/exit animations
  // to make anchor scrolling feel like a single-page app.
  const isHashLink = router.asPath.includes('#');
  const routeKey = isHashLink ? router.pathname : router.asPath;
  const skipAnimation = isHashLink || shouldReduceMotion;

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          id="main-content"
          key={routeKey}
          initial={skipAnimation ? false : "initial"}
          animate="animate"
          exit={skipAnimation ? false : "exit"}
          variants={pageVariants}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className="flex-grow"
        >

          {children}
        </motion.main>
      </AnimatePresence>
      <ScrollToTop />
    </>
  );
}
