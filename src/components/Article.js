import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import Message from "./Message";
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {};

const Article = (props) => {
  const { isAuthenticated, article, userData } = props;
  if (null === article) {
    return <Message message="L'article n'existe pas !" />;
  }
  const renderMyCloud = () => {
    return (
      <div className="container-fluid myCloud-main-container">
        <div className="col">
          <div className="row myCloud-container">
            <div className="col mb-2">
              <h1 className="article-title p-5">{article.title}</h1>
              {article.verified ? <span class="badge badge-success">Verified</span> : null}
              <div className="article-body">
                <p className="my-3">
                 {article.body}
                </p>

                {/* <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer> */}
                <hr></hr>
                <ul className="list-group">
                  <li className="list-group-item mb-1">Attached file</li>
                  <li className="list-group-item mb-1">Attached file</li>
                  <li className="list-group-item mb-1">Attached file</li>
                  <li className="list-group-item mb-1">Attached file</li>
                  <li className="list-group-item ">Attached file</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {userData !== null && userData.verified ? <Button
          className="my-3"
          variant="success"
          block="false"
          // onClick={function onAnimeDeleteClick(event) {
          //   event.preventDefault();
          //   deleteHandler(anime.id);
          // }}
        >
          Verify
        </Button> 
        : null}
        
      </div>
    );
  };

  return (
    <div className="container mainContainer">
      {isAuthenticated ? renderMyCloud() : <div>Vous n'êtes pas connecté</div>}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
