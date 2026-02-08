import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import FlowersArchive from '@/components/Media/FlowersArchive';
import { motion } from 'framer-motion';
import { Flower2, Instagram } from 'lucide-react';

export default function FlowersPage() {
  return (
    <Layout>
      <Head>
        <title>Flowers | Hyejeong Moon</title>
        <meta name="description" content="Floral works, monthly flora magazine portfolio, and projects by Hyejeong Moon." />
        <meta property="og:title" content="Flowers | Hyejeong Moon" />
        <meta property="og:description" content="플라워 작품, 월간 플로라 포트폴리오, 프로젝트" />
        <meta property="og:type" content="website" />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Header Section - Matching main page design */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-[#FAF8F3]">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Flower2 className="text-[#9CAF88]" size={32} />
              </div>
              <h1
                className="text-4xl lg:text-6xl mb-4 text-[#3D3D3D]"
                style={{ 
                  fontFamily: 'Fraunces, serif',
                  letterSpacing: '0.05em'
                }}
              >
                Flowers
              </h1>
              <p
                className="text-lg max-w-2xl mx-auto text-[#3D3D3D]/70"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: '1.8',
                  fontStyle: 'italic'
                }}
              >
                Creating botanical beauty for life's meaningful moments
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
                  className="text-[#9CAF88] tracking-[0.15em]"
                  style={{ fontSize: '13px', fontFamily: 'Inter, sans-serif' }}
                >
                  INSTAGRAM
                </span>
              </div>
              <h2
                className="text-3xl lg:text-4xl mb-2 text-[#3D3D3D]"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                Latest Works
              </h2>
              <p
                className="text-[#3D3D3D]/60"
                style={{ fontFamily: 'Noto Sans KR, sans-serif' }}
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
              <p className="text-center text-[#3D3D3D]/40 text-xs mt-4" style={{ fontFamily: 'Inter, sans-serif' }}>
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#9CAF88] text-white rounded-full tracking-[0.15em] hover:bg-[#8A9E78] transition-colors shadow-md"
                style={{ fontSize: '13px', fontFamily: 'Inter, sans-serif' }}
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
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
