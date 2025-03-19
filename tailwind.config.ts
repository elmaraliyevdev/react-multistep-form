import type { Config } from "tailwindcss";

export default {
  content: [
    "./client/index.html",
    "./client/src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#6b7280",
        success: "#22c55e",
        danger: "#ef4444",
        warning: "#f59e0b"
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("@tailwindcss/typography")
  ],
} satisfies Config;