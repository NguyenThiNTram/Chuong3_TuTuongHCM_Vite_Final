/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  
  safelist: [
    'bg-red-700','bg-red-800','bg-slate-50','bg-slate-900',
    'text-white','text-red-700','text-slate-500','text-slate-900',
    'hover:bg-red-800','hover:bg-slate-50',
    'border-red-700','border-slate-200',
    'shadow-xl','shadow-2xl',
    'rounded-xl','rounded-2xl','rounded-3xl','rounded-full',
    'underline','underline-offset-8','decoration-2',
    'transition-all','transform','hover:scale-105'
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        noto: ['"Noto Serif"', 'serif'],
      },
    },
  },
  plugins: [],
}
