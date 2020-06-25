import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { userLoginAttempt } from "../actions/actions";
import { Field, reduxForm } from "redux-form";
const mapStateToProps = (state) => ({
  ...state.auth,
});

const mapDispatchToProps = {
  userLoginAttempt,
};

 const LoginForm = (props) => {
  useEffect(() => {
    if (props.token !== null) {
      props.history.push("/mycloud");
    }
  });

  const { error, handleSubmit } = props
  const onSubmit = (values) => {
    props.userLoginAttempt(values.username, values.password);
  };
  return (
    <div className="container loginFormContainer">
      <div className="jumbotron">
      {error && <div className="alert alert-danger">{error}</div>}
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
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "login"
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginForm)
);

