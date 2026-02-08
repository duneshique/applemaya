import Header from './Header';
import ScrollToTop from './ScrollToTop';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function Layout({ children }) {
  const router = useRouter();

  // If it's a home path with a hash, we want to skip the entrance/exit animations
  // to make anchor scrolling feel like a single-page app.
  const isHashLink = router.asPath.includes('#');

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={isHashLink ? 'static-home' : router.asPath}
          initial={isHashLink ? false : "initial"}
          animate={isHashLink ? false : "animate"}
          exit={isHashLink ? "exit" : false}
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
