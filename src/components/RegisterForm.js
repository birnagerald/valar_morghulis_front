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

const RegisterForm = (props) => {
  useEffect(() => {
    if (props.token !== null) {
      props.history.push("/mycloud");
    }
  });

  const { handleSubmit } = props;
  const onSubmit = (values) => {
    props.userRegisterAttempt(values.username, values.mail, values.password);
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
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="c-white">Email</Form.Label>
              <Field
                name="mail"
                component="input"
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
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

export default reduxForm({
  form: "register"
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RegisterForm)
);
