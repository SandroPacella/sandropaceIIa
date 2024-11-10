/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['monospace'],
        mono: ['monospace', 'ui-monospace', 'SFMono-Regular'],
      },
      typography: {
        invert: {
          css: {
            '--tw-prose-body': 'var(--foreground)',
            '--tw-prose-headings': 'var(--foreground)',
            '--tw-prose-links': 'var(--foreground)',
            '--tw-prose-bold': 'var(--foreground)',
            '--tw-prose-bullets': 'var(--foreground)',
            '--tw-prose-quotes': 'var(--foreground)',
            '--tw-prose-code': 'var(--foreground)',
            '--tw-prose-hr': 'var(--foreground)',
            '--tw-prose-th-borders': 'var(--foreground)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
