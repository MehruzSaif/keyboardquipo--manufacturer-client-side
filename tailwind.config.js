module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        keyboardTheme: {
          primary: "#8C80EA",
          secondary: "#ED7D7E",
          accent: "#DF51AD",
          neutral: "#FEBD71",
          mine: "#F48554",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
