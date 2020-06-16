import React from "react";
import { connect } from "react-redux";
import { testAttempt } from "../actions/actions";
const mapStateToProps = () => ({});

const mapDispatchToProps = {
  testAttempt,
};

const App = (props) => {
  return (
    <div>
      <button onClick={props.testAttempt}>
        Get data with redux and graphql-request
      </button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
