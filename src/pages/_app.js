import { appWithTranslation, useTranslation } from 'next-i18next';
import "@/styles/globals.css";
import { ParallaxProvider } from 'react-scroll-parallax';
import LoadingScreen from '@/components/UI/LoadingScreen';

import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import CustomCursor from '@/components/UI/CustomCursor';

function MyApp({ Component, pageProps }) {
  const { t } = useTranslation('common');
  
  return (
    <ParallaxProvider>
      <a href="#main-content" className="skip-to-content">
        {t('skip_to_content')}
      </a>
      <LoadingScreen />
      <CustomCursor />
      <div className="flex flex-col min-h-screen">
        <Component {...pageProps} />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default appWithTranslation(MyApp);
