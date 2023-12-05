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
        },
        meao: {
          "primary": "#f1aa7b",
          "secondary": "#eea06c",
          "accent": "#e4bca1",
          "neutral": "#d99c84",
          "base-100": "#fdc6a1",
          "info": "#67e8f9",
          "success": "#bef264",
          "warning": "#fef08a",
          "error": "#fca5a5",
        },
      },
      "light",
      "dark",
    ],
  },
}