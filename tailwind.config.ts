import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBackground: "#FFFFFF",
        darkBackground: "#191919",
        primaryTextBlack: "#03122f",
        bgColor: "#dcbfc5",
        secondaryText: "#666666",
        accent: "#0066CC",
        hoverButton: "#004B8D",
        darkText: "#FFFFFF",
        darkSecondaryText: "#B3B3B3",
        darkAccent: "#00BFFF",
        darkHoverButton: "#006F9F",
        pinkRed: "#F9447F",
        vibrantBlue: "#395CE0",
      },
      backgroundImage: {
        "gradient-pink-blue":
          "linear-gradient(to bottom right, #F9447F, #395CE0)",
        "gradient-hover": "linear-gradient(to bottom right, #395CE0, #F9447F)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
