import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { userRegisterAttempt } from "../actions/actions";
import { Field, reduxForm } from "redux-form";

const mapStateToProps = (state) => ({
  ...state.auth,
});

const mapDispatchToProps = {
  userRegisterAttempt,
};

let RegisterForm = (props) => {
  useEffect(() => {
    if (props.token !== null) {
      props.history.push("/mycloud");
    }
  });

  const { handleSubmit } = props;
  const onSubmit = (values) => {
    props.userRegisterAttempt(values.username, values.password);
  };

  return (
    <div className="container loginFormContainer">
      <div className="jumbotron">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label className="c-white">Username</Form.Label>
            <Field
              name="username"
              component="input"
              type="text"
              className="form-control"
              placeholder="Enter your username"
            />
            <Form.Text className="c-white">
              As the service is intended to be anonymous. We are not asking for
              an email.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className="c-white">Password</Form.Label>
            <Field
              name="password"
              component="input"
              type="password"
              className="form-control"
              placeholder="Enter your password"
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

RegisterForm = reduxForm({
  // a unique name for the form
  form: "register",
})(RegisterForm);

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
