import React from 'react';
import {Helmet} from 'react-helmet';
import {StaticQuery, graphql} from 'gatsby'; //to query the data we have saved in the site metadata

// provide props to SEO
const SEO = ({title, description, keywords, image}) => (
 // cannot use variables in a static query
  <StaticQuery
    query = {query} // what we are querying (query at bottom)
    render = {({ // render method where we are defining what data we are extracting
      site: {
        siteMetadata: {
          defaultTitle,
          defaultDescription,
          defaultImage,
          url,
          defaultKeywords
        }
      }
    }) => { // in this function data is passed to the seo var that will provide the metatag jsx to the page header
      const seo = {
        // if seo info is provided use that - or else use the default
        title: title ||  defaultTitle, 
        description: description || defaultDescription,
        keywords: keywords || defaultKeywords,
        image: `${image ? image : url + defaultImage}` // provides an image to external sites like twitter, other websites. If image is provided, use that, otherwise point to the deafult image path
      }
      return ( // return the jsx that will build the tags here 
        <Helmet>
          <title>{seo.title}</title>
          <meta name="image" content={seo.image} />
          <meta name="description" content={seo.description} />
          <meta name="keywords" content={seo.keywords} /> 
          <meta name="robots" content="noindex, nofollow" />
          <html lang="en"></html>
        </Helmet>
      )
    }} 
  />
);


export default SEO;

// create a query to access metadata
const query = graphql`
{
  site {
    siteMetadata {
      defaultTitle: title
      defaultDescription: description
      defaultImage: image
      url
      defaultKeywords: keywords
    }
	}
}
`
/*
Sample output from query
{
  "data": {
    "site": {
      "siteMetadata": {
        "defaultTitle": "Gatsby POC",
        "defaultDescription": "POC for Gatsby, Headless WP CMS, Graphql, Comfluence integration...",
        "defaultImage": "/static/favicon.ico",
        "url": "http://www.yourwebsite.com",
        "keywords": "gatsby, wordpress, headless, cms, confluence, graphql"
      }
    }
  }
}

*/