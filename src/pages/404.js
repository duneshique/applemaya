import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout/Layout';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function Custom404() {
  const { t } = useTranslation('common');
  
  return (
    <Layout>
      <Head>
        <title>404 | Page Not Found</title>
        <meta name="robots" content="noindex" />
      </Head>

      <section className="min-h-[80vh] flex items-center justify-center bg-background-linen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center px-6"
        >
          {/* 404 Display */}
          <motion.h1 
            className="text-8xl lg:text-9xl font-display-en text-text-warm/20 mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ letterSpacing: '0.1em' }}
          >
            404
          </motion.h1>
          
          {/* Message */}
          <h2 className="text-2xl lg:text-3xl font-display-en text-text-warm mb-4">
            Page Not Found
          </h2>
          <p className="text-text-warm/60 font-sans-en mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-sage text-white rounded-full font-sans-en text-sm tracking-wider hover:bg-accent-sage/90 transition-colors"
            >
              <Home size={18} />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-text-warm/20 text-text-warm rounded-full font-sans-en text-sm tracking-wider hover:bg-text-warm/5 transition-colors"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
