import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export const NavNav = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/">BARAKO</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/team">Team</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
