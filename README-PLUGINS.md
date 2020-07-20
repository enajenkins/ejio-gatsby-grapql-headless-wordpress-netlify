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
https://www.npmjs.com/package/innertext
Extract the innerText from a snippet of HTML

### Installation
npm install innertext


## gatsby-plugin-manifest
https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/?=manifest
https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps
http://caniuse.com/#feat=web-app-manifest

The web app manifest (part of the PWA specification) enabled by this plugin allows users to add your site to their home screen on most mobile browsers — see here. The manifest provides configuration and icons to the phone.

This plugin provides several features beyond manifest configuration to make your life easier, they are:

* Auto icon generation - generates multiple icon sizes from a single source
* Favicon support
* Legacy icon support (iOS)1
* Cache busting
* Localization - Provides unique manifests for path-based localization (Gatsby Example)

Each of these features has extensive configuration available so you are always in control.

## Install
npm install --save gatsby-plugin-manifest


## gatsby-plugin-offline
https://www.gatsbyjs.org/packages/gatsby-plugin-offline/

Adds drop-in support for making a Gatsby site work offline and more resistant to bad network connections. It uses Workbox Build to create a service worker for the site and loads the service worker into the client.

If you’re using this plugin with gatsby-plugin-manifest (recommended) this plugin should be listed after that plugin so the manifest file can be included in the service worker.

### Install
npm install --save gatsby-plugin-offline

## WP Webhooks
https://wordpress.org/plugins/wp-webhooks/

### Description
If you want to do certain actions on your WordPress site from somewhere else, this is your plugin! It will turn your website into an optimized webhook system so that you can connect your third party apps manually, via Zapier, automate.io or other third-party services to your WordPress website.
It allows you to receive data from other services to, for example, create a user or a post on your WordPress website, as well as it can send data for you on certain actions.
It’s time to automate your WordPress website on a whole new level!

#### USAGE EXAMPLES
Create a WordPress user as soon as a new signup happens on Teachable
Create a WordPress post using Alexa (Voice Control)
Create WordPress users from an Excel list
Send data to intercom when a user logs into your WordPress website
Fire your own PHP code based on incoming data

#### FEATURES
Create, Delete, Search and Retrieve users via external webhooks on your website
Create, Delete, Search and Retrieve posts via external webhooks on your website (Custom post types supported)
Recieve data to a custom webhook action (Do whatever you want with the incoming data)
Send data on login, register, update and deletion
Send data on new post, update post and delete post
Send data on custom WordPress hook calls
Authenticate every “Send data” trigger. Supported are: API Key, Bearer Token and Basic Auth
Add multiple Webhooks for each trigger and also for the actions
Test all of the available triggers with a single click
Test all of the available actions within the plugin
Advanced settings for each webhook trigger url
Manage all of our extensions within the plugin
Fully translatable and ready for multilingual sites
Full WPML Support
Advanced Developer Hooks
Optimized settings page for more control
Supports XML, JSON, plain text/HTML and form urlencode
Supports the following request methods: POST (Default), GET, HEAD, PUT, DELETE, TRACE, OPTIONS, PATCH
Supports Zapier, Integromat, automate.io and more

