import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        bakery: {
          paper: "#f8f6f1",
          brown: "#8f6845",
          espresso: "#543c2c",
          ink: "#29251f",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
};

export default config;
