import React from "react";
import Article from "./Article";
import Loading from "./Loading";
import { articleFetch, articleUnload } from "../actions/actions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  ...state.article
});

const mapDispatchToProps = {
  articleFetch,
  articleUnload
};

class ArticleContainer extends React.Component {
  componentDidMount() {
    this.props.articleFetch(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.articleUnload();
  }

  render() {
    const { article, isFetching,userData } = this.props;
    if (isFetching) {
      return <Loading />;
    }
    return (
      <div>
        <Article article={article} userData={userData} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleContainer);
