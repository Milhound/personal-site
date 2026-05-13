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
        // Brand blues (IBM palette — nearest standard is blue-600 #2563eb)
        'site-blue':      '#0058e6',
        'site-dark-blue': '#003180',
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
