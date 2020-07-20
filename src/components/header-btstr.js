import React from 'react'
// import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap"
import {Navbar, Nav} from "react-bootstrap"
import {Link} from "gatsby"

//functional component
//you can pass in props to change component dynamically base on what is later provided
//style modules can be pulled in with dot notation
export default (props) => (
  <header>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Gatsby / Graphql / Headless Wordpress (Jamstack) / Confluence POC</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        {/* to avoid issues, create the bootstrap link as a gatsby link (<Link to="/home">Home</Link>) and provide a to location  */}
          <Nav.Link as={Link} to="/"><b className="text-dark">Home</b></Nav.Link>
          <Nav.Link as={Link} to="/about-us"><b className="text-dark">About Us</b></Nav.Link>      
          <Nav.Link as={Link} to="/contact"><b className="text-dark">Contact</b></Nav.Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
  </header>
)