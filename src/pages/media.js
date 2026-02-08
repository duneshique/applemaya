import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import MediaArchive from '@/components/Media/MediaArchive';
import { motion } from 'framer-motion';

export default function MediaPage() {
  return (
    <Layout>
      <Head>
        <title>Media | Hyejeong Moon</title>
        <meta name="description" content="Press coverage, interviews, and media appearances of Hyejeong Moon - Author and Florist." />
        <meta property="og:title" content="Media | Hyejeong Moon" />
        <meta property="og:description" content="Press coverage, interviews, and media appearances." />
        <meta property="og:type" content="website" />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#FAF8F3]">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-7xl mb-4 text-[#3D3D3D]"
              style={{ fontFamily: 'Fraunces, serif', letterSpacing: '0.05em' }}
            >
              Press & Media
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg max-w-2xl mx-auto text-[#3D3D3D]/70"
              style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.8' }}
            >
              기사, 인터뷰, 영상 아카이브
            </motion.p>
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
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
