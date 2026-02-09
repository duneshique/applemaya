import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import MediaArchive from '@/components/Media/MediaArchive';
import { motion } from 'framer-motion';
import { Newspaper } from 'lucide-react';

export default function MediaPage() {
  const { t } = useTranslation('media');
  
  return (
    <Layout>
      <Head>
        <title>{t('page_title')}</title>
        <meta name="description" content={t('meta_description')} />
        <meta property="og:title" content={t('page_title')} />
        <meta property="og:description" content={t('og_description')} />
        <meta property="og:type" content="website" />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-background-linen">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Newspaper className="text-accent-sage" size={32} />
              </div>
              <h1
                className="text-4xl lg:text-6xl mb-4 text-text-warm font-display-en font-medium"
                style={{ letterSpacing: '0.05em' }}
              >
                {t('hero_title')}
              </h1>
              <p
                className="text-lg max-w-2xl mx-auto text-text-warm/70 font-sans-en"
                style={{ lineHeight: '1.8' }}
              >
                {t('hero_subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        <MediaArchive />
      </motion.div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'media'])),
    },
  };
}
