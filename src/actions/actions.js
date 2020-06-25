import { requests } from "../agent";
import { SubmissionError } from "redux-form";
import {
  TEST_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_PROFILE_REQUEST,
  USER_PROFILE_RECEIVED,
  USER_PROFILE_ERROR,
  USER_SET_ID,
  USER_LOGOUT,
  REGISTER_SUCCESS
} from "./constants";

export const userLoginSuccess = (token, userId) => {
  return {
    type: USER_LOGIN_SUCCESS,
    token,
    userId
  };
};


export const userRegisterAttempt = (username,email, password) => {
  return dispatch => {
    return requests
      .post(`/users/register`, { username,email, password }, false)
      .then(response => dispatch(userLoginAttempt(response.username, password)))
      .catch((e) => {
        throw new SubmissionError({
          error: "server unavailable try again later"
        });
      });
  };
};

export const userLoginAttempt = (username, password) => {
  return dispatch => {
    return requests
      .postLogin(`/login/token`, username, password, false)
      .then(response => dispatch(userLoginSuccess(response.access_token, 1)))
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
