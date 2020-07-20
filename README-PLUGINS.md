# Plugins

## gatsby-source-filesystem
https://www.gatsbyjs.org/packages/gatsby-source-filesystem/
A Gatsby source plugin for sourcing data into your Gatsby application from your local filesystem.

The plugin creates File nodes from files. The various “transformer” plugins can transform File nodes into various other types of data e.g. gatsby-transformer-json transforms JSON files into JSON data nodes and gatsby-transformer-remark transforms markdown files into MarkdownRemark nodes from which you can query an HTML representation of the markdown.

### Install
npm install --save gatsby-source-filesystem

### Example Query (GraphQL)
Pulls up and retrieves information on all the files in your directory. 
query {
	allFile {
    nodes {
      relativePath
      prettySize
      extension
      birthTime
    }
  }
}

## gatsby-transformer-remark
https://www.gatsbyjs.org/packages/gatsby-transformer-remark/
Parses Markdown files using Remark. Our blog posts are based on .md files.

### Install
npm install --save gatsby-transformer-remark

### Example Query (GraphQL)
Pulls data like titles, content, date, html, etc from your markdown files and returns it in an object 
{
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
        date
        keywords
      }
      excerpt
      html
    }
  }
}


## gatsby-source-wordpress
https://www.gatsbyjs.org/packages/gatsby-source-wordpress/
Source plugin for pulling data into Gatsby from WordPress sites using the WordPress REST API.

An example site for this plugin is available.

### Features
1. Pulls data from self-hosted WordPress sites, or sites hosted on WordPress.com
2. Should work with any number of posts (tested on a site with 900 posts)
3. Can authenticate to wordpress.com’s API using OAuth 2 so media can be queried
4. Easily create responsive images in Gatsby from WordPress images. See image processing section.

### WordPress and custom entities
This module currently pulls the following entities from WordPress:

- All entities are supported (posts, pages, tags, categories, media, types, users, statuses, taxonomies, site metadata, …)
- Any new entity should be pulled as long as the IDs are correct.
- ACF Entities (Advanced Custom Fields)
- Custom Post Types (any type you could have registered and enabled in the REST API)
- Post Meta (any meta fields you could have registered and enabled in the REST API)

### Install
npm install --save gatsby-source-wordpress


## Gatsby-Source-Confluence
https://www.gatsbyjs.org/packages/gatsby-source-confluence/
A quick and dirty Gatsby source plugin for retrieving data from everybody’s least favourite content editor, Confluence.

An example site is available on Netlify

## Installation
npm i --save gatsby-source-confluence



## gatsby-plugin-react-helmet
https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/
Provides drop-in support for server rendering data added with React Helmet.

React Helmet is a component which lets you control your document head using their React component.

With this plugin, attributes you add in their component, e.g. title, meta attributes, etc. will get added to the static HTML pages Gatsby builds.

This is important not just for site viewers, but also for SEO — title and description metadata stored in the document head is a key component used by Google in determining placement in search results.

### Install
npm install --save gatsby-plugin-react-helmet react-


## innertext
Extract the innerText from a snippet of HTML

### Installation
npm install innertext

### Usage
Pass it a string containing some HTML.

var innertext = require('innertext');
 
var text = innertext('<h1>Heading text <em>with</em> <b>some</b> <u>markup</u></h1>');
 
console.log(text); // 'Heading text with some markup'


