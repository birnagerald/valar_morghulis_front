import React from "react";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import { FileUpload } from "./FileInput";
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {};

let ArticleForm = (props) => {
  const { handleSubmit, isAuthenticated } = props;
  const onSubmit = (values) => {
    // props.userLoginAttempt(values.username, values.password);
  };
  const renderMyCloud = () => {
    return (
      <div className="container article-dorm-container">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formBasicTitle">
            <Form.Label className="p-3 article-dorm-container-label">
              Title
            </Form.Label>
            <Field
              name="title"
              component="input"
              type="text"
              className="form-control"
              placeholder="Title"
            />
          </Form.Group>

          <Form.Group controlId="formBasicContent">
            <Form.Label className="p-3 article-dorm-container-label">
              Content
            </Form.Label>
            <Field
              name="content"
              component="textarea"
              type="text"
              className="form-control"
              placeholder="Content"
            />
          </Form.Group>
          <Form.Group controlId="formBasicfile">
            {/* <Form.Label className="c-white">Upload your files</Form.Label> */}
            <FileUpload />
          </Form.Group>

          <Button
            className="btn-primary btn-lg btn-block my-5"
            variant="primary"
            type="submit"
          >
            Add Article
          </Button>
        </Form>
      </div>
    );
  };
  return (
    <div className="container mainContainer">
      {isAuthenticated ? renderMyCloud() : <div>Vous n'êtes pas connecté</div>}
    </div>
  );
};

ArticleForm = reduxForm({
  // a unique name for the form
  form: "articleForm",
})(ArticleForm);

export default connect(mapStateToProps, mapDispatchToProps)(ArticleForm);
