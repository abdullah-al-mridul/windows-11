/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        taskbar: "48px",
      },
      backgroundColor: {
        taskbar: "rgba(32, 32, 32)",
        controlCenter: "rgba(32, 32, 32)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
