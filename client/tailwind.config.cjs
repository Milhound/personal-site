/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  corePlugins: {
    // Disable Tailwind's CSS reset so existing styles are preserved exactly
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        // Warm link palette for light-mode tan surfaces
        'site-blue':      '#7a4f2c',
        'site-dark-blue': '#5d3b20',
        // Dark mode palette
        'dark-bg':        '#2c3038',
        'dark-link':      '#88b0ff',
        'dark-surface':   '#212429',
        'dark-accent':    '#558eff',
      },
    },
  },
  plugins: [],
};
