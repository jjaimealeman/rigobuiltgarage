const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans Variable", ...defaultTheme.fontFamily.sans],
        mono: ["Fira Code Variable", ...defaultTheme.fontFamily.mono],
        serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
      },
      aspectRatio: {
        thumbnail: "1.5",
      },
      boxShadow: {
        // 'position X position Y, blur radius, spread radius, color'
        mine1: "0px -5px 5px 0px #686868;",
        mine2: "0px -10px 8px 0px #484848;",
        // 'mine2:hover': '0px -10px 8px 0px #abdef;'
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries")
  ],
};
