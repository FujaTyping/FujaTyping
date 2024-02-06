/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        vamvam: {
          "primary": "#dc2626",
          "secondary": "#ef4444",
          "accent": "#b91c1c",
          "neutral": "#dc2626",
          "base-100": "#fee2e2",
          "info": "#22d3ee",
          "success": "#84cc16",
          "warning": "#facc15",
          "error": "#991b1b",
        }
      },
      "aqua",
      "light",
      "dark",
    ],
  },
}