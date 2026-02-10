import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import HeroSection from '@/components/Home/HeroSection';
import FeaturedWork from '@/components/Home/FeaturedWork';
import AboutSection from '@/components/Home/AboutSection';
import BooksSection from '@/components/Home/BooksSection';
import FlowersSection from '@/components/Home/FlowersSection';
import MediaSection from '@/components/Home/MediaSection';
import ContactSection from '@/components/Home/ContactSection';
import { motion } from 'framer-motion';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <Head>
        <title>{t('meta.homeTitle')}</title>
        <meta name="description" content={t('meta.homeDesc')} />
        <meta property="og:title" content={t('meta.homeTitle')} />
        <meta property="og:description" content={t('meta.homeDesc')} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/profile/hyejeong_moon.webp" />
        <meta property="og:site_name" content={t('meta.siteName')} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/images/profile/hyejeong_moon.webp" />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroSection />
        <AboutSection />
        <BooksSection />
        <FlowersSection />
        <MediaSection />
        {/* <ContactSection /> */}
      </motion.div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home', 'books', 'media', 'flowers'])),
    },
  };
}

