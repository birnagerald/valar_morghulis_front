import React from "react";
import { connect } from "react-redux";
import { testAttempt } from "../actions/actions";
import { Button } from "react-bootstrap";
const mapStateToProps = () => ({});

const mapDispatchToProps = {
  testAttempt,
};

const App = (props) => {
  return (
    <div>
      <Button variant="primary" onClick={props.testAttempt}>
        Get data with redux and graphql-request
      </Button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
