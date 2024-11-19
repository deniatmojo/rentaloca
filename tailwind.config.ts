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
      },
    },
  },
  plugins: [],
};

export default config;
