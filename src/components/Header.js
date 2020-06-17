import React from "react";
import { connect } from "react-redux";
import { Button, Navbar, Nav } from "react-bootstrap";

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

const Header = (props) => {
  const renderUser = () => {
    const { userData, logout } = props;
    console.log(props);
    if (undefined === userData) {
      return <i className="fas fa-Loading fa-spin" />;
    }

    return (
      <Nav.Item>
        <Button variant="link" onClick={logout}>
          Logout
        </Button>
      </Nav.Item>
    );
  };
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Navbar.Brand href="/">Valar Morghulis</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>

          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>

        {false ? (
          renderUser()
        ) : (
          <Nav className="ml-auto">
            <Nav.Link href="login">Sign-in</Nav.Link>
            <Nav.Link href="register">Sign-up</Nav.Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
