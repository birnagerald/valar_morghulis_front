import React, { useEffect } from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import Header from "./Header";
import RegisterForm from "./RegisterForm";
import { Route, Switch } from "react-router";
import Main from "./Main";
import { userLogout, userSetId, userProfileFetch } from "../actions/actions";
import { requests } from "../agent";
import ArticleForm from "./ArticleForm";
import "./index.css";
import ArticleListContainer from "./ArticleListContainer";
import ArticleFormContainer from "./ArticleFormContainer";
import Footer from "./Footer";
import ArticleContainer from "./ArticleContainer";

const mapStateToProps = (state) => ({
  ...state.auth,
});

const mapDispatchToProps = {
  userProfileFetch,
  userSetId,
  userLogout,
};

const App = (props) => {
  const token = window.localStorage.getItem("jwtToken");

    if (token) {
      requests.setToken(token);
    }
  const { isAuthenticated, userData, userLogout, userProfileFetch, userId } = props;
  useEffect(() => {
    const userId = window.localStorage.getItem("userId");
    const { userSetId } = props;

    if (userId) {
      userSetId(userId);
    }
    if (userId !== null && userData === null) {
      userProfileFetch();
    }
  
  },[userId,userData,userProfileFetch,props]);
  
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
          render={props => isAuthenticated ? <ArticleListContainer {...props} />: <RegisterForm {...props} />}
        />
        <Route
          path="/login"
          render={props => isAuthenticated ? <ArticleListContainer {...props} />: <LoginForm {...props} />}
           
        />
        <Route path="/mycloud" component={ArticleListContainer} />
        <Route path="/article/update/:id" component={ArticleFormContainer} />
        <Route path="/article/new" component={ArticleForm} />
        <Route 
          path="/article/:id" 
          render={props => <ArticleContainer  {...props} userData={userData} />}
          />
        <Route path="/" component={Main} />
      </Switch>
      <Footer/>
    </div>
    
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
