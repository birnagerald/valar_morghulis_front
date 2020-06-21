import React from "react";
import { connect } from "react-redux";
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {};

const Article = (props) => {
  const { isAuthenticated } = props;
  const renderMyCloud = () => {
    return (
      <div className="container-fluid myCloud-main-container">
        <div className="col">
          <div className="row myCloud-container">
            <div className="col mb-2">
              <h1 className="article-title p-5">Article Title</h1>
              <div className="article-body">
                <p className="my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  nisi ab, expedita quas vitae fuga ea dolorem saepe, ex cum
                  suscipit cupiditate reprehenderit dolores distinctio ut.
                  Inventore repellendus adipisci quia. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Magni fugit dignissimos
                  iste, minima quam tenetur sapiente voluptatem corrupti nulla,
                  rem voluptatum. Culpa quidem eius iusto excepturi porro
                  quisquam ratione necessitatibus?
                </p>

                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
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
