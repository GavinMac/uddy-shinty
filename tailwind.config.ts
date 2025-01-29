import type { Config } from "tailwindcss";

export default {
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
        uddypurple: "var(--uddypurple)",
        uddyyellow: "var(--uddyyellow)",
        scroll: "var(--scroll)"
      },
    },
  },
  plugins: [],
} satisfies Config;
