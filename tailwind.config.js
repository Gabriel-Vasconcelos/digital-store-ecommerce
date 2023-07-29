/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-gray": "#1F1F1F",
        "dark-gray-2": "#474747",
        "dark-gray-3": "#666666",
        "ligt-gray": "#8F8F8F",
        "ligt-gray-2": "#CCCCCC",
        "ligt-gray-3": "#F5F5F5",
        "digital-primary": "#C92071",
        "digital-secondary": "#B5B6F2",
        "digital-tertiary": "#991956",
        "status-error": "#EE4266",
        "status-success": "#52CA76",
        "status-warning": "#F6AA1C",
      }
    },
  },
  plugins: [],
};
