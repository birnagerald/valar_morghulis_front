import {
    ARTICLE_REQUEST,
    ARTICLE_RECEIVED,
    ARTICLE_ERROR,
    ARTICLE_UNLOAD,
    ARTICLE_UPDATED
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
      default:
        return state;
    }
  };
  