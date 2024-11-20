import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        macaronidark: "#3D3322",
        macaronidark2: "#F9E9C9",
        macaronidark3: "#6D5C3D",
        macaronilight: "#fefaf3",
        macaronilight2: "#F2CD87",
        macaronilight3: "#F7DFB1",
        grayborder: "#e5e7eb",
      },
      fontFamily: {
        beautiqueBlack: ["var(--font-beautique-black)"],
        beautiqueReg: ["var(--font-beautique-reg)"],
        beautiqueMed: ["var(--font-beautique-med)"],
      },
    },
  },
  plugins: [],
};

export default config;
