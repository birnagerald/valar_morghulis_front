import React, { useEffect } from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import Header from "./Header";
import RegisterForm from "./RegisterForm";
import { Route, Switch } from "react-router";
import Main from "./Main";
import { userLogout, userSetId } from "../actions/actions";
import MyCloud from "./MyCloud";
import Article from "./Article";
import ArticleForm from "./ArticleForm";
import "./index.css";

const mapStateToProps = (state) => ({
  ...state.auth,
});

const mapDispatchToProps = {
  // userProfileFetch,
  userSetId,
  userLogout,
};

const App = (props) => {
  const { isAuthenticated, userData, userLogout } = props;
  useEffect(() => {
    const userId = window.localStorage.getItem("userId");
    const { userSetId } = props;

    if (userId) {
      userSetId(userId);
    }
  });
  return (
    <div className="container-fluid p-0 main-background">
      <Header
        isAuthenticated={isAuthenticated}
        userData={userData}
        logout={userLogout}
      />
      <Switch>
        <Route
          path="/register"
          render={props => isAuthenticated ? <MyCloud {...props} />: <RegisterForm {...props} />}
        />
        <Route
          path="/login"
          render={props => isAuthenticated ? <MyCloud {...props} />: <LoginForm {...props} />}
           
        />
        <Route path="/mycloud" component={MyCloud} />
        <Route path="/article/new" component={ArticleForm} />
        <Route path="/article/:id" component={Article} />
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
