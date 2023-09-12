const starlightPlugin = require("@astrojs/starlight-tailwind");
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Your preferred accent color. Indigo is closest to Starlight’s defaults.
        accent: colors.orange,
        primary: "#ff8e3c",
        // Your preferred gray scale. Zinc is closest to Starlight’s defaults.
        //   gray: colors.zinc,
      },
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
        mono: ["Source Code Pro", "monospace"],
      },
    },
  },
  plugins: [starlightPlugin()],
};
