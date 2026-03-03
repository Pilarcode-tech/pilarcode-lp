/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        lgplus: "1301px",
      },
      fontFamily: {
        jakarta: ["var(--font-jakarta-sans)"],
        manrope: ["var(--font-manrope-mono)"],
        dmsans: ["var(--font-dm-sans)"],
        blisstwin: ["Blisstwin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
