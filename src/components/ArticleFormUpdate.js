import React from "react";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import { FileUpload } from "./FileInput";
import { articleUpdate } from "../actions/actions";
import {crypt} from "../rsa";
import $ from "jquery";

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  initialValues: state.article.article
});

const mapDispatchToProps = {
  articleUpdate
};

let ArticleFormUpdate = (props) => {
  let privateKey = window.localStorage.getItem("prvKey");
  if (props.article !== null){
    if(props.article.title.charAt(0) === "{"){
      props.article.title = crypt.decrypt(privateKey, props.article.title).message;
     
    }
    if(props.article.body.charAt(0) === "{"){
      props.article.body = crypt.decrypt(privateKey, props.article.body).message;
     
    }
  }
  
  const { handleSubmit, isAuthenticated, pristine, submitting, error , deleteHandler} = props;
  const onSubmit = (values) => {
    const { articleUpdate,Id } = props;
    let publicKey = window.localStorage.getItem("pubKey");
    var title = crypt.encrypt(publicKey, values.title)
    var body = crypt.encrypt(publicKey, values.body)

    if($('#files')[0].files.length > 0){
      var data = new FormData();
      for (let i = 0; i < $('#files')[0].files.length; i++) {
            data.append("files",$("#files")[0].files[i]);
          }
    }

    return articleUpdate(
      title,
      body,
      values.published,
      data,
      Id
    ).then(() => props.history.push(`/MyCloud`));
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
          {props.article !== null && props.article.files.length > 0
          ?  <ul className="list-group">
                {props.article.files.map(file => {
                  return( 
                  <li 
                  className="list-group-item mb-1" 
                  id={file.id} 
                  key={file.id}>
                    <a href={process.env.REACT_APP_S3_ROOT+file.path}>{file.name}</a>
                    <Button
                      variant="outline-danger"
                      className="float-right"
                      onClick={function onFileDeleteClick(event) {
                        event.preventDefault();
                        deleteHandler(file.id,props.article.id);
                      }}
                    >
                      Remove
                    </Button>
                    </li>
                  )
                 
                })}
            </ul>
          : <p>No attachments</p>
          }
          

          <Button
            className="btn-primary btn-lg btn-block my-5"
            variant="primary"
            type="submit"
            disabled={pristine || submitting}
          >
            Update Article
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

ArticleFormUpdate = reduxForm({
  // a unique name for the form
  form: "articleFormUpdate",
})(ArticleFormUpdate);

export default connect(mapStateToProps, mapDispatchToProps)(ArticleFormUpdate);
