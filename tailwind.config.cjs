const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,js,jsx}', './templates/**/*.html', './content/**/*.md'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Input', 'Hack', 'DejaVu Sans Mono', 'Monaco', 'Consolas', 'Ubuntu Mono', 'monospace'],
      serif: ['Input', 'Hack', 'DejaVu Sans Mono', 'Monaco', 'Consolas', 'Ubuntu Mono', 'monospace'],
    },
  },
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('@tailwindcss/typography'),
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: '1.4rem' },
        h2: { fontSize: '1.3rem' },
        h3: { fontSize: '1.2rem' },
        h4: { fontSize: '1.15rem' },
        h5: { fontSize: '1.15rem' },
        h6: { fontSize: '1.15rem' },
      });
    }),
  ],
};
