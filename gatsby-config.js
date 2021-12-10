module.exports = {
  siteMetadata: {
    title: `kalyn.eth`,
    description: `What's this... a wave?`,
    author: `@kalynbeach`,
    siteUrl: `https://kalyn.eth/`,
  },
  // pathPrefix: '__GATSBY_IPFS_PATH_PREFIX__',
  plugins: [
    // `gatsby-plugin-ipfs`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kalyn-eth`,
        short_name: `kalyn-eth`,
        start_url: `/`,
        background_color: `#191919`,
        theme_color: `#191919`,
        display: `minimal-ui`,
        legacy: false,
        icon: `src/images/CS-500-Gray.png`
        // icons: [
        //   {
        //     src: `src/images/CS-500-Gray.png`,
        //     sizes: `144x144`,
        //     type: `image/png`,
        //   },
        // ]
      },
    }
    // `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
