// client/tailwind.config.js
module.exports = {
  content: ["./src/**/*.{tsx,ts,jsx,js}"],
  theme: { extend: {} },
  plugins: [
    require("daisyui"), 
    require("@tailwindcss/forms")
  ],
  daisyui: {
    themes: ["emerald"], // Set Emerald as default theme
    darkTheme: false // Disable dark mode variant
  }
};
