import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
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
  return (
    <Layout>
      <Head>
        <title>Maya Moon | Author & Florist</title>
        <meta name="description" content="Portfolio of Maya Moon - Author, Florist, and Tarot Reader based in Seoul." />
        <meta property="og:title" content="Maya Moon | Author & Florist" />
        <meta property="og:description" content="Portfolio of Maya Moon - Author, Florist, and Tarot Reader based in Seoul." />
        <meta property="og:type" content="website" />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroSection />
        <FeaturedWork />
        <AboutSection />
        <BooksSection />
        <FlowersSection />
        <MediaSection />
        <ContactSection />
      </motion.div>
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

