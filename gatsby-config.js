/*eslint-disable */

module.exports = {
  siteMetadata: {
    title: `Jacob Greenwald Web Developer`,
    email: 'greenwald.j8@gmail.com',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src`,
        name: 'src',
      },
      
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1080,
      },
    },
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'jacob-greenwald-portfolio',
        short_name: 'portfolio',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/worldwide.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
