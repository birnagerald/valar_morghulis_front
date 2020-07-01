import React from "react";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import { FileUpload } from "./FileInput";
import { articleAdd } from "../actions/actions";
import {crypt} from "../rsa";
import $ from "jquery";

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  articleAdd
};

let ArticleForm = (props) => {
  const { handleSubmit, isAuthenticated, pristine, submitting, error } = props;
  const onSubmit = (values) => {
    const { articleAdd, reset } = props;
    let publicKey = window.localStorage.getItem("pubKey");
    var title = crypt.encrypt(publicKey, values.title)
    var body = crypt.encrypt(publicKey, values.body)
  

    if($('#files')[0].files.length > 0){
      var data = new FormData();
      for (let i = 0; i < $('#files')[0].files.length; i++) {
            data.append("files",$("#files")[0].files[i]);
          }
    }
    
    return articleAdd(
      title,
      body,
      values.published,
      data
    ).then(() => reset());
    
  };
  const renderMyCloud = () => {
    return (
      <div className="container article-dorm-container">
        {error && <div className="alert alert-danger">{error}</div>}
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
              name="body"
              component="textarea"
              type="text"
              className="form-control"
              placeholder="Content"
            />
          </Form.Group>
          <Form.Group controlId="formBasicContent">
            <Form.Label className="p-3 article-dorm-container-label">
              Published
            </Form.Label>
            <Field
              name="published"
              component="input"
              type="checkbox"
              className="form-control"
              placeholder="Published"
            />
          </Form.Group>
          <Form.Group controlId="formBasicfile">
            <FileUpload />
          </Form.Group>

          <Button
            className="btn-primary btn-lg btn-block my-5"
            variant="primary"
            type="submit"
            disabled={pristine || submitting}
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
