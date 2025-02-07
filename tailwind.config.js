/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        muted: "rgb(var(--muted))",
        accent: "rgb(var(--accent))",
      },
      backgroundImage: {
        "firefly-radial":
          "radial-gradient(50% 50% at 50% 50%, rgba(253, 255, 80, 0.5) 0%, rgba(217,217,217,0) 100%)",

        "fire-sparks": `
          linear-gradient(135deg, 
            rgba(255, 220, 1, 0.9) 5%, 
            rgba(253, 172, 1, 0.8) 20%, 
            rgba(247, 59, 1, 0.7) 35%, 
            rgba(97, 46, 37, 0.6) 55%, 
            rgba(17, 18, 23, 0.8) 90%),
          linear-gradient(135deg, 
            rgba(255, 160, 50, 0.9) 10%, 
            rgba(253, 100, 1, 0.7) 30%, 
            rgba(97, 46, 37, 0.5) 50%, 
            rgba(17, 18, 23, 0.7) 85%)
  `,
      },
      boxShadow: {
        "glass-inset": "inset 0 17px 5px -9px rgba(254,254,91,0.05)",
        "glass-sm": "inset 5px 5px 20px 0px rgba(254,254,91,0.3)",
      },
      keyframes: {
        "spin-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
        "spin-slow-reverse": "spin-reverse 40s linear infinite",
      },
    },
  },
  plugins: [],
};
