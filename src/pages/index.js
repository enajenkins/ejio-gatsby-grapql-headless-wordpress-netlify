import React from "react";
import {graphql} from "gatsby";
import PrimaryLayout from "../layouts/PrimaryLayout";
import Post from "../components/post-btstr";


// //functional component that returns html
// export default function Home() {
//   return <div>Hello Gatsby!</div>
// }

// adding properties (attributes allows info to be passed to the component) 
// let's both log the data and return the component...

/* // get all the nodes in an array which we are going to map
// however you structure your query is how you will get your data
<U>(callbackfn: (value: T, index: number, array: readonly T[]) => U, thisArg?: any): U[]
A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
Calls a defined callback function on each element of an array, and returns an array that contains the results. */

export default ({data}) => {
  console.log(data);
  return (
    <PrimaryLayout column="col-xs-6">

      {data.allWordpressPost.nodes.map(node => (
        <Post 
          alt = {node.featured_media.slug}
          image = {node.featured_media.source_url} 
          title = {node.title}  
          excerpt = {node.excerpt} 
          readMore = {node.slug}
        /> 
     ))}
    </PrimaryLayout>
  )
};

// add the query to the component. 
// you can access the data by passing the data variable {data} (ES6 style to extract the data object from inside of props) into the default export. you can also pass in props and access via {props.data}
export const query = graphql`
{
  allWordpressPost {
    nodes {
      slug
      title
      excerpt
      featured_media {
        source_url
        slug
      }
    }
  } 
}
`

/*
  local markdown query and function

      <PrimaryLayout column="col-xs-6">
      {data.allMarkdownRemark.nodes.map(node => (
        <Post 
        image={node.frontmatter.image} 
        title={node.frontmatter.title}  
        excerpt={node.excerpt} 
        readMore={node.fields.slug}
      /> 
     ))}
    </PrimaryLayout>

    allMarkdownRemark {
    nodes {
      frontmatter {
        image
        title
        date
        keywords
      }
      excerpt
      html
      fields {
        slug
      }
    }
  }

*/