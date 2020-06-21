import React from "react";
import { connect } from "react-redux";
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {};

const MyCloud = (props) => {
  const { isAuthenticated } = props;
  console.log(props);
  const renderMyCloud = () => {
    return (
      <div className="container-fluid myCloud-main-container">
        <div className="col">
          <h2 className="myCloud-h2">My Cloud</h2>
          <div className="row myCloud-container">
            <div className="col mb-2">
              <div className="card">
                <div className="card-body myCloud-card-body">
                  <h5 className="card-title">Title</h5>
                  <a href="#" className="btn btn-primary ml-auto mr-3">
                    Edit
                  </a>
                  <a href="#" className="btn btn-danger">
                    Delete
                  </a>
                </div>
              </div>
            </div>
            <div className="col mb-2">
              <div className="card">
                <div className="card-body myCloud-card-body">
                  <h5 className="card-title">Title</h5>
                  <a href="#" className="btn btn-primary ml-auto mr-3">
                    Edit
                  </a>
                  <a href="#" className="btn btn-danger">
                    Delete
                  </a>
                </div>
              </div>
            </div>
            <div className="col mb-2">
              <div className="card">
                <div className="card-body myCloud-card-body">
                  <h5 className="card-title">Title</h5>
                  <a href="#" className="btn btn-primary ml-auto mr-3">
                    Edit
                  </a>
                  <a href="#" className="btn btn-danger">
                    Delete
                  </a>
                </div>
              </div>
            </div>
            <div className="col mb-2">
              <div className="card">
                <div className="card-body myCloud-card-body">
                  <h5 className="card-title">Title</h5>
                  <a href="#" className="btn btn-primary ml-auto mr-3">
                    Edit
                  </a>
                  <a href="#" className="btn btn-danger">
                    Delete
                  </a>
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
