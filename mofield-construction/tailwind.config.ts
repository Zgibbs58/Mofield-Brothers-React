import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'hero': 'url("/heroFull.jpg")',
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#facc15",

          secondary: "#1f2937",

          accent: "#fde047",

          neutral: "#f3f4f6",

          "base-100": "#f3f4f6",

          info: "#0000ff",

          success: "#00ff00",

          warning: "#f43f5e",

          error: "#ff0000",
        },
      },
    ],
  },
};
export default config;
