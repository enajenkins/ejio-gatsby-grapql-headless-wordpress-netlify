import React from "react";
import Header from "../components/header-btstr";
import Footer from "../components/footer-btstr";
import SEO from "../components/SEO";

//functional component to recieve props so we can insert content as props.children. This allows child content to be nested inside the PrimaryLayout element
const PrimaryLayout = (props) => (
// return default SEO descriptions, titles, etc that we have configured in siteMetadata by adding SEO component. We have set up the ability to change the defaults in the BlogpostLayouts.js 
<div>
<SEO />
  <Header />
  <main>
    <div className="container">
      <div className="d-flex justify-content-center">
      {/* you can also pass in column size names */}
        <div className={props.column}>
        {props.children}
        </div>
      </div>
    </div>
  </main>
  <Footer />
</div>

);

export default PrimaryLayout;

















// import React from "react";
// import {graphql} from "gatsby";
// import { Tabs, Tab, Row, Col, Nav } from 'react-bootstrap';
// // import TabContainer from "react-bootstrap/TabContainer";
// // import TabContent from "react-bootstrap/TabContent";
// // import TabPane from "react-bootstrap/TabPane";
// import Header from "../components/header-btstr";
// import Footer from "../components/footer-btstr";
// // import SEO from "../components/SEO";
// // import innertext from "innertext";

// export const wikiPageQuery = graphql`
//   query wikiQuery($id: String) {
//     confluencePage(id: { eq: $id }) {
//       title
//       bodyHtml
//       confluenceUrl
//     }
//   }
//   ` 

// // functional component to recieve props so we can insert content as props.children. This allows child content to be nested inside the PrimaryLayout element
// // for this POC, we are getting only the data from the query which is injected into the layout by graphql at the bottom
// // create a const and assing to it the post that we have found by the slug query
// // dangerouslySetInnerHTML - prevents from being set as text only
// const ConfluenceDocsLayout = ({ data }) => {
//   const { title, confluenceUrl, bodyHtml } = data.confluencePage;
//   const confluencePages = data.allConfluencePage.edges.map(n => n.node);
//   return ( // we are enabling the SEO defaults to be overwritten. We are also enabling categories to be used as metadata keywords 
//     <div>
//       {/* <SEO 
//         title = {innertext(post.title)} // unencodes html from text rendered in the metatags. used by providing it as a function
//         description = {innertext(post.excerpt)}
//         image = {post.featured_media.source_url} 
//         keywords = {post.categories.map(res => res.name).join(', ')} // provided by graphql, .map() returns an array of objects and .join(', ') separates them by a comma and space. each result returns a name (res.name)
//       /> */}
//       <Header />
      
//       <div className="container">
//         <div className="d-flex justify-content-center flex-column">
        
//           <small>
//             <a href={confluenceUrl} target="_blank" rel="noopener noreferrer">
//               Edit this page
//             </a>
//           </small>

//           <Tab.Container defaultActiveKey="profile">
//               <Row>
//                 <Col sm={3}>

//                   <Nav variant="pills" className="flex-column">

//                     <Nav.Item>
//                       <Nav.Link eventKey="home">Home</Nav.Link>
//                     </Nav.Item>

//                     <Nav.Item>
//                       <Nav.Link eventKey="profile">Profile</Nav.Link>
//                     </Nav.Item>

//                     <Nav.Item>
//                       <Nav.Link eventKey="contact">Contact</Nav.Link>
//                     </Nav.Item>

//                     {confluencePages.map(page => (
//                       <Nav.Item>
//                         <Nav.Link eventKey="testone" to={`/wiki/${page.slug}`}>{page.title}</Nav.Link>
//                       </Nav.Item>
//                     ))}

//                   </Nav>

//                 </Col>
//                 <Col sm={9}>
//                   <Tab.Content>

//                     <Tab.Pane eventKey="home">
//                       <h1>{title + " - Home"}</h1>
//                       <main>
//                         <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
//                       </main>
//                     </Tab.Pane>

//                     <Tab.Pane eventKey="profile">
//                       <h1>{title + " - Profile"}</h1>
//                       <main>
//                         <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
//                       </main>
//                     </Tab.Pane>

//                     <Tab.Pane eventKey="contact">
//                       <h1>{title + " - Contact"}</h1>
//                       <main>
//                         <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
//                       </main>
//                     </Tab.Pane>

//                     <Tab.Pane eventKey="testone">
//                       <h1>{title + " - Test One"}</h1>
//                       <main>
//                         <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
//                       </main>
//                     </Tab.Pane>

//                   </Tab.Content>
//                 </Col>
//               </Row>
//             </Tab.Container>







//         </div>
//       </div>
//       <Footer />
//     </div>
    
//   )
// }

// export default ConfluenceDocsLayout;
// // create query to search for the blog post by the slug we provided to our context
// // the query will search in markdownRemark or wordpressPost for the slug that matches the slug we have provided
// // it will return things defined in the query like title, html, excerpt (description), image (source_url), etc...
// // export const query = graphql`
// //   query($slug: String!) {
// //     wordpressPost(slug: {eq: $slug}) {
// //       content
// //         title
// //         featured_media {
// //           source_url
// //         }
// //         categories {
// //           name
// //         }
// //         excerpt
// //     }
// //   }
// // `



  
// //  export const wikiPageQuery = graphql`
// //   query wikiQuery($id: String) { 

// //       allConfluencePage {
// //         nodes {
// //           id
// //           title
// //           slug
// //           internal {
// //             description
// //           }
// //           bodyHtml
// //         }
// //         edges {
// //           node {
// //             id
// //             slug
// //             title
// //             confluenceUrl
// //             bodyHtml
// //           }
// //         }
// //       }
// //       confluencePage(id: { eq: $id }) {
// //         bodyHtml
// //         confluenceUrl
// //         title
// //         slug
// //         id
// //       }

// //   }
// // `  
  
 
