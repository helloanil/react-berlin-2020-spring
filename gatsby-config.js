module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-mdx-deck",
      options: {
        basePath: "/slides",
      },
    },
    "gatsby-plugin-material-ui",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "nunito",
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
};
