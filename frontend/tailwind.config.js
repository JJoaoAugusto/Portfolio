/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          1: "#311E75",
          2: "#623CEA",
          3: "#506CCF",
          4: "#9AA6E2",
        },
        gray: {
          1: "#212529",
          2: "#868E96",
          3: "#E9ECEF",
          4: "#F8F9FA",
        },
        pink: {
          1: "#FF577F",
        },
        green: {
          1: "#50CF9A",
          2: "#E5F8F0",
        },
        social: {
          1: "#0E76A8",
          2: "#CF50AC",
        },
      },
    },
  },
  plugins: [],
};
