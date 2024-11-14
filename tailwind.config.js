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
        "white-40": "rgba(255, 255, 255, 0.4)", //40% white
        "primary-blue": "rgba(227, 245, 255, 1)", // Primary blue color
        "primary-light": "rgba(247, 249, 251, 1)", // Primary light color
        "primary-purple": "rgba(229, 236, 246, 1)", // Primary puple color
        "secondary-Indigo": "rgba(149, 164, 252, 1)", // seconday indigo color
        "secondary-green": "rgba(161, 227, 203, 1)", // seconday green color
        "secondary-blue": "rgba(177, 227, 255, 1)", // seconday blue color
        "secondary-yellow": "rgba(255, 233, 153, 1)", // seconday yellow color
        "status-inProcess": "rgba(138, 140, 217, 1)",
        "status-complete": "rgba(74, 167, 133, 1)",
        "status-pending": "rgba(89, 168, 212, 1)",
        "status-approved": "rgba(255, 197, 85, 1)",
      },
    },
  },
  plugins: [],
};
