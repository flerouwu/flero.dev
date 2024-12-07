import colors from "tailwindcss/colors"

function generateTheme(theme) {
  const themeColors = Object.entries(colors[theme])

  return Object.fromEntries(themeColors.map(([shade, value]) => [`--theme-${shade}`, value]))
}

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        "body[data-theme='sky']": generateTheme("sky"),
      })
    },
  ],
}
