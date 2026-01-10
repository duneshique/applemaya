import { appWithTranslation } from 'next-i18next';
import "@/styles/globals.css";
import { ParallaxProvider } from 'react-scroll-parallax';
import LoadingScreen from '@/components/UI/LoadingScreen';
import CustomCursor from '@/components/UI/CustomCursor';

import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <LoadingScreen />
      <CustomCursor />
      <div className="flex flex-col min-h-screen">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default appWithTranslation(MyApp);
