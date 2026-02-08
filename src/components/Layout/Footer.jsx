import { Instagram, BookOpen, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF8F3] py-20 px-6 md:px-[60px] border-t border-[#3D3D3D]/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="mb-10 text-center">
          <h2 
            className="text-2xl font-semibold mb-2 text-[#3D3D3D]"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            Hyejoung Moon
          </h2>
          <p 
            className="text-[14px] text-[#6B7A6E] tracking-[0.2em] uppercase font-sans"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Author & Florist
          </p>
        </div>

        <div className="flex gap-6 mb-12">
          <a
            href="https://www.instagram.com/mayaflor_co/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B7A6E] hover:text-[#E4405F] transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://brunch.co.kr/@mayaflor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B7A6E] hover:text-[#00C73C] transition-colors"
            aria-label="Brunch"
          >
            <BookOpen size={24} />
          </a>
          <a
            href="https://www.youtube.com/@mayaflor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B7A6E] hover:text-[#FF0000] transition-colors"
            aria-label="YouTube"
          >
            <Youtube size={24} />
          </a>
        </div>

        <div className="text-center">
          <p 
            className="text-[12px] text-[#6B7A6E]/60 font-sans"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Copyrights @ Hyejoung Moon. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
