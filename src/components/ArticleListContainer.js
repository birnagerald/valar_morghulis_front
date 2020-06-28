import React from "react";
import ArticleList from "./ArticleList";
import Loading from "./Loading";
import { articleListFetch, articleDelete } from "../actions/actions";
import { connect } from "react-redux";
import Message from "./Message";
import ArticleForm from "./ArticleForm";

const mapStateToProps = state => ({
  ...state.articleList,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = {
  articleListFetch,
  articleDelete
};

class ArticleListContainer extends React.Component {
  componentDidMount() {
    this.props.articleListFetch(this.props.ownerId);
  }

  render() {
    const { articles, isFetching, articleDelete, isAuthenticated } = this.props;
    if (isFetching) {
      return <Loading />;
    }
    const renderMyCloud = () => {
    return (
        <div className="container-fluid myCloud-main-container">
        <div className="col">
          <h2 className="myCloud-h2">My Cloud</h2>
          <div className="row myCloud-container">
            
            <ArticleList articles={articles} deleteHandler={articleDelete} />
           
          </div>
        </div>
        {isAuthenticated && (
          <ArticleForm ownerId={window.localStorage.getItem("userId")} />
        )}
      </div> 
    );
  }
  return (
    <div className="container mainContainer">
      {isAuthenticated ? renderMyCloud() : <Message message="You must be logged in" />}
    </div>
  );
};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleListContainer);
