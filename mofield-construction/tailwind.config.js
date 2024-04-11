/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: 'url("/heroLg.jpg")',
        backgroundLines: 'url("/roadsideLg.jpg")',
      },
      height: {
        100: "40rem",
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
      // {
      //   light: {
      //     mylighttheme: {
      //       primary: "#facc15",
      //       secondary: "#1f2937",
      //       accent: "#f1c40f",
      //       neutral: "#6b7280",
      //       "base-100": "#f3f4f6",
      //       info: "#0000ff",
      //       success: "#00ff00",
      //       warning: "#f43f5e",
      //       error: "#ff0000",
      //     },
      //   },
      //   dark: {
      //     mydarktheme: {
      //       primary: "#facc15",
      //       secondary: "#1f2937",
      //       accent: "#6b7280",
      //       neutral: "#6b7280",
      //       "base-100": "#1f2937", // Adjust background color for dark mode
      //       info: "#0000ff",
      //       success: "#38a169",
      //       warning: "#dd6b20",
      //       error: "#e53e3e",
      //     },
      //   },
      // },
    ],
  },
};
