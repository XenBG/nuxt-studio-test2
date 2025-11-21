import type { Config } from "tailwindcss";

module.exports = {
  // Content paths are now defined in CSS with @source directive (Tailwind v4)
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
