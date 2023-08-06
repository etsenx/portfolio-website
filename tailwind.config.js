/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "garden"],
  },
  theme: {
    screens: {
      sm: { min: "320px", max: "767px" },
      // => @media (min-width: 640px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px) { ... }
    },
  },
};
