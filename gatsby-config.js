module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Space Tourism Web",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-image",
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          placeholder: `none`,
        },
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "src/data",
        name: "data",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/",
      },
      __key: "images",
    }
  ],
};
