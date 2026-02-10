import { Instagram, BookOpen, Youtube } from 'lucide-react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Footer() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale, asPath } = router;

  return (
    <footer className="bg-background-linen py-20 px-6 md:px-[60px] border-t border-text-warm/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="mb-10 text-center">
          <h2 
            className="text-2xl font-display-en font-medium mb-2 text-text-warm"
          >
            {t('nav.brand')}
          </h2>
          <p 
            className="text-[14px] text-text-muted tracking-[0.2em] uppercase font-sans-en"
          >
            {t('footer_role')}
          </p>
        </div>

        <div className="flex gap-6 mb-12">
          <a
            href="https://www.instagram.com/mayaflor_co/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-[#E4405F] transition-colors"
            aria-label={t('a11y.instagram')}
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://brunch.co.kr/@mayaflor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-[#1C1C1C] transition-colors"
            aria-label="Brunch"
          >
            <BookOpen size={24} />
          </a>
          <a
            href="https://www.youtube.com/@mayaflor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-[#FF0000] transition-colors"
            aria-label="YouTube"
          >
            <Youtube size={24} />
          </a>
        </div>

        {/* Language Toggle */}
        <div className="flex items-center gap-3 mb-8 text-[13px] font-sans-en tracking-wider">
          <Link
            href={asPath}
            locale="en"
            className={`transition-colors ${
              locale === 'en' 
                ? 'text-text-warm font-medium' 
                : 'text-text-muted/50 hover:text-text-muted'
            }`}
          >
            EN
          </Link>
          <span className="text-text-muted/30">|</span>
          <Link
            href={asPath}
            locale="ko"
            className={`transition-colors ${
              locale === 'ko' 
                ? 'text-text-warm font-medium' 
                : 'text-text-muted/50 hover:text-text-muted'
            }`}
          >
            KO
          </Link>
        </div>

        <div className="text-center">
          <p 
            className="text-[12px] text-text-muted/60 font-sans-en"
          >
            {t('footer_copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
