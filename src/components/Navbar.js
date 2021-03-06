import React from "react";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default function Navbarr() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Expense Tracker</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Expenses</Nav.Link>
          <Nav.Link href="#link">Profile</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
