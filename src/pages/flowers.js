import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import FlowersArchive from '@/components/Media/FlowersArchive';
import { motion } from 'framer-motion';
import { Flower2, Instagram } from 'lucide-react';

export default function FlowersPage() {
  const { t } = useTranslation('flowers');
  
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
        {/* Hero Header Section - Matching main page design */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-background-linen">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Flower2 className="text-accent-sage" size={32} />
              </div>
              <h1
                className="text-4xl lg:text-6xl mb-4 text-text-warm font-display-en font-medium"
                style={{ 
                  letterSpacing: '0.05em'
                }}
              >
                {t('hero_title')}
              </h1>
              <p
                className="text-lg max-w-2xl mx-auto text-text-warm/70 font-sans-en"
                style={{ 
                  lineHeight: '1.8'
                }}
              >
                {t('hero_subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Instagram Section - Hidden temporarily for re-direction */}
        {/*
        <section className="py-16 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Instagram className="text-[#9CAF88]" size={24} />
                <span 
                  className="text-[#9CAF88] tracking-[0.15em] font-sans-en"
                  style={{ fontSize: '13px' }}
                >
                  INSTAGRAM
                </span>
              </div>
              <h2
                className="text-3xl lg:text-4xl mb-2 text-[#3D3D3D] font-display-en"
              >
                Latest Works
              </h2>
              <p
                className="text-[#3D3D3D]/60 font-sans-ko"
              >
                @mayaflor_co 에서 최신 작품을 만나보세요
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-[800px] mx-auto"
            >
              <iframe 
                src="https://snapwidget.com/embed/1084892" 
                className="snapwidget-widget w-full border-0 overflow-hidden rounded-xl" 
                allowTransparency="true" 
                frameBorder="0" 
                scrolling="no" 
                style={{ border: 'none', overflow: 'hidden', width: '100%', height: '400px' }}
                title="Instagram Feed from @mayaflor_co"
              />
              <p className="text-center text-[#3D3D3D]/40 text-xs mt-4 font-sans-en">
                SnapWidget 무료 버전 (위젯 ID 설정 필요)
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-8"
            >
              <a
                href="https://www.instagram.com/mayaflor_co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#9CAF88] text-white rounded-full tracking-[0.15em] hover:bg-[#8A9E78] transition-colors shadow-md font-sans-en"
                style={{ fontSize: '13px' }}
              >
                <Instagram size={18} />
                FOLLOW ON INSTAGRAM
              </a>
            </motion.div>
          </div>
        </section>
        */}

        <FlowersArchive />
      </motion.div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'flowers'])),
    },
  };
}
