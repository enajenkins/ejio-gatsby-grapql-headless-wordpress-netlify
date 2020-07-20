import React from 'react';
import {navigate} from 'gatsby';
import Header from "../components/header-btstr";
import Footer from "../components/footer-btstr";

const Test = () => (
  <div>
  <Header title="header of test page"></Header>
  <div className="container">This is where the content goes
    <h1>Test Page</h1>
    <button onClick={()=>navigate("/")}>Navigate to Home</button>
    </div>
    <Footer></Footer>
  </div>
);

export default Test;