import React from "react";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

const RegisterForm = (props) => {
  return (
    <div className="container loginFormContainer">
      <div className="jumbotron">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="c-white">Username</Form.Label>
            <Form.Control type="email" placeholder="Enter username" />
            <Form.Text className="c-white">
              As the service is intended to be anonymous. We are not asking for
              an email.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="c-white">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              className="c-white"
              label="Check me out"
            />
          </Form.Group>
          <Button
            className="btn-primary btn-lg btn-block"
            variant="primary"
            type="submit"
          >
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
