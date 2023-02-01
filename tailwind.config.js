module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      tablet: '740px',
      // => @media (min-width: 640px) { ... }

      laptop: '1002px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1310px',
      // => @media (min-width: 1310px) { ... }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
