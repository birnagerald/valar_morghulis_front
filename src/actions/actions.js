import { requests } from "../agent";
import { SubmissionError } from "redux-form";
import { parseApiErrors } from "../apiUtils";

import {
  USER_LOGIN_SUCCESS,
  USER_PROFILE_REQUEST,
  USER_PROFILE_RECEIVED,
  USER_PROFILE_ERROR,
  USER_SET_ID,
  USER_LOGOUT,
  ARTICLE_LIST_REQUEST,
  ARTICLE_LIST_RECEIVED,
  ARTICLE_LIST_ERROR,
  ARTICLE_REQUEST,
  ARTICLE_RECEIVED,
  ARTICLE_ERROR,
  ARTICLE_UNLOAD,
  ARTICLE_REMOVED,
  ARTICLE_ADDED,
  ARTICLE_UPDATED,
  FILE_REMOVED
} from "./constants";

export const userLoginSuccess = (token, userId) => {
  return {
    type: USER_LOGIN_SUCCESS,
    token,
    userId
  };
};

export const userProfileReceived = (userId, userData) => {
  return {
    type: USER_PROFILE_RECEIVED,
    userData,
    userId
  };
};

export const userProfileRequest = () => {
  return {
    type: USER_PROFILE_REQUEST
  };
};

export const userProfileError = userId => {
  return {
    type: USER_PROFILE_ERROR,
    userId
  };
};

export const userProfileFetch = () => {
  return dispatch => {
    dispatch(userProfileRequest());
    return requests
      .get(`/users/me`, true)
      .then(response => dispatch(userProfileReceived(response.id, response),window.localStorage.setItem("pubKey",response.public_key)))
      .catch(() => dispatch(userProfileError()));
  };
};


export const userRegisterAttempt = (username,email, password, public_key) => {
  return dispatch => {
    return requests
      .post(`/users`, { username,email, password, public_key }, false)
      .then(response => dispatch(userLoginAttempt(response.username, password)))
      // .catch((e) => {
      //   throw new SubmissionError({
      //     error: "server unavailable try again later"
      //   });
      // });
  };
};

export const userLoginAttempt = (username, password) => {
  return dispatch => {
    return requests
      .postLogin(`/login/token`, username, password, false)
      .then(response => dispatch(userLoginSuccess(response.access_token, response.user_id)))
      .catch(() => {
        throw new SubmissionError({
          error: "Incorrect Username or Password"
        });
      });
  };
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT
  };
};

export const userSetId = userId => {
  return {
    type: USER_SET_ID,
    userId
  };
};


export const articleListRequest = () => ({
  type: ARTICLE_LIST_REQUEST
});

export const articleListError = error => ({
  type: ARTICLE_LIST_ERROR,
  error
});

export const articleListReceived = data => ({
  type: ARTICLE_LIST_RECEIVED,
  data
});

export const articleListFetch = () => {
  return dispatch => {
    dispatch(articleListRequest());
    return requests
      .get(`/articles`)
      .then(response => dispatch(articleListReceived(response)))
      .catch(error => dispatch(articleListError(error)));
  };
};

export const articleRequest = () => ({
  type: ARTICLE_REQUEST
});

export const articleError = error => ({
  type: ARTICLE_ERROR,
  error
});

export const articleReceived = data => ({
  type: ARTICLE_RECEIVED,
  data
});

export const articleUnload = () => ({
  type: ARTICLE_UNLOAD
});

export const articleFetch = id => {
  return dispatch => {
    dispatch(articleRequest());
    return requests
      .get(`/articles/${id}`)
      .then(response => dispatch(articleReceived(response)))
      .catch(error => dispatch(articleError(error)));
  };
};

export const articleAdded = article => ({
  type: ARTICLE_ADDED,
  article
});

// export const fileAdd = (idArticle,file) => {
// return requests
//   .post(`/articles/${idArticle/files}`,
//   )
// };

export const articleAdd = (
  title,
  body,
  published,
  data = null
) => {
  return dispatch => {
    return requests
      .post(`/articles`, {
        title: title,
        body: body,
        published: published
      })
      .then(data === null 
        ? response => dispatch(articleAdded(response)) 
        : response => requests
        .postFile(`/articles/${response.id}/files`,data)
        .then(response => dispatch(articleAdded(response))
        .catch(error => console.log(error)
      )))
      .catch(error => {
        if (422 === error.response.status) {
          return dispatch(userLogout());
        }
        throw new SubmissionError(parseApiErrors(error));
      });
  };
};

export const articleUpdated = article => ({
  type: ARTICLE_UPDATED,
  article
});

export const articleUpdate = (
  title,
  body,
  published,
  data = null,
  id
) => {
  return dispatch => {
    return requests
      .patch(`/articles/${id}`, {
        title: title,
        body: body,
        published: published
      })
      .then(data === null 
        ? response => dispatch(articleUpdated(response)) 
        : response => requests
        .postFile(`/articles/${response.id}/files`,data)
        .then(dispatch(articleUpdated(response))
        .catch(error => console.log(error)
      )))
      .catch(error => {
        if (422 === error.response) {
          return dispatch(userLogout());
        }
      });
  };
};

export const articleDelete = id => dispatch => {
  return requests
    .delete(`/articles/${id}`)
    .then(() => dispatch(articleRemoved(id)));
};

export const articleRemoved = id => ({
  type: ARTICLE_REMOVED,
  articleId: id
});

export const fileDelete = (id,articleId) => dispatch => {
  return requests
    .deleteFile(`/articles/${articleId}/files`,
    [id]
    )
    .then(() => dispatch(articleFetch(articleId)));
};

export const fileRemoved = id => ({
  type: FILE_REMOVED,
  fileId: id
});
