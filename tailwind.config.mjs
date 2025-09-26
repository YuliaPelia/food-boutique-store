/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    boxShadow: {
      "step": "12px 12px 49px 0 rgba(0, 0, 0, 0.05);",
      "sm": "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
      "md": "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
      "darkTheme": "24px 24px 97px 0 rgba(255, 255, 255, 0.1)",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        body: "#ffffff",
        king: "#645728",
        dark: "#2b2712",
        coral: "#aa9636",
        light: "#bfa783",
        second: "#595152",
      },
    },
  },
  plugins: [],
};
