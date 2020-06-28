import {
    ARTICLE_LIST_REQUEST,
    ARTICLE_LIST_RECEIVED,
    ARTICLE_LIST_ERROR,
    ARTICLE_REMOVED,
    ARTICLE_ADDED
  } from "../actions/constants";
  
  export default (state = { articles: null, isFetching: false }, action) => {
    switch (action.type) {
      case ARTICLE_LIST_REQUEST:
        state = {
          ...state,
          isFetching: true
        };
        return state;
      case ARTICLE_LIST_RECEIVED:
        state = {
          ...state,
          articles: action.data,
          isFetching: false
        };
        return state;
      case ARTICLE_LIST_ERROR:
        return {
          ...state,
          isFetching: false,
          articles: null
        };
      case ARTICLE_ADDED:
        return {
          ...state,
          articles: [...state.articles, action.article]
        };
      case ARTICLE_REMOVED:
        return {
          ...state,
          articles: state.articles.filter(article => article.id !== action.articleId)
        };
  
      default:
        return state;
    }
  };
  