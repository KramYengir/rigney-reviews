import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        contessa: {
          "50": "#fbf6f5",
          "100": "#f6ecea",
          "200": "#f0dcd8",
          "300": "#e4c3bd",
          "400": "#d3a096",
          "500": "#ba7264",
          "600": "#aa6558",
          "700": "#8e5347",
          "800": "#77463d",
          "900": "#643f38",
          "950": "#351e1a",
        },
        "dark-jungle-green": {
          "50": "#f4f5f5",
          "100": "#e9ebeb",
          "200": "#c8d0d1",
          "300": "#a5b3b8",
          "400": "#5f7a86",
          "500": "#1a414f",
          "600": "#183b47",
          "700": "#14323b",
          "800": "#10282f",
          "900": "#0d2127",
          "950": "#070f0f",
        },
        "hippie-blue": {
          "50": "#f1f8fa",
          "100": "#dcedf1",
          "200": "#bddce4",
          "300": "#90c2d0",
          "400": "#64a4b9",
          "500": "#40839a",
          "600": "#386c82",
          "700": "#32586c",
          "800": "#304b5a",
          "900": "#2c404d",
          "950": "#192933",
        },
        beeswax: {
          "50": "#fffbeb",
          "100": "#fdf3c4",
          "200": "#fbe88c",
          "300": "#f9d650",
          "400": "#f8c227",
          "500": "#f1a30f",
          "600": "#d67c09",
          "700": "#b1570c",
          "800": "#904410",
          "900": "#763711",
          "950": "#441c04",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
export default config;
