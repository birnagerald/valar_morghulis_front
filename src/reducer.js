import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import auth from "./reducers/auth";
import articleList from "./reducers/articleList";
import article from "./reducers/article";
export default combineReducers({
  auth,
  router: routerReducer,
  articleList,
  article,
  form: formReducer,
});
