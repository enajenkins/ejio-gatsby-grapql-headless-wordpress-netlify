import React from "react";
import {graphql} from "gatsby";
import Header from "../components/header-btstr";
import Footer from "../components/footer-btstr";
import SEO from "../components/SEO";
import innertext from "innertext";

// functional component to recieve props so we can insert content as props.children. This allows child content to be nested inside the PrimaryLayout element
// for this POC, we are getting only the data from the query which is injected into the layout by graphql at the bottom
// create a const and assing to it the post that we have found by the slug query
// dangerouslySetInnerHTML - prevents from being set as text only
const BlogpostLayout = ({ data }) => {
  const post = data.wordpressPost;
  return ( // we are enabling the SEO defaults to be overwritten. We are also enabling categories to be used as metadata keywords 
    <div>
      <SEO 
        title = {innertext(post.title)} // unencodes html from text rendered in the metatags. used by providing it as a function
        description = {innertext(post.excerpt)}
        image = {post.featured_media.source_url} 
        keywords = {post.categories.map(res => res.name).join(', ')} // provided by graphql, .map() returns an array of objects and .join(', ') separates them by a comma and space. each result returns a name (res.name)
      />
      <Header />
      <div className="container">
        <div className="d-flex justify-content-center flex-column">
          {/* <h1>{post.frontmatter.title}</h1> */}
          <h1 dangerouslySetInnerHTML = {{__html: post.title}} />
          {/* <div dangerouslySetInnerHTML = {{__html: post.html}}></div> */}
          <div dangerouslySetInnerHTML = {{__html: post.content}}></div>
        </div>
      </div>
      <Footer />
    </div>
    
  )
}

export default BlogpostLayout;
// create query to search for the blog post by the slug we provided to our context
// the query will search in markdownRemark or wordpressPost for the slug that is equal to the slug we have provided
// it will return things defined in the query like title, html, excerpt (description), image (source_url), etc...
export const query = graphql`
  query($slug: String!) {
    wordpressPost(slug: {eq: $slug}) {
      content
        title
        featured_media {
          source_url
        }
        categories {
          name
        }
        excerpt
    }
  }
`
/*
  export for markdown

  export const query = graphql `
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}){
      html
      frontmatter {
        title
      }
    }
  }
`

*/