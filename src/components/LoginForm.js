import React from "react";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

const LoginForm = (props) => {
  return (
    <div className="container-fluid p-0">
      <div className="loginFormContainer">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="c-white">Username</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
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
          <Button className="btn-register" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
