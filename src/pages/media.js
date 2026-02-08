import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import MediaArchive from '@/components/Media/MediaArchive';
import { motion } from 'framer-motion';
import { Newspaper } from 'lucide-react';

export default function MediaPage() {
  return (
    <Layout>
      <Head>
        <title>Media | Hyejoung Moon</title>
        <meta name="description" content="Press coverage, interviews, and media appearances of Hyejoung Moon - Author and Florist." />
        <meta property="og:title" content="Media | Hyejoung Moon" />
        <meta property="og:description" content="Press coverage, interviews, and media appearances." />
        <meta property="og:type" content="website" />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-[#FAF8F3]">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Newspaper className="text-[#9CAF88]" size={36} />
              </div>
              <h1
                className="text-4xl lg:text-6xl mb-8 text-[#3D3D3D]"
                style={{ fontFamily: 'Fraunces, serif', letterSpacing: '0.05em' }}
              >
                Press & Media
              </h1>
              <p
                className="text-lg lg:text-xl max-w-3xl mx-auto text-[#3D3D3D]/70"
                style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.8' }}
              >
                Features, interviews, and conversations
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
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
