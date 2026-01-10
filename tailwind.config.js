/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // For future app router compatibility
  ],
  theme: {
    extend: {
      colors: {
        background: {
          linen: "#FAF8F3",
          beige: "#E8DCC8",
        },
        accent: {
          sage: "#9CAF88",
          terracotta: "#C4A57B",
          rose: "#B85C50",
        },
        text: {
          warm: "#3D3D3D",
        }
      },
      fontFamily: {
        serif: ["Noto Serif KR", "serif"],
        display: ["Fraunces", "serif"],
        sans: ["Noto Sans KR", "Inter", "sans-serif"],
      },
      lineHeight: {
        organic: "1.9",
        relaxed: "2.0",
      },
      letterSpacing: {
        loose: "0.02em",
      },
      spacing: {
        mobile: "24px",
        tablet: "40px",
        desktop: "60px",
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        organic: "16px",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.08)",
      },
      transitionDuration: {
        slow: "600ms",
      },
      transitionTimingFunction: {
        'organic-ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [],
}
