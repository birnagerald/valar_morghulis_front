import React from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import Header from "./Header";
import RegisterForm from "./RegisterForm";
import { Route, Switch } from "react-router";
import Main from "./Main";
const mapStateToProps = () => ({});

const mapDispatchToProps = {};

const App = (props) => {
  const { isAuthenticated, userData, userLogout } = props;
  return (
    <div className="container-fluid p-0 main-background">
      <Header
        isAuthenticated={isAuthenticated}
        userData={userData}
        logout={userLogout}
      />
      <Switch>
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
