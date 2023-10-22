import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#FFF2D8",
      secondary: "#EAD7BB",
      tertiary: "#151D34",
      quarternary: "#113946",
    },
  },
  plugins: [],
};
export default config;
