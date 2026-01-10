import Header from './Header';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.main
          key={router.asPath}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className="flex-grow"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  );
}
