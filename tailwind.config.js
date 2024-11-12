/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"], // Use the Inter font as default sans font
      },
      fontSize: {
        "14-regular": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "14-semibold": ["14px", { lineHeight: "20px", fontWeight: "600" }],
        "24-semibold": ["24px", { lineHeight: "36px", fontWeight: "600" }],
        "12-regular": ["12px", { lineHeight: "18px", fontWeight: "400" }],
      },
      colors: {
        "black-100": "rgba(0, 0, 0, 1)", // 100% black
        "black-40": "rgba(0, 0, 0, 0.4)", // 40% black
        "black-20": "rgba(0, 0, 0, 0.2)", // 20% black
        "black-10": "rgba(0, 0, 0, 0.1)", // 10% black
        "black-5": "rgba(0, 0, 0, 0.05)", // 5% black
        "primary-blue": "rgba(227, 245, 255, 1)", // Primary blue color
        "primary-light": "rgba(247, 249, 251, 1)", // Primary light color
        "primary-purple": "rgba(229, 236, 246, 1)", // Primary puple color
      },
    },
  },
  plugins: [],
};
