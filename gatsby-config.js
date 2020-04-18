module.exports = {
  siteMetadata: {
    title: `n.blog`,
    description: `naotaka nakane tech blog.`,
    author: `naotaka nakane`,
  },
  plugins: [
    // meta
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `n.blog`,
        short_name: `n.blog`,
        start_url: `/`,
        background_color: `#0f4c81`,
        theme_color: `#0f4c81`,
        display: `minimal-ui`,
        icon: `contents/images/favicon.png`,
      },
    },
    // images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/contents/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // development
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    // fonts
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Lato",
            variants: ["300", "400", "900"],
          },
        ],
      },
    },
    // pages
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contents/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
        ],
      },
    },
  ],
}
