import {
    ARTICLE_REQUEST,
    ARTICLE_RECEIVED,
    ARTICLE_ERROR,
    ARTICLE_UNLOAD,
    ARTICLE_UPDATED,
    FILE_REMOVED
  } from "../actions/constants";
  
  export default (state = { article: null, isFetching: false }, action) => {
    switch (action.type) {
      case ARTICLE_REQUEST:
        return {
          ...state,
          isFetching: true
        };
      case ARTICLE_RECEIVED:
        return {
          ...state,
          article: action.data,
          isFetching: false
        };
      case ARTICLE_ERROR:
      case ARTICLE_UNLOAD:
        return {
          ...state,
          article: null,
          isFetching: false
        };
      case ARTICLE_UPDATED:
        return {
          ...state,
          article: action.article,
          isFetching: false
        };
      case FILE_REMOVED:
        return {
          ...state,
          article: state.article.file.filter(file => file.id !== action.fileId),
          isFetching: false
        };
      default:
        return state;
    }
  };
  