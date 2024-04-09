/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: 'url("/heroLg.jpg")',
      },
      height: {
        100: "40rem",
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
