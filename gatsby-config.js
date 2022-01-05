module.exports = {
  siteMetadata: {
    title: "Coffea",
    description: "blababla",
    author: "@gatsbyjs",
    siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-smoothscroll",
    "react-scroll-to-top",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        schema: {
          timeout: 300000,
        },
        /*
         * De volledige URL van je Headless WordPress site's GraphQL API.
         * Voorbeeld : "https://www.example-site.com/graphql"
         */
        url: "http://localhost:10010/graphql",
      },
    },
  ],
};