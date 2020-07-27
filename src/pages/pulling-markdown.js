import React from "react";
import {graphql} from "gatsby";
import MarkdownPostLayout from "../layouts/MarkdownPostLayout";
import Post from "../components/post-btstr";

export default ({data}) => ( 
  <MarkdownPostLayout column="col-xs-6">
    <h1>Local Markdown Data</h1>
    <h2>This page is pulling in markdown data from a local folder</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla odio tincidunt suscipit auctor. Praesent rhoncus consequat enim eu dapibus. Sed gravida ultricies ipsum sed rutrum. Nam eu sem in nisi varius mollis. Curabitur non felis arcu. Integer ultricies efficitur lacus sit amet pharetra. Pellentesque in neque eget erat auctor condimentum sit amet sit amet orci. Curabitur aliquet pulvinar elit non tempor. In posuere massa finibus ligula feugiat, et finibus lorem interdum. Maecenas ac ultricies felis. Vestibulum iaculis mi felis, sed mattis nulla mollis at. Nulla eu nunc eu est vestibulum sagittis nec sit amet metus. Quisque id gravida odio. Nunc eleifend gravida leo, at egestas dui blandit quis. Cras efficitur, nibh vitae bibendum tempor, arcu odio fermentum lorem, in sodales dui augue vel leo.
    </p>

    {data.allMarkdownRemark.nodes.map(node => (
      <Post 
        image={node.frontmatter.image} 
        title={node.frontmatter.title}  
        excerpt={node.excerpt} 
        readMore={node.fields.slug}
      /> 
    ))}

  </MarkdownPostLayout> 
);

// create query to search for the blog post by the slug we provided to our context
// the query will search in markdownRemark or wordpressPost for the slug that is equal to the slug we have provided
// it will return things defined in the query like title, html, excerpt (description), image (source_url), etc...
export const query = graphql`
query {
  allMarkdownRemark {
    nodes {
      frontmatter {
        image
        title
        keywords
        date
      }
      html
      excerpt
      fields {
        slug
      }
    }
  }
}

`

//   export const query = graphql `
//   query($slug: String!) {
//     markdownRemark(fields: {slug: {eq: $slug}}){
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `
