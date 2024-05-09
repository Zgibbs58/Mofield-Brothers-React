/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        heroSm: 'url("/images/heroSm.jpg")',
        heroLg: 'url("/images/heroLg.jpg")',
        pageHeader: 'url("/images/waterSewerLg.jpg")',
        backgroundLines: 'url("/images/directionalDrillLg.jpg")',
      },
      height: {
        100: "40rem",
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    darkTheme: "luxury",
    themes: [
      "bumblebee",
      {
        luxury: {
          ...require("daisyui/src/theming/themes")["luxury"],
          "base-100": "#1e293b",
          "base-200": "#334155",
          "base-300": "#475569",
        },
      },
    ],
  },
};
