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