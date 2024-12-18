import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        funky: ['"Bangers"', 'cursive'],
       },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        colorMintGreen: "#CEF0D1",
        colorMintGreenLight: "#F5FCF6",
        colorPink: "#F8D0D2",
        colorPinkLight: "#FFE7E9",
        colorBlue: "#2B92E4",
        colorBlueLight: "#90D5FF",
        colorWhite: "EFF2FB",
      },
    },
  },
  plugins: [],
} satisfies Config;
