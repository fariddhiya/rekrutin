import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        display: ['Poppins'],
      },
    },
  },
  // plugins: ['prettier-plugin-tailwindcss'],
  corePlugins: {
    preflight: false,
  },
};
export default config;

// https://www.youtube.com/watch?v=oG6XPy1t1KA&ab_channel=TailwindLabs
