import React from "react";
import ArticleFormUpdate from "./ArticleFormUpdate";
import Loading from "./Loading";
import { articleFetch, articleUnload, fileDelete } from "../actions/actions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  ...state.article
});

const mapDispatchToProps = {
  articleFetch,
  articleUnload,
  fileDelete
};

class ArticleFormContainer extends React.Component {
  componentDidMount() {
    this.props.articleFetch(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.articleUnload();
  }

  render() {
    const { article, isFetching,history, fileDelete } = this.props;
    if (isFetching) {
      return <Loading />;
    }
    return (
      <div>
        <ArticleFormUpdate
          deleteHandler={fileDelete}
          article={article}
          history={history}
          ownerId={window.localStorage.getItem("userId")}
          Id={this.props.match.params.id}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleFormContainer);
