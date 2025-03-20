import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('flowbite/plugin'),
    require("@tailwindcss/typography")
  ],
} satisfies Config;