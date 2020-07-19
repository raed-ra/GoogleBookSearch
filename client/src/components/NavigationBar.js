import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
 .navbar {
   background -color: #222;
 }

 .navbar-brand, .navbar-nav .nav-link {
   color: #bbb;

   &:hover {
     color: black;
   }
 }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="#home">Google Book Search</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item><Nav.Link href="/search">Search/Add Books</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/delete">Saved Books</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

