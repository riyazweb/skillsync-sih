/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#1E3A8A',
        },
        gov: {
          blue: '#2563EB',
          'blue-light': '#DBEAFE',
        },
        slate: {
          canvas: '#F8FAFC',
        },
        status: {
          green: '#16A34A',
          'green-bg': '#DCFCE7',
          red: '#DC2626',
          'red-bg': '#FEE2E2',
          violet: '#7C3AED',
          'violet-bg': '#EDE9FE',
          amber: '#D97706',
          'amber-bg': '#FEF3C7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
