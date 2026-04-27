import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        activ: {
          blue: "#000099",
          navy: "#00031f",
          ink: "#101010",
          muted: "#7f8591",
          page: "#f5f5f8",
        },
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
