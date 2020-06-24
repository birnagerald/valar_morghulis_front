import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, ButtonToolbar } from "react-bootstrap";
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {};

const MyCloud = (props) => {
  const { isAuthenticated } = props;
  const renderMyCloud = () => {
    return (
      <div className="container-fluid myCloud-main-container">
        <div className="col">
          <h2 className="myCloud-h2">My Cloud</h2>
          <div className="row myCloud-container">
            <div className="col mb-2">
              <div className="card">
                <div className="card-body myCloud-card-body">
                  <h3>
                    <Link to={`/article/0`}>Title</Link>
                    {/* <Link to={`/article/${article.id}`}>{anime.title}</Link> */}
                  </h3>
                  <ButtonToolbar>
                    <Button
                      variant="outline-info"
                      // href={`/anime/update/${anime.id}`}
                      href={`/article/update/0`}
                    >
                      Update
                    </Button>
                    <Button
                      variant="outline-danger"
                      // onClick={function onAnimeDeleteClick(event) {
                      //   event.preventDefault();
                      //   deleteHandler(anime.id);
                      // }}
                    >
                      Remove
                    </Button>
                  </ButtonToolbar>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mainContainer">
      {isAuthenticated ? renderMyCloud() : <div>Vous n'êtes pas connecté</div>}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCloud);
