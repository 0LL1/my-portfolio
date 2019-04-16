module.exports = {
  siteMetadata: {
    title: `Olli Rautiainen`,
    author: `Olli Rautiainen`,
    description: `Portfolio of Olli Rautiainen, a web developer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Olli Rautiainen`,
        short_name: `Olli R`,
        start_url: `/`,
        background_color: `#010101`,
        theme_color: `#010101`,
        display: `standalone`,
        icon: `src/images/OR.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-138442169-1`,
        head: false,
        anonymize: true,
      },
    },
  ],
}
