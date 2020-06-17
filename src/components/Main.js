import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { testAttempt } from "../actions/actions";

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  testAttempt,
};

const Main = (props) => {
  return (
    <div className="container mainContainer">
      <div className="jumbotron">
        <h1 className="display-4">Welcome on Valar Morghulis</h1>
        <p className="lead">
          Your secure cloud that delivers the real information
        </p>
        <hr className="my-4" />
        <p>You can now create an account and start using the App.</p>
        <p className="lead">
          <Link to="/register" className="btn btn-primary btn-lg">
            Register
          </Link>
        </p>
        <Button variant="primary" onClick={props.testAttempt}>
          Get data with redux and graphql-request
        </Button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
