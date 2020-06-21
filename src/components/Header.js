import React from "react";
import { connect } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {};

const Header = (props) => {
  const renderUser = () => {
    const { userData, logout } = props;
    if (undefined === userData) {
      return <i className="fas fa-Loading fa-spin" />;
    }

    return (
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/mycloud">My cloud</Nav.Link>
          <Nav.Link href="#">Shared with me</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link onClick={logout}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    );
  };
  const { isAuthenticated } = props;
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Navbar.Brand href="/">Valar Morghulis</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      {isAuthenticated ? (
        renderUser()
      ) : (
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="login">Sign-in</Nav.Link>
            <Nav.Link href="register">Sign-up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      )}
    </Navbar>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
