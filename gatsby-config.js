/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */


module.exports = {
  siteMetadata: {
    title: 'Όψεις',
    author: 'George Nikoglou'
  },
  plugins: [

    {
      resolve: "gatsby-plugin-sass",
      options: {
        // useResolveUrlLoader: {
        //   options: {
        //     debug: true,
        //   },
        // },
        // implementation: require("node-sass"),
      },
    },
    {
      resolve:`gatsby-source-filesystem`,
      options: {
          name: 'src',
          path: `${__dirname}/src/`
      }
    },
    `gatsby-transformer-remark`
  ],
}
