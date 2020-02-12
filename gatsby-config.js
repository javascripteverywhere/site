module.exports = {
  siteMetadata: {
    title: `JavaScript Everywhere`,
    description: `Building cross-platform applications with JavaScript`,
    author: `Adam D. Scott`,
    siteUrl: `https://www.jseverywhere.io`,
    menuLinks: [
      {
        name: "About",
        link: "/about"
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "blog"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JavaScript Everywhere`,
        short_name: `JS Everywhere`,
        start_url: `/`,
        background_color: `#FCC853`,
        theme_color: `#FCC853`,
        display: `minimal-ui`,
        icon: `src/images/icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-plugin-fathom",
      options: {
        // your Fathom server URL
        trackingUrl: "stats.adamdscott.com",
        // unique site id (optional, required for Fathom v1.1.0+)
        siteId: "FSTGT"
      }
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [],
        defaultLayouts: {
          //posts: require.resolve("./src/components/posts-layout.js"),
          default: require.resolve("./src/components/layout.js")
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`
  ]
};
