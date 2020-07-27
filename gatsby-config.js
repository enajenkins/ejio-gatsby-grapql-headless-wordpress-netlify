/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 * 
 * Server is running here:  http://localhost:8000/
 * 
 * Check queries to see what data comes back here:  http://localhost:8000/___graphql
 * Delete existing output
 * When checking queries, CTRL+space will provide code suggestions
 * Example:
 * query {
      site {
        siteMetadata {
          title
        }
      }
    }
 * site =  targets our site
 * siteMetadata = data we have defined in the site config
 * title = the field we are asking for. can be any field
 * The data comes back as an object
 * 
 * plugins allow us to pull data from everywhere on the web. it will allow us to pull data from a cms
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby POC",
    description: "POC for Gatsby, Headless WP CMS, Graphql, Comfluence integration...",
    keywords: "gatsby, wordpress, headless, cms, confluence, graphql",
    image: "/static/favicon.ico",
    url: "http://www.yourwebsite.com" //url destination of website
  },
  plugins: [
    // You can have multiple instances of this plugin
    // to read source nodes from different locations on your
    // filesystem.
    //
    // The following sets up the Jekyll pattern of having a
    // "pages" directory for Markdown files and a "data" directory
    // for `.json`, `.yaml`, `.csv`.
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    { resolve: `gatsby-transformer-remark` },
    { resolve: `gatsby-source-wordpress`, 
      options: {
        baseUrl: `onethingaday.info`,// base url of the wordpress blog you are pulling content from with no trailing slashes, no protocol (mywebsite.com). if you are using https, you will have issues if it has a certificate
        protocol: `http`,
        hostingWPCOM: false,// self hosted or WP hosted?
      }, 
    },
    `gatsby-plugin-react-helmet`,
    { // manifest contains information that allows your app to be accepted as a PWA
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby POC`,
        short_name: `GatsbyPOC`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline` // for PWA
  ],
}
